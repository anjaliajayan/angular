const crypto = require('crypto');
const Util = require('util');
const aws = require('aws-sdk');
const jwt = require('jsonwebtoken');
const mySuperAgent = require('superagent');
const path = require('path');
const fs = require('fs');
const { Op, Currency_M, Users, sequelizeOrganisation,sequelizeCurrency,Transaction_M,OrganisationModel_M,OrganizationAccount_M,OrganisationModel} = require('./../../config/db');
const config = require('./../../config/config');

function isThisLocalhost(req) {
  let ip = '::1';
  if (req.connection && req.connection.remoteAddress) {
    ip = req.connection.remoteAddress;
  }
  let host = 'localhost';
  if (req.get('host')) {
    host = req.get('host');
  }
  return ip === '127.0.0.1' || ip === '::ffff:127.0.0.1' || ip === '::1' || host.indexOf('localhost') !== -1;
}

module.exports = {
  writeXmlFile(filename, data) {
    fs.writeFile(path.join(__dirname, `../../logs/${filename}`), data, (error) => {
      if (error) {
        return false
        // console.log(error);
        // return res.status(500).json({
        //   type: 'error',
        //   title: `${filename}`,
        //   message: `Error writing ${filename} to logs folder. Error: ${error}`,
        // });
      }
      // console.log('BookRoomRQ.xml file was saved!');
    });
  },
  randomString(length) {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  },


  makeResponse(res, apiStatus, resStatus, type, title, message, result = []) {
    /*
    if (process.env.NODE_ENV == "prod") {
      res.set('Access-Control-Allow-Origin', 'https://tpconnects.com');
    } else {
      res.set('Access-Control-Allow-Origin', '*');
    }
    */
    res.status(resStatus).send({
      status: apiStatus,
      code: resStatus || 200,
      type: type || 'success',
      title: title || '',
      message: message || '',
      // 'version': '2.1',
      result,
    }).end();
  },
  getLocationInfoByIp(req) {
    let _ip = '94.200.55.74';
    if (!isThisLocalhost(req) && req.connection && req.connection.remoteAddress) {
      _ip = req.connection.remoteAddress;
    }
    const result = {
      country: '',
      city: '',
      latitude: '',
      longitude: '',
      browser: '',
      ip: _ip,
    };
    let _browser = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/67.0.3396.79 Safari/537.36';
    if (req.headers && req.headers['user-agent']) {
      _browser = req.headers['user-agent'];
    }
    mySuperAgent
      .get(`http://www.geoplugin.net/json.gp?ip=${_ip}`)
      .then((res) => {
        result.country = res.text.geoplugin_countryCode;
        result.city = res.text.geoplugin_city;
        result.latitude = res.text.geoplugin_latitude;
        result.longitude = res.text.geoplugin_longitude;
        result.browser = _browser;
      })
      .catch((err) => {
        console.error(err);
      });
    return result;
  },
  async getUserDetails(orgid) {

    if (!orgid) {
      return false;
    }
    const org = await sequelizeOrganisation.findOne({ where: { organisation_id: orgid }, raw: true });
    if (org) {
      console.log(org)
      const userdata = await Users.findOne({ where: { organisation_id: orgid }, raw: true });
      // eslint-disable-next-line max-len
      const currencyData = await sequelizeCurrency.findOne({ where: { currency_id: org.currency_id }, raw: true });

      console.log('currencyData',currencyData);

      return {
        auth:true,
        agent: org.agent,
        api_key: org.api_key,
        secret_key: org.secret_key,
        user_users_id: userdata.users_id,
        user_first_name: userdata.first_name,
        user_last_name: userdata.last_name,
        org_id: org.organisation_id,
        org_agent_code: org.agent_code,
        org_active_suppliers: org.active_suppliers,
        org_pos_rbd: org.pos_rbd,
        org_name: org.name,
        org_email: org.email,
        org_iata_no: (org.iata_no && (org.iata_no !== '')) ? org.iata_no : '2212345',
        org_corp_tour_code: null,
        currency_id: currencyData.currency_id,
        currency_code :currencyData.code,
        credit_limit: org.credit_limit,
      };
    }
    return false;
  },
  getOrgDetails(req) {
    let result = {
      auth: false,
      msg: 'No token provided.',
    };
    if (req.headers && req.headers.authorization) {
      const token = req.headers.authorization;
      if (token) {
        try {
          const decoded = jwt.verify(token, config.api.apiSecretKey);
          // console.log("====decoded=======",decoded);
          result = {
            auth: true,  
            agent: decoded.user.organisation.agent,
            api_key:  decoded.user.organisation.api_key,
            secret_key:  decoded.user.organisation.secret_key,
            
            // agent: 'TSS', // decoded.user["organisation.agent"],
            // api_key: '99e892511a1cde71e53b299ace0c4c4d', // decoded.user["organisation.api_key"],
            // secret_key: '844cd4b4-f111-11e7-8c3f-9a214cf093ae', // decoded.user["organisation.secret_key"],
            // agent: 'TPC',//decoded.user["organisation.agent"],
            // api_key: '5ec8b2955d618a38232bd168870eca60',//decoded.user["organisation.api_key"],
            // secret_key: '11ce6082-988a-11e7-abc4-cec278b6b50a',//decoded.user["organisation.secret_key"],
            // agent: decoded.user["organisation.agent"],
            // api_key: decoded.user["organisation.api_key"],
            // secret_key: decoded.user["organisation.secret_key"],
            user_users_id: decoded.user.users_id,
            user_first_name: decoded.user.first_name,
            user_last_name: decoded.user.last_name,
            user_agent: decoded.user.agent,
            user_admin: decoded.user.admin,
            // org_id: decoded.user['organisation.organisation_id'],
            // parent_id: decoded.user['organisation.parent_id'],
            // org_agent_code: decoded.user['organisation.agent_code'],
            // org_active_suppliers: decoded.user['organisation.active_suppliers'],
            // org_pos_rbd: decoded.user['organisation.pos_rbd'],
            // org_name: decoded.user['organisation.name'],
            // org_email: decoded.user['organisation.email'],
            // org_iata_no: (decoded.user['organisation.iata_no'] && (decoded.user['organisation.iata_no'] !== '')) ? decoded.user['organisation.iata_no'] : '2212345',
            // currency_code: decoded.user['organisation.currency.code'],
            // currency_id: decoded.user['organisation.currency.currency_id'],
            // credit_limit: decoded.user['organisation.credit_limit'],
            // available_deposit:decoded.user['organisation.organisation_account.available_deposit'],
            // currency_decimal: decoded.user['organisation.currency.currency_decimal.decimal'],
            // org_corp_id: decoded.user['organisation.organisation_corporate.corporate_id'],
            // org_corp_start_date: decoded.user['organisation.organisation_corporate.start_date'],
            // org_corp_end_date: decoded.user['organisation.organisation_corporate.end_date'],
            // org_corp_days: decoded.user['organisation.organisation_corporate.days'],
            // org_corp_phone_code: decoded.user['organisation.organisation_corporate.phonecode'],
            // org_corp_phone_number: decoded.user['organisation.organisation_corporate.phonenumber'],
            // org_corp_tour_code: decoded.user['organisation.organisation_corporate.tourcode'],
            // org_corp_profile_img: decoded.user['organisation.organisation_corporate.profileimg'],
            // org_corp_is_active: decoded.user['organisation.organisation_corporate.is_active'],
            // org_corp_status: decoded.user['organisation.organisation_corporate.status'],

            org_id: decoded.user.organisation.organisation_id,
            parent_id: decoded.user.organisation.parent_id,
            org_agent_code: decoded.user.organisation.agent_code,
            org_active_suppliers: decoded.user.organisation.active_suppliers,
            org_pos_rbd: decoded.user.organisation.pos_rbd,
            org_name: decoded.user.organisation.name,
            org_email: decoded.user.organisation.email,
            org_iata_no: (decoded.user.organisation.iata_no && (decoded.user.organisation.iata_no !== '')) ? decoded.user.organisation.iata_no : '2212345',
            currency_code: decoded.user.organisation.currency.code,
            currency_id: decoded.user.organisation.currency.currency_id,
            credit_limit: decoded.user.organisation.credit_limit,
            available_deposit:decoded.user.organisation.organisation_account.available_deposit,
            currency_decimal: decoded.user.organisation.currency.currency_decimal.decimal,
            org_corp_tour_code: decoded.user.organisation.organisation_corporate ? decoded.user.organisation.organisation_corporate.tourcode : "",
          };
        } catch (e) {
          console.log('╔═════════════════════════════════╗');
          console.log('║ helpers/utils.js::getOrgDetails ║');
          console.log('╚═════════════════════════════════╝');
          console.log(e);
          result.msg = 'Failed to authenticate the provided token.';
        }
      }
    }
    return result;
  },
  jsonFetchByKey() {
    //
  },
  randomString(length) {
    const chars = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHUJKLMNOPQRSTUVWXYZ';
    let result = '';
    for (let i = 0; i < length; i += 1) {
      result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return result;
  },
  HashPassword(password, salt) {
    password = salt + password;
    const hash = crypto.createHash('sha1'); /** Hashing algorithm sha1 */
    hash.update(password);
    const value = hash.digest('hex');
    return value;
  },
  convertToArray(value) {
    const arr = [];
    if (Array.isArray(value)) return value;
    arr.push(value);
    return arr;
  },
  camelToSnake(data, depth) {
    if (Util.isObject(data)) {
      if (typeof depth === 'undefined') {
        depth = 1;
      }
      return _processKeys(data, _snakelize, depth);
    }
    return _snakelize(data);
  },
  uploadImageS3FromBase64: async (filename, action) => {
    const {
      accessKeyId,
      secretAccessKey,
      region,
      ACL,
      bucket,
    } = config.awsS3;

    aws.config.update({
      accessKeyId,
      secretAccessKey,
      region,
      ACL,
    });
    const s3Bucket = new aws.S3({
      params: {
        Bucket: bucket,
      },
    });
    // add image
    if (action == 'add') {
      const promiseObj = new Promise((resolve, reject) => {
        const charSet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let randomString = '';
        for (let i = 0; i < 16; i++) {
          const randomPoz = Math.floor(Math.random() * charSet.length);
          randomString += charSet.substring(randomPoz, randomPoz + 1);
        }

        buf = new Buffer.from(filename.replace(/^data:image\/\w+;base64,/, ''), 'base64');
        const data = {
          Key: randomString,
          Body: buf,
          ContentEncoding: 'base64',
          ContentType: 'image/jpeg',
        };
        s3Bucket.putObject(data, (err, data) => {
          console.log('err data ', err, data);
          if (err) {
            reject(err);
          } else {
            return resolve(data.ETag);
          }
        });
      });
      return promiseObj;
    }
    // delete image
    if (action == 'delete') {
      const deleteParam = {
        Bucket: 'bucket-name',
        Delete: {
          Objects: [{
            Key: 'a.txt',
          },
          {
            Key: 'b.txt',
          },
          {
            Key: 'c.txt',
          },
          ],
        },
      };
      const deletePromise = new Promise((resolve, reject) => {
        s3.deleteObjects(deleteParam, (err, data) => {
          if (err) {
            // console.log(err, err.stack)
          } else {
            // console.log('delete', data);
          }
        });
      });
      return deletePromise;
    }
  },

  uploadImgOnAWS: async (base64) => {
    const {
      accessKeyId,
      secretAccessKey,
      region,
      ACL,
      bucket,
    } = config.awsS3;
    aws.config.update({
      accessKeyId,
      secretAccessKey,
      region,
      ACL,
    });
    const s3Bucket = new aws.S3({
      params: {
        Bucket: bucket,
        ACL,
      },
    });
    const promiseObj = new Promise((resolve, reject) => {
      const charSet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
      let randomString = '';
      for (let i = 0; i < 16; i++) {
        const randomPoz = Math.floor(Math.random() * charSet.length);
        randomString += charSet.substring(randomPoz, randomPoz + 1);
      }
      buf = new Buffer.from(base64.replace(/^data:image\/\w+;base64,/, ''), 'base64');
      const data = {
        Key: randomString,
        Body: buf,
        ContentEncoding: 'base64',
        ContentType: 'image/jpeg',
      };
      s3Bucket.upload(data, (err, data) => {
        if (err) {
          reject(err);
        } else {
          return resolve(data.Location);
        }
      });
    });
    return promiseObj;
  },

  uploadPdfOnAWS: async (file_b64) => {
    const {
      accessKeyId,
      secretAccessKey,
      region,
      ACL,
      bucket,
    } = config.awsS3;

    aws.config.update({
      accessKeyId,
      secretAccessKey,
      region,
      ACL,
    });
    const s3Bucket = new aws.S3({
      params: {
        Bucket: bucket,
        ACL,
      },
    });
    const promiseObj = new Promise((resolve, reject) => {
      const charSet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
      let randomString = '';
      for (let i = 0; i < 16; i++) {
        const randomPoz = Math.floor(Math.random() * charSet.length);
        randomString += charSet.substring(randomPoz, randomPoz + 1);
      }
      // buf = new Buffer.from(file_b64.replace(/^data:pdf\/\w+;base64,/, ""), 'base64')
      const fileWithoutMimeType = file_b64.match(/,(.*)$/)[1];
      buf = new Buffer.from(fileWithoutMimeType, 'base64');
      const data = {
        Key: randomString,
        Body: buf,
        ContentEncoding: 'base64',
        // ContentType: 'application/pdf'
      };
      s3Bucket.upload(data, (err, data) => {
        console.log(err, data);
        if (err) {
          reject(err);
        } else {
          return resolve(data.Location);
        }
      });
    });
    return promiseObj;
  },

  dateFormat(date) {
    rawdate = date.split('/');
    return `${rawdate[2]}-${rawdate[1]}-${rawdate[0]}`;
  },


//methods for credit
//method to make transaction
async adminDebitOnDeposit(req) {
  // console.log("--req.body", req.body)
  console.log("trip id==============================", req.trip_id);
  let res;
  let { selectType, organisation_id, trip_id, payment_type, currency_id, transaction_type, amount, available_deposit, transaction_comments,credit_limit } = req;
  const transactionObj = {};
  transactionObj.users_id = req.user_id;
  transactionObj.organisation_id = organisation_id;
  transactionObj.transaction_type = transaction_type;
  transactionObj.payment_type = payment_type;
  transactionObj.amount = amount;
  transactionObj.currency_id = currency_id;
  transactionObj.transaction_comments = transaction_comments;
  transactionObj.status = 1;
  transactionObj.created =  new Date() //moment().format('YYYY-MM-DD HH:mm:ss');
  transactionObj.before_debit = credit_limit;
  transactionObj.trip_id = trip_id;
  transactionObj.payment_gateway_id = null;
  transactionObj.tax_no = null;
  transactionObj.tax_email = null;
// Transaction.create(transactionObj)
  try {
    let oldnewvalue = await returnOldvalueNewvalue(transaction_type,organisation_id, amount);
    if(!oldnewvalue)
    {
      transactionObj.old_value	= oldnewvalue['old_value'];
      transactionObj.new_value	= oldnewvalue['new_value'];
    }
    const Transation = await Transaction_M.create(transactionObj);

    return Transation;
  } catch (error) {
    return error;
  }
},

  async getCurrencyCodeByID(currency_id){
    if(!currency_id){
      return false
    }
    const currency_code =  await Currency_M.findOne({where:{ [Op.or]: [{currency_id}, {code: currency_id}] }, attributes:['code', 'currency_id']})
    return currency_code
  }
};
function returnOldvalueNewvalue(type, organisation_id,trasactionamt){
  const returnarr = [];
  var organisationdata= OrganisationModel_M.findOne({where: {organisation_id: organisation_id } } );
  if(organisationdata)
  {
      returnarr['old_value']= organisationdata['credit_limit'];
      returnarr['new_value']=((type=='credit') ? organisationdata.credit_limit + trasactionamt : ((type=='debit') ? organisationdata.credit_limit - trasactionamt : ""));
  }
  return returnarr;
}

function _snakelize(key) {
  const separator = '_';
  const split = /(?=[A-Z])/;
  return key.split(split).join(separator).toLowerCase();
}

function _processKeys(obj, processer, depth) {
  if (depth === 0 || !Util.isObject(obj)) {
    return obj;
  }

  const result = {};
  const keys = Object.keys(obj);

  for (let i = 0; i < keys.length; i++) {
    result[processer(keys[i])] = _processKeys(obj[keys[i]], processer, depth - 1);
  }

  return result;
}
