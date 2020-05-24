const express = require('express');
const router = express.Router();
const axios = require('axios');
const parser = require('fast-xml-parser');
const md5 = require('md5');
const { organisationHModel, Sequelize ,OrganizationAccount } = require('../../config/db');
const Op = Sequelize.Op;
const config = require('../../config/config');
var GetOrganization = require('../xmls/GetOrganization');
let { getOrgDetails, makeResponse, getCurrencyCodeByID } = require("../helpers/utils");
const { posAddValidator, posUpdateValidator, posFetchByIDValidator, posFetchAllValidator } = require("../validations/pos.validate")
const posDao = require('../dao/pos.dao');


/**
 * @swagger
 *
 * /api/pos/create-pos:
 *   post:
 *    tags:
 *      - Organization
 *    summary: Add Point of Sale
 *    description: Point of Sale > Add Point of Sale
 *    consumes:
 *       - application/json
 *    produces:
 *      - application/json
 *    parameters:
 *      - in: body
 *        name: body
 *        description: Provide mandatory fields to add organisation.
 *        required: true
 *        schema:
 *          properties:
 *            corporate_type:
 *              type: string
 *            name:
 *              type: string
 *            agent_code:
 *              type: string
 *            associated_office:
 *              type: string
 *            email:
 *              type: string
 *              format: email
 *            contact:
 *              type: string
 *            payment_gateway:
 *              type: number
 *            currency_id:
 *              type: number
 *            credit_limit:
 *              type: number
 *            country_id:
 *              type: number
 *            timezone_id:
 *              type: number
 *            business_id:
 *              type: string
 *            numberOfUsers:
 *              type: number
 *            iata_no:
 *              type: string
 *    responses:
 *      200:
 *        description: Return object
 *      400:
 *       description: Bad Request
 *      401:
 *        description: Not Authrized
 *      403:
 *        description: You do not have necessary permissions for the resource or JWT Expired
 *      500:
 *         description: Something went wrong
 */

//Create New Organization (Agency (Add Point of Sale))
router.post("/create-pos", posAddValidator, async (req, res) => {
  const request = req.body
  let objOrganization = {}
  // old java url
  // const url = 'http://merchandising.tpconnects.com/CommissionConnect/services/CommissionConnect/';

  // local php url
  // const url = 'http://192.168.10.186/smartconnect/organisationconnectapi';

  // smart connect server php url
  const url = 'https://merchandising.tpconnects.com/organisationconnectapi';

  objOrganization = posDao.agencyRequestBody(request)
  objOrganization.created = new Date;

  // check if POS exists by email/agent_code/name
  let query = []
  if (objOrganization.email) {
    query.push({
      email: objOrganization.email,
    })
  }
  if (objOrganization.agent_code) {
    query.push({
      agent_code: objOrganization.agent_code,})
  }
  if (objOrganization.name) {
    query.push({
      name: objOrganization.name,})
  }

  let orgExists = await organisationHModel.findOne({
                        where: { [Op.or]: query }, raw: true });

  if (orgExists) {
    return makeResponse(res, false, 200, 'danger', 'Add Point of Sale', 'Office Name, Email and Agent Code should be unique.')
  } else {
    let result = getOrgDetails(req);
    if (!result.auth) {
      return makeResponse(res, false, 200, 'danger', 'Add Point of Sale', '', result)
    }
    // get currency code for smartconnect and get currency id for local db
    currency = await getCurrencyCodeByID(objOrganization.currency_id)
    if(!currency){
      currency.code = "GBP"
      currency.currency_id = "52"
    }

    // mandatory fields for SmartConnect
    smartConnectObj = {}
    smartConnectObj['SECRET-KEY'] = result.secret_key
    smartConnectObj['agent-KEY'] = result.agent
    smartConnectObj['do_action'] = "AgentCreation"
    smartConnectObj.roundOff = "0";

    smartConnectObj.name =  objOrganization.name
    smartConnectObj.email = objOrganization.email
    smartConnectObj.currency = currency.code;
    smartConnectObj.country_id = objOrganization.country_id
    smartConnectObj.timezone = "Asia/Dubai";
    smartConnectObj.contact = objOrganization.contact
    smartConnectObj.parent_id = result.org_id;
    smartConnectObj.organisation_type = objOrganization.corporate_type
    smartConnectObj.address_1 = ""
    smartConnectObj.address_2 = ""
    smartConnectObj.city_id = ""
    smartConnectObj.state_province = ""
    smartConnectObj.zip = ""
    smartConnectObj.timezone_id = objOrganization.timezone_id
    smartConnectObj.organisation_vat = ""
    let headersRQ = {
      headers: {
        'SECRET-KEY': result.secret_key ,
        'agent-KEY': result.agent ,
        'apiKey-KEY': result.api_key,
        'API-ACCESS-KEY': md5('smartTpConnect')
      }
    }
    axios.post(url, smartConnectObj, headersRQ)
      .then((resp) => {
        let xml = resp.data

        // if (parser.validate(xml) === true) {
        if (xml && xml.status && xml.status == "Success" ) {
          let orgResObj = xml.OrganisationResult
          objOrganization.organisation_id = orgResObj.organisation_id;
          objOrganization.currency_id = currency.currency_id;
          objOrganization.agent = orgResObj.agent;
          objOrganization.api_key = orgResObj.api_key;
          objOrganization.secret_key = orgResObj.secret_key;
          objOrganization.parent_id = orgResObj.parent_id;
          objOrganization.status = 1;
          objOrganization.is_active = 1;
          objOrganization.created = orgResObj.created
          delete objOrganization.tab
          organisationHModel.create(objOrganization)
            .then((organisationHModel) =>  {
              // check if agent_code is undefined or empty
              if(objOrganization.agent_code == undefined || objOrganization.agent_code == ""){
                agent_code = String (String(organisationHModel.organisation_id).padStart(13, '0'));
                // update agent_code to last entered POS
                organisationHModel.update({agent_code:agent_code}, {
                  where: { organisation_id: organisationHModel.organisation_id }
                })
              }
              //organisation account table creation 
              let orgAccount = {};
              orgAccount.organisation_id = orgResObj.organisation_id;
              orgAccount.available_deposit = objOrganization.credit_limit;
              orgAccount.total_credit_limit = '0';
              orgAccount.usable_credit = objOrganization.credit_limit;;
              orgAccount.due_credit= '0';
              orgAccount.status= '1';
              OrganizationAccount.create(orgAccount).then((res)=>{
                console.log('Org Acc created',res);
              })
              return makeResponse(res, true, 200, 'success', 'Add Point of Sale', 'Organization Saved Successfully.', organisationHModel)
            })
        } else {
          return makeResponse(res, false, 200, 'danger', 'Add Point of Sale', (xml && xml.error_msg) ? xml.error_msg : 'Oops! Something went wrong while processing your request.')
        }
      })
      .catch((error) => {
        console.log(error)
        return makeResponse(res, false, 200, 'danger', 'Add Point of Sale', 'Oops! Something went wrong while processing your request.', error)
      });
  }
})

/**
 * @swagger
 *
 * /api/pos/update-pos:
 *   post:
 *    tags:
 *      - Organization
 *    summary: Add Point of Sale
 *    description: Point of Sale > Add Point of Sale
 *    consumes:
 *       - application/json
 *    produces:
 *      - application/json
 *    parameters:
 *      - in: body
 *        name: body
 *        description: Provide mandatory fields to add organisation.
 *        required: true
 *        schema:
 *          properties:
 *            organisation_id:
 *              type: number
 *            corporate_type:
 *              type: string
 *            name:
 *              type: string
 *            agent_code:
 *              type: string
 *            associated_office:
 *              type: string
 *            email:
 *              type: string
 *              format: email
 *            contact:
 *              type: string
 *            payment_gateway:
 *              type: number
 *            currency_id:
 *              type: number
 *            credit_limit:
 *              type: number
 *            country_id:
 *              type: number
 *            timezone_id:
 *              type: number
 *            business_id:
 *              type: string
 *            numberOfUsers:
 *              type: number
 *            iata_no:
 *              type: string
 *            domestictTaxCode:
 *              type: string
 *            domestictTaxPercentage:
 *              type: string
 *            domestictTaxCurrency:
 *              type: string
 *            domestictTaxAirport:
 *              type: string
 *            internationalTaxPercentage:
 *              type: string
 *            nonAirlineTax:
 *              type: string
 *            amex_details:
 *              type: string
 *            queue_service:
 *              type: string
 *            pos_negofares:
 *              type: string
 *            pos_rbd:
 *              type: string
 *            active_suppliers:
 *              type: string
 *            contact_person_name:
 *              type: string
 *            contact_mobile_number:
 *              type: string
 *            contact_person_email:
 *              type: string
 *              format: email
 *            address_1:
 *              type: string
 *            address_2:
 *              type: string
 *            city_id:
 *              type: number
 *            state_province:
 *              type: string
 *            zip:
 *              type: string
 *            contact_country_id:
 *              type: number
 *            organisation_stats:
 *              type: string
 *            image_website:
 *              type: string
 *            image_invoice:
 *              type: string
 *            image_email:
 *              type: string
 *            image_file1:
 *              type: string
 *            image_file2:
 *              type: string
 *            image_file3:
 *              type: string
 *            image_file4:
 *              type: string
 *            terms_conditions:
 *              type: string
 *    responses:
 *      200:
 *        description: Return object
 *      400:
 *       description: Bad Request
 *      401:
 *        description: Not Authrized
 *      403:
 *        description: You do not have necessary permissions for the resource or JWT Expired
 *      500:
 *         description: Something went wrong
 */

//Update Organization
router.post("/update-pos", posUpdateValidator, async (req, res) => {
  const request = req.body
  let objOrganization = {}
  let result = getOrgDetails(req);
  if (!result.auth) {
    return makeResponse(res, false, 200, 'danger', 'Add Point of Sale', '', result)
  }
  // smart connect server php url
  const url = 'https://merchandising.tpconnects.com/organisationconnectapi';
  try {
    const organisation = await organisationHModel.findOne({
                               where: { organisation_id: request.organisation_id }, raw: true })
    if (organisation) {
      objOrganization = posDao.agencyRequestBody(request)
      let query = []
      if (objOrganization.email) {
        query.push({ email: objOrganization.email })
      }
      if (objOrganization.agent_code) {
        query.push({ agent_code: objOrganization.agent_code })
      }
      if (objOrganization.name) {
        query.push({ name: objOrganization.name })
      }
      const orgExists = await organisationHModel.findOne({
        where: { [Op.or]: query, organisation_id: { [Op.ne]: request.organisation_id } },
        raw: true
      });
      if (orgExists) {
        return makeResponse(res, false, 200, 'danger', 'Update Point of Sale', 'Office Name, Email and Agent Code should be unique.')
      }
      // get currency code for smartconnect and get currency id for local db
      currency = await getCurrencyCodeByID(objOrganization.currency_id)
      if(!currency){
        currency.code = "GBP"
        currency.currency_id = "52"
      }

      objOrganization.currency_id = currency.currency_id;

      // mandatory fields for SmartConnect
      let resp = {}
      if (objOrganization.tab == "basic" || objOrganization.tab == "address" || objOrganization.tab == "suppliers") {
        smartConnectObj = {}
        smartConnectObj['do_action'] = "AgentUpdation"
        smartConnectObj.organisationId = request.organisation_id
        smartConnectObj.roundOff = "0";

        smartConnectObj.name = objOrganization.name
        smartConnectObj.email = objOrganization.email
        smartConnectObj.currency = currency.code;
        smartConnectObj.country_id = objOrganization.country_id
        smartConnectObj.timezone = "Asia/Dubai";
        smartConnectObj.contact = objOrganization.contact
        smartConnectObj.parent_id = organisation.parent_id; // it should be picked from this org parent id 
        smartConnectObj.organisation_type = organisation.corporate_type // it should be picked from this org parent id (not editable)
        smartConnectObj.address_1 = objOrganization.address_1
        smartConnectObj.address_2 = objOrganization.address_2
        smartConnectObj.city_id = objOrganization.city_id
        smartConnectObj.state_province = objOrganization.state_province
        smartConnectObj.zip = objOrganization.zip
        smartConnectObj.timezone_id = objOrganization.timezone_id
        smartConnectObj.contact_country_id = objOrganization.contact_country_id
        smartConnectObj.activeSuppliers = objOrganization.active_suppliers
        smartConnectObj.organisation_vat = ""
        smartConnectObj.status = 1

        let headersRQ = {
          headers: {
            'SECRET-KEY': result.secret_key,
            'agent-KEY': result.agent,
            'apiKey-KEY': result.api_key,
            'API-ACCESS-KEY': md5('smartTpConnect')
          }
        }
        resp = await axios.post(url, smartConnectObj, headersRQ)
      }
      // if(resp){
      //   let xml = resp.data

      //     if (xml && xml.status && xml.status == "Success") {
      //       organisationHModel.update(objOrganization, {
      //           where: { organisation_id: request.organisation_id }
      //         })
      //         .then((organisationHModel) => {
      //           return makeResponse(res, true, 200, 'success', 'Update Point of Sale', 'POS Updated Successfully.', organisationHModel)
      //         })
      //         .catch((error) => {
      //           return makeResponse(res, false, 200, 'danger', 'Update Point of Sale', 'Oops! Something went wrong while processing your request.', error)
      //         });
      //     } else {
      //       return makeResponse(res, false, 200, 'danger', 'Update Point of Sale', 'Oops! Something went wrong while processing your request.', xml)
      //     }
      // }
      organisationHModel.update(objOrganization, {
        where: { organisation_id: request.organisation_id }
      })
      .then((organisationHModel) => {
        return makeResponse(res, true, 200, 'success', 'Update Point of Sale', 'POS Updated Successfully.', organisationHModel, resp)
      })
      .catch((error) => {
        return makeResponse(res, false, 200, 'danger', 'Update Point of Sale', 'Oops! Something went wrong while processing your request.', error)
      });

        // .then((resp) => {
        //   let xml = resp.data

        //   if (xml && xml.status && xml.status == "Success") {
        //     organisationHModel.update(objOrganization, {
        //         where: { organisation_id: request.organisation_id }
        //       })
        //       .then((organisationHModel) => {
        //         return makeResponse(res, true, 200, 'success', 'Update Point of Sale', 'POS Updated Successfully.', organisationHModel)
        //       })
        //       .catch((error) => {
        //         return makeResponse(res, false, 200, 'danger', 'Update Point of Sale', 'Oops! Something went wrong while processing your request.', error)
        //       });
        //   } else {
        //     return makeResponse(res, false, 200, 'danger', 'Update Point of Sale', 'Oops! Something went wrong while processing your request.', xml)
        //   }
        // })
        // .catch((error) => {
        //   console.log(error)
        //   return makeResponse(res, false, 200, 'danger', 'Update Point of Sale', 'Oops! Something went wrong while processing your request.', error)
        // });

    } else {
      return makeResponse(res, false, 200, 'danger', 'Update Point of Sale', 'This POS does not exists.')
    }
  } catch (error) {
    console.log(error)
    return makeResponse(res, false, 200, 'danger', 'Update Point of Sale', 'Oops! Something went wrong while processing your request.', error)
  }
})

/**
 * @swagger
 *
 * /api/pos/fetch-pos/{organisation_id}:
 *   get:
 *    tags:
 *      - Organization
 *    summary: List Point of Sale by ID
 *    description: Point of Sale > List Point of Sale
 *    consumes:
 *       - application/json
 *    produces:
 *      - application/json
 *    parameters:
 *      - in: params
 *        name: params
 *        description: Provide POS ID to list.
 *        required: true
 *        schema:
 *          properties:
 *            organisation_id:
 *              type: number
 *    responses:
 *      200:
 *        description: Return object
 *      400:
 *       description: Bad Request
 *      401:
 *        description: Not Authrized
 *      403:
 *        description: You do not have necessary permissions for the resource or JWT Expired
 *      500:
 *         description: Something went wrong
 */
//Fetch POS by ID or Name. (This is common api for both by id and name)
// If params is keyword it will return all by name. If params is organisation_id it return by id
router.get("/fetch-pos/:organisation_id", posFetchByIDValidator, posDao.fetchPosByID )
router.get("/get-pos/:keywords", posDao.fetchPosByName )

/**
 * @swagger
 *
 * /api/pos/fetch-pos:
 *   post:
 *    tags:
 *      - Organization
 *    summary: List All Point of Sale
 *    description: Point of Sale > List Point of Sale
 *    consumes:
 *       - application/json
 *    produces:
 *      - application/json
 *    parameters:
 *      - in: body
 *        name: body
 *        description: Provide POS ID to list organisation.
 *        required: true
 *        schema:
 *          properties:
 *            limit:
 *              type: number
 *            page:
 *              type: number
 *            corporate_type:
 *              type: string
 *            nameAndOfficeId:
 *              type: string
 *    responses:
 *      200:
 *        description: Return object
 *      400:
 *       description: Bad Request
 *      401:
 *        description: Not Authrized
 *      403:
 *        description: You do not have necessary permissions for the resource or JWT Expired
 *      500:
 *         description: Something went wrong
 */
//Fetch All POS
router.post("/fetch-pos", posFetchAllValidator, posDao.fetchPos)

//Fetch All Active POS
router.get("/fetch-active-pos", posDao.fetchActivePos)

/**
 * @swagger
 *
 * /api/pos-delete/{id}:
 *   post:
 *    tags:
 *      - Organization
 *    summary: Delete Point of Sale by ID
 *    description: Point of Sale > List Point of Sale
 *    consumes:
 *      - application/json
 *    produces:
 *      - application/json
 *    parameters:
 *      - in: params
 *        name: params
 *        description: Delete POS by ID.
 *        required: true
 *        schema:
 *          properties:
 *            organisation_id:
 *              type: number            
 *    responses:
 *      200:
 *        description: Return object
 *      400:
 *       description: Bad Request
 *      401:
 *        description: Not Authrized
 *      403:
 *        description: You do not have necessary permissions for the resource or JWT Expired
 *      500:
 *         description: Something went wrong
 */
//Delete POS by ID
router.post("/delete-pos/:organisation_id", posFetchByIDValidator, posDao.deletePosByID)

module.exports = router;

const generateAgentCode = (agent_code) => {
  return ++agent_code
}