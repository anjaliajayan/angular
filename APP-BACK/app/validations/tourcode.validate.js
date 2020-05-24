const Joi = require("@hapi/joi");
const { makeResponse } = require("./../helpers/utils");

// add/update Tourcode
let tourcodeAddSchema = Joi.object({
    supplier: Joi.array().required(),
    airline: Joi.string().allow(""),
    trip_type: Joi.string().allow(""),
    code_type: Joi.string().allow(""),
    cabin_class: Joi.string().allow(""),
    tourcode_name: Joi.string().allow(""),
    tourcode: Joi.string().required(),
    apply_type: Joi.string().allow(""),
    orgin: Joi.array().allow("").optional(),
    destination: Joi.array().allow("").optional(),
    rbd: Joi.array().allow("").optional(),
    airline_commission: Joi.number().allow(""),
    tour_commission: Joi.string().allow(""),
    shared_commission: Joi.number().allow(""),
    sale_start_date: Joi.string().allow(""),
    sale_end_date: Joi.string().allow(""),
    travel_start_date: Joi.string().allow(""),
    travel_end_date: Joi.string().allow(""),
    tourcode_id :Joi.string().allow("").optional(),
    mode :Joi.string().allow('Add').optional()
})

const tourcodeAddValidator = (req, res, next) => {
    let extendUpdate = tourcodeAddSchema
    if(req.body.mode == "Update"){
        extendUpdate =  tourcodeAddSchema.append({
            tourcode_id :Joi.number().required(),
        })
    }
    const { error } = extendUpdate.validate(req.body)
    if(error){
        return makeResponse(res, false, 200, 'danger', 'Airline Deals', error.details[0].message.replace(/[|&;$%@"<>()+,]/g, ""))
    }
    next();
}

// fetch Tourcode by ID
const tourcodeFetchByIDSchema = Joi.object({
    tourcode_id: Joi.number().required(),
});
const tourcodeFetchByIDValidator = (req, res, next) => {
  const { error } = tourcodeFetchByIDSchema.validate(req.params);
  if (error) {
    return makeResponse(res, false, 200, 'danger', 'Airline Deals', (error.details[0].message).replace(/[|&;$%@"<>()+,]/g, ""));
  }
  next();
};

// delete Tourcode by ID for Delete
const tourcodeDeleteByIDSchema = Joi.object({
    tourcode_id: Joi.number().required(),
});
const tourcodeDeleteByIDValidator = (req, res, next) => {
  const { error } = tourcodeDeleteByIDSchema.validate(req.body);
  if (error) {
    return makeResponse(res, false, 200, 'danger', 'Airline Deals', (error.details[0].message).replace(/[|&;$%@"<>()+,]/g, ""));
  }
  next();
};

module.exports = {
    tourcodeAddValidator,
    tourcodeFetchByIDValidator,
    tourcodeDeleteByIDValidator    
}