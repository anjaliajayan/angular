const {soapConst} = require('../../../config/soap_const')
var moment = require('moment')
let {
  convertToArray,
  getOrgDetails,
  getLocationInfoByIp
} = require("./../../helpers/utils");

const orderRetrieveCarTemplate = ( req ) => {
  let resultOrgDetails = getOrgDetails(req);
  if (!resultOrgDetails.auth) {
    return '';
  }
  let carsearch = req.body.CarsSearchCriteria;
  let cardetails = req.body.Car;
  // eslint-disable-next-line no-unused-vars
  let soapData = `<?xml version="1.0" encoding="UTF-8"?>`;
  soapData += `<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:ns1="http://tpconnects.com/service/cars">`;
  soapData += `<SOAP-ENV:Header>`;
  soapData += `  <ns1:SecurityHeader>`;
  soapData += `<agent>${resultOrgDetails.agent}</agent>`;
  soapData += `<apiKey>${resultOrgDetails.api_key}</apiKey>`;
  soapData += `<secretKey>${resultOrgDetails.secret_key}</secretKey>`;
  soapData += `</ns1:SecurityHeader>`;
  soapData += `</SOAP-ENV:Header>`;
  soapData += `<SOAP-ENV:Body>`;
  soapData += `<ns1:OrderRetrieveCars>`;
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
  soapData += `<supplier_code>${cardetails.supplier_code}</supplier_code>`;
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
  soapData += `<bookingDetail>`;
  soapData += `<agentReference>${booking.agentReference}</agentReference>`;
  soapData += `<bookingEmail>${booking.agentReference}</bookingEmail>`;
  soapData += `<bookingLogo>${cardetails.bookingLogo}</bookingLogo>`;
  soapData += `<currency>${cardetails.currency}</currency>`;
  soapData += `<package>${cardetails.packagee}</package>`;
  soapData += `<recordLocatorId>${cardetails.agentReference}</recordLocatorId>`;
  soapData += `<requestedPrice>${cardetails.requestedPrice}</requestedPrice>`;
  soapData += `<rgIdRefNumber>${cardetails.rgIdRefNumber}</rgIdRefNumber>`;
  soapData += `<selectedProgramId>${cardetails.selectedProgramId}</selectedProgramId>`;
  soapData += `<tripID/>`;
  soapData += `</bookingDetail>`;
  soapData += `<carOccupancy>`;
  soapData += `<age>30</age>`;
  soapData += `<email>${booking.email}</email>`;
  soapData += `<first_name>${booking.first_name}</first_name>`;
  soapData += `<last_name>${booking.last_name}</last_name>`;
  soapData += `<nationalaity>${booking.nationalaity}</nationalaity>`;
  soapData += `<phone>${booking.phone}</phone>`;
  soapData += `<residential_country>${booking.residential_country}</residential_country>`;
  soapData += `<salutation>${booking.salutation}</salutation>`;
  soapData += `</carOccupancy>`;
  
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
  soapData += `<is_blocked>Blocked</is_blocked>`;
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
  soapData += `<variables>`;
  cardetails.variables.entry.map((entry, entryIndex) => {
    if (typeof entry.value == 'object') {
      entry.value = JSON.stringify(entry.value);
    }
    soapData += `<entry><key>${entry.key}</key><value>${entry.value}</value></entry>`;
  })
  soapData += `</variables>`;
  soapData += `<booking_car_id>${cardetails.booking_car_id}</booking_car_id>`;
  soapData += `</Cars>`;
  soapData += `</ns1:OrderRetrieveCars>`;
  soapData += `</SOAP-ENV:Body>`;
  soapData += `</SOAP-ENV:Envelope>`;
  return soapData;
};

module.exports = {
    orderRetrieveCarTemplate,
};
    