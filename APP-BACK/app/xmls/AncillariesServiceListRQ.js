var moment = require("moment");
let { convertToArray } = require("./../helpers/utils");
let AncillariesServiceList = (agent, apiKey, secretKey, reqData) => {
  let data = reqData.data;
  let soapData = `<soapenv:Envelope xmlns:head="http://tpconnects.com/security/header" xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/">`;
  soapData += `<soapenv:Header><head:SecurityHeader>`;
  soapData += `<agent>${agent}</agent><apiKey>${apiKey}</apiKey><secretKey>${secretKey}</secretKey>`;
  soapData += `</head:SecurityHeader></soapenv:Header>`;
  soapData += `<soapenv:Body>`;
  soapData += `<ServiceListRQ xmlns="http://www.iata.org/IATA/EDIST" Version="16.2" EchoToken="${data.echoToken}" Target="Production" TransactionIdentifier="12" SequenceNmbr="1" PrimaryLangID="ENG">`;
  soapData += `<PointOfSale>`;
  soapData += `<Location><CountryCode>AE</CountryCode><CityCode>Dubai</CityCode></Location>`;
  soapData += `<RequestTime Zone="EST">2019-12-16T08:53:28+02:00</RequestTime>`;
  soapData += `</PointOfSale>`;
  soapData += `<Document><Name>NDC GATEWAY</Name><ReferenceVersion>16.1</ReferenceVersion></Document>`;
  soapData += `<Party>`;
  soapData += `<Sender><AggregatorSender><Name>TpConnects</Name><Category><Code>M</Code><Definition>NDC GATEWAY</Definition></Category><AggregatorID>1T</AggregatorID></AggregatorSender></Sender>`;
  soapData += `<Participants>`;
  soapData += `<Participant>`;
  soapData += `<TravelAgencyParticipant SequenceNumber="1">`;
  soapData += `<Name>Flight Center</Name>`;
  soapData += `<Type>TravelAgency</Type>`;
  soapData += `<Contacts>`;
  soapData += `<Contact>`;
  soapData += `<EmailContact>`;
  soapData += `<Address>travelfusion@flightcentre.co.uk</Address>`;
  soapData += `</EmailContact>`;
  soapData += `</Contact>`;
  soapData += `</Contacts>`;
  soapData += `<PseudoCity>1F8</PseudoCity>`;
  soapData += `<IATA_Number>2212345</IATA_Number>`;
  soapData += `<AgencyID Owner="BA7">BA7</AgencyID>`;
  soapData += `<AgentUser>`;
  soapData += `<Name>tpconnects</Name>`;
  soapData += `<AgentUserID>66036603</AgentUserID>`;
  soapData += `<UserRole>Admin</UserRole>`;
  soapData += `</AgentUser>`;
  soapData += `</TravelAgencyParticipant>`;
  soapData += `</Participant>`;
  soapData += `</Participants>`;
  soapData += `</Party>`;
  if (data.hasOwnProperty("Passengers")) {
    let Travelers = convertToArray(data.Passengers);
    if (Travelers.length > 0) {
      soapData += `<Travelers>`;
      Travelers.map((pax, paxIndex) => {
        soapData += `<Traveler>`;
        soapData += `<AnonymousTraveler ObjectKey="${pax.pax_ref_key}">`;
        soapData += `<PTC Quantity="1">${pax.pax_type}</PTC>`;
        soapData += `</AnonymousTraveler>`;
        soapData += `</Traveler>`;
      });
      soapData += `</Travelers>`;
    }
  }
  soapData += `<Query>`;
  soapData += `<OrderID Owner="${data.OrderID.Owner}">${data.OrderID.PNR}</OrderID>`;
  let tmpSoapDataBookingReferenceList = ``;
  if (data.hasOwnProperty("BookingReferences")) {
    let BookingReferenceList = convertToArray(data.BookingReferences.BookingReference);
    if (BookingReferenceList.length > 0) {
      tmpSoapDataBookingReferenceList = `<BookingReferences>`;
      BookingReferenceList.map((bookingReference, index) => {
        tmpSoapDataBookingReferenceList += `<BookingReference>`;
        tmpSoapDataBookingReferenceList += `<ID>${bookingReference.ID}</ID>`;
        tmpSoapDataBookingReferenceList += `<OtherID Name="${bookingReference.OtherID["@Name"]}">${bookingReference.OtherID["@"]}</OtherID>`;
        tmpSoapDataBookingReferenceList += `</BookingReference>`;
      });
      tmpSoapDataBookingReferenceList += `</BookingReferences>`;
    }
  }
  soapData += tmpSoapDataBookingReferenceList;
  if (data.hasOwnProperty("PrevBookingList")) {
    let tmpPrevBookingList = convertToArray(data.PrevBookingList);
    tmpPrevBookingList.map((prevBooking, prevBookingIndex) => {
    let tmpSegmentList = convertToArray(prevBooking.SegmentList);
    soapData += `<OriginDestination>`;
    tmpSegmentList.map((flight, flightIndex) => {
      soapData += `<Flight>`;
      soapData += `<SegmentKey>${flight.segment_id}</SegmentKey>`;
      soapData += `<Departure>`;
      soapData += `<AirportCode>${flight.segment_departure_airport_code}</AirportCode>`;
      soapData += `<Date>${moment(flight.segment_departure_date).format("YYYY-MM-DD")}</Date>`;
      if (flight.hasOwnProperty("segment_departure_time") && flight.segment_departure_time !== null) {
        soapData += `<Time>${flight.segment_departure_time.substring(0, 5)}</Time>`;
      } else {
        soapData += `<Time>:</Time>`;
      }
      soapData += `<AirportName>${flight.segment_departure_airport_name}</AirportName>`;
      soapData += `</Departure>`;
      soapData += `<Arrival>`;
      soapData += `<AirportCode>${flight.segment_arrival_airport_code}</AirportCode>`;
      soapData += `<Date>${moment(flight.segment_arrival_date).format("YYYY-MM-DD")}</Date>`;
      soapData += `<Time/>`;
      soapData += `<AirportName>${flight.segment_arrival_airport_name}</AirportName>`;
      soapData += `</Arrival>`;
      soapData += `<MarketingCarrier>`;
      soapData += `<AirlineID>${flight.segment_marketing_airline_id}</AirlineID>`;
      soapData += `<Name>${flight.segment_marketing_airline_name}</Name>`;
      soapData += `<FlightNumber>${flight.segment_marketing_flight_number}</FlightNumber>`;
      soapData += `</MarketingCarrier>`;
      soapData += `<OperatingCarrier>`;
      soapData += `<AirlineID>${flight.segment_operating_airline_id}</AirlineID>`;
      soapData += `<Name>${flight.segment_operating_airline_name}</Name>`;
      soapData += `<FlightNumber/>`;
      soapData += `</OperatingCarrier>`;
      soapData += `<Equipment>`;
      soapData += `<AircraftCode>${flight.segment_aircraft_code}</AircraftCode>`;
      soapData += `<Name>${flight.equipment_name}</Name>`;
      soapData += `</Equipment>`;
      soapData += `<ClassOfService>`;
      soapData += `<Code>${flight.segment_seatingClassCode}</Code>`;
      soapData += `<MarketingName>${flight.segment_seatingClass}</MarketingName>`;
      soapData += `</ClassOfService>`;
      soapData += `</Flight>`;
    });
      soapData += `</OriginDestination>`;
    });
  }
  soapData += `</Query>`;
  if (data.hasOwnProperty("Metadata")
  && data.Metadata.hasOwnProperty("Other")
  && data.Metadata.Other.hasOwnProperty("OtherMetadata")
  && data.Metadata.Other.OtherMetadata.hasOwnProperty("CurrencyMetadatas")
  && data.Metadata.Other.OtherMetadata.CurrencyMetadatas.hasOwnProperty("CurrencyMetadata")) {
    soapData += `<Metadata><Other><OtherMetadata>`;
    let myOtherMetadataList = convertToArray(data.Metadata.Other.OtherMetadata);
    myOtherMetadataList.map((metadata, metadataIndex) => {
      let myMetadata = metadata.CurrencyMetadatas.CurrencyMetadata;
      if (myMetadata['@MetadataKey'] === 'DisplayCurrency') {
      soapData += `<CurrencyMetadatas>`;
      soapData += `<CurrencyMetadata MetadataKey="DisplayCurrency">`;
      soapData += `<Application>DisplayCurrency</Application>`;
      soapData += `<Decimals>${myMetadata.Decimals}</Decimals>`;
      soapData += `<Name>${myMetadata.Name}</Name>`;
      soapData += `</CurrencyMetadata>`;
      soapData += `</CurrencyMetadatas>`;
      }
    });
    soapData += `</OtherMetadata></Other></Metadata>`;
  }
  soapData += `</ServiceListRQ></soapenv:Body></soapenv:Envelope>`;
  return soapData;
};

module.exports = AncillariesServiceList;
