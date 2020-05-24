const Joi = require("@hapi/joi");
const { makeResponse } = require("./../helpers/utils");

// add/update Commission
let commissionAddSchema = Joi.object({
    airline: Joi.string().allow(""),
    supplier: Joi.array().required(),
    trip_type: Joi.string().allow(""),
    cabin_class: Joi.string().allow(""),
    commission: Joi.number().allow(""),
    commissionmode: Joi.string().allow(""),
    orgin: Joi.array().allow("").optional(),
    destination: Joi.array().allow("").optional(),
    rbd: Joi.array().allow("").optional(),
    sale_start_date: Joi.string().allow(""),
    sale_end_date: Joi.string().allow(""),
    travel_start_date: Joi.string().allow(""),
    travel_end_date: Joi.string().allow(""),
    commission_id :Joi.string().allow("").optional(),
    mode :Joi.string().allow('Add').optional()
})

const commissionAddValidator = (req, res, next) => {
    let extendUpdate = commissionAddSchema
    if(req.body.mode == "Update"){
        extendUpdate =  commissionAddSchema.append({
            commission_id :Joi.number().required(),
        })
    }
    const { error } = extendUpdate.validate(req.body)
    if(error){
        return makeResponse(res, false, 200, 'danger', 'Airline Deals', error.details[0].message.replace(/[|&;$%@"<>()+,]/g, ""))
    }
    next();
}

// fetch Commission by ID
const commissionFetchByIDSchema = Joi.object({
    commission_id: Joi.number().required(),
});
const commissionFetchByIDValidator = (req, res, next) => {
  const { error } = commissionFetchByIDSchema.validate(req.params);
  if (error) {
    return makeResponse(res, false, 200, 'danger', 'Airline Deals', (error.details[0].message).replace(/[|&;$%@"<>()+,]/g, ""));
  }
  next();
};

// delete Commission by ID for Delete
const commissionDeleteByIDSchema = Joi.object({
    commission_id: Joi.number().required(),
});
const commissionDeleteByIDValidator = (req, res, next) => {
  const { error } = commissionDeleteByIDSchema.validate(req.body);
  if (error) {
    return makeResponse(res, false, 200, 'danger', 'Airline Deals', (error.details[0].message).replace(/[|&;$%@"<>()+,]/g, ""));
  }
  next();
};

module.exports = {
    commissionAddValidator,
    commissionFetchByIDValidator,
    commissionDeleteByIDValidator
}