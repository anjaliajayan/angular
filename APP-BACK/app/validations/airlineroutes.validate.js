const Joi = require("@hapi/joi");
const { makeResponse } = require("./../helpers/utils");

// add/update Airline Routes
let routesAddSchema = Joi.object({
    organisation_id: Joi.allow(""),
    supplier: Joi.array().allow(""),
    origin: Joi.array().required(),
    destination: Joi.array().required(),
    routes: Joi.array().unique().required().messages({
      "array.base": `"Preferred Airlines" should be a type of 'text'`,
      "array.empty": `"Preferred Airlines" cannot be an empty field`,
      "array.unique": `"Preferred Airlines" should not be duplicate value.`,
      "array.required": `"Preferred Airlines" is a required`
    }),
    trip_type: Joi.string().allow(""),
    routes_id :Joi.string().allow("").optional(),
    mode :Joi.string().allow('Add').optional()
})

const routesAddValidator = (req, res, next) => {
    let extendUpdate = routesAddSchema
    if(req.body.mode == "Update"){
        extendUpdate =  routesAddSchema.append({
            routes_id :Joi.number().required(),
        })
    }
    const { error } = extendUpdate.validate(req.body)
    if(error){
        return makeResponse(res, false, 200, 'danger', 'Airline Routes', error.details[0].message.replace(/[|&;$%@"<>()+,]/g, ""))
    }
    next();
}

// fetch Airline Routes by ID
const routesFetchByIDSchema = Joi.object({
    routes_id: Joi.number().required(),
});
const routesFetchByIDValidator = (req, res, next) => {
  const { error } = routesFetchByIDSchema.validate(req.params);
  if (error) {
    return makeResponse(res, false, 200, 'danger', 'Airline Routes', (error.details[0].message).replace(/[|&;$%@"<>()+,]/g, ""));
  }
  next();
};

// delete Airline Routes by ID for Delete
const routesDeleteByIDSchema = Joi.object({
    routes_id: Joi.number().required(),
});
const routesDeleteByIDValidator = (req, res, next) => {
  const { error } = routesDeleteByIDSchema.validate(req.body);
  if (error) {
    return makeResponse(res, false, 200, 'danger', 'Airline Routes', (error.details[0].message).replace(/[|&;$%@"<>()+,]/g, ""));
  }
  next();
};

module.exports = {
    routesAddValidator,
    routesFetchByIDValidator,
    routesDeleteByIDValidator
}