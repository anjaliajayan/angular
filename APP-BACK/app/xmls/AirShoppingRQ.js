const {buildSOAPStart, buildSOAPEnd} = require('../../config/soap_const')
var moment = require('moment');
let { getOrgDetails, getUserDetails } = require("./../helpers/utils");



const {
  Suppliers,
  Tourcodes
} = require('../../config/db');

let AirShopping = async (req) => {
  console.log(req.body.bookingFor);
  let resultOrgDetails = [];
  if (req.body.bookingFor === null) {
    console.log("Check one")
    resultOrgDetails = getOrgDetails(req)
    if (!resultOrgDetails.auth) {
      return '';
    }
  } else {
    console.log("Check two")
    resultOrgDetails = await getUserDetails(req.body.bookingFor);
  }
  console.log('resultOrgDetails',resultOrgDetails);
  let airShoppingReqData = req.body;
  console.log("ARISHOPPING",airShoppingReqData);
  let tmpSoapFlightSeg = '';
  let listTourCode = [];
  if ((resultOrgDetails.org_corp_tour_code === null) ||
    (resultOrgDetails.org_corp_tour_code === 'null') ||
    // eslint-disable-next-line no-undef
    (resultOrgDetails.org_corp_tour_code === '')) {
    // Do nothing
  } else {
    // listTourCode = JSON.parse(resultOrgDetails.org_corp_tour_code);
    listTourCode = resultOrgDetails.org_corp_tour_code;
  }
  if (listTourCode.length > 0) {
    let origin = ''
    let dest = ''
    if (airShoppingReqData.destinations.length > 0) {
      origin = airShoppingReqData.destinations[0].departure;
      dest = airShoppingReqData.destinations[0].arrival;
    }
    const listSuppliers = await Suppliers.findAll({
      where: {
        Gds_code: {
          [Op.ne]: null,
          [Op.ne]: ''
        },
        is_active: 1,
        status: 1
      }
    })
    const listTourCodes = await Tourcodes.findAll({
      where: {
        supplier: {
          [Op.ne]: null,
          [Op.ne]: ''
        },
        is_active: 1,
        apply_type: 'search',
        tourcode_id: {
          [Op.in]: listTourCode
        },
        [Op.or]: [{
          orgin: {
            [Op.like]: origin
          },
          destination: {
            [Op.like]: dest
          }
        },
        {
          orgin: {
            [Op.like]: origin
          },
          destination: {
            [Op.like]: '%ALL%'
          }
        },
        {
          orgin: {
            [Op.like]: '%ALL%'
          },
          destination: {
            [Op.like]: dest
          }
        },
        {
          orgin: {
            [Op.like]: '%ALL%'
          },
          destination: {
            [Op.like]: '%ALL%'
          }
        }
        ]
      }
    });

    let tmpListTourCodeID = []
    let listTourCodeFinal = []
    listSuppliers.map((supp, suppIndex) => {
      listTourCodes.map((tourCode, tourCodeIndex) => {
        if (tourCode.supplier.includes(supp['Gds_code'])) {
          if (!tmpListTourCodeID.includes(tourCode.tourcode_id)) {
            tmpListTourCodeID.push(tourCode.tourcode_id)
            listTourCodeFinal.push(tourCode)
          }
        }
      })
    })
    let tmpListTourCodeCode = []
    let tmpListTourCodeDetails = []
    listTourCodeFinal.map((tourCode, tourCodeIndex) => {
      if (!tmpListTourCodeCode.includes(tourCode['tourcode'])) {
        tmpListTourCodeCode.push(tourCode['tourcode'])
        tmpListTourCodeDetails.push(tourCode)
      }
    })

    tmpListTourCodeDetails.map((tourCode, tourCodeIndex) => {
      let segmentVal = 0
      if (tourCode['code_type'] === 'NF') {
        segmentVal = 1
      } else if (tourCode['code_type'] === 'AC') {
        segmentVal = 2
      } else if (tourCode['code_type'] === 'IT') {
        segmentVal = 3
      }

      let listSuppliers = JSON.parse(tourCode['supplier']);
      listSuppliers.map((supp, suppIndex) => {
        tmpSoapFlightSeg += `<FlightSegment SegmentKey="${segmentVal}">`;
        tmpSoapFlightSeg += `<MarketingAirline>`;
        tmpSoapFlightSeg += `<AirlineID>${tourCode['airline']}</AirlineID>`;
        tmpSoapFlightSeg += `<Name>${tourCode['tourcode']}</Name>`;
        tmpSoapFlightSeg += `</MarketingAirline>`;
        tmpSoapFlightSeg += `<OperatingAirline>`;
        tmpSoapFlightSeg += `<Name>${supp}</Name>`;
        tmpSoapFlightSeg += `</OperatingAirline>`;
        tmpSoapFlightSeg += `</FlightSegment>`;
      })
    })
  }

  let soapData = buildSOAPStart("AirShoppingRQ", req, resultOrgDetails);

  soapData += `<Travelers><Traveler>`;
  let paxCounter = 1, pax = 1, child = 1, infant = 1;
  while (pax <= airShoppingReqData.quantityADT) {
    soapData += `<AnonymousTraveler ObjectKey="PAX${paxCounter++}"><PTC Quantity="1">ADT</PTC><Age><Value UOM="Years">30</Value></Age></AnonymousTraveler>`;
    pax++;
  }
  while (child <= airShoppingReqData.quantityCHD) {
    soapData += `<AnonymousTraveler ObjectKey="PAX${paxCounter++}"><PTC Quantity="1">CHD</PTC><Age><Value UOM="Years">1</Value></Age></AnonymousTraveler>`;
    child++;
  }
  while (infant <= airShoppingReqData.quantityINF) {
    soapData += `<AnonymousTraveler ObjectKey="PAX${paxCounter++}"><PTC Quantity="1">INF</PTC><Age><Value UOM="Years">2</Value></Age></AnonymousTraveler>`;
    infant++;
  }
  soapData += `</Traveler></Travelers>`;
  soapData += `<CoreQuery>`;
  if (airShoppingReqData.hasOwnProperty("nearBy") && (airShoppingReqData.nearBy === true)) {
    soapData += `<Affinity>
  <OriginDestination>
    <ReferencePointDeparture>
      <Departure>
        <Proximity>
          <AreaValue UOM="KM">30</AreaValue>
        </Proximity>
      </Departure>
    </ReferencePointDeparture>
    <ReferencePointArrival>
      <Arrival>
        <Proximity>
          <AreaValue UOM="KM">30</AreaValue>
        </Proximity>
      </Arrival>
    </ReferencePointArrival>
  </OriginDestination>
</Affinity>`;
  }
  soapData += `<OriginDestinations>`;
  airShoppingReqData.destinations.forEach(el => {
    soapData += `<OriginDestination>`;
    soapData += `<Departure>`;
    soapData += `<AirportCode>${el.departure}</AirportCode>`;
    soapData += `<Date>${moment(el.flightDate).format('YYYY-MM-DD')}</Date>`;
    soapData += `</Departure>`;
    soapData += `<Arrival>`;
    soapData += `<AirportCode>${el.arrival}</AirportCode>`;
    soapData += `</Arrival>`;
    if (airShoppingReqData.hasOwnProperty("calendarDates") && (airShoppingReqData.calendarDates === true)) {
      soapData += `<CalendarDates DaysBefore="3" DaysAfter="3"/>`;
    }
    soapData += `</OriginDestination>`;
  });
  soapData += `</OriginDestinations>`;
  soapData += `<FlightSpecific>`;
  soapData += tmpSoapFlightSeg;
  soapData += `</FlightSpecific>`;
  soapData += `</CoreQuery>`;
  soapData += `<Preference>`;
  if (airShoppingReqData.nonStop) {
    soapData += `<FlightPreferences><Characteristic><NonStopPreferences>Preferred</NonStopPreferences></Characteristic></FlightPreferences>`;
  }
  if (airShoppingReqData.hasOwnProperty('cabinType')) {
    soapData += `<CabinPreferences><CabinType><Code>${airShoppingReqData.cabinType}</Code><Definition>${airShoppingReqData.cabinType}</Definition></CabinType></CabinPreferences>`;
  }
  if (airShoppingReqData.hasOwnProperty('farePreferences')) {
    soapData += `<FarePreferences><Types>`;
    soapData += `<Type>`;
    soapData += `<Code>${airShoppingReqData.farePreferences.pref.code}</Code>`;
    soapData += `<Definition>${airShoppingReqData.farePreferences.pref.name}</Definition>`;
    soapData += `</Type>`;
    if (airShoppingReqData.farePreferences.hasOwnProperty('negoFare')) {
      // soapData += `<Type><Code>1</Code><Definition>Nego Fare</Definition></Type>`;
      soapData += `<Type>`;
      soapData += `<Code>${airShoppingReqData.farePreferences.negoFare.code}</Code>`;
      soapData += `<Definition>${airShoppingReqData.farePreferences.negoFare.name}</Definition>`;
      soapData += `</Type>`;
    }
    soapData += `</Types></FarePreferences>`;
  }
  airlinePref = objToArray(airShoppingReqData.airlinePreference)
  airlinePref.forEach(airShoppingReqData => {
    if (airShoppingReqData.airlinePreference) {
      soapData += `<AirlinePreferences>`;
      airShoppingReqData.airlinePreference.map((airlineID, airlineIDIndex) => {
        soapData += `<Airline><AirlineID>${airlineID}</AirlineID></Airline>`;
      });
      soapData += `</AirlinePreferences>`;
    }
  })

  soapData += `</Preference>`;
  soapData += `<Metadata><Other>`;
  soapData += `<OtherMetadata>
        <CurrencyMetadatas>
            <CurrencyMetadata MetadataKey="DisplayCurrency">
                <Application>DisplayCurrency</Application>
                <Decimals>2</Decimals>
                <Name>${airShoppingReqData.currency}</Name>
            </CurrencyMetadata>
        </CurrencyMetadatas>
    </OtherMetadata>`;
  if (airShoppingReqData.hasOwnProperty('markupBy')) {
    soapData += `<OtherMetadata><RuleMetadatas>`;
    soapData += `<RuleMetadata MetadataKey="DynamicMarkup_byPerc/byAmt_1">
                    <RuleID>DynamicMarkup</RuleID>
                    <Name>DynamicMarkup-BYPERC</Name>
                    <Values>
                        <Value>
                            <Instruction>DM-by_${airShoppingReqData.markupBy == 'amount' ? 'amount' : 'percentage'}-${airShoppingReqData.markupBy == 'amount' ? airShoppingReqData.markupValue : airShoppingReqData.markupValue}-UPSALE-BY_PAX</Instruction>
                        </Value>
                    </Values>
                    <Remarks>
                        <Remark>By ${airShoppingReqData.markupBy == 'amount' ? 'amount' : 'percentage'}</Remark>
                    </Remarks>
                </RuleMetadata>`;
    soapData += `</RuleMetadatas></OtherMetadata>`;
  }
  soapData += `</Other></Metadata>`;
  if (airShoppingReqData.hasOwnProperty('qualifierCode')) {
    soapData += `<Qualifier><SpecialFareQualifiers>`;
    soapData += `<Account>${airShoppingReqData.qualifierCode}</Account>`;
    soapData += `</SpecialFareQualifiers></Qualifier>`;
  }
  soapData += buildSOAPEnd("AirShoppingRQ");
  return soapData;
}

const objToArray = obj => (Array.isArray(obj) ? obj : [obj]);
module.exports = AirShopping;
