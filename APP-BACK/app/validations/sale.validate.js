const Joi = require("@hapi/joi");
const { makeResponse } = require("./../helpers/utils");

// add/update Sale
let saleAddSchema = Joi.object({
    name: Joi.string().required(),
    organisation_id: Joi.array().required(),
    is_active: Joi.number().required(),
    preference: Joi.string().valid('override', 'inherit').required(),
    start_date: Joi.string().allow('').optional(),
    end_date: Joi.string().allow('').optional(),
    is_free_sale: Joi.boolean().default(false),
    is_stop_sale: Joi.boolean().default(true),    
    is_flight: Joi.boolean().default(false).optional(),
    sale_type: Joi.string().allow("").optional(),
    is_hotel: Joi.boolean().default(false).optional(),
    is_car: Joi.boolean().default(false).optional(),
    is_transfers: Joi.boolean().default(false).optional(),
    is_activities: Joi.boolean().default(false).optional(),
    is_insurance: Joi.boolean().default(false).optional(),
    is_cruises: Joi.boolean().default(false).optional(),
    sale_id: Joi.number().allow(null).optional(),
    mode :Joi.string().allow('Add').optional(),
})

const saleAddValidator = (req, res, next) => {
    let extendUpdate = saleAddSchema
    if(req.body.mode == "Update"){
        extendUpdate =  saleAddSchema.append({
            sale_id :Joi.number().required(),
        })
    }
    const { error } = extendUpdate.validate(req.body)
    if(error){
        return makeResponse(res, false, 200, 'danger', 'Add/Update Group Sale', error.details[0].message.replace(/[|&;$%@"<>()+,]/g, ""))
    }
    next();
}

// fetch Sale by ID
const saleFetchByIDSchema = Joi.object({
  sale_id: Joi.number().required(),
});
const saleFetchByIDValidator = (req, res, next) => {
  const { error } = saleFetchByIDSchema.validate(req.params);
  if (error) {
    return makeResponse(res, false, 200, 'danger', 'Mark Up Configurations', (error.details[0].message).replace(/[|&;$%@"<>()+,]/g, ""));
  }
  next();
};

// fetch Sale by Name
const saleFetchByNameSchema = Joi.object({
  name: Joi.string().required(),
  page: Joi.allow()
});
const saleFetchByNameValidator = (req, res, next) => {    
  const { error } = saleFetchByNameSchema.validate(req.body);
  if (error) {
    return makeResponse(res, false, 200, 'danger', 'Mark Up Configurations', (error.details[0].message).replace(/[|&;$%@"<>()+,]/g, ""));
  }
  next();
};

// dynamic data report
const dynamicReportSchema = Joi.object({
    organisation_ids: Joi.array().required(),
    start_date: Joi.required(),
    end_date: Joi.required(),
});
const dynamicReportValidator = (req, res, next) => {    
  const { error } = dynamicReportSchema.validate(req.body);
  if (error) {
    return makeResponse(res, false, 200, 'danger', 'Fetch Dynamic Report', (error.details[0].message).replace(/[|&;$%@"<>()+,]/g, ""));
  }
  next();
};

module.exports = {
    saleAddValidator,
    saleFetchByIDValidator,
    saleFetchByNameValidator,
    dynamicReportValidator
}