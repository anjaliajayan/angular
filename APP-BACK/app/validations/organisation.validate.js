const Joi = require("@hapi/joi");
const { makeResponse } = require("./../helpers/utils");

// add/update POS
let posAddSchema = Joi.object({
  corporate_type: Joi.string().required(),
  name: Joi.string().required(),
  email: Joi.string().email({ minDomainSegments: 2 }).required(),
  payment_gateway: Joi.number().required(),
  currency_id: Joi.number().required(),
  country_id: Joi.number().required(),
  timezone_id: Joi.number().required(),
  numberOfUsers: Joi.number().required(),
  agent_code: Joi.string().allow('').optional() ,
  associated_office: Joi.string().allow('').optional(),
  contact: Joi.allow('').optional(),
  credit_limit: Joi.number().allow('').optional(),
  business_id: Joi.string().allow('').optional(),
  iata_no: Joi.string().allow('').optional(),
  domestictTaxCode: Joi.string().allow('').optional(),
  domestictTaxPercentage: Joi.string().allow('').optional(),
  domestictTaxCurrency: Joi.string().allow('').optional(),
  domestictTaxAirport: Joi.string().allow('').optional(),
  internationalTaxPercentage: Joi.string().allow('').optional(),
  nonAirlineTax: Joi.number().allow('').optional(),
  amex_details: Joi.string().allow('').optional(),
  queue_service: Joi.string().allow('').optional(),
  pos_negofares: Joi.string().allow('').optional(),
  pos_rbd: Joi.string().allow('').optional(),
  active_suppliers: Joi.allow('').optional(),
  contact_person_name: Joi.string().allow('').optional(),
  contact_mobile_number: Joi.number().allow('').optional(),
  contact_person_email: Joi.string().allow('').optional(),
  address_1: Joi.string().allow('').optional(),
  address_2: Joi.string().allow('').optional(),
  city_id: Joi.number().allow('').optional(),
  state_province: Joi.string().allow('').optional(),
  zip: Joi.string().allow('').optional(),
  contact_country_id: Joi.number().allow('').optional(),
  organisation_stats: Joi.string().allow('').optional(),
  image_website: Joi.string().allow('').optional(),
  image_invoice: Joi.string().allow('').optional(),
  image_email: Joi.string().allow('').optional(),
  image_file1: Joi.string().allow('').optional(),
  image_file2: Joi.string().allow('').optional(),
  image_file3: Joi.string().allow('').optional(),
  image_file4: Joi.string().allow('').optional(),
  terms_conditions: Joi.string().allow('').optional(),
  created: Joi.date().allow('').optional(),
  amex_card :Joi.string().allow('').optional(),
  monthlyTarget :Joi.allow('').optional(),
  internationalTaxPercentage :Joi.number().allow('').optional(),
  mode :Joi.string().allow('').optional(),
});

const posAddValidator = (req, res, next) => {   
  let extendUpdate = posAddSchema 
  if(req.body.mode === "Add"){
    delete posAddSchema.organisation_id
    extendUpdate = posAddSchema.append({
      organisation_id: Joi.number().allow('').optional(),
      domain_url: Joi.string().allow('').optional(),
    })
  }
  if(req.body.mode === "Update"){ 
    extendUpdate = posAddSchema.append({
      organisation_id :Joi.number().required(),
    })
  }
  if(req.body.corporate_type === "B2C"){
    extendUpdate = posAddSchema.append({
      numberOfUsers: Joi.number().allow('').optional(),      
      domain_url: Joi.string().required(),
    })
  }
  const { error } = extendUpdate.validate(req.body,{allowUnknown:true});
  if (error) {
    return makeResponse( res, false, 200, 'danger', 'Add/Update Point of Sale', error.details[0].message.replace(/[|&;$%@"<>()+,]/g, "") );
  }
  next();
};

// fetch All POS
const posFetchAllSchema = Joi.object({
  limit: Joi.number().default(1500),
  page: Joi.number().default(0),
  corporate_type: Joi.string().default('all'),
  nameAndOfficeId: Joi.string().allow(''),
});
const posFetchAllValidator = (req, res, next) => {  
  const { error } = posFetchAllSchema.validate(req.body);
  if (error) {
    return makeResponse(res, false, 200, 'danger', 'Fetch Point of Sale', (error.details[0].message).replace(/[|&;$%@"<>()+,]/g, ""));
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
    return makeResponse(res, false, 200, 'danger', 'Fetch Point of Sale', (error.details[0].message).replace(/[|&;$%@"<>()+,]/g, ""));
  }
  next();
};


module.exports = {
  posAddValidator,
  posFetchAllValidator,
  posFetchByIDValidator,
}