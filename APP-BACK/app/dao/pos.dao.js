const {organisationHModel, Op} = require('../../config/db');
const config = require('../../config/config');
let { getOrgDetails, makeResponse } = require("../helpers/utils");
const LoggerFile = 'posDao';


const fetchPos = async (req, res) => {
    const loggerObject = `${LoggerFile}_fetch-pos`;
    const orgDetails = getOrgDetails(req);
    // fetch users from organisation's child pos also
    const parent_ids = await organisationHModel.findAll({where: {parent_id:orgDetails.org_id}, attributes:["organisation_id"]})
    let p_ids = []
    parent_ids.forEach(id => {
        p_ids.push(id.organisation_id)
    })
    p_ids.push(orgDetails.org_id)
    
    let { limit, page, corporate_type, nameAndOfficeId } = req.body;
    limit = (!limit) ? parseInt(config.pageLimit) : parseInt(limit)
    page = (!page) ? parseInt(0) : parseInt(page)
    let offset = limit * page;
    let query = { status: 1, parent_id: orgDetails.org_id };
    if (corporate_type && corporate_type != 'all') {
      query = { corporate_type: corporate_type, ...query }
    }
    if (nameAndOfficeId) {
      query = {
        [Op.or]: [
            { agent_code: { [Op.like]: '%' + nameAndOfficeId + '%' } }, 
            { name: { [Op.like]: '%' + nameAndOfficeId + '%' } }
          ], ...query }
    }
    if(orgDetails.org_id != orgDetails.parent_id){
      query = { organisation_id: { [Op.in]:p_ids }, ...query}
    }
    // if (loggedInOrg.org_id !== -1) {
    //   query = { parent_id: loggedInOrg.org_id, ...query }
    // }
    console.log(query)
    try {
      let result = await organisationHModel.findAndCountAll({
        where: query,
        order: [['name', 'ASC']],
        // offset: offset,
        // limit: limit,
        raw: true
      })
      let dataArr = [];
      if(result.count > 0){
        result.rows.map(row => {
            dataArr.push(row);
        });
        result = {
          data: dataArr,
          total: result.count,
          page: page
        }
        return makeResponse(res, true, 200, 'success', 'POS', 'POS fetched successfully.', result)
      } else {
        return makeResponse(res, true, 200, 'success', 'POS', 'No POS Foound.')
      }
    } catch (error) {
      // console.log(loggerObject)
      return makeResponse(res, false, 200, 'danger', 'POS', 'Oops! Something went wrong while processing your request.', error)
    }
}

const fetchActivePos = async (req, res) => {
  const loggerObject = `${LoggerFile}_fetch-active-pos`;
    
  let query = { status: 1, is_active:1 };
  try {
    let result = await organisationHModel.findAndCountAll({
      where: query,
      order: [['name', 'ASC']],
      raw: true
    })
    let dataArr = [];
    if(result.count > 0){
      result.rows.map(row => {
          dataArr.push(row);
      });
      result = {
        data: dataArr,
        total: result.count
      }
      return makeResponse(res, true, 200, 'success', 'POS', 'POS fetched successfully.', result)
    } else {
      return makeResponse(res, true, 200, 'success', 'POS', 'No POS Foound.')
    }
  } catch (error) {
    console.log(loggerObject)
    return makeResponse(res, false, 200, 'danger', 'POS', 'Oops! Something went wrong while processing your request.', error)
  }
}


// fetch POS by ID
const fetchPosByID = async (req, res) => {
  const loggerObject = `${LoggerFile}_fetch-pos/:organisation_id`;
  const { organisation_id } = req.params;
  if(!organisation_id){
    return makeResponse(res, false, 200, 'danger', 'POS', 'POS ID/Keyword is required.')
  }
  try {
    const orgDetails = getOrgDetails(req);
    // console.log(orgDetails)
    // fetch users from organisation's child pos also
    const parent_ids = await organisationHModel.findAll({where: {parent_id:orgDetails.org_id}, attributes:["organisation_id"]})
    let p_ids = []
    parent_ids.forEach(id => {
        p_ids.push(id.organisation_id)
    })
    p_ids.push(orgDetails.org_id)

    let where = {}
    if(isNaN(organisation_id)){      
      // if params is keyword, it will fetch all by name
      where = {name: { [Op.like]: '%' + organisation_id + '%' }, status: 1}
    }else{
      // if params is organisation_id, it will fetch one by ID
      where =  { organisation_id: organisation_id, status: 1 }
    }
    if(orgDetails.org_id != orgDetails.parent_id){
      where = { organisation_id: { [Op.in]:p_ids }, ...where}
    }
    let result = await organisationHModel.findOne({
      where:where,
      raw: true
    });
    if(result){
        return makeResponse(res, true, 200, 'success', 'POS', 'POS Fetched Successfully.', result)
    }else{
        return makeResponse(res, true, 200, 'success', 'POS', 'No POS Foound.')
    }
  } catch (error) {
    // console.log(loggerObject)
    return makeResponse(res, false, 200, 'danger', 'POS', 'Oops! Something went wrong while processing your request.', error)
  }
}

// fetch POS by Name
const fetchPosByName = async (req, res) => {
  const orgDetails = getOrgDetails(req);
  const loggerObject = `${LoggerFile}_fetch-pos/:keywords`;
  const parent_ids = await organisationHModel.findAll({where: {parent_id:orgDetails.org_id}, attributes:["organisation_id"]})
  let p_ids = []
  parent_ids.forEach(id => {
      p_ids.push(id.organisation_id)
  })
  p_ids.push(orgDetails.org_id)
  const { keywords } = req.params;
  if(!keywords){
    return makeResponse(res, false, 200, 'danger', 'POS', 'POS Keyword is required.')
  }
  try {
    let where = {}
    where = {name: { [Op.like]: '%' + keywords + '%' }, status: 1}
    if(orgDetails.org_id != orgDetails.parent_id){
      where = { organisation_id: { [Op.in]:p_ids }, ...where}
    }
    let result = await organisationHModel.findAll({
      where:where,
      raw: true
    });
    if(result){
        return makeResponse(res, true, 200, 'success', 'POS', 'POS Fetched Successfully.', result)
    }else{
        return makeResponse(res, true, 200, 'success', 'POS', 'No POS Foound.')
    }
  } catch (error) {
    // console.log(loggerObject)
    return makeResponse(res, false, 200, 'danger', 'POS', 'Oops! Something went wrong while processing your request.', error)
  }
}

const deletePosByID = async (req, res) => {
  const loggerObject = `${LoggerFile}delete-pos/:organisation_id`;

  let { organisation_id } =  req.params;
  organisation_id = parseInt(organisation_id);
  if(!organisation_id || !Number.isInteger(organisation_id)){
    return makeResponse(res, false, 200, 'danger', 'POS', 'POS ID is required and should be an integer.')
  }
  try {
    const result = await organisationHModel.findOne({where: { organisation_id  }});
    if(!result){
      return makeResponse(res, false, 200, 'danger', 'POS', 'POS not found.')
    }
    if(result.status == 0){
      return makeResponse(res, false, 200, 'danger', 'POS', 'POS is already deleted.')
    }
    const countRow = await organisationHModel.update({ status: 0 }, { where: { organisation_id } });
    if(!countRow){
      return makeResponse(res, false, 200, 'danger', 'POS', 'POS not deleted.')
    }
    return makeResponse(res, true, 200, 'success', 'POS', 'POS deleted successfully.', countRow)
  } catch (error) {
    return makeResponse(res, false, 200, 'danger', 'POS', 'Oops! Something went wrong while processing your request.', error)
  }
}

const agencyRequestBody = (request) => {
  let objOrganization = {}
  objOrganization.tab = request.tab
  objOrganization.corporate_type = request.corporate_type
  objOrganization.name = request.name
  objOrganization.domain_url = request.domain_url
  objOrganization.agent_code = request.agent_code
  objOrganization.associated_office = request.associated_office // This is Branch Code in front-end form
  objOrganization.email = request.email
  objOrganization.contact = request.contact
  objOrganization.payment_gateway = request.payment_gateway
  objOrganization.currency_id = request.currency_id
  objOrganization.credit_limit = request.credit_limit
  objOrganization.country_id = request.country_id
  objOrganization.timezone_id = request.timezone_id
  objOrganization.business_id = request.business_id // This is Tax Number in front-end form
  objOrganization.numberOfUsers = request.numberOfUsers
  objOrganization.iata_no = request.iata_no

  // Airline TAX in Percentage
  objOrganization.domestictTaxCode = request.domestictTaxCode
  objOrganization.domestictTaxPercentage = request.domestictTaxPercentage
  objOrganization.domestictTaxCurrency = request.domestictTaxCurrency
  objOrganization.domestictTaxAirport = JSON.stringify(request.domestictTaxAirport)
  objOrganization.internationalTaxPercentage = request.internationalTaxPercentage
  objOrganization.nonAirlineTax = request.nonAirlineTax

  // Choose Payment
  objOrganization.amex_details = JSON.stringify(request.amex_card)
  objOrganization.queue_service = JSON.stringify(request.queue_service)

  // Fare Preference for Nego Fares
  objOrganization.pos_negofares = JSON.stringify(request.pos_negofares)

  // Airline RBD
  objOrganization.pos_rbd = JSON.stringify(request.pos_rbd)

  // Suppliers
  objOrganization.active_suppliers = JSON.stringify(request.active_suppliers)

  // Office Address
  objOrganization.contact_person_name = request.contact_person_name
  objOrganization.contact_mobile_number = request.contact_mobile_number
  objOrganization.contact_person_email = request.contact_person_email
  objOrganization.address_1 = request.address_1
  objOrganization.address_2 = request.address_2
  objOrganization.city_id = request.city_id
  objOrganization.state_province = request.state_province
  objOrganization.zip = request.zip
  objOrganization.contact_country_id = request.contact_country_id

  // Monthly Target
  objOrganization.organisation_stats = JSON.stringify(request.monthlyTarget)

  // Branding Informations
  objOrganization.image_website = request.image_website
  objOrganization.image_invoice = request.image_invoice
  objOrganization.image_email = request.image_email

  // Office Documents
  objOrganization.image_file1 = request.image_file1
  objOrganization.image_file2 = request.image_file2
  objOrganization.image_file3 = request.image_file3
  objOrganization.image_file4 = request.image_file4

  // Company Notes
  objOrganization.terms_conditions = request.terms_conditions

  return objOrganization
}

module.exports = {
  fetchPos,
  fetchActivePos,
  fetchPosByID,
  fetchPosByName,
  deletePosByID,
  agencyRequestBody
};
