const {soapConst} = require('../../../config/soap_const');
var moment = require('moment');
let {
  convertToArray,
  getOrgDetails,
  getLocationInfoByIp
} = require("./../../helpers/utils");

const detailsActivityTemplate = ( req ) => {

  let resultOrgDetails = getOrgDetails(req);
  if (!resultOrgDetails.auth) {
    return '';
  }
  let activitysearch = req.body.Activitysearch;
  let ActivityDetails = req.body.ActivityDetails;

  // eslint-disable-next-line no-unused-vars
  let soapData = `<?xml version="1.0" encoding="UTF-8"?>`;
  soapData += `<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:ns1="http://tpconnects.com/service/activities">`;
  soapData += `<SOAP-ENV:Header>`;
  soapData += `<ns1:SecurityHeader>`;
   //soapData += `<agent>${resultOrgDetails.agent}</agent>`;
  //soapData += `<apiKey>${resultOrgDetails.api_key}</apiKey>`;
  //soapData += `<secretKey>${resultOrgDetails.secret_key}</secretKey>`;
  soapData += `<agent>TPC</agent>`;
  soapData += `<apiKey>5ec8b2955d618a38232bd168870eca60</apiKey>`;
  soapData += `<secretKey>11ce6082-988a-11e7-abc4-cec278b6b50a</secretKey>`;
  soapData += `</ns1:SecurityHeader>`;
  soapData += `</SOAP-ENV:Header>`;
  soapData += `<SOAP-ENV:Body>`;
  soapData += `<ns1:GetActivityDetails>`;
  soapData += `<ActivitySearchCriteria>`;
  soapData += `<browserIp>::1</browserIp>`;
  soapData += `<browserAgent>Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/79.0.3945.130 Safari/537.36</browserAgent>`;
  soapData += `<startDate>${activitysearch.startDate}</startDate>`;
  soapData += `<endDate>${activitysearch.endDate}</endDate>`;
  soapData += `<destination>${activitysearch.destination}</destination>`;
  soapData += `<destinationName>${activitysearch.destinationName}</destinationName>`;
  soapData += `<adultCount>${activitysearch.adultCount}</adultCount>`;
  soapData += `<childCount>${activitysearch.childCount}</childCount>`;
  if (activitysearch.childCount > 0) {
    soapData += `<childAges>${activitysearch.childAges}</childAges>`;
  } else {
    soapData += `<childAges/>`;
  }
  soapData += `<country>${activitysearch.country}</country>`;
  soapData += `<currency>${activitysearch.currency}</currency>`;
  soapData += `<responseKey>${activitysearch.responseKey}</responseKey>`;
  soapData += `<markupBy>${activitysearch.markupBy}</markupBy>`;
  soapData += `<markupValue>${activitysearch.markupValue}</markupValue>`;
  soapData += `</ActivitySearchCriteria>`;
  soapData += `<Activity>`;
  soapData += `<activityName>${ActivityDetails.activityName}</activityName>`;
  soapData += `<activityCode>${ActivityDetails.activityCode}</activityCode>`;
  soapData += `<description>${ActivityDetails.description}</description>`;
  soapData += `<ticketAvailabilityModes>`;
  soapData += `<size>0</size>`;
  soapData += `<ticketAvailabilityMode>`;
  soapData += `<supplierPrice>${ActivityDetails.activityName}</supplierPrice>`;
  soapData += `<markupPrice>${ActivityDetails.activityName}</markupPrice>`;
  soapData += `</ticketAvailabilityMode>`;
  soapData += `</ticketAvailabilityModes>`;
  soapData += `<imageURL>${ActivityDetails.imageURL}</imageURL>`;
  soapData += `<currencyCode>${ActivityDetails.currencyCode}</currencyCode>`;
  soapData += `<supplierPrice>${ActivityDetails.supplierPrice}</supplierPrice>`;
  soapData += `<markupPrice>${ActivityDetails.markupPrice}</markupPrice>`;
  soapData += `<contract>`;
  soapData += `<code/>`;
  soapData += `<name/>`;
  soapData += `</contract>`;
  soapData += `<rating>${ActivityDetails.rating}</rating>`;
  soapData += `<duration>${ActivityDetails.duration}</duration>`;
  soapData += `<supplierCode>${ActivityDetails.supplierCode}</supplierCode>`;
  soapData += `<variables/>`;
  soapData += `<unitPrice>${ActivityDetails.unitPrice}</unitPrice>`;
  soapData += `<markups>`;
  soapData += `<rateKey>${ActivityDetails.rateKey}</rateKey>`;
  soapData += `</markups>`;
  soapData += `<cityCode>${ActivityDetails.cityCode}</cityCode>`;
  soapData += `<catIds>${ActivityDetails.catIds}</catIds>`;
  soapData += `<subCatIds>${ActivityDetails.subCatIds}</subCatIds>`;
  soapData += `<selectedHotel/>`;
  soapData += `<reviewCount>${ActivityDetails.reviewCount}</reviewCount>`;
  soapData += `<originalSupplierCurrency>${ActivityDetails.originalSupplierCurrency}</originalSupplierCurrency>`;
  soapData += `<originalSupplierPrice>${ActivityDetails.originalSupplierPrice}</originalSupplierPrice>`;
  soapData += `<booking_activity_id>${ActivityDetails.booking_activity_id}</booking_activity_id>`;
  soapData += `</Activity>`;
  soapData += `</ns1:GetActivityDetails>`;
  soapData += `</SOAP-ENV:Body>`;
  soapData += `</SOAP-ENV:Envelope>`;
  return soapData;
}


module.exports = {
  detailsActivityTemplate,
};
