var request = require('request');

const setting = () => {
  return {
    url: 'https://apigwtest.selcommobile.com/v1/checkout/create-order',
    authorization: 'RTRAVEL-8Plj0rPnRhVUkUSa',
    apiSecret: '88752abc-8a21-4f13-a885-a32a1a152161'
  }
}

const getHash = (hash_data, api_key) => {
  try {
    const hmac = require('crypto').createHmac('sha256', api_key);
    hmac.write(hash_data);
    hmac.end();
    let res = hmac.read().toString('base64');
    return res;
  } catch (err) {
    console.log(err);
    return false;
  }
}

const computeSignature = (parameters, signed_fields, request_timestamp, api_secret) => {
  try {
    fields_order = signed_fields.split(',');
    sign_data = "timestamp=" + request_timestamp;
    fields_order.map((item, itemIndex) => {
      let key_arr = item.split('.')
      if (key_arr.length === 1) {
        sign_data += "&" + item + "=" + parameters[item];
      } else if (key_arr.length === 2) {
        let value = '';
        if (parameters[key_arr[0]][key_arr[1]]) {
          value = parameters[key_arr[0]][key_arr[1]];
        }
        sign_data += "&" + item + "=" + value;
      } else {
        throw Exception("Request dimention not supported");
      }
    });
    return getHash(sign_data, api_secret);
  } catch (err) {
    console.log(err);
    return false;
  }
}

module.exports = {
  computeSignature,
  setting
}
