const Joi = require('@hapi/joi');
const { makeResponse } = require('./../helpers/utils');

const validateTargetsSchema = Joi.object({
            user_id: Joi.number().required(),
            targets: Joi.array().required()
        });


const validateDeleteUserSchema = Joi.object({
            id: Joi.number().required(),
        });


/**
 * 
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */

const targetValidator = (req, res, next) => {
    const { error } = validateTargetsSchema.validate(req.body);
    if( error ) {
        return makeResponse(res, false, 400, 'danger', 'Validation Error!', (error.details[0].message).replace(/[|&;$%@"<>()+,]/g, ""));
    }
    next();
};

const validateDeleteUser = (req, res, next) => {
    const { error } = validateDeleteUserSchema.validate(req.params);
    if( error ) {
        return makeResponse(res, false, 400, 'danger', 'Validation Error!', (error.details[0].message).replace(/[|&;$%@"<>()+,]/g, ""));
    }
    next();
};

const validateUserSchema = Joi.object({
    salute: Joi.string().allow('', null).optional(),
    first_name: Joi.string().required(),
    last_name: Joi.string().required(),
    mobile: Joi.required(),
    initial: Joi.string().allow('', null).optional(),
    sex: Joi.string().allow('', null).optional(),
    status: Joi.string().allow('', null).optional(),
    address_1: Joi.string().allow('', null).optional(),
    address_2: Joi.string().allow('', null).optional(),
    country_id: Joi.required(),
    organisation_id: Joi.required(),
    branch_id: Joi.allow('', null).optional(),
    role_id: Joi.required(),
    username: Joi.required(),
    email: Joi.string().email({ minDomainSegments: 2 }).required(),
    password: Joi.string().required().
    pattern(new RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&]{6,}$')),
    cpassword: Joi.ref('password'),
});

const validateUser = (req, res, next) => {  
    const { error } = validateUserSchema.validate(req.body, { allowUnknown: true });
    if (error) {
        console.log(error)
      message = error.details[0].message.replace(/[|&;$%_@"<>()+,]/g, "")
      message = message.replace(/([a-z])([A-Z])/g, '$1 $2');
      console.log(message)
      if(message.includes('password') && !message.includes('cpassword')){
        message = "Password should be combination of 1 capital letter, 1 small letter and special character with minimum 8 character"
      } else  if(error._original.password != error._original.cpassword){
        message = "Password does not match"
      }
      return makeResponse(res, false, 200, 'danger', 'Add User', message.charAt(0).toUpperCase() + message.slice(1));
    }
    next();
  };

module.exports = {
    targetValidator, validateDeleteUser, validateUser
}
