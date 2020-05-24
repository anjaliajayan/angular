const  {soapConst} = require('../../config/soap_const')
let { getOrgDetails, getLocationInfoByIp } = require("../helpers/utils");

let SeatAvailabilityRQ = async (req) => {
    let resultOrgDetails = getOrgDetails(req)
    if (!resultOrgDetails.auth) {
        return '';
    }
    let locationData = getLocationInfoByIp(req)
    let params = req.body;
    const myFlightSegmentList = Array.isArray(params.dataList) ? params.dataList : [params.dataList]
    
    let soapData = `<?xml version="1.0" encoding="UTF-8"?>`;
    soapData = `<soapenv:Envelope xmlns:edis="${soapConst.envelope.attr_xmlns_iataIataEdis}" xmlns:head="${soapConst.envelope.attr_xmlns_tpconnectsSecurityHeader}" xmlns:soapenv="${soapConst.envelope.attr_xmlns_xmlsoapSoapEnvelope}">`;
    soapData += `<soapenv:Header>`;
    soapData += `<head:SecurityHeader>`;
    soapData += `<agent>${resultOrgDetails.agent}</agent><apiKey>${resultOrgDetails.api_key}</apiKey><secretKey>${resultOrgDetails.secret_key}</secretKey>`;
    soapData += `</head:SecurityHeader>`;
    soapData += `</soapenv:Header>`;
    soapData += `<soapenv:Body>`;
    soapData += `<SeatAvailabilityRQ xmlns="${soapConst.envelope.attr_xmlns_iataIataEdis}" Version="1.1.4" EchoToken="${params.EchoToken}">`;
    soapData += `<PointOfSale>`;
    soapData += `<Location><CountryCode>${locationData.country?locationData.country:"AE"}</CountryCode><CityCode>${locationData.city?locationData.city:"Dubai"}</CityCode></Location>`;
    soapData += `<TouchPoint><Device><Code>${locationData.ip}</Code><Definition>${locationData.browser?locationData.browser:'Web Browser'}</Definition><Position><Latitude>${locationData.latitude?locationData.latitude:'25.2582'}</Latitude><Longitude>${locationData.longitude?locationData.longitude:'55.3047'}</Longitude><NAC>9KD7V PGGM0</NAC></Position></Device></TouchPoint>`;
    soapData += `</PointOfSale>`;
    soapData += `<Document><Name>${soapConst.envelope.body.document.metadata}</Name><ReferenceVersion>${soapConst.envelope.body.document.ref_ver}</ReferenceVersion></Document>`;
    soapData += `<Party>`;
    soapData += `<Sender>`;
    soapData += `<AggregatorSender>`;
    soapData += `<Name>TpConnects</Name>`;
    soapData += `<Category><Code>M</Code><Definition>${soapConst.envelope.body.document.metadata}</Definition></Category>`;
    soapData += `<AggregatorID>travelfusion</AggregatorID>`;
    soapData += `</AggregatorSender>`;
    soapData += `</Sender>`;
    soapData += `<Participants>`;
    soapData += `<Participant>`;
    soapData += `<TravelAgencyParticipant SequenceNumber="1">`;
    soapData += `<Name>Tpconnects</Name>`;
    soapData += `<Type>TravelAgency</Type>`;
    soapData += `<Contacts>`;
    soapData += `<Contact>`;
    soapData += `<EmailContact>`;
    soapData += `<Address>bookings@tpconnects.com</Address>`;
    soapData += `</EmailContact>`;
    soapData += `</Contact>`;
    soapData += `</Contacts>`;
    soapData += `<PseudoCity>1F8</PseudoCity>`;
    soapData += `<IATA_Number>86200213</IATA_Number>`;
    soapData += `<AgencyID Owner="A3">1001</AgencyID>`;
    soapData += `<AgentUser>`;
    soapData += `<Name>Tpconnects</Name>`;
    soapData += `<AgentUserID>1980</AgentUserID>`;
    soapData += `<UserRole>Admin</UserRole>`;
    soapData += `</AgentUser>`;
    soapData += `</TravelAgencyParticipant>`;
    soapData += `</Participant>`;
    soapData += `</Participants>`;
    soapData += `</Party>`;
    soapData += `<Parameters>`;
    soapData += `<Languages><LanguageCode ObjectKey="${soapConst.envelope.body.primaryLangID}">${soapConst.envelope.body.primaryLangID}</LanguageCode></Languages>`;
    soapData += `<CurrCodes><CurrCode>${resultOrgDetails.currency_code}</CurrCode></CurrCodes>`;
    soapData += `</Parameters>`;
    soapData += `<Metadata>`;
    soapData += `<Other>`;
    soapData += `<OtherMetadata>`;
    soapData += `<CurrencyMetadatas>`;
    soapData += `<CurrencyMetadata MetadataKey="DisplayCurrency">`;
    soapData += `<Application>DisplayCurrency</Application>`;
    soapData += `<Decimals>2</Decimals>`;
    soapData += `<Name>INR</Name>`;
    soapData += `</CurrencyMetadata>`;
    soapData += `</CurrencyMetadatas>`;
    soapData += `</OtherMetadata>`;
    soapData += `</Other>`;
    soapData += `</Metadata>`;

    //dynamic 
    // Query
    soapData += `<Query>`;
    soapData += `<OrderID Owner="${params.SupplierOwner.text}"/>`;
    soapData += `<Offers>`;
    soapData += `<Offer>`;
    soapData += `<OfferID Owner="${params.SupplierOwner.text}">${params.currentOfferID}</OfferID>`;
    soapData += `<OfferItemIDs>`;
    soapData += `<OfferItemID Owner="${params.Owner}"/>`;
    soapData += `</OfferItemIDs>`;
    soapData += `</Offer>`;
    soapData += `</Offers>`;
    soapData += `</Query>`;

    // dynamic
    // Datalist
    soapData += `<DataLists>`;
    soapData += `<FlightSegmentList>`;
    myFlightSegmentList.map((_value, _valueIndex) => {
        soapData += `<FlightSegment SegmentKey="${_value.attributes.SegmentKey}">`;
        soapData += `<Departure>`;
        soapData += `<AirportCode>${_value.Departure.AirportCode.text}</AirportCode>`;
        soapData += `<Date>${_value.Departure.Date.text}</Date>`;
        soapData += `<Time>${_value.Departure.Time.text}</Time>`;
        if (_value.Departure.hasOwnProperty('AirportName')) {
            soapData += `<AirportName>${_value.Departure.AirportName ? _value.Departure.AirportName.text : ""}</AirportName>`;
        }
        if (_value.Departure.hasOwnProperty('Terminal')) {
            soapData += `<Terminal>`;
            if (_value.Departure.Terminal.hasOwnProperty('Name') && _value.Departure.Terminal.Name.hasOwnProperty('text')) {
                soapData += `<Name>${_value.Departure.Terminal.Name.text}</Name>`;
            }
            soapData += `</Terminal>`;
        }
        soapData += `</Departure>`;
        soapData += `<Arrival>`;
        soapData += `<AirportCode>${_value.Arrival.AirportCode.text}</AirportCode>`;
        soapData += `<Date>${_value.Arrival.Date.text}</Date>`;
        soapData += `<Time>${_value.Arrival.Time.text}</Time>`;
        if (_value.Arrival.hasOwnProperty('AirportName')) {
            soapData += `<AirportName>${_value.Arrival.AirportName ? _value.Arrival.AirportName.text : ""}</AirportName>`;
        }
        if (_value.Arrival.hasOwnProperty('Terminal')) {
            soapData += `<Terminal>`;
            if (_value.Arrival.Terminal.hasOwnProperty('Name') && _value.Arrival.Terminal.Name.hasOwnProperty('text')) {
                soapData += `<Name>${_value.Arrival.Terminal.Name.text}</Name>`;
            }
            soapData += `</Terminal>`;
        }
        soapData += `</Arrival>`;
        soapData += `<MarketingCarrier>`;
        soapData += `<AirlineID>${_value.MarketingCarrier.AirlineID.text}</AirlineID>`;
        soapData += `<Name>${_value.MarketingCarrier.Name.text}</Name>`;
        soapData += `<FlightNumber>${_value.MarketingCarrier.FlightNumber.text}</FlightNumber>`;
        soapData += `</MarketingCarrier>`;
        soapData += `<OperatingCarrier>`;
        soapData += `<AirlineID>${_value.OperatingCarrier.AirlineID.text}</AirlineID>`;
        soapData += `<Name>${_value.OperatingCarrier.Name.text}</Name>`;
        soapData += `<FlightNumber>${_value.OperatingCarrier.FlightNumber.text}</FlightNumber>`;
        soapData += `</OperatingCarrier>`;
        soapData += `<Equipment>`;
        soapData += `<AircraftCode>${_value.Equipment.AircraftCode.text}</AircraftCode>`;
        soapData += `<Name>${_value.Equipment.AircraftCode.text}</Name>`;
        soapData += `</Equipment>`;
        soapData += `<FlightDetail>`;
        soapData += `<FlightDuration>`;
        soapData += `<Value>${_value.FlightDetail.FlightDuration.Value.text}</Value>`;
        soapData += `</FlightDuration>`;
        soapData += `<Stops><StopQuantity>0</StopQuantity><StopLocations/></Stops>`;
        soapData += `</FlightDetail>`;
        soapData += `<ClassOfService>`;
        if (params.ClassOfService && params.ClassOfService.Code.attributes.hasOwnProperty('SeatsLeft') && params.ClassOfService.Code.hasOwnProperty('text')) {
            soapData += `<Code SeatsLeft="${params.ClassOfService.Code.attributes.SeatsLeft}">${params.ClassOfService.Code.text["#text"]}</Code>`;
        }
        if (params.ClassOfService && params.ClassOfService.hasOwnProperty('MarketingName')) {
            soapData += `<Name`;
            if (params.ClassOfService.MarketingName.hasOwnProperty('attributes') &&
                params.ClassOfService.MarketingName.attributes.hasOwnProperty('CabinDesignator') && params.ClassOfService.MarketingName.attributes.CabinDesignator !== 'undefined') {
                soapData += ` CabinDesignator="${params.ClassOfService.MarketingName.attributes.CabinDesignator}"`;
            } else {
                soapData += ` CabinDesignator=""`;
            }
            if (params.ClassOfService.MarketingName.hasOwnProperty('text') && params.ClassOfService.MarketingName.text !== 'undefined' && params.ClassOfService.MarketingName.text !== '') {
                soapData += `>${params.ClassOfService.MarketingName.text["#text"]}</Name>`;
            } else {
                soapData += `>ECONOMY</Name>`;
            }
        }
        soapData += `</ClassOfService>`; 
        soapData += `</FlightSegment>`;
    })
    soapData += `</FlightSegmentList>`;
    soapData += `<AnonymousTravelerList><AnonymousTraveler ObjectKey="PAX1"><PTC Quantity="1">ADT</PTC><Age>Array</Age></AnonymousTraveler></AnonymousTravelerList><FareList><FareGroup/></FareList>`;
    soapData += `</DataLists>`;
    soapData += `</SeatAvailabilityRQ>`;
    soapData += `</soapenv:Body>`;
    soapData += `</soapenv:Envelope>`;
    return soapData;
}
module.exports = SeatAvailabilityRQ
