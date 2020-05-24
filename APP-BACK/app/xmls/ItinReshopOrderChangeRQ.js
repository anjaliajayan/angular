const {
  getHeader,
  getBodyPartyReshop,
  buildRecognizedTravelerList,
  buildSOAPAssociationsPassengerList,
  buildSOAPEnd
} = require('../../config/soap_const');
var moment = require("moment");
let {
  convertToArray,
  getOrgDetails
} = require("./../helpers/utils");
let ItinReshopOrderChange = (req) => {
  let resultOrgDetails = getOrgDetails(req);
  if (!resultOrgDetails.auth) {
    return '';
  }
  let data = req.body;
  let soapData = `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:head="http://tpconnects.com/security/header" xmlns:edis="http://www.iata.org/IATA/EDIST">`;
  soapData += getHeader(resultOrgDetails);
  soapData += `<soapenv:Body>`;
  soapData += `<OrderChangeRQ Version="16.1" PrimaryLangID="EN" AltLangID="EN" xmlns="http://www.iata.org/IATA/EDIST" EchoToken="${data.echoToken}">`;
  soapData += `<Document id="${data.TripID}"><Name>${data.Document.Name}</Name></Document>`;
  soapData += getBodyPartyReshop(resultOrgDetails);
  soapData += `<Query>`;
  if (data.hasOwnProperty('Passengers')) {
    let myPassengerList = convertToArray(data.Passengers);
    soapData += `<Passengers>`;
    myPassengerList.map((pax, paxIndex) => {
      soapData += `<Passenger ObjectKey="${pax.pax_ref_key}">`;
      soapData += `<PTC>${pax.pax_type}</PTC>`;
      soapData += `<Name>`;
      if (pax.hasOwnProperty('pax_last_name')) {
        soapData += `<Surname>${pax.pax_last_name}</Surname>`;
      }
      if (pax.hasOwnProperty('pax_first_name')) {
        soapData += `<Given>${pax.pax_first_name}</Given>`;
      }
      if (pax.hasOwnProperty('pax_middle_name') && pax.pax_middle_name !== '') {
        soapData += `<Middle>${pax.pax_middle_name}</Middle>`;
      }
      if (pax.hasOwnProperty('pax_title')) {
        soapData += `<Title>${pax.pax_title}</Title>`;
      }
      soapData += `</Name>`;
      if (pax.hasOwnProperty('pax_dob') && pax.pax_dob !== null) {
        soapData += `<Age><BirthDate>${pax.pax_dob}</BirthDate></Age>`;
      }
      soapData += `<Contacts><Contact>`;
      soapData += `<AddressContact><Street/><Street/><PostalCode/><CountryCode/></AddressContact>`;
      if (pax.hasOwnProperty('pax_email')) {
        soapData += `<EmailContact><Address>${pax.pax_email}</Address></EmailContact>`;
      }
      if (pax.hasOwnProperty('pax_mobile')) {
        soapData += `<PhoneContact><Application>Mobile</Application>`;
        if (pax.pax_mobile) {
          let myNumberList = pax.pax_mobile.split(",");
          myNumberList.map((number, numberIndex) => {
            let tmpNumber = number.split("-");
            if (tmpNumber.length === 1) {
              soapData += `<Number>${number}</Number>`;
            } else {
              soapData += `<Number CountryCode="${tmpNumber[0]}">${tmpNumber[1]}</Number>`;
            }
          });
        }
        soapData += `</PhoneContact>`;
      }
      soapData += `</Contact></Contacts>`;
      soapData += `<Gender>${pax.pax_gender}</Gender>`;
      soapData += `<AdditionalRoles PaymentContactInd="true"/>`;
      soapData += `</Passenger>`;
    });
    soapData += `</Passengers>`;
  }
  soapData += `<Order>`;
  soapData += `<OrderID Owner="${data.OrderItem.Owner}">${data.OrderItem.PNR}</OrderID>`;
  soapData += `<OrderItems>`;
  soapData += `<OrderItem>`;
  soapData += `<OrderItemID Owner="${data.OrderItem.Owner}">1</OrderItemID>`;
  tmpSoapDataAssociationList = buildSOAPAssociationsPassengerList(data);
  tmpSoapDataRecognizedTravelerList = buildRecognizedTravelerList(data);
  soapData += tmpSoapDataAssociationList;
  soapData += `<FlightItem>`;
  soapData += `<Price>`;
  soapData += `<BaseAmount Code="${data.OrderItem.Price.Currency}">${data.OrderItem.Price.Total}</BaseAmount>`;
  soapData += `<Taxes>`;
  soapData += `<Total Code="${data.OrderItem.Price.Currency}">${data.OrderItem.Price.TaxNew}</Total>`;
  soapData += `</Taxes>`;
  soapData += `</Price>`;
  let createdFlightItemOriginDestinationList = convertToArray(data.OrderItem.CreatedOrder);
  createdFlightItemOriginDestinationList.map((tmpJourneyDetails, tmpJourneyDetailsIndex) => {
    soapData += `<OriginDestination>`;
    let mySegmentList = convertToArray(tmpJourneyDetails.SegmentList);
    mySegmentList.map((tmpFlight, tmpFlightIndex) => {
      let createdFlight = tmpFlight.Flight;

      soapData += `<Flight>`;
      soapData += `<Departure>`;
      soapData += `<AirportCode>${createdFlight.Departure.AirportCode}</AirportCode>`;
      soapData += `<Date>${moment(createdFlight.Departure.Date).format(
        "YYYY-MM-DD"
      )}</Date>`;
      soapData += `<Time>${createdFlight.Departure.Time}</Time>`;
      soapData += `</Departure>`;
      soapData += `<Arrival>`;
      soapData += `<AirportCode>${createdFlight.Arrival.AirportCode}</AirportCode>`;
      soapData += `<Date>${moment(createdFlight.Arrival.Date).format(
        "YYYY-MM-DD"
      )}</Date>`;
      soapData += `<Time>${createdFlight.Arrival.Time}</Time>`;
      soapData += `</Arrival>`;
      soapData += `<MarketingCarrier>`;
      soapData += `<AirlineID>${createdFlight.MarketingCarrier.AirlineID}</AirlineID>`;
      soapData += `<FlightNumber>${createdFlight.MarketingCarrier.FlightNumber}</FlightNumber>`;
      soapData += `</MarketingCarrier>`;
      soapData += `<Equipment>`;
      soapData += `<AircraftCode>${createdFlight.Equipment.AircraftCode}</AircraftCode>`;
      soapData += `</Equipment>`;
      soapData += `<ClassOfService>`;
      soapData += `<Code>${tmpFlight.ClassCode}</Code>`;
      soapData += `<MarketingName CabinDesignator="${tmpFlight.ClassCode}">${tmpFlight.ClassMarketingName}</MarketingName>`;
      soapData += `</ClassOfService>`;
      soapData += `</Flight>`;
    });
    soapData += `</OriginDestination>`;
  });
  soapData += `</FlightItem>`;
  soapData += `<ActionType>Create</ActionType>`;
  soapData += `</OrderItem>`;
  soapData += `<OrderItem>`;
  soapData += `<OrderItemID Owner="${data.OrderItem.Owner}">2</OrderItemID>`;
  soapData += tmpSoapDataAssociationList;
  soapData += `<FlightItem>`;
  let cancelledFlightItemOriginDestinationList = convertToArray(data.OrderItem.CancelledOrder);
  cancelledFlightItemOriginDestinationList.map((tmpOriginDestinationFlightItem, tmpOriginDestinationFlightItemIndex) => {
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
      soapData += `<Equipment>`;
      soapData += `<AircraftCode>${flight.Equipment.AircraftCode}</AircraftCode>`;
      soapData += `</Equipment>`;
      soapData += `<ClassOfService>`;
      soapData += `<Code>${flight.ClassOfService.Code}</Code>`;
      soapData += `<MarketingName CabinDesignator="${flight.ClassOfService.MarketingName.CabinDesignator}">${flight.ClassOfService.MarketingName.Title}</MarketingName>`;
      soapData += `</ClassOfService>`;
      soapData += `</Flight>`;
    });
    soapData += `</OriginDestination>`;
  });
  soapData += `</FlightItem>`;
  soapData += `<ActionType>Cancel</ActionType>`;
  soapData += `</OrderItem>`;
  soapData += `</OrderItems>`;
  soapData += `</Order>`;
  soapData += `<Payments>`;
  soapData += `<Payment>`;
  soapData += `<Qualifier>`;
  soapData += `<Code>CA</Code>`;
  soapData += `<Definition>BSP</Definition>`;
  soapData += `</Qualifier>`;
  soapData += `<Method>`;
  soapData += `<Cash CashInd="true"/>`;
  soapData += `</Method>`;
  soapData += `<Amount Code="${data.PaymentCurrency}">${data.PaymentAmount}</Amount>`;
  soapData += `</Payment>`;
  soapData += `</Payments>`;
  let CancelledFlightBookingReferenceList = convertToArray(data.BookingReferences.BookingReference);
  let tmpSoapDataBookingReferenceList = `<BookingReferences>`;
  CancelledFlightBookingReferenceList.map((bookingReference, bookingReferenceIndex) => {
    tmpSoapDataBookingReferenceList += `<BookingReference>`;
    tmpSoapDataBookingReferenceList += `<ID>${bookingReference.ID}</ID>`;
    tmpSoapDataBookingReferenceList += `<OtherID Name="${bookingReference.OtherID["@Name"]}">${bookingReference.OtherID["@"]}</OtherID>`;
    tmpSoapDataBookingReferenceList += `</BookingReference>`;
  });
  tmpSoapDataBookingReferenceList += `</BookingReferences>`;
  soapData += tmpSoapDataBookingReferenceList;
  let myOtherMetadataList = convertToArray(data.Metadata.Other.OtherMetadata);
  if (myOtherMetadataList.length > 0) {
    soapData += `<OrderChangeMetadata>`;
    soapData += `<Other>`;
    if (myOtherMetadataList.length === 1) {
      let myMetadata = myOtherMetadataList[0].CurrencyMetadatas.CurrencyMetadata;
      soapData += `<OtherMetadata>`;
      soapData += `<CurrencyMetadatas>`;
      soapData += `<CurrencyMetadata MetadataKey="Currency">`;
      soapData += `<Decimals>${myMetadata.Decimals}</Decimals>`;
      soapData += `<Name>${myMetadata.Name}</Name>`;
      soapData += `</CurrencyMetadata>`;
      soapData += `</CurrencyMetadatas>`;
      soapData += `</OtherMetadata>`;
      soapData += `<OtherMetadata>`;
      soapData += `<CurrencyMetadatas>`;
      soapData += `<CurrencyMetadata MetadataKey="DisplayCurrency">`;
      soapData += `<Application>DisplayCurrency</Application>`;
      soapData += `<Decimals>${myMetadata.Decimals}</Decimals>`;
      soapData += `<Name>${myMetadata.Name}</Name>`;
      soapData += `</CurrencyMetadata>`;
      soapData += `</CurrencyMetadatas>`;
      soapData += `</OtherMetadata>`;
    } else {
      myOtherMetadataList.map((metadata, metadataIndex) => {
        let myMetadata = metadata.CurrencyMetadatas.CurrencyMetadata;
        if (myMetadata['@MetadataKey'] === 'DisplayCurrency') {
          soapData += `<OtherMetadata>`;
          soapData += `<CurrencyMetadatas>`;
          soapData += `<CurrencyMetadata MetadataKey="DisplayCurrency">`;
          soapData += `<Application>DisplayCurrency</Application>`;
          soapData += `<Decimals>${myMetadata.Decimals}</Decimals>`;
          soapData += `<Name>${myMetadata.Name}</Name>`;
          soapData += `</CurrencyMetadata>`;
          soapData += `</CurrencyMetadatas>`;
          soapData += `</OtherMetadata>`;
        } else {
          soapData += `<OtherMetadata>`;
          soapData += `<CurrencyMetadatas>`;
          soapData += `<CurrencyMetadata MetadataKey="Currency">`;
          soapData += `<Decimals>${myMetadata.Decimals}</Decimals>`;
          soapData += `<Name>${myMetadata.Name}</Name>`;
          soapData += `</CurrencyMetadata>`;
          soapData += `</CurrencyMetadatas>`;
          soapData += `</OtherMetadata>`;
        }
      });
    }
    soapData += `</Other>`;
    soapData += `</OrderChangeMetadata>`;
  }
  soapData += `</Query>`;
  soapData += `<DataLists>`;
  soapData += tmpSoapDataRecognizedTravelerList;
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
      if (fltSeg.Departure.Terminal !== undefined && fltSeg.Departure.Terminal.Name !== undefined) {
        soapData += `<Terminal><Name>${fltSeg.Departure.Terminal.Name}</Name></Terminal>`;
      }
      soapData += `</Departure>`;
      soapData += `<Arrival>`;
      soapData += `<AirportCode>${fltSeg.Arrival.AirportCode}</AirportCode>`;
      soapData += `<Date>${fltSeg.Arrival.Date}</Date>`;
      soapData += `<Time>${fltSeg.Arrival.Time}</Time>`;
      soapData += `<AirportName>${fltSeg.Arrival.AirportName}</AirportName>`;
      if (fltSeg.Arrival.Terminal !== undefined && fltSeg.Arrival.Terminal.Name !== undefined) {
        soapData += `<Terminal><Name>${fltSeg.Arrival.Terminal.Name}</Name></Terminal>`;
      }
      soapData += `</Arrival>`;
      soapData += `<MarketingCarrier>`;
      soapData += `<AirlineID>${fltSeg.MarketingCarrier.AirlineID}</AirlineID>`;
      soapData += `<Name>${fltSeg.MarketingCarrier.Name}</Name>`;
      soapData += `<FlightNumber>${fltSeg.MarketingCarrier.FlightNumber}</FlightNumber>`;
      soapData += `</MarketingCarrier>`;
      soapData += `<OperatingCarrier>`;
      soapData += `<AirlineID>${fltSeg.OperatingCarrier.AirlineID}</AirlineID>`;
      soapData += `<Name>${fltSeg.OperatingCarrier.Name}</Name>`;
      soapData += `</OperatingCarrier>`;
      soapData += `<Equipment>`;
      soapData += `<AircraftCode>${fltSeg.Equipment.AircraftCode}</AircraftCode>`;
      soapData += `<Name>${fltSeg.Equipment.AircraftCode}</Name>`;
      soapData += `</Equipment>`;
      soapData += `<ClassOfService>`;
      soapData += `<Code>${tmpFltSeg.ClassCode}</Code>`;
      soapData += `<MarketingName CabinDesignator="${tmpFltSeg.ClassCode}">${tmpFltSeg.ClassMarketingName}</MarketingName>`;
      soapData += `</ClassOfService>`;
      soapData += `<FlightDetail>`;
      soapData += `<FlightDuration>`;
      soapData += `<Value>${fltSeg.FlightDetail.FlightDuration.Value}</Value>`;
      soapData += `</FlightDuration>`;
      if (fltSeg.FlightDetail.hasOwnProperty('Stops')) {
        soapData += `<Stops>`;
        soapData += `<StopQuantity>${fltSeg.FlightDetail.Stops.StopQuantity}</StopQuantity>`;
        soapData += `<StopLocations/>`;
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
  soapData += buildSOAPEnd("OrderChangeRQ");
  return soapData;
};

module.exports = ItinReshopOrderChange;