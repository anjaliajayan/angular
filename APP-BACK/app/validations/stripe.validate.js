const Joi = require('@hapi/joi');
const {
  makeResponse
} = require('../helpers/utils');

const stripeAuthorizeOnlySchema = Joi.object({
  amount: Joi.number().required().min(0),
  currency: Joi.string().required().min(3).max(3),
  payment_method_types: Joi.array().optional()
});

const stripeAuthorizeOnlyValidator = (req, res, next) => {
  const {
    error
  } = stripeAuthorizeOnlySchema.validate(req.body);
  if (error) {
    return makeResponse(res, false, 400, 'danger', 'Validation Error!', (error.details[0].message).replace(/[|&;$%@"<>()+,]/g, ""));
  }
  next();
};

const stripeCreateCardTokenSchema = Joi.object({
  number: Joi.string().required().min(16).max(16),
  exp_month: Joi.number().required().min(1).max(12),
  exp_year: Joi.number().required().min(2020),
  cvc: Joi.string().required().min(3).max(3)
});

const stripeCreateCardTokenValidator = (req, res, next) => {
  const {
    error
  } = stripeCreateCardTokenSchema.validate(req.body);
  if (error) {
    return makeResponse(res, false, 400, 'danger', 'Validation Error!', (error.details[0].message).replace(/[|&;$%@"<>()+,]/g, ""));
  }
  next();
};

const stripeCustomerCreateThenChargeCreateSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().required(),
  source: Joi.string().required(),
  amount: Joi.number().required(),
  currency: Joi.string().required()
});

const stripeCustomerCreateThenChargeCreateValidator = (req, res, next) => {
  const {
    error
  } = stripeCustomerCreateThenChargeCreateSchema.validate(req.body);
  if (error) {
    return makeResponse(res, false, 400, 'danger', 'Validation Error!', (error.details[0].message).replace(/[|&;$%@"<>()+,]/g, ""));
  }
  next();
};

const stripeChargePreAuthorizationSchema = Joi.object({
  amount: Joi.number().required(),
  currency: Joi.string().required(),
  source: Joi.string().required(),
  description: Joi.string().required()
});

const stripeChargePreAuthorizationValidator = (req, res, next) => {
  const {
    error
  } = stripeChargePreAuthorizationSchema.validate(req.body);
  if (error) {
    return makeResponse(res, false, 400, 'danger', 'Validation Error!', (error.details[0].message).replace(/[|&;$%@"<>()+,]/g, ""));
  }
  next();
};

module.exports = {
  stripeAuthorizeOnlyValidator,
  stripeCreateCardTokenValidator,
  stripeCustomerCreateThenChargeCreateValidator,
  stripeChargePreAuthorizationValidator
}
