const Joi = require("@hapi/joi");
const { makeResponse } = require("./../helpers/utils");

// add POS
let posAddSchema = Joi.object({
  corporate_type: Joi.string().required(),
  name: Joi.string().required(),
  email: Joi.string().email({ minDomainSegments: 2 }).required(),
  payment_gateway: Joi.number().required(),
  currency_id: Joi.string().required(),
  country_id: Joi.number().required(),
  timezone_id: Joi.number().required(),
  numberOfUsers: Joi.number().min(1).required(),
  agent_code: Joi.string().min(4).max(13).regex(/^\d+$/).allow('', null).optional(),
  associated_office: Joi.string().allow('', null).optional(),
  contact: Joi.allow('', null).optional(),
  credit_limit: Joi.number().min(1).allow('', null).optional(),
  business_id: Joi.number().allow('', null).optional(),
  iata_no: Joi.string().allow('', null).optional(),
  domestictTaxCode: Joi.string().allow('', null).optional(),
  domestictTaxPercentage: Joi.number().min(0).max(100).allow('', null).optional(),
  domestictTaxCurrency: Joi.string().allow('', null).optional(),
  domestictTaxAirport: Joi.array().allow('', null).optional(),
  internationalTaxPercentage: Joi.number().min(0).max(100).allow('', null).optional(),
  nonAirlineTax: Joi.number().min(0).max(100).allow('', null).optional(),
  amex_details: Joi.allow('', null).optional(),
  amex_card :Joi.allow('', null).optional(),
  queue_service: Joi.allow('', null).optional(),
  pos_negofares: Joi.allow('', null).optional(),
  tab: Joi.string().allow('', null).optional(),
});

const posAddValidator = (req, res, next) => {
  let extendUpdate = posAddSchema
  if (req.body.corporate_type == "B2C") {
    extendUpdate = posAddSchema.append({
      numberOfUsers: Joi.allow('', null).optional(),
      domain_url: Joi.string().required(),
      credit_limit: Joi.allow('', null).optional(),
      pos_negofares: Joi.allow('', null).optional(),
    })
  }
  if (req.body.corporate_type == "Mobile") {
    extendUpdate = posAddSchema.append({
      numberOfUsers: Joi.allow('', null).optional(),
      domain_url: Joi.allow('', null).optional(),
      credit_limit: Joi.allow('', null).optional(),
      pos_negofares: Joi.allow('', null).optional(),
    })
  }
  if (req.body.corporate_type == "API") {
    extendUpdate = posAddSchema.append({
      domain_url: Joi.allow('', null).optional(),
      pos_negofares: Joi.allow('', null).optional(),
    })
  }
  const { error } = extendUpdate.validate(req.body, { allowUnknown: true });
  if (error) {
    message = error.details[0].message.replace(/[|&;$%_@"<>()+,]/g, "")
    message = message.replace(/([a-z])([A-Z])/g, '$1 $2');
    return makeResponse(res, false, 200, 'danger', 'Add Point of Sale', message.charAt(0).toUpperCase() + message.slice(1));
  }
  next();
};

// update POS
let posUpdateSchema = Joi.object({
  organisation_id :Joi.number().required(),
  tab:Joi.string().default('basic'),
  created: Joi.date().allow('', null).optional(),  
});

const posUpdateValidator = (req, res, next) => {
  let extendUpdate = posUpdateSchema
  if(req.body.tab == "basic"){
    extendUpdate = posUpdateSchema.append({
      corporate_type: Joi.string().required(),
      name: Joi.string().required(),
      email: Joi.string().email({ minDomainSegments: 2 }).required(),
      payment_gateway: Joi.number().required(),
      currency_id: Joi.string().required(),
      country_id: Joi.number().required(),
      timezone_id: Joi.number().required(),
      numberOfUsers: Joi.number().required(),
      agent_code: Joi.string().min(4).max(13).regex(/^\d+$/).allow('', null).optional(),
      associated_office: Joi.string().allow('', null).optional(),
      contact: Joi.allow('', null).optional(),
      credit_limit: Joi.number().min(1).allow('', null).optional(),
      business_id: Joi.number().allow('', null).optional(),
      iata_no: Joi.string().allow('', null).optional(),
      domestictTaxCode: Joi.string().allow('', null).optional(),
      domestictTaxPercentage: Joi.number().min(0).max(100).allow('', null).optional(),
      domestictTaxCurrency: Joi.string().allow('', null).optional(),
      domestictTaxAirport: Joi.array().allow('', null).optional(),
      internationalTaxPercentage: Joi.number().min(0).max(100).allow('', null).optional(),
      nonAirlineTax: Joi.number().min(0).max(100).allow('', null).optional(),
      amex_details: Joi.string().allow('', null).optional(),
      amex_card :Joi.string().allow('', null).optional(),
      queue_service: Joi.string().allow('', null).optional(),
      pos_negofares: Joi.allow('', null).optional(),
    })
  }
  if(req.body.tab == "branch"){
    extendUpdate = posUpdateSchema.append({
      name: Joi.string().required(),
      address_1: Joi.string().required(),
      address_2: Joi.string().required(),
    })
  }
  if(req.body.tab == "address"){
    extendUpdate = posUpdateSchema.append({
      contact_person_name: Joi.string().allow('', null).optional(),
      contact_mobile_number: Joi.number().allow('', null).optional(),
      contact_person_email: Joi.string().allow('', null).optional(),
      address_1: Joi.string().allow('', null).optional(),
      address_2: Joi.string().allow('', null).optional(),
      contact_country_id: Joi.number().allow('', null).optional(),
      city_id: Joi.number().allow('', null).optional(),
      state_province: Joi.string().allow('', null).optional(),
      zip: Joi.string().allow('', null).optional(),
    })
  }
  if(req.body.tab == "branding"){
    extendUpdate = posUpdateSchema.append({
      image_website: Joi.string().allow('', null).optional(),
      image_invoice: Joi.string().allow('', null).optional(),
      image_email: Joi.string().allow('', null).optional(),
      image_file1: Joi.string().allow('', null).optional(),
      image_file2: Joi.string().allow('', null).optional(),
      image_file3: Joi.string().allow('', null).optional(),
      image_file4: Joi.string().allow('', null).optional(),
      terms_conditions: Joi.string().allow('', null).optional(),
    })
  }
  if(req.body.tab == "target"){
    extendUpdate = posUpdateSchema.append({
      monthlyTarget :Joi.allow('', null).optional().required(),
    })
  }
  if(req.body.tab == "suppliers"){
    extendUpdate = posUpdateSchema.append({
      active_suppliers: Joi.allow('', null).optional(),
    })
  }
  if(req.body.tab == "rbd"){
    extendUpdate = posUpdateSchema.append({
      pos_rbd: Joi.allow('', null).required(),
    })
  }

  if (req.body.corporate_type == "B2C") {
    extendUpdate = posUpdateSchema.append({
      credit_limit: Joi.allow('', null).optional(),
      pos_negofares: Joi.allow('', null).optional(),
    })
  }
  if (req.body.corporate_type == "Mobile") {
    extendUpdate = posUpdateSchema.append({
      numberOfUsers: Joi.allow('', null).optional(),
      domain_url: Joi.allow('', null).optional(),
      credit_limit: Joi.allow('', null).optional(),
      pos_negofares: Joi.allow('', null).optional(),
    })
  }
  if (req.body.corporate_type == "API") {
    extendUpdate = posUpdateSchema.append({
      domain_url: Joi.allow('', null).optional(),
      pos_negofares: Joi.allow('', null).optional(),
    })
  }
  const { error } = extendUpdate.validate(req.body, { allowUnknown: true });
  if (error) {
    message = error.details[0].message.replace(/[|&;$%_@"<>()+,]/g, "")
    message = message.replace(/([a-z])([A-Z])/g, '$1 $2');
    return makeResponse(res, false, 200, 'danger', 'Update Point of Sale', message.charAt(0).toUpperCase() + message.slice(1));
  }
  next();
};

// add POS Branch
let posAddBranchSchema = Joi.object({
  name: Joi.string().required(),
  branch_code: Joi.string().required(),
  email: Joi.string().required(),
  address_1: Joi.string().allow('', null),
  address_2: Joi.string().allow('', null),
  tab: Joi.string().allow('branch').optional(),
});

const posBranchAddValidator = (req, res, next) => {  
  const { error } = posAddBranchSchema.validate(req.body, { allowUnknown: true });
  if (error) {
    message = error.details[0].message.replace(/[|&;$%_@"<>()+,]/g, "")
    message = message.replace(/([a-z])([A-Z])/g, '$1 $2');
    return makeResponse(res, false, 200, 'danger', 'Add Branch', message.charAt(0).toUpperCase() + message.slice(1));
  }
  next();
};


// fetch All POS
const posFetchAllSchema = Joi.object({
  limit: Joi.number().default(1500),
  page: Joi.number().default(0),
  corporate_type: Joi.string().default('all'),
  nameAndOfficeId: Joi.string().allow('', null),
});
const posFetchAllValidator = (req, res, next) => {  
  const { error } = posFetchAllSchema.validate(req.body);
  if (error) {
    message = error.details[0].message.replace(/[|&;$%_@"<>()+,]/g, "")
    message = message.replace(/([a-z])([A-Z])/g, '$1 $2');
    return makeResponse(res, false, 200, 'danger', 'Fetch Point of Sale', message.charAt(0).toUpperCase() + message.slice(1));
  }
  next();
};

// fetch POS by ID/Name
const posFetchByIDSchema = Joi.object({
  organisation_id: Joi.string().required(),
});
const posFetchByIDValidator = (req, res, next) => {
  const { error } = posFetchByIDSchema.validate(req.params);
  if (error) {
    message = error.details[0].message.replace(/[|&;$%_@"<>()+,]/g, "")
    message = message.replace(/([a-z])([A-Z])/g, '$1 $2');
    return makeResponse(res, false, 200, 'danger', 'Fetch Point of Sale', message.charAt(0).toUpperCase() + message.slice(1));
  }
  next();
};


module.exports = {
  posAddValidator,
  posUpdateValidator,
  posBranchAddValidator,
  posFetchAllValidator,
  posFetchByIDValidator,
}