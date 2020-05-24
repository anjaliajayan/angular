// eslint-disable-next-line no-unused-vars
const moment = require('moment');
// eslint-disable-next-line no-unused-vars
const {soapConst} = require('../../../config/soap_const')
let {
  convertToArray,
  getOrgDetails,
  getLocationInfoByIp,
} = require('./../../helpers/utils');

const blockActivityTemplate = (req) => {
  const resultOrgDetails = getOrgDetails(req);
  if (!resultOrgDetails.auth) {
    return '';
  }
  const activitysearch = req.body.sc.ActivitySearchCriteria;
  const activitydetails = req.body.bi;
  const activityblockcode = req.body.sec;
  const activitySelectedDate = req.body.secd;
  const agebands = req.body.fval;
  // eslint-disable-next-line no-unused-vars
  let soapData = '<?xml version="1.0" encoding="UTF-8"?>';
  soapData += '<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:ns1="http://tpconnects.com/service/activities">';
  soapData += '<SOAP-ENV:Header>';
  soapData += '<ns1:SecurityHeader>';
  // soapData += `<agent>${resultOrgDetails.agent}</agent>`;
  // soapData += `<apiKey>${resultOrgDetails.api_key}</apiKey>`;
  // soapData += `<secretKey>${resultOrgDetails.secret_key}</secretKey>`;
  soapData += '<agent>TPC</agent>';
  soapData += '<apiKey>5ec8b2955d618a38232bd168870eca60</apiKey>';
  soapData += '<secretKey>11ce6082-988a-11e7-abc4-cec278b6b50a</secretKey>';
  soapData += '</ns1:SecurityHeader>';
  soapData += '</SOAP-ENV:Header>';
  soapData += '<SOAP-ENV:Body>';
  soapData += '<ns1:BlockActivity>';
  soapData += '<ActivitySearchCriteria>';
  soapData += '<browserIp>::1</browserIp>';
  soapData += '<browserAgent>Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/79.0.3945.130 Safari/537.36</browserAgent>';
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
  soapData += '</ActivitySearchCriteria>';
  soapData += '<Activity>';
  soapData += `<activityName>${activitydetails.activityName}</activityName>`;
  soapData += `<activityCode>${activitydetails.activityCode}</activityCode>`;
  soapData += `<description>${activitydetails.description}</description>`;
  soapData += '<ticketAvailabilityModes>';
  soapData += '<size>0</size>';

  if (activitydetails.ticketAvailabilityModes.ticketAvailabilityMode) {
    // eslint-disable-next-line max-len
    const acitivtyticketAvailabilityModeList = convertToArray(activitydetails.ticketAvailabilityModes.ticketAvailabilityMode);
    // eslint-disable-next-line no-unused-vars,array-callback-return
    acitivtyticketAvailabilityModeList.map((activityTAMData, activityTAMDataIndex) => {
      if (activityTAMData.code === activityblockcode) {
        soapData += `<ticketAvailabilityMode><name>${activityTAMData.name}</name>
      <code>${activityTAMData.code}</code>
      <supplierPrice>${activityTAMData.supplierPrice}</supplierPrice>
      <duration>${activityTAMData.duration}</duration>
      <markupPrice>${activityTAMData.markupPrice}</markupPrice>
      <serviceDate>${activitySelectedDate}</serviceDate>
      <specialCode>${activityTAMData.specialCode}</specialCode>`;
        if (activityTAMData.OperationDates) {
          const activityTAMDataOperationDatesList = convertToArray(activityTAMData.OperationDates);
          activityTAMDataOperationDatesList.map((activityTAMODData, activityTAMODDataIndex) => {
            soapData += '<OperationDates>';
            soapData += `<operationDate>${activityTAMODData.operationDate}</operationDate>`;
            soapData += '</OperationDates>';
          });
        }
        soapData += `<sPSupplierPrice>${activityTAMData.sPSupplierPrice}</sPSupplierPrice>`;
        soapData += `<sCsupplierCurrency>${activityTAMData.sCsupplierCurrency}</sCsupplierCurrency></ticketAvailabilityMode>`;
      }
    });
  }

  soapData += '</ticketAvailabilityModes>';
  soapData += `<imageURL>${activitydetails.imageURL}</imageURL>`;
  if (activitydetails.departureComments) {
    soapData += `<departureComments>${activitydetails.departureComments}</departureComments>`;
  } else {
    soapData += '<departureComments/>';
  }

  soapData += `<returnDetails>${activitydetails.returnDetails}</returnDetails>`;
  soapData += '<ItinenaryInfo/>';
  soapData += `<voucherInfo>${activitydetails.voucherInfo}</voucherInfo>`;
  soapData += `<currencyCode>${activitydetails.currencyCode}</currencyCode>`;
  soapData += `<supplierPrice>${activitydetails.supplierPrice}</supplierPrice>`;
  soapData += `<markupPrice>${activitydetails.markupPrice}</markupPrice>`;
  soapData += '<contract>';
  soapData += '<code/>';
  soapData += '<name/>';
  soapData += '</contract>';
  soapData += `<rating>${activitydetails.rating}</rating>`;
  soapData += `<duration>${activitydetails.duration}</duration>`;
  soapData += `<supplierCode>${activitydetails.supplierCode}</supplierCode>`;
  soapData += '<variables>';

  activitydetails.variables.entry.map((entry, entryIndex) => {
    if (typeof entry.value === 'object') {
      entry.value = JSON.stringify(entry.value);
    }
    soapData += `<entry><key>${entry.key}</key><value>${entry.value}</value></entry>`;
  });
  soapData += '</variables>';
  soapData += '<Details>';
  soapData += `<detailDescription>${activitydetails.Details.detailDescription}</detailDescription>`;
  soapData += `<duration>${activitydetails.Details.duration}</duration>`;
  soapData += `<meetingPoint>${activitydetails.Details.meetingPoint}</meetingPoint>`;
  soapData += `<remarks>${activitydetails.Details.remarks}</remarks>`;

  let inclusionList = [];
  if (activitydetails.Details.inclusions) inclusionList = convertToArray(activitydetails.Details.inclusions);
  else {
    inclusionList.inclusions = '';
  }


  inclusionList.map((inclusions, inclusionIndex) => {
    soapData += `<inclusions>${inclusions}</inclusions>`;
  });

  let exclusionsList = [];
  if (activitydetails.Details.exclusions) exclusionsList = convertToArray(activitydetails.Details.exclusions);
  else {
    exclusionsList.exclusions = '';
  }


  exclusionsList.map((exclusions, exclusionsIndex) => {
    soapData += `<exclusions>${exclusions}</exclusions>`;
  });

  soapData += '<galleryImages>';
  let galleryURLsList = [];
  // eslint-disable-next-line max-len
  if (activitydetails.Details.galleryImages.galleryURLs) galleryURLsList = convertToArray(activitydetails.Details.galleryImages.galleryURLs);
  else {
    galleryURLsList.galleryURLs = '';
  }

  galleryURLsList.map((galleryURLs, galleryURLsIndex) => {
    soapData += `<galleryURLs>${galleryURLs}</galleryURLs>`;
  });

  soapData += '</galleryImages>';
  soapData += '</Details>';
  soapData += '<review>';
  const reviewList = [];
  if (activitydetails.review) {
    const reviewList = convertToArray(activitydetails.review);
      reviewList.map((review, reviewIndex) => {
      soapData += `<dates>${review.dates}</dates>
              <ownerName>${review.ownerName}</ownerName>
              <ratings>${review.ratings}</ratings>
              <reviews>${review.reviews}</reviews>`;
    });
  }
  soapData += '</review>';
  soapData += `<unitPrice>${activitydetails.unitPrice}</unitPrice>`;
  soapData += '<markups>';
  // eslint-disable-next-line no-unused-vars
  activitydetails.markups.map((markups, markupsIndex) => {
    soapData += `<rateKey>${markups.rateKey}</rateKey>`;
  });
  soapData += '</markups>';


  if (activitydetails.serviceDetails) {
    const acitivtyserviceDetailsList = convertToArray(activitydetails.serviceDetails);
    acitivtyserviceDetailsList.map((activityserviceDetailsData, activityserviceDetailsIndex) => {
      soapData += `<serviceDetails>
    <name>${activityserviceDetailsData.name}</name>
    <value>${activityserviceDetailsData.value}</value>
    <code>${activityserviceDetailsData.code}</code>
    <title>${activityserviceDetailsData.title}</title>
    <subTitle>${activityserviceDetailsData.subTitle}</subTitle>
    </serviceDetails>`;
    });
  }

  if (activitydetails.ageBands) {
    const acitivtyageBandsList = convertToArray(activitydetails.ageBands);
    acitivtyageBandsList.map((activityageBandsData, activityageBandsIndex) => {
      soapData += `<ageBands>
    <ageFrom>${activityageBandsData.ageFrom}</ageFrom>
    <ageTo>${activityageBandsData.ageTo}</ageTo>
    <bandId>${activityageBandsData.bandId}</bandId>
    <bandTotal>${activityageBandsData.bandTotal}</bandTotal>
    <count>${activityageBandsData.count}</count>
    <description>${activityageBandsData.description}</description>
    <pluralDescription>${activityageBandsData.pluralDescription}</pluralDescription>
    <pricePerTraveler>${activityageBandsData.pricePerTraveler}</pricePerTraveler>
    <treatAsAdult>${activityageBandsData.treatAsAdult}</treatAsAdult>
    </ageBands>`;
    });
  }


  soapData += `<departurePointTime>${activitydetails.departurePointTime}</departurePointTime>`;
  soapData += `<cityCode>${activitydetails.cityCode}</cityCode>`;
  soapData += `<country>${activitydetails.country}</country>`;
  soapData += `<catIds>${activitydetails.catIds}</catIds>`;
  soapData += `<subCatIds>${activitydetails.subCatIds}</subCatIds>`;
  soapData += `<isCancellable>${activitydetails.isCancellable}</isCancellable>`;
  soapData += '<selectedHotel/>';
  soapData += `<voucherRequirements>${activitydetails.voucherRequirements}</voucherRequirements>`;
  soapData += `<reviewCount>${activitydetails.reviewCount}</reviewCount>`;
  soapData += `<originalSupplierCurrency>${activitydetails.originalSupplierCurrency}</originalSupplierCurrency>`;
  soapData += `<originalSupplierPrice>${activitydetails.originalSupplierPrice}</originalSupplierPrice>`;
  soapData += '<offer/>';
  soapData += `<booking_activity_id>${activitydetails.booking_activity_id}</booking_activity_id>`;
  soapData += '</Activity>';
  soapData += '</ns1:BlockActivity>';
  soapData += '</SOAP-ENV:Body>';
  soapData += '</SOAP-ENV:Envelope>';
  return soapData;
};

module.exports = {
  blockActivityTemplate,
};
