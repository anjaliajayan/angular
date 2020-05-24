var request = require('request');

const setting = () => {
  return {
    gatewayHost: 'https://checkout.payfort.com/',
    gatewaySandboxHost: 'https://sbcheckout.payfort.com/',
    language: 'en',

    sandboxMode: true,
    merchantIdentifier: 'wLPrVoxX',
    accessCode: 'GagAPtriMjxmJjct6Zgu',
    SHARequestPhrase: 'TESTSHAIN',
    SHAResponsePhrase: 'TESTSHAOUT',

    // Live
    // sandboxMode        = false,
    // merchantIdentifier = 'exeqYCal',
    // accessCode         = '7eMQOCxdnjlte8Tx18fP',
    // SHARequestPhrase   = 'PalmNE9hnKxDQO2017',
    // SHAResponsePhrase  = 'otty4piJZ3ZNun2017',

    // SHA Type (Hash Algorith)
    // "sha1", "sha256", "sha512"
    SHAType: 'sha256',
    // "AUTHORIZATION", "PURCHASE"
    command: 'PURCHASE',

    currency: 'SAR',
    itemName: 'SingleBooking',

    customerEmail: 'praveen@tpconnects.com',
    customerName: 'TPCONNECTS CUSTOMER',

    feedbackFlow: 'no'
  }
}

let amount = 0;
let device_fingerprint = '';

const merchantPageNotifyFort = (tokenName = 'COp9Vmp', check3DS = '') => {
  const gs = setting();
  let gatewayUrl = '';
  if (gs.sandboxMode) {
    gatewayUrl = gs.gatewaySandboxHost + 'FortAPI/paymentPage';
  } else {
    gatewayUrl = gs.gatewayHost + 'FortAPI/paymentPage';
  }

  let customerIP = '94.200.55.74';
  if (req.connection.remoteAddress) {
    customerIP = req.connection.remoteAddress
  }
  let postData = {
    'merchant_reference': generateMerchantReference(),
    'access_code': gs.accessCode,
    'command': gs.command,
    'merchant_identifier': gs.merchantIdentifier,
    'customer_ip': customerIP,
    'amount': convertFortAmount(amount, strtoupper(gs.currency)),
    'currency': strtoupper(gs.currency),
    'customer_email': gs.customerEmail,
    'customer_name': gs.customerName,
    'token_name': tokenName,
    'language': gs.language,
    'return_url': getUrl('route?r=processResponse'),
    // 'remember_me'         => 'NO',
  };

  if (device_fingerprint != '') {
    Object.assign(postData, {'device_fingerprint': device_fingerprint});
  }

  if (check3DS == 'no') {
    Object.assign(postData, {'device_fingerprint': device_fingerprint});
    $postData['check_3ds'] = 'NO';
  }

  //calculate request signature
  $signature = calculateSignature($postData, 'request');
  $postData['signature'] = $signature;

  if (gs.sandboxMode) {
    gatewayUrl = gs.gatewaySandboxHost + 'FortAPI/paymentApi';
  } else {
    gatewayUrl = gs.gatewayHost + 'FortAPI/paymentApi';
  }

  array_result = callApi(postData, gatewayUrl);
  return rray_result;
}

const convertFortAmount = (amount, currencyCode) => {
  new_amount = 0;
  total = amount;
  decimalPoints = getCurrencyDecimalPoints(currencyCode);
  new_amount = round($total, $decimalPoints) * (pow(10, $decimalPoints));
  return new_amount;
}

const getCurrencyDecimalPoints = (currency) => {
  decimalPoint = 2;
  arrCurrencies = {
    'JOD': 3,
    'KWD': 3,
    'OMR': 3,
    'TND': 3,
    'BHD': 3,
    'LYD': 3,
    'IQD': 3
  };
  if (arrCurrencies[currency]) {
    decimalPoint = arrCurrencies[currency];
  }
  return $decimalPoint;
}

const generateMerchantReference = () => {
  return Math.floor(Math.random() * Math.floor(9999999999));
}

const getUrl = (path) => {
    return "http://localhost:4200/" . path;
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
