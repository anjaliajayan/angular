const {
  getStart,
  getHeader,
  getNodeStart,
  getBodyDocument,
  getBodyParty,
  getBodyPartyReshop,
  buildSOAPEnd
} = require('../../config/soap_const');
var moment = require("moment");
let {
  convertToArray,
  getOrgDetails
} = require("./../helpers/utils");
let ItinReshop = (req) => {
  let resultOrgDetails = getOrgDetails(req);
  if (!resultOrgDetails.auth) {
    return '';
  }
  let data = req.body;
  let soapData = getStart();
  soapData += getHeader(resultOrgDetails);
  soapData += `<soapenv:Body>`;
  soapData += getNodeStart("ItinReshopRQ", data.echoToken);
  soapData += getBodyDocument(false, data.tripId, data.pnr_no);
  soapData += getBodyParty(resultOrgDetails);
  soapData += `<Query>`;
  soapData += `<Reshop>`;
  soapData += `<Actions>`;
  soapData += `<ActionType>Cancel</ActionType>`;
  let CancelledFlightBookingReferenceList = convertToArray(data.BookingReferences.BookingReference);
  let tmpSoapDataBookingReferenceList = `<BookingReferences>`;
  CancelledFlightBookingReferenceList.map((bookingReference, index) => {
    tmpSoapDataBookingReferenceList += `<BookingReference>`;
    tmpSoapDataBookingReferenceList += `<ID>${data.currency.booking}</ID>`;
    tmpSoapDataBookingReferenceList += `<OtherID Name="${bookingReference.OtherID["@Name"]}">`;
    if (bookingReference.OtherID.hasOwnProperty("#text")) {
      tmpSoapDataBookingReferenceList += `${bookingReference.OtherID["#text"]}`;
    } else if (bookingReference.OtherID.hasOwnProperty("@")) {
      tmpSoapDataBookingReferenceList += `${bookingReference.OtherID["@"]}`;
    }
    tmpSoapDataBookingReferenceList += `</OtherID>`;
    tmpSoapDataBookingReferenceList += `</BookingReference>`;
  });
  tmpSoapDataBookingReferenceList += `</BookingReferences>`;
  soapData += tmpSoapDataBookingReferenceList;
  soapData += `<OrderID Owner="${data.owner}">${data.pnr_no}</OrderID>`;
  soapData += `<OrderItems>`;
  soapData += `<OrderItem>`;
  soapData += `<OrderItemID Owner="${data.owner}">${data.pnr_no}</OrderItemID>`;
  soapData += `<FlightItem>`;
  let tmpCancelledFlightItemMarketingCarrierList = [];
  if (data.hasOwnProperty("PrevBookingList")) {
    let journeyList = convertToArray(data.PrevBookingList);
    journeyList.map((journey, journeyIndex) => {
      soapData += `<OriginDestination>`;
      journey.SegmentList.map((flight, flightIndex) => {
        soapData += `<Flight>`;
        soapData += `<Departure>`;
        soapData += `<AirportCode>${flight.Departure.AirportCode}</AirportCode>`;
        soapData += `<Date>${moment(flight.Departure.Date).format("YYYY-MM-DD")}</Date>`;
        if (flight.Departure.hasOwnProperty("Time") && flight.Departure.Time !== null) {
          soapData += `<Time>${flight.Departure.Time.substring(0, 5)}</Time>`;
        }
        soapData += `</Departure>`;
        soapData += `<Arrival>`;
        soapData += `<AirportCode>${flight.Arrival.AirportCode}</AirportCode>`;
        soapData += `<Date>${moment(flight.Arrival.Date).format("YYYY-MM-DD")}</Date>`;
        if (flight.Arrival.hasOwnProperty("Time") && flight.Arrival.Time !== null) {
          soapData += `<Time>${flight.Arrival.Time.substring(0, 5)}</Time>`;
        }
        soapData += `</Arrival>`;
        soapData += `<MarketingCarrier>`;
        soapData += `<AirlineID>${ flight.MarketingCarrier.AirlineID.hasOwnProperty("#text") ?
        flight.MarketingCarrier.AirlineID["#text"] :
        flight.MarketingCarrier.AirlineID.hasOwnProperty("@") ?
        flight.MarketingCarrier.AirlineID["@"] :
        flight.MarketingCarrier.AirlineID }</AirlineID>`;
        if (flight.MarketingCarrier.hasOwnProperty("FlightNumber")) {
          soapData += `<FlightNumber>${flight.MarketingCarrier.FlightNumber}</FlightNumber>`;
        } else {
          soapData += `<FlightNumber />`;
        }
        soapData += `</MarketingCarrier>`;
        soapData += `<OperatingCarrier>`;
        soapData += `<AirlineID>${ flight.OperatingCarrier.AirlineID.hasOwnProperty("#text") ?
        flight.OperatingCarrier.AirlineID["#text"] :
        flight.OperatingCarrier.AirlineID.hasOwnProperty("@") ?
        flight.OperatingCarrier.AirlineID["@"] :
        flight.OperatingCarrier.AirlineID }</AirlineID>`;
        if (flight.OperatingCarrier.hasOwnProperty("FlightNumber")) {
          soapData += `<FlightNumber>${flight.OperatingCarrier.FlightNumber}</FlightNumber>`;
        } else {
          soapData += `<FlightNumber />`;
        }
        soapData += `</OperatingCarrier>`;
        soapData += `<ClassOfService>`;
        soapData += `<Code>${ flight.ClassOfService.Code.hasOwnProperty("#text") ? flight.ClassOfService.Code["#text"] : flight.ClassOfService.Code }</Code>`;
        soapData += `<MarketingName CabinDesignator="${ flight.ClassOfService.Code.hasOwnProperty("#text") ? flight.ClassOfService.Code["#text"] : flight.ClassOfService.Code }">${ flight.ClassOfService.MarketingName.hasOwnProperty("#text") ? flight.ClassOfService.MarketingName["#text"] : flight.ClassOfService.MarketingName }</MarketingName>`;
        soapData += `</ClassOfService>`;
        //soapData += `<SegmentKey>${flight["@SegmentKey"]}</SegmentKey>`;
        soapData += `</Flight>`;
      });
      let tmpSoapDataMarketingCarrier = '';
      tmpSoapDataMarketingCarrier += `<MarketingCarrier>`;
      tmpSoapDataMarketingCarrier += `<AirlineID>${ journey.SegmentList[0].MarketingCarrier.AirlineID.hasOwnProperty("#text") ?
      journey.SegmentList[0].MarketingCarrier.AirlineID["#text"] :
      journey.SegmentList[0].MarketingCarrier.AirlineID["@"] ?
      journey.SegmentList[0].MarketingCarrier.AirlineID["@"] :
      journey.SegmentList[0].MarketingCarrier.AirlineID }</AirlineID>`;
      if (journey.SegmentList[0].OperatingCarrier.hasOwnProperty("FlightNumber")) {
        tmpSoapDataMarketingCarrier += `<FlightNumber>${ journey.SegmentList[0].OperatingCarrier.FlightNumber }</FlightNumber>`;
      } else {
        tmpSoapDataMarketingCarrier += `<FlightNumber />`;
      }

      tmpSoapDataMarketingCarrier += `</MarketingCarrier>`;
      tmpCancelledFlightItemMarketingCarrierList[journeyIndex] = tmpSoapDataMarketingCarrier;
      soapData += `</OriginDestination>`;
    });
  }
  soapData += `</FlightItem>`;
  soapData += `</OrderItem>`;
  soapData += `</OrderItems>`;
  soapData += `</Actions>`;
  soapData += `<Actions>`;
  soapData += `<ActionType>Create</ActionType>`;
  soapData += tmpSoapDataBookingReferenceList;
  soapData += `<OrderID Owner="${data.owner}">${data.pnr_no}</OrderID>`;
  soapData += `<OrderItems>`;
  soapData += `<OrderItem>`;
  soapData += `<OrderItemID Owner="${data.owner}">${data.pnr_no}</OrderItemID>`;
  soapData += `<FlightItem>`;
  let CreatedFlightItemList = convertToArray(data.FlightItemList);
  CreatedFlightItemList.map((createdFlight, createdFlightIndex) => {
    soapData += `<OriginDestination>`;
    soapData += `<Flight>`;
    soapData += `<Departure>`;
    soapData += `<AirportCode>${createdFlight.Departure.AirportCode}</AirportCode>`;
    soapData += `<Date>${moment(createdFlight.Departure.Date).format(
      "YYYY-MM-DD"
    )}</Date>`;
    soapData += `</Departure>`;
    soapData += `<Arrival>`;
    soapData += `<AirportCode>${createdFlight.Arrival.AirportCode}</AirportCode>`;
    soapData += `<Date>${moment(createdFlight.Arrival.Date).format(
      "YYYY-MM-DD"
    )}</Date>`;
    soapData += `</Arrival>`;
    soapData += tmpCancelledFlightItemMarketingCarrierList[createdFlightIndex];
    soapData += `<ClassOfService>`;
    soapData += `<Code>${createdFlight.ClassOfService.Code}</Code>`;
    soapData += `<MarketingName>${createdFlight.ClassOfService.MarketingName.Title}</MarketingName>`;
    soapData += `</ClassOfService>`;
    //soapData += `<SegmentKey>${createdFlight.SegmentKey}</SegmentKey>`;
    soapData += `</Flight>`;
    soapData += `</OriginDestination>`;
  });
  soapData += `</FlightItem>`;
  soapData += `</OrderItem>`;
  soapData += `</OrderItems>`;
  soapData += `</Actions>`;
  soapData += `</Reshop></Query>`;
  soapData += buildSOAPEnd("ItinReshopRQ");
  return soapData;
};

module.exports = ItinReshop;