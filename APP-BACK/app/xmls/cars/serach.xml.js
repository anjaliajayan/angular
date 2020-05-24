const {soapConst} = require('../../../config/soap_const')
var moment = require('moment');
let {
  convertToArray,
  getOrgDetails,
  getLocationInfoByIp
} = require("./../../helpers/utils");
// eslint-disable-next-line consistent-return
const searchCarTemplate = (req) => {
  let resultOrgDetails = getOrgDetails(req)
  if (!resultOrgDetails.auth) {
    return '';
  }
  let carsearch = req.body;

  let dateStartString = carsearch.startDate;
  let dateStartParts = dateStartString.split('/');
  let dateStartObject = new Date(+dateStartParts[2], dateStartParts[1] - 1, +dateStartParts[0]);
  carsearch.startDate = moment(dateStartObject).format('YYYY-MM-DD');


  let dateEndString = carsearch.endDate;
  let dateEndParts = dateEndString.split('/');
  let dateEndObject = new Date(+dateEndParts[2], dateEndParts[1] - 1, +dateEndParts[0]);
  carsearch.endDate = moment(dateEndObject).format('YYYY-MM-DD');
  // eslint-disable-next-line no-unused-vars
  let soapData = `<?xml version="1.0" encoding="UTF-8"?>`;
  soapData += `<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:ns1="http://tpconnects.com/service/cars">`;
  soapData += `<SOAP-ENV:Header>`;
  soapData += `<ns1:SecurityHeader>`;
  soapData += `<agent>LUL</agent>`;
  soapData += `<apiKey>654e4dc5b90b7478671fe6448cab3f32</apiKey>`;
  soapData += `<secretKey>22b684e2-9bb5-11e7-abc4-cec278b6b50a</secretKey>`;
  soapData += `</ns1:SecurityHeader>`;
  soapData += `</SOAP-ENV:Header>`;
  soapData += `<SOAP-ENV:Body>`;
  soapData += `<ns1:SearchCars>`;
  soapData += `<CarsSearchCriteria>`;
  soapData += `<browserIp>::1</browserIp>`;
  soapData += `<browserAgent>Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/79.0.3945.130 Safari/537.36</browserAgent>`;
  soapData += `<startDate>${carsearch.startDate}</startDate>`;
  soapData += `<endDate>${carsearch.endDate}</endDate>`;
  soapData += `<startTime>${carsearch.startTime}</startTime>`;
  soapData += `<endTime>${carsearch.endTime}</endTime>`;
  soapData += `<tripType>${carsearch.tripType}</tripType>`;
  soapData += `<pickUp>${carsearch.pickUp}</pickUp>`;
  soapData += `<dropOff>${carsearch.dropOff}</dropOff>`;
  soapData += `<pickUpLocation>${carsearch.pickUpLocation}</pickUpLocation>`;
  soapData += `<dropOffLocation>${carsearch.dropOffLocation}</dropOffLocation>`;
  soapData += `<adultCount>1</adultCount>`;
  soapData += `<childCount>0</childCount>`;
  soapData += `<childAges/>`;
  soapData += `<country>${carsearch.country}</country>`;
  soapData += `<currency>${carsearch.currency}</currency>`;
  soapData += `<responseKey/>`;
  soapData += `<driversAge>0</driversAge>`;
  soapData += `<vehicleType/>`;
  soapData += `<transmissionType/>`;
  soapData += `<markupBy>${carsearch.markupBy}</markupBy>`;
  soapData += `<markupValue>${carsearch.markupValue}</markupValue>`;
  soapData += `</CarsSearchCriteria>`;
  soapData += `</ns1:SearchCars>`;
  soapData += `</SOAP-ENV:Body>`;
  soapData += `</SOAP-ENV:Envelope>`;
  return soapData;
}
module.exports = {
  searchCarTemplate,
};
