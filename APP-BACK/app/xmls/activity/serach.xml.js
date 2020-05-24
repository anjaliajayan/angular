const {soapConst} = require('../../../config/soap_const')
var moment = require('moment');
let {
  convertToArray,
  getOrgDetails,
  getLocationInfoByIp
} = require("./../../helpers/utils");
// eslint-disable-next-line consistent-return
const searchActivityTemplate = (req) => {
  let resultOrgDetails = getOrgDetails(req)
  if (!resultOrgDetails.auth) {
    return '';
  }
  let activitysearch = req.body;


  let dateStartString = activitysearch.startDate;
  let dateStartParts = dateStartString.split('/');
  let dateStartObject = new Date(+dateStartParts[2], dateStartParts[1] - 1, +dateStartParts[0]);
  activitysearch.startDate = moment(dateStartObject).format('YYYY-MM-DD');


  let dateEndString = activitysearch.endDate;
  let dateEndParts = dateEndString.split('/');
  let dateEndObject = new Date(+dateEndParts[2], dateEndParts[1] - 1, +dateEndParts[0]);
  activitysearch.endDate = moment(dateEndObject).format('YYYY-MM-DD');



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
  soapData += `<ns1:SearchActivities>`;
  soapData += `<ActivitySearchCriteria>`;
  soapData += `<browserIp>::1</browserIp>`;
  soapData += `<browserAgent>Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/79.0.3945.130 Safari/537.36</browserAgent>`;
  soapData += `<startDate>${activitysearch.startDate}</startDate>`;
  soapData += `<endDate>${activitysearch.endDate}</endDate>`;
  soapData += `<destination>${activitysearch.destination}</destination>`;
  soapData += `<destinationName>${activitysearch.destinationName}</destinationName>`;
  soapData += `<adultCount>${activitysearch.adultCount}</adultCount>`;
  soapData += `<childCount>${activitysearch.activity_children}</childCount>`;
  if (activitysearch.activity_children.length > 0) {
    soapData += `<childAges>${activitysearch.child_age}</childAges>`;
  } else {
    soapData += `<childAges/>`;
  }
  soapData += `<country>${activitysearch.country}</country>`;
  soapData += `<currency>${activitysearch.currency}</currency>`;
  soapData += `<responseKey/>`;
  soapData += `<markupBy>${activitysearch.markupBy}</markupBy>`;
  soapData += `<markupValue>${activitysearch.markupValue}</markupValue>`;
  soapData += `</ActivitySearchCriteria>`;
  soapData += `</ns1:SearchActivities>`;
  soapData += `</SOAP-ENV:Body>`;
  soapData += `</SOAP-ENV:Envelope>`;
  return soapData;
}
module.exports = {
  searchActivityTemplate,
};
