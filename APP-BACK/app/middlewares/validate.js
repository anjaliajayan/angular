const Joi = require('joi');
const validateInput = schema=> {
    return (req, res, next)=>{
const data = req.body;
const {error } = Joi.validate(data, schema);
const valid = error == null;
if(valid){
    next();
}else {
    const { details } = error;
    const message = details.map(i => i.message).join(',');
    res.status(422).json({ error: message })};
}
}


module.exports = validateInput;
