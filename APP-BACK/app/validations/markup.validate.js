const Joi = require("@hapi/joi");
const { makeResponse } = require("./../helpers/utils");

// add/update Markup
let markupAddSchema = Joi.object({
    title: Joi.string().required(),
    priority: Joi.number().required(),
    is_active: Joi.number().required(),
    sale_id: Joi.number().required(),
    supplier_id: Joi.number().required(),
    mode :Joi.string().allow('Add').optional(),
})

const markupAddValidator = (req, res, next) => {
    let extendUpdate = markupAddSchema
    if(req.body.markup.mode == "Add"){
        extendUpdate =  markupAddSchema.append({
            markup_id :Joi.string().allow("").optional(),
        })
    }
    if(req.body.markup.mode == "Update"){
        extendUpdate =  markupAddSchema.append({
            markup_id :Joi.number().required(),
        })
    }
    const { error } = extendUpdate.validate(req.body.markup)
    if(error){
        return makeResponse(res, false, 200, 'danger', 'Mark Up Configurations', error.details[0].message.replace(/[|&;$%@"<>()+,]/g, ""))
    }
    next();
}

// fetch Markup by ID
const markupFetchByIDSchema = Joi.object({
    markup_id: Joi.number().required(),
});
const markupFetchByIDValidator = (req, res, next) => {
  const { error } = markupFetchByIDSchema.validate(req.params);
  if (error) {
    return makeResponse(res, false, 200, 'danger', 'Mark Up Configurations', (error.details[0].message).replace(/[|&;$%@"<>()+,]/g, ""));
  }
  next();
};

// fetch Markup by Title
const markupFetchByTitleSchema = Joi.object({
    title: Joi.string().required(),
    limit: Joi.allow(),
    page: Joi.allow(),
});
const markupFetchByTitleValidator = (req, res, next) => {
  const { error } = markupFetchByTitleSchema.validate(req.body);
  if (error) {
    return makeResponse(res, false, 200, 'danger', 'Mark Up Configurations', (error.details[0].message).replace(/[|&;$%@"<>()+,]/g, ""));
  }
  next();
};

module.exports = {
    markupAddValidator,
    markupFetchByIDValidator,
    markupFetchByTitleValidator    
}