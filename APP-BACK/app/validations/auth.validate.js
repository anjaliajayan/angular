const Joi = require('@hapi/joi');
const { makeResponse } = require('./../helpers/utils');

const loginSchema = Joi.object({
            username: Joi.string().required(),
            password: Joi.string().required(),
            rememberMe: Joi.bool(),
        });

const resendOtpSchema = Joi.object({
            username: Joi.string().required(),
        });

const verifyOtpSchema = Joi.object({
            otp: Joi.string().required(),
            authStatus: Joi.boolean().required(),
            username: Joi.string().required(),
        });

const refreshTokenSchema = Joi.object({
            refreshToken: Joi.string().required(),
        });

const emailSchema = Joi.object({
            email: Joi.string().required().email(),
        });


/**
 * 
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */

const loginValidator = (req, res, next) => {
    const { error } = loginSchema.validate(req.body);
    if( error ) {
        return makeResponse(res, false, 400, 'danger', 'Validation Error!', (error.details[0].message).replace(/[|&;$%@"<>()+,]/g, ""));
    }
    next();
};

const resendOtpValidator = (req, res, next) => {
    const { error } = resendOtpSchema.validate(req.body);
    if( error ) {
        return makeResponse(res, false, 400, 'danger', 'Validation Error!', (error.details[0].message).replace(/[|&;$%@"<>()+,]/g, ""));
    }
    next();
};

const verifyOtpValidator = (req, res, next) => {
    const { error } = verifyOtpSchema.validate(req.body);
    if( error ) {
        return makeResponse(res, false, 400, 'danger', 'Validation Error!', (error.details[0].message).replace(/[|&;$%@"<>()+,]/g, ""));
    }
    next();
};

const refreshTokenValidator = (req, res, next) => {
    const { error } = refreshTokenSchema.validate(req.body);
    if( error ) {
        return makeResponse(res, false, 400, 'danger', 'Validation Error!', (error.details[0].message).replace(/[|&;$%@"<>()+,]/g, ""));
    }
    next();
};

const emailValidator = (req, res, next) => {
    const { error } = emailSchema.validate(req.body);
    if( error ) {
        return makeResponse(res, false, 400, 'danger', 'Validation Error!', (error.details[0].message).replace(/[|&;$%@"<>()+,]/g, ""));
    }
    next();
};


module.exports = {
    loginValidator, resendOtpValidator, verifyOtpValidator, refreshTokenValidator, emailValidator
}
