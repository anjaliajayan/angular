const express = require('express');
const router = express.Router();
const axios = require('axios');
const parser = require('fast-xml-parser');
const { organisationHModel, Sequelize } = require('../../../config/db');
const Op = Sequelize.Op;
const config = require('../../../config/config');
var GetOrganization = require('../../xmls/GetOrganization');
let { getOrgDetails, makeResponse } = require("../../helpers/utils");
const { posAddValidator, posFetchByIDValidator, posFetchAllValidator } = require("../../validations/organisation.validate")
const posDao = require('../../dao/pos.dao');



//Create New Organization (Agency (Add Point of Sale))
// go tp pos.controller.js we are not using this api to create pos
router.post("/create-agency", posAddValidator, async (req, res) => {
  const request = req.body
  let objOrganization = {}
  const url = 'http://merchandising.tpconnects.com/CommissionConnect/services/CommissionConnect/';

  objOrganization = posDao.agencyRequestBody(request)

  // mandatory fields for java xml
  objOrganization.countryId = "23";
  objOrganization.roundOff = "0";
  objOrganization.timezone = "Asia/Dubai";
  objOrganization.currency = "AED";

  objOrganization.created = new Date;

  // check if POS exists by email/agent_code/branch_code
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
  if (objOrganization.associated_office) {
    query.push({
      associated_office: objOrganization.associated_office,})
  }

  let orgExists = await organisationHModel.findOne({
                        where: { [Op.or]: query }, raw: true });

  if (orgExists) {
    return makeResponse(res, false, 200, 'danger', 'Add Point of Sale', 'Email, Agent Code and Branch Code should be unique.')
  } else {
    let result = getOrgDetails(req);
    if (!result.auth) {
      return makeResponse(res, false, 200, 'danger', 'Add Point of Sale', '', result)
    }
    let xml = GetOrganization(result.agent, result.api_key, result.secret_key, objOrganization);
    let headersRQ = {
      headers: {
        'Content-Type': 'text/plain',
        'SOAPAction': 'SaveOrganisation'
      }
    }
    axios.post(url, xml, headersRQ)
      .then((resp) => {
        let xml = resp.data
        if (parser.validate(xml) === true) {
          let jsonObj = parser.parse(xml, config.pkgConfigs.x2joptions);
          let orgResObj = jsonObj['Envelope']['Body']['SaveOrganisationResponse']['OrganisationResult']['Organisation'];
          objOrganization.organisation_id = orgResObj.organisationId;
          objOrganization.agent = orgResObj.agent;
          objOrganization.api_key = orgResObj.apiKey;
          objOrganization.parent_id = orgResObj.parentId;
          objOrganization.secret_key = orgResObj.secretKey;
          objOrganization.status = 0;
          objOrganization.is_active = 1;

          organisationHModel.create(objOrganization)
            .then((organisationHModel) => {
              return makeResponse(res, true, 200, 'success', 'Add Point of Sale', 'Organization Saved Successfully.', organisationHModel)
            })
        } else {
          return makeResponse(res, false, 500, 'danger', 'Add Point of Sale', 'Oops! Something went wrong while processing your request.')
        }
      })
      .catch((error) => {
        return makeResponse(res, false, 500, 'danger', 'Add Point of Sale', 'Oops! Something went wrong while processing your request.', error)
      });
  }
})

//Update Organization
// go tp pos.controller.js we are not using this api to create pos
router.post("/update-agency", posAddValidator, async (req, res) => {
  const request = req.body
  let objOrganization = {}
  try {
    const organisation = await organisationHModel.findOne({
                               where: { organisation_id: request.organisation_id }, raw: true })
    if (organisation) {
      objOrganization = posDao.agencyRequestBody(request)      
      organisationHModel.update(objOrganization, {
          where: { organisation_id: request.organisation_id }
        })
        .then((organisationHModel) => {
          return makeResponse(res, true, 200, 'success', 'Update Point of Sale', 'POS Updated Successfully.', organisationHModel)
        })
        .catch((error) => {
          return makeResponse(res, false, 500, 'danger', 'Update Point of Sale', 'Oops! Something went wrong while processing your request.', error)
        });
    } else {
      return makeResponse(res, false, 500, 'danger', 'Update Point of Sale', 'This POS does not exists.')
    }
  } catch (error) {
    return makeResponse(res, false, 500, 'danger', 'Update Point of Sale', 'Oops! Something went wrong while processing your request.', error)
  }
})

//Fetch POS by ID or Name. (This is common api for both by id and name)
// If params is keyword it will return all by name. If params is organisation_id it return by id
router.get("/fetch-pos/:organisation_id", posFetchByIDValidator, posDao.fetchPosByID )

//Fetch All POS
router.post("/fetch-pos", posFetchAllValidator, posDao.fetchPos)

//Delete POS by ID
router.post("/delete-pos/:organisation_id", posFetchByIDValidator, posDao.deletePosByID)

module.exports = router;
