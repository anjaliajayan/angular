const {getHeader, getBodyPartyReshop, buildRecognizedTravelerList, requestResponseWithSpecificCurrency, buildSOAPEnd} = require('../../config/soap_const');
var moment = require("moment");
let { convertToArray, getOrgDetails } = require("./../helpers/utils");
let ItinReshopRepriceOnly = (req) => {
  let resultOrgDetails = getOrgDetails(req);
  if (!resultOrgDetails.auth) {
    return '';
  }
  let data = req.body;
  let soapData = `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:head="http://tpconnects.com/security/header" xmlns:edis="http://www.iata.org/IATA/EDIST">`;
  soapData += getHeader(resultOrgDetails);
  soapData += `<soapenv:Body>`;
  soapData += `<ItinReshopRQ Version="16.1" PrimaryLangID="EN" AltLangID="EN" xmlns="http://www.iata.org/IATA/EDIST" EchoToken="${data.echoToken}">`;
  soapData += `<Document id="${data.TripID}"><Name>${data.Document.Name}</Name></Document>`;
  soapData += getBodyPartyReshop(resultOrgDetails);
  soapData += `<Query><RepriceOnly><OrderItems><OrderItem>`;
  soapData += `<OrderItemID ObjectKey="${data.OrderItem.ID}" Owner="${data.OrderItem.Owner}">${data.OrderItem.PNR}</OrderItemID>`;
  soapData += `<FlightItem>`;
  let myOriginDestinationFlightItemList = convertToArray(data.OrderItem.OriginDestinationFlightItem);
  myOriginDestinationFlightItemList.map((tmpOriginDestinationFlightItem, tmpOriginDestinationFlightItemIndex) => {
    soapData += `<OriginDestination>`;
    let list = convertToArray(tmpOriginDestinationFlightItem.SegmentList);
    list.map((tmpFlightItem, tmpFlightItemIndex) => {
      let flight = tmpFlightItem.OriginDestination.Flight;
      soapData += `<Flight>`;
      soapData += `<Departure>`;
      soapData += `<AirportCode>${flight.Departure.AirportCode}</AirportCode>`;
      soapData += `<Date>${moment(flight.Departure.Date).format(
        "YYYY-MM-DD"
      )}</Date>`;
      soapData += `<Time>${flight.Departure.Time}</Time>`;
      soapData += `</Departure>`;
      soapData += `<Arrival>`;
      soapData += `<AirportCode>${flight.Arrival.AirportCode}</AirportCode>`;
      soapData += `<Date>${moment(flight.Arrival.Date).format(
        "YYYY-MM-DD"
      )}</Date>`;
      soapData += `<Time>${flight.Arrival.Time}</Time>`;
      soapData += `</Arrival>`;
      soapData += `<MarketingCarrier>`;
      soapData += `<AirlineID>${flight.MarketingCarrier.AirlineID}</AirlineID>`;
      soapData += `<FlightNumber>${flight.MarketingCarrier.FlightNumber}</FlightNumber>`;
      soapData += `</MarketingCarrier>`;
      soapData += `<ClassOfService>`;
      soapData += `<Code>${flight.ClassOfService.Code}</Code>`;
      soapData += `<MarketingName CabinDesignator="${flight.ClassOfService.Code}">`;
      if (flight.ClassOfService.MarketingName.hasOwnProperty("#text")) {
        soapData += `${flight.ClassOfService.MarketingName["#text"]}`;
      } else {
        soapData += `${flight.ClassOfService.MarketingName}`;
      }
      soapData += `</MarketingName>`;
      soapData += `</ClassOfService>`;
      soapData += `</Flight>`;
    });
    soapData += `</OriginDestination>`;
  });
  soapData += `</FlightItem></OrderItem></OrderItems></RepriceOnly></Query>`;
  soapData += `<DataLists>`;
  soapData += buildRecognizedTravelerList(data);
  let FareGroupList = convertToArray(data.DataLists.FareList);
  if (FareGroupList.length > 0) {
    soapData += `<FareList>`;
    FareGroupList.map((fareGroup, travelerIndex) => {
      soapData += `<FareGroup refs="${fareGroup['@refs']}" ListKey="${fareGroup['@ListKey']}">`;
      soapData += `<Fare><FareCode><Code>${fareGroup.Fare.FareCode.Code}</Code></FareCode></Fare>`;
      soapData += `<FareBasisCode><Code>${fareGroup.FareBasisCode.Code}</Code></FareBasisCode>`;
      soapData += `</FareGroup>`;
    });
    soapData += `</FareList>`;
  }
  let myFlightSegmentList = convertToArray(data.DataLists.FlightSegmentList);
  if (myFlightSegmentList.length > 0) {
    soapData += `<FlightSegmentList>`;
    myFlightSegmentList.map((tmpFltSeg, tmpFltSegIndex) => {
      let fltSeg = tmpFltSeg.Flight;
      soapData += `<FlightSegment SegmentKey="${fltSeg["@SegmentKey"]}">`;
      soapData += `<Departure>`;
      soapData += `<AirportCode>${fltSeg.Departure.AirportCode}</AirportCode>`;
      soapData += `<Date>${fltSeg.Departure.Date}</Date>`;
      soapData += `<Time>${fltSeg.Departure.Time}</Time>`;
      soapData += `<AirportName>${fltSeg.Departure.AirportName}</AirportName>`;
      if (fltSeg.Departure.hasOwnProperty("Terminal") && fltSeg.Departure.Terminal.hasOwnProperty("Name")) {
        soapData += `<Terminal><Name>${fltSeg.Departure.Terminal.Name}</Name></Terminal>`;
      }
      soapData += `</Departure>`;
      soapData += `<Arrival>`;
      soapData += `<AirportCode>${fltSeg.Arrival.AirportCode}</AirportCode>`;
      soapData += `<Date>${fltSeg.Arrival.Date}</Date>`;
      soapData += `<Time>${fltSeg.Arrival.Time}</Time>`;
      soapData += `<AirportName>${fltSeg.Arrival.AirportName}</AirportName>`;
      if (fltSeg.Arrival.hasOwnProperty("Terminal") && fltSeg.Arrival.Terminal.hasOwnProperty("Name")) {
        soapData += `<Terminal><Name>${fltSeg.Arrival.Terminal.Name}</Name></Terminal>`;
      }
      soapData += `</Arrival>`;
      soapData += `<MarketingCarrier>`;
      soapData += `<AirlineID>${fltSeg.MarketingCarrier.AirlineID}</AirlineID>`;
      if (fltSeg.MarketingCarrier.Name) {
        soapData += `<Name>${fltSeg.MarketingCarrier.Name}</Name>`;
      }
      soapData += `<FlightNumber>${fltSeg.MarketingCarrier.FlightNumber}</FlightNumber>`;
      soapData += `</MarketingCarrier>`;
      soapData += `<OperatingCarrier>`;
      soapData += `<AirlineID>${fltSeg.OperatingCarrier.AirlineID}</AirlineID>`;
      if (fltSeg.OperatingCarrier.Name) {
        soapData += `<Name>${fltSeg.OperatingCarrier.Name}</Name>`;
      }
      soapData += `<FlightNumber/>`;
      soapData += `</OperatingCarrier>`;
      soapData += `<Equipment>`;
      soapData += `<AircraftCode>${fltSeg.Equipment.AircraftCode}</AircraftCode>`;
      soapData += `<Name>${fltSeg.Equipment.Name}</Name>`;
      soapData += `</Equipment>`;
      soapData += `<ClassOfService>`;
      soapData += `<Code>${tmpFltSeg.ClassCode}</Code>`;
      soapData += `<MarketingName CabinDesignator="${tmpFltSeg.ClassCode}">`;
      if (tmpFltSeg.ClassMarketingName.hasOwnProperty("#text")) {
        soapData += `${tmpFltSeg.ClassMarketingName["#text"]}`;
      } else {
        soapData += `${tmpFltSeg.ClassMarketingName}`;
      }
      soapData += `</MarketingName>`;
      soapData += `</ClassOfService>`;
      soapData += `<FlightDetail>`;
      if (fltSeg.FlightDetail.hasOwnProperty('Stops')) {
        soapData += `<Stops>`;
        soapData += `<StopQuantity>${fltSeg.FlightDetail.Stops.StopQuantity}</StopQuantity>`;
        if (fltSeg.FlightDetail.Stops.hasOwnProperty('StopLocations')) {
          soapData += `<StopLocations/>`;
        }
        soapData += `</Stops>`;
      }
      soapData += `</FlightDetail>`;
      soapData += `</FlightSegment>`;
    });
    soapData += `</FlightSegmentList>`;
  }
  let OriginDestinationList = convertToArray(data.DataLists.OriginDestinationList.OriginDestination);
  if (OriginDestinationList.length > 0) {
    soapData += `<OriginDestinationList>`;
    OriginDestinationList.map((ond, ondIndex) => {
      soapData += `<OriginDestination>`;
      soapData += `<DepartureCode>${ond.DepartureCode}</DepartureCode>`;
      soapData += `<ArrivalCode>${ond.ArrivalCode}</ArrivalCode>`;
      soapData += `</OriginDestination>`;
    });
    soapData += `</OriginDestinationList>`;
  }
  soapData += `</DataLists>`;
  soapData += requestResponseWithSpecificCurrency(data.currency, data.decimals);
  soapData += buildSOAPEnd("ItinReshopRQ");
  return soapData;
};

module.exports = ItinReshopRepriceOnly;
