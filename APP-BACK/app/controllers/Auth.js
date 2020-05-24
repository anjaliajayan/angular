const express = require('express');
const validate = require('express-validation');
var cookie = require('cookie-parser');
const { v4: uuid } = require('uuid')
const fs = require('fs');
const { loginValidator, resendOtpValidator, verifyOtpValidator, refreshTokenValidator, emailValidator } = require('../validations/auth.validate');

const router = express.Router();
const { Sequelize, Users, SettingModel } = require('./../../config/db');

const config = require('./../../config/config');
const jwt = require('jsonwebtoken');

const { getLocationInfoByIp, HashPassword } = require('./../helpers/utils');

const sgMail = require('@sendgrid/mail');
const NodeCache = require('node-cache');

const utilsHelper = require('../helpers/utils');
const redisHelper = new (require('../helpers/redis.helper'))();

const Op = Sequelize.Op;
const cache = new NodeCache({
  stdTTL: 0,
  checkperiod: 0
});

const authenticate = require('./../middlewares/authenticate');

sgMail.setApiKey(config.api.sendGridApiKey);
// redisHelper
const getTokenList = async() => {
  try {   
    return await cache.get('tokenList') || {};
  }
  catch(err) {
    // console.log('AuthGetTokenList', err)
  }
}

/*
const getTokenList = async () => new Promise(resolve => {
  let tokenList = {};
  cache.get("tokenList", async (err, tList) => {
    if (!err) {
      if (tList) {
        tokenList = tList;
      }
    }
    return resolve(tokenList);
  });
});
*/

const setTokenList = async (tokenData = null) => {
  if (tokenData) {
    const data = {
      ...(await getTokenList()),
      ...tokenData
    };
    cache.set('tokenList', data);
  }
};


const sendOtp = async() => {
  let otp = 12345;
  if (config.env === 'production') {
    otp = Math.floor(Math.random() * 90000) + 10000;
    const msg = {
      to: `${user.dataValues.email}`,
      from: 'inbox@tpconnects.com',
      subject: 'Verify your OTP - TPConnects',
      text: `Your One Time Pin (OTP) for TPConnects Dashboard is ${otp}`,
      html: `<p>Your One Time Pin (OTP) for TPConnects Dashboard is <strong>${otp} </strong></p>`,
    };
    sgMail.send(msg);
  }
  return otp;
 }


/**
 * @swagger
 *
 * /api/sign-in:
 *   post:
 *    tags:
 *      - Authentication
 *    summary: Login to system
 *    description: Login to get access token
 *    consumes:
 *       - application/json
 *    produces:
 *      - application/json
 *    parameters:
 *      - in: body
 *        name: body
 *        description: Provide username and password to get access token and consume rest of the API's
 *        required: true
 *        schema:
 *          properties:
 *            username:
 *              type: string
 *            password:
 *              type: string
 *            rememberMe:
 *              type: boolean
 *              default: false
 *    responses:
 *      200:
 *        description: Return object
 *      400:
 *       description: Bad Request
 *      401:
 *        description: Not Authrized
 *      403:
 *        description: You do not have necessary permissions for the resource or JWT Expired
 *      500:
 *         description: Something went wrong
 */
router.post('/sign-in', loginValidator, async (req, res) => {

  try {
    getLocationInfoByIp(req);
    // console.log(req.body);
    const { username, password, rememberMe } = req.body;
    const user = await Users.findOne({
                    where: { [Op.or]: [{username}, {email: username}] },
                    include: [{all: true, nested: true}]
                    /*[{
                      model: sequelizeOrganisation,
                      attributes: ['parent_id', 'agent', 'api_key','secret_key', 'currency_id', 'hierarchy_id', 'role_id', 'hierarchy_parent', 'status', 'is_active'],
                      required: true
                    }]*/
                  });

      if ( !user ) {
        return utilsHelper.makeResponse(res, true, 401, 'error', 'Login not successful', 'Username / Email not found');
      }

      const passHash = HashPassword(password, config.api.pwdHashSalt);
      if (passHash !== user.password) {
        return utilsHelper.makeResponse(res, true, 401, 'error', 'Login not successful', 'Incorrect login details');
      }

      // required step for login
      // send and update OTP to verify on next step
      const otp = await sendOtp();
      Users.update({ security_answer: otp }, { where: { email: user.email } });

      // remember cookie based on user login scenerio
      res.cookie('rememberme', '0', { expires: false, httpOnly: false }); // expire at end of session
      // general settings, generate JWT token
      var { menu_permission, ...userObj } = user.dataValues;
      if (rememberMe) {
        const token = jwt.sign( { user: userObj }, config.api.apiSecretKey, { expiresIn: config.api.tokenExpiry });
        res.cookie('rememberme', '1', { expires: new Date(Date.now() + 3.154e+10), httpOnly: false }); // expire in one year
        res.cookie('remembermeToken', token, { expires: new Date(Date.now() + 3.154e+10), httpOnly: false }); // expire in one year
      }

      const token = jwt.sign({ user: userObj }, config.api.apiSecretKey, { expiresIn: config.api.tokenExpiry });
      const refreshToken = jwt.sign({ user: userObj }, config.api.apiSecretKeyRefreshToken, { expiresIn: config.api.refreshTokenExpiry });
      setTokenList({ [refreshToken]: { token, refreshToken } });

      // set user object in redis
      await redisHelper.set(`UserLogin_${user.users_id}`, userObj);
      
      const newDate = new Date();
      const addADay = newDate.setDate(newDate.getDate() + 1);
      res.cookie('aggregator-' + config.client.hostname, uuid(), {
        domain: config.client.hostname,
        httpOnly: false,
        secure: false,
        path: '/',
        maxAge: 3600000, // one hour
        expires: addADay
      });

      const result = [{
        auth: true,
        // otp: OTP,
        token,
        refreshToken,
        sessionID: req.sessionID
      }];

      return utilsHelper.makeResponse(res, true, 200, 'success', 'Login Successful', 'Successfully Authenticated. Kindly verify your OTP.', result);

    } catch(err) {
      console.log(err);
      return utilsHelper.makeResponse(res, false, 500, 'error', 'Error', err);
    }


/*
  Users.findOne({
      where: { [Op.or]: [{username}, {email: username}] },
      include: [{all: true, nested: true}]
      /*
      [{
        model: sequelizeOrganisation,
        attributes: ['parent_id', 'agent', 'api_key','secret_key', 'currency_id', 'hierarchy_id', 'role_id', 'hierarchy_parent', 'status', 'is_active'],
        required: true
      }]
      ****
    })
    .then(async (user) => {

      if (user) {
        const passHash = HashPassword(password, config.api.pwdHashSalt);
        var { menu_permission, ...userObj } = user.dataValues;
        if (passHash === user.password) {
          let _otp = 12345;
          if (config.env === 'production') {
            _otp = Math.floor(Math.random() * 90000) + 10000;
            const msg = {
              to: `${user.dataValues.email}`,
              from: 'inbox@tpconnects.com',
              subject: 'Verify your OTP - TPConnects',
              text: `Your One Time Pin (OTP) for TPConnects Dashboard is ${_otp}`,
              html: `<p>Your One Time Pin (OTP) for TPConnects Dashboard is <strong>${_otp} </strong></p>`,
            };
            sgMail.send(msg);
          }

          let settingData = await SettingModel.findOne({
            attributes: ["value"],
            where: {
              name: ['OTP']
            }
          });
          const OTP = settingData.value
          Users.update({
              security_answer: _otp
            }, {
              where: {
                email: user.email
              }
            })
            .then((resUpdate) => {

              if (rememberMe) {
                const remembermeToken = uuid();
                res.cookie('rememberme', '1', {
                  maxAge: 2 * 60 * 60 * 1000,
                  expires: 2 * 60 * 60 * 1000,
                  httpOnly: false
                }); // expire in 2 hours
                res.cookie('remembermeToken', remembermeToken, {
                  maxAge: 2 * 60 * 60 * 1000,
                  expires: 2 * 60 * 60 * 1000,
                  httpOnly: false
                }); // expire in one year
                Users.update({
                  rememberme_token: remembermeToken
                }, {
                  where: {
                    username: user.username
                  }
                })
              } else {
                res.cookie('rememberme', '0', {
                  expires: false,
                  httpOnly: false
                }); // expire at end of session
              }

              if (OTP == "1") {
                const token = jwt.sign({
                  user: userObj
                }, config.api.apiSecretKey, {
                  expiresIn: config.api.tokenExpiry
                });
                const refreshToken = jwt.sign({
                  user: userObj
                }, config.api.apiSecretKeyRefreshToken, {
                  expiresIn: config.api.refreshTokenExpiry
                });
                setTokenList({
                  [refreshToken]: {
                    token,
                    refreshToken
                  }
                })

                const newDate = new Date();
                const addADay = newDate.setDate(newDate.getDate() + 1);
                res.cookie('aggregator-' + config.client.hostname, uuid(), {
                  domain: config.client.hostname,
                  httpOnly: false,
                  secure: false,
                  path: '/',
                  maxAge: 3600000, // one hour
                  expires: addADay
                });
                res.json({
                  type: 'data',
                  status: 200,
                  msg: 'Successfully Authenticated. Kindly verify your OTP.',
                  auth: true,
                  otp: OTP,
                  token,
                  refreshToken,
                  sessionID: req.sessionID
                });
              } else {
                res.json({
                  type: 'data',
                  status: 200,
                  msg: 'Successfully Authenticated. Kindly verify your OTP.',
                  auth: true,
                  token: "",
                  refreshToken: "",
                  sessionID: req.sessionID
                });
              }
              // // console.log("========== rememberMe", rememberMe)
              // if(rememberMe){
              //   res.cookie('rememberme', '1', { expires: new Date(Date.now() + 900000), httpOnly: false });
              // }              
            })
            .catch((err) => {
              res.json({
                type: 'error',
                status: 500,
                msg: 'Internal Error Occurred: ' + err,
                auth: false
              });
            });
        } else {
          // res.cookie('rememberme', '1', { expires: new Date(Date.now() + 900000), httpOnly: true });
          return res.json({
            type: 'error',
            status: 500,
            msg: 'Username or Password didn\'t matched. Please try again.'
          });
        }
      } else {        
        return res.json({
          type: 'error',
          status: 500,
          msg: 'It Seems you doesn\'t exists with use. Please enter valid details.',
          auth: false
        });
      }
    })
    .catch((error) => {
      // console.log(error);
      return res.json({
        type: 'error',
        status: 500,
        msg: 'Internal Error Occurred.',
        auth: false
      });
    });
  */
});


/**
 * @swagger
 *
 * /api/resend-otp:
 *   post:
 *    tags:
 *      - Authentication
 *    summary: resend OTP
 *    description: Resend OTP
 *    consumes:
 *       - application/json
 *    produces:
 *      - application/json
 *    parameters:
 *      - in: body
 *        name: body
 *        description: Provide username to get new OTP
 *        required: true
 *        schema:
 *          properties:
 *            username:
 *              type: string
 *    responses:
 *      200:
 *        description: Return object
 *      400:
 *       description: Bad Request
 *      401:
 *        description: Not Authrized
 *      403:
 *        description: You do not have necessary permissions for the resource or JWT Expired
 *      500:
 *         description: Something went wrong
 */
router.post('/resend-otp', resendOtpValidator, (req, res) => {

  const { username } = req.body;

  Users.findOne({
      where: {
        [Op.or]: [{
          username
        }, {
          email: username
        }]
      },
      attributes: ['users_id', 'agent', 'first_name', 'last_name', 'security_answer', 'admin', 'username', 'organisation_id', 'agent_name', 'email', 'agent_code', 'menu_permission'],
      raw: true,
      include: [{
        all: true,
        nested: true
      }]
      /*[{
        model: sequelizeOrganisation,
        attributes: ['parent_id', 'agent', 'api_key', 'secret_key', 'currency_id', 'hierarchy_id', 'role_id', 'hierarchy_parent', 'status', 'is_active'],
        required: true,
        raw: true
      }]*/
    })
    .then((user) => {
      if (user) {
        _otp = Math.floor(Math.random() * 90000) + 10000;
        const msg = {
          to: `${user.email}`,
          from: 'inbox@tpconnects.com',
          subject: 'Verify your OTP - TPConnects',
          text: `Your One Time Pin (OTP) for TPConnects Dashboard is ${_otp}`,
          html: `<p>Your One Time Pin (OTP) for TPConnects Dashboard is <strong>${_otp} </strong></p>`,
        };
        sgMail.send(msg);
        Users.update({
            security_answer: _otp,
          }, {
            where: {
              email: user.email
            }
          })
          .then((resUpdate) => {
            return res.json({
              type: 'data',
              status: 200,
              msg: 'OTP send Successfully.',
            });
          })
          .catch((err) => res.json({
            type: "error",
            status: 500,
            msg: "Internal Error Occurred.",
            auth: false
          }));

      } else {
        return res.json({
          type: 'error',
          status: 500,
          msg: 'It Seems you doesn\'t exists with use. Please enter valid details.',
          auth: false
        });
      }
    });
})



/**
 * @swagger
 *
 * /api/verify-otp:
 *   post:
 *    tags:
 *      - Authentication
 *    summary: Verfiry OTP
 *    description: Verify OTP
 *    consumes:
 *       - application/json
 *    produces:
 *      - application/json
 *    parameters:
 *      - in: body
 *        name: body
 *        description: Provide username, otp, authStatus to verify OTP
 *        required: true
 *        schema:
 *          properties:
 *            otp:
 *              type: string
 *            authStatus:
 *              type: string
 *            username:
 *              type: string
 *    responses:
 *      200:
 *        description: Return object
 *      400:
 *       description: Bad Request
 *      401:
 *        description: Not Authrized
 *      403:
 *        description: You do not have necessary permissions for the resource or JWT Expired
 *      500:
 *         description: Something went wrong
 */
router.post('/verify-otp', verifyOtpValidator, async (req, res) => {
  const { otp, authStatus, username } = req.body;
  if (otp && authStatus) {
    const user = await Users.findOne({
        where: { [Op.or]: [{ username }, { email: username }]
        },
        include: [{ all: true, nested: true }]
        // attributes: ['users_id', 'agent', 'first_name', 'last_name', 'security_answer', 'admin', 'username', 'organisation_id', 'agent_name', 'email', 'agent_code', 'menu_permission'],
        
        /*[{
          model: sequelizeOrganisation,
          attributes: ['parent_id', 'agent', 'api_key','secret_key', 'currency_id', 'hierarchy_id', 'role_id', 'hierarchy_parent', 'status', 'is_active'],
          required: true,
          raw: true
        }]*/
      })
        if (user) {
          let {
            menu_permission,
            ...userObj
          } = user.dataValues;
          if (userObj.security_answer === otp) {
            Users.update({
                security_answer: config.isProd ? null : '12345',
              }, {
                where: {
                  email: user.email
                }
              })
              .then(async (resUpdate) => {
                const token = jwt.sign({
                  user: userObj
                }, config.api.apiSecretKey, {
                  expiresIn: config.api.tokenExpiry
                });
                const refreshToken = jwt.sign({
                  user: userObj
                }, config.api.apiSecretKeyRefreshToken, {
                  expiresIn: config.api.refreshTokenExpiry
                });
                setTokenList({
                  [refreshToken]: {
                    token,
                    refreshToken
                  }
                });
                const uid = uuid();
                const newDate = new Date();
                const addADay = newDate.setDate(newDate.getDate() + 1);
                // // console.log("FEQ --------------------------------------------", addADay)
                res.cookie('aggregator-' + config.client.hostname, uid, {
                  domain: config.client.hostname,
                  httpOnly: false,
                  secure: false,
                  path: '/',
                  maxAge: 3600000, // one hour
                  expires: addADay
                });


                await redisHelper.set(`user_permissions_${user.users_id}`, menu_permission)

                return res.json({
                  type: 'data',
                  status: 200,
                  msg: 'OTP Verified Successfully.',
                  auth: true,
                  token,
                  verify: true,
                  refreshToken
                  /*,
                  user: {
                    username: user.username,
                    email: user.email,
                    agent_code: user.agent_code,
                    agent: user.agent,
                    admin: user.admin,
                    permissions: menu_permission,
                    organisation_id: user.organisation_id,
                    organisation_agent: user['organisation.agent'],
                    organisation_api_key: user['organisation.api_key'],
                    organisation_secret_key: user['organisation.secret_key']
                  }*/
                });
                try {
                  SessionModel.create({
                    id: uid,
                    expires: addADay
                  }).then((data) => {



                    return res.json({
                      type: 'data',
                      status: 200,
                      msg: 'OTP Verified Successfully.',
                      auth: true,
                      token,
                      refreshToken
                    });
                  })
                } catch (err) {
                  // console.log('_____data___aftersave_', err);
                }
              })
              .catch((error) => {
                // console.log('________erris', error);
                res.json({
                  type: "error",
                  status: 500,
                  msg: "Internal Error Occurred.",
                  auth: false
                })
              });
          } else {
            Users.update({
                security_answer: null,
              }, {
                where: {
                  email: user.email
                }
              }, )
              .then((resUpdate) => res.json({
                type: "error",
                status: 400,
                msg: "OTP verification failed.",
                auth: false
              }))
              .catch((error) => {
                // console.log('________erris', error);
                res.json({
                  type: "error",
                  status: 500,
                  msg: "Internal Error Occurred.",
                  auth: false
                })
              });
          }
        } else {
          return res.json({
            type: 'error',
            status: 500,
            msg: 'It Seems you doesn\'t exists with use. Please enter valid details.',
            auth: false
          });
        }
  }
});


/**
 * @swagger
 *
 * /api/auth:
 *   get:
 *    tags:
 *      - Authentication
 *    summary: Get authenticated user
 *    description: Get authenticated user
 *    consumes:
 *       - application/json
 *    produces:
 *      - application/json
 *    responses:
 *      200:
 *        description: Return object
 *      400:
 *       description: Bad Request
 *      401:
 *        description: Not Authrized
 *      403:
 *        description: You do not have necessary permissions for the resource or JWT Expired
 *      500:
 *         description: Something went wrong
 */
router.get('/auth', authenticate, (req, res) => {
  const user = req.user;
  res.json({
    type: 'data',
    status: 200,
    msg: 'Authenticated Succeeded.',
    auth: true,
    user: {
      username: user.username,
      email: user.email,
      agent_code: user.agent_code,
      agent: user.agent,
      admin: user.admin,
      permissions: user.menu_permission,
      organisation_id: user.organisation_id,
      agent_name: user.agent_name,
    },
  });
});



/**
 * @swagger
 *
 * /api/refresh:
 *   post:
 *    tags:
 *      - Authentication
 *    summary: Refresh access token
 *    description: Refresh access token
 *    consumes:
 *       - application/json
 *    produces:
 *      - application/json
 *    parameters:
 *      - in: body
 *        name: body
 *        description: Refresh access token 
 *        required: true
 *        schema:
 *          properties:
 *            refreshToken:
 *              type: string
 *    responses:
 *      200:
 *        description: Return object
 *      400:
 *       description: Bad Request
 *      401:
 *        description: Not Authrized
 *      403:
 *        description: You do not have necessary permissions for the resource or JWT Expired
 *      500:
 *         description: Something went wrong
 */
router.post('/refresh', refreshTokenValidator, async (req, res) => {
  const { refreshToken } = req.body;
  const tokenList = await getTokenList();
  if (refreshToken && refreshToken in tokenList) {
    authenticate(
      req,
      res,
      () => {
        const user = req.user;
        const token = jwt.sign({
          user
        }, config.api.apiSecretKey, {
          expiresIn: config.api.tokenExpiry,
        });
        res.json({
          token
        });
      },
      refreshToken,
      true,
    );
  } else {
    res.sendStatus(401);
  }
});




/**
 * @swagger
 *
 * /api/forget_password:
 *   post:
 *    tags:
 *      - Authentication
 *    summary: Forget Password
 *    description: Recover password
 *    consumes:
 *       - application/json
 *    produces:
 *      - application/json
 *    parameters:
 *      - in: body
 *        name: body
 *        description: Provide username and password to get access token and consume rest of the API's
 *        required: true
 *        schema:
 *          properties:
 *            email:
 *              type: string
 *    responses:
 *      200:
 *        description: Return object
 *      400:
 *       description: Bad Request
 *      401:
 *        description: Not Authrized
 *      403:
 *        description: You do not have necessary permissions for the resource or JWT Expired
 *      500:
 *         description: Something went wrong
 */
router.post('/forget_password', emailValidator, async (req, res) => {

  try {

    const username = req.body.email;
    const user = await Users.findOne({
      where: { [Op.or]: [{username}, {email: username}] }
    });

    if ( !user ) {
      return utilsHelper.makeResponse(res, true, 404, 'error', 'Error', 'Usernmae / Email not found');
    }

    if (config.env === 'production') {
      const newPassword = utilsHelper.randomString(8);
      const passHash = HashPassword(newPassword, config.api.pwdHashSalt);
      Users.update({ password: passHash }, { where: { users_id: user.users_id } });

      const msg = {
        to: `${user.email}`,
        from: 'inbox@tpconnects.com',
        subject: 'Reset Password - TPConnects',
        text: `Your new Passowrd for TPConnects Dashboard is ${newPassword}`,
        html: `<p>Please change the password after you login</p>`,
      };
      sgMail.send(msg);
    }
    
    return utilsHelper.makeResponse(res, true, 200, 'success', 'Request was successful', 'Password sent.');

    } catch(err) {
      console.log("Auth::forget_password - Error");
      console.log(err);
      return utilsHelper.makeResponse(res, false, 500, 'error', 'Error', err);
    }
})



module.exports = router;
