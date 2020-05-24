// eslint-disable-next-line no-unused-vars
var moment = require('moment');
// eslint-disable-next-line no-unused-vars
const {soapConst} = require('../../../config/soap_const')
let {
  convertToArray,
  getOrgDetails,
  getLocationInfoByIp
} = require("./../../helpers/utils");
const blockCarTemplate = ( req ) => {
  let resultOrgDetails = getOrgDetails(req);
  if (!resultOrgDetails.auth) {
    return '';
  }
  let carsearch = req.body.sec;
  let cardetails = req.body.sc.Cars;
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
  soapData += `<ns1:BlockCars>`;
  soapData += `<CarsSearchCriteria>`;
  soapData += `<browserIp>${carsearch.browserIp}</browserIp>`;
  soapData += `<browserAgent>${carsearch.browserAgent}</browserAgent>`;
  soapData += `<startDate>${carsearch.startDate}</startDate>`;
  soapData += `<endDate>${carsearch.endDate}</endDate>`;
  soapData += `<startTime>${carsearch.startTime}</startTime>`;
  soapData += `<endTime>${carsearch.endTime}</endTime>`;
  soapData += `<tripType>${carsearch.tripType}</tripType>`;
  soapData += `<pickUp>${carsearch.pickUp}</pickUp>`;
  soapData += `<dropOff>${carsearch.dropOff}</dropOff>`;
  soapData += `<pickUpLocation>${carsearch.pickUpLocation}</pickUpLocation>`;
  soapData += `<dropOffLocation>${carsearch.dropOffLocation}</dropOffLocation>`;
  soapData += `<adultCount>${carsearch.adultCount}</adultCount>`;
  soapData += `<childCount>${carsearch.childCount}</childCount>`;
  soapData += `<childAges/>`;
  soapData += `<country>${carsearch.country}</country>`;
  soapData += `<currency>${carsearch.currency}</currency>`;
  soapData += `<responseKey>${carsearch.responseKey}</responseKey>`;
  soapData += `<driversAge>${carsearch.driversAge}</driversAge>`;
  soapData += `<vehicleType/>`;
  soapData += `<transmissionType/>`;
  soapData += `<markupBy>${carsearch.markupBy}</markupBy>`;
  soapData += `<markupValue>${carsearch.markupValue}</markupValue>`;
  soapData += `</CarsSearchCriteria>`;
  soapData += `<Cars>`;
  if(cardetails.supplier_code){
    soapData += `<supplier_code>${cardetails.supplier_code}</supplier_code>`;
  }else{
    soapData += `<supplier_code/>`;
  }
  soapData += `<car_company_id>${cardetails.car_company_id}</car_company_id>`;
  soapData += `<car_id>${cardetails.car_id}</car_id>`;
  soapData += `<carCompanyName>${cardetails.carCompanyName}</carCompanyName>`;
  soapData += `<carName>${cardetails.carName}</carName>`;
  soapData += `<carImage>${cardetails.carImage}</carImage>`;
  soapData += `<carClass>${cardetails.carClass}</carClass>`;
  soapData += `<transmission>${cardetails.transmission}</transmission>`;
  soapData += `<ac>${cardetails.ac}</ac>`;
  soapData += `<carType>${cardetails.carType}</carType>`;
  soapData += `<maxPax>${cardetails.maxPax}</maxPax>`;
  soapData += `<doors>${cardetails.doors}</doors>`;
  soapData += `<luggageLarge>${cardetails.luggageLarge}</luggageLarge>`;
  soapData += `<currency>${cardetails.currency}</currency>`;
  soapData += `<bookingcurrency>${cardetails.bookingcurrency}</bookingcurrency>`;
  soapData += `<bookingPrice>${cardetails.bookingPrice}</bookingPrice>`;
  soapData += `<productId>${cardetails.productId}</productId>`;
  soapData += `<minimumPrice>${cardetails.minimumPrice}</minimumPrice>`;
  soapData += `<markupPrice>${cardetails.markupPrice}</markupPrice>`;
  soapData += `<supplierPrice>${cardetails.supplierPrice}</supplierPrice>`;
  soapData += `<pickUpStationId>${cardetails.pickUpStationId}</pickUpStationId>`;
  soapData += `<pickUpstationAdd>${cardetails.pickUpstationAdd}</pickUpstationAdd>`;
  soapData += `<dropOffStationId>${cardetails.dropOffStationId}</dropOffStationId>`;
  soapData += `<dropOffstationAdd>${cardetails.dropOffstationAdd}</dropOffstationAdd>`;
  soapData += `<dropOffstationName>${cardetails.dropOffstationName}</dropOffstationName>`;
  soapData += `<pickUpstationName>${cardetails.pickUpstationName}</pickUpstationName>`;
  soapData += `<markups>`;
  soapData += `<rateKey>${cardetails.markups.rateKey}</rateKey>`;
  soapData += `</markups>`;
  soapData += `<currencyConvFactor>${cardetails.currencyConvFactor}</currencyConvFactor>`;
  soapData += `<Programs>`;

 if (cardetails.Programs.Program) {
    let ProgramList = convertToArray(cardetails.Programs.Program)
    ProgramList.map((carProgramData, carProgramIndex) => {
      
      soapData += `<Program>
      <programName>${carProgramData.programName}</programName>
      <programId>${carProgramData.programId}</programId>
      <supplierPrice>${carProgramData.supplierPrice}</supplierPrice>
      <markupPrice>${carProgramData.markUpPrice}</markupPrice>
      <currency>${carProgramData.currency}</currency>`; 
      soapData += `<mandatoryFees>`;
      if (carProgramData.mandatoryFees) {
        let carmandatoryFeesList = convertToArray(carProgramData.mandatoryFees)
        carmandatoryFeesList.map((carmandatoryFeesData, carmandatoryFeesIndex) => {
          soapData += `<currency>${carmandatoryFeesData.currency}</currency>`;
          soapData += `<value>${carmandatoryFeesData.value}</value>`;
        })
      
      soapData += `</mandatoryFees>`;
      if (carProgramData.Inclusions) {
      soapData += `<value>${carProgramData.Inclusions.size}</value>`;  
      }


      soapData += `<cancellationPolicies>`;
      
      if (carProgramData.cancellationPolicies.cancellationPolicy) {
        let ProgramcancellationPolicyList = convertToArray(carProgramData.cancellationPolicies.cancellationPolicy)
        ProgramcancellationPolicyList.map((ProgramcancellationPolicyData, ProgramcancellationPolicyIndex) => {
          
          
          soapData += `<cancellationPolicy>`;
          soapData += `<fromDate>${ProgramcancellationPolicyData.fromDate}</fromDate>`;
          soapData += `<markupPrice>${ProgramcancellationPolicyData.markupPrice}</markupPrice>`;
          soapData += `<originalCancelPrice>${ProgramcancellationPolicyData.originalCancelPrice}</originalCancelPrice>`;
          soapData += `<SCSupplierCurrency>${ProgramcancellationPolicyData.SCSupplierCurrency}</SCSupplierCurrency>`;
          soapData += `<SPriceSupplierCurrency>${ProgramcancellationPolicyData.SPriceSupplierCurrency}</SPriceSupplierCurrency>`;
          soapData += `<supplierPrice>${ProgramcancellationPolicyData.supplierPrice}</supplierPrice>`;
          soapData += `<toDate>${ProgramcancellationPolicyData.toDate}</toDate>`;
          soapData += `</cancellationPolicy>`;
          
         
        })
      }
      soapData += `</cancellationPolicies>`;
      
      soapData += `<sPSupplierPrice>${carProgramData.sPSupplierPrice}</sPSupplierPrice>`;
      soapData += `<sCsupplierCurrency>${carProgramData.sCsupplierCurrency}</sCsupplierCurrency>`;
      soapData += `<appliedTotalTax>${carProgramData.appliedTotalTax}</appliedTotalTax>`;
      soapData += `<supplierTax>${carProgramData.supplierTax}</supplierTax>`;
      soapData += `<isTaxInclusive>${carProgramData.isTaxInclusive}</isTaxInclusive>`;
      soapData += `<taxCurrency>${carProgramData.taxCurrency}</taxCurrency>`;
      soapData += `<sPSupplierCurrency>${carProgramData.sPSupplierCurrency}</sPSupplierCurrency>`;
      soapData += `<sCSupplierCurrency>${carProgramData.sCSupplierCurrency}</sCSupplierCurrency>`;
      soapData += `<sPriceMandatorySupplierCurrency>${carProgramData.sPriceMandatorySupplierCurrency}</sPriceMandatorySupplierCurrency>`;
      soapData += `<sCMandatorySupplierCurrency>${carProgramData.sCMandatorySupplierCurrency}</sCMandatorySupplierCurrency></Program>`;
      
    }
    })
  }
  soapData += `</Programs>`;
  soapData += `<latitude>${cardetails.latitude}</latitude>`;
  soapData += `<longitude>${cardetails.longitude}</longitude>`;
  soapData += `<locationInformation>${cardetails.locationInformation}</locationInformation>`;
  soapData += `<policies/>`;
  soapData += `<carcompanylogo>${cardetails.carcompanylogo}</carcompanylogo>`;
  soapData += `<originalSupplierPrice>${cardetails.originalSupplierPrice}</originalSupplierPrice>`;
  soapData += `<originalSupplierCurrency>${cardetails.originalSupplierCurrency}</originalSupplierCurrency>`;
  soapData += `<CarRules>`;
  soapData += `<carCompanyId>${cardetails.CarRules.carCompanyId}</carCompanyId>`;
  soapData += `<carCompanyName>${cardetails.CarRules.carCompanyName}</carCompanyName>`;
  soapData += `<carCompanyLogoUrl>${cardetails.CarRules.carCompanyLogoUrl}</carCompanyLogoUrl>`;
  cardetails.CarRules.rule.map((rule, ruleIndex) => {
    soapData += `<rule><id>${rule.id}</id><title>${rule.title}</title><description>${rule.description}</description></rule>`;
  })
  soapData += `</CarRules>`;
  soapData += `<variables>`;
  soapData += `<entry>`;
  soapData += `<key>${cardetails.variables.entry.key}</key>`;
  soapData += `<value>${JSON.stringify(cardetails.variables.entry.value)}</value>`;
  soapData += `</entry>`;
  soapData += `</variables>`;
  soapData += `<booking_car_id>${cardetails.booking_car_id}</booking_car_id>`;
  soapData += `</Cars>`;
  soapData += `</ns1:BlockCars>`;
  soapData += `</SOAP-ENV:Body>`;
  soapData += `</SOAP-ENV:Envelope>`;
  return soapData;
}

module.exports = {
  blockCarTemplate
};
