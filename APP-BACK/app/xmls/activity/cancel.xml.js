const moment = require('moment');
const { soapConst } = require('../../../config/soap_const');
const {
  convertToArray,
  getOrgDetails,
  getLocationInfoByIp,
} = require('./../../helpers/utils');

const cancelActivityTemplate = (req) => {
  const resultOrgDetails = getOrgDetails(req);
  if (!resultOrgDetails.auth) {
    return '';
  }
  const activitysearch = req.body.activitySearchCriteria;
  const activitydetails = req.body.activity.Activity;
  const tripId = req.body.tripId;

  console.log("dsadsadsad",req);
  // eslint-disable-next-line no-unused-vars
  let soapData = '<?xml version="1.0" encoding="UTF-8"?>';
  soapData += '<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:ns1="http://tpconnects.com/service/activities">';
  soapData += '<SOAP-ENV:Header>';
  soapData += '<ns1:SecurityHeader>';
  soapData += '<agent>TPC</agent>';
  soapData += '<apiKey>5ec8b2955d618a38232bd168870eca60</apiKey>';
  soapData += '<secretKey>11ce6082-988a-11e7-abc4-cec278b6b50a</secretKey>';
  soapData += '</ns1:SecurityHeader>';
  soapData += '</SOAP-ENV:Header>';
  soapData += '<SOAP-ENV:Body>';
  soapData += '<ns1:CancelActivity>';
  soapData += '<Activity>';
  soapData += `<activityName>${activitydetails.activityName}</activityName>`;
  soapData += `<activityCode>${activitydetails.activityCode}</activityCode>`;
  soapData += '<currencyCode>INR</currencyCode>';
  soapData += '<supplierPrice/>';
  soapData += '<markupPrice/>';
  soapData += '<bookingDetail>';
  soapData += `<agentReference>${activitydetails.bookingDetail.agentReference}</agentReference>`;
  soapData += `<bookingEmail>${activitydetails.bookingDetail.bookingEmail}</bookingEmail>`;
  soapData += `<bookingCode>${activitydetails.bookingDetail.bookingCode}</bookingCode>`;
  soapData += `<bookingInfos>${activitydetails.bookingDetail.bookingInfos}</bookingInfos>`;
  soapData += `<bookingStatus>${activitydetails.bookingDetail.bookingStatus}</bookingStatus>`;
  soapData += `<purchaseToken>${activitydetails.bookingDetail.availToken}</purchaseToken>`;
  soapData += `<tripID>${activitydetails.bookingDetail.tripID}</tripID>`;
  soapData += '</bookingDetail>';
  soapData += '<cancellationPolicies>';
  soapData += '<size>0</size>';
  if (activitydetails.cancellationPolicies.cancellationPolicy) {
    const cancellationPolicyList = convertToArray(activitydetails.cancellationPolicies.cancellationPolicy);
    // eslint-disable-next-line no-unused-vars,array-callback-return
    cancellationPolicyList.map((cancellationPolicyData, cancellationPolicyIndex) => {
      soapData += '<cancellationPolicy>';
      soapData += `<fromDate>${cancellationPolicyData.fromDate}</fromDate>`;
      soapData += `<markupPrice>${cancellationPolicyData.markupPrice}</markupPrice>`;
      soapData += `<originalSupplierPrice>${cancellationPolicyData.originalSupplierPrice}</originalSupplierPrice>`;
      soapData += `<supplierPrice>${cancellationPolicyData.supplierPrice}</supplierPrice>`;
      soapData += `<toDate>${cancellationPolicyData.toDate}</toDate>`;
      soapData += '</cancellationPolicy>';
    });
  }
  soapData += '</cancellationPolicies>';
  soapData += `<CancellationCurrency>${activitydetails.CancellationCurrency}</CancellationCurrency>`;
  soapData += '<supplierCode>viator</supplierCode>';
  soapData += '<variables>';
  activitydetails.variables.entry.map((entry, entryIndex) => {
    if (typeof entry.value === 'object') {
      entry.value = JSON.stringify(entry.value);
    }
    soapData += `<entry><key>${entry.key}</key><value>${entry.value}</value></entry>`;
  });
  soapData += '</variables>';
  soapData += `<originalSupplierCurrency>${activitydetails.originalSupplierCurrency}</originalSupplierCurrency>`;
  soapData += `<originalSupplierPrice>${activitydetails.originalSupplierPrice}</originalSupplierPrice>`;
  soapData += `<booking_activity_id>${activitydetails.booking_activity_id}</booking_activity_id>`;
  soapData += '</Activity>';
  soapData += '</ns1:CancelActivity>';
  soapData += '</SOAP-ENV:Body>';
  soapData += '</SOAP-ENV:Envelope>';
  return soapData;
};

module.exports = {
  cancelActivityTemplate,
};
