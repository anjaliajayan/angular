var jwt = require('jsonwebtoken');
const config = require('./../../config/config');
const { Users } = require('./../../config/db');

module.exports = (req, res, next) => {

  let token = req.headers['authorization'];
  
  if(!token) return res.status(500).json({ auth: false, msg: 'No token provided.'});

  jwt.verify(token, config.api.apiSecretKey, (err, decoded) => {
    if (err) return res.status(500).json({ auth: false, msg: 'Failed to authenticate the provided token.'});

    req.user = decoded.user;

    Users.findOne({
        where: { email: req.user.email }
    })
    .then(user => {
        req.user = user;
    })
    .catch(err => {
        res.status(500).json({ auth: false, msg: 'Internal Server Error'});
    });
    
    next();
  });
};
