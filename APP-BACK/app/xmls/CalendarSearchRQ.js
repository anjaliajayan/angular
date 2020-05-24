let { convertToArray } = require("./../helpers/utils");
let CalendarSearch = (agent, apiKey, secretKey, reqData) => {
  let data = reqData.data;
  let _currency = "";
  // Prepare some constants
  // Search for currency, it will be the last element inside
  // Metadata -> Other -> OtherMetadata
  let listOtherMetadata = convertToArray(data.Metadata.OtherMetadata);
  listOtherMetadata.filter(obj => obj.CurrencyMetadatas.CurrencyMetadata["@MetadataKey"] === "DisplayCurrency");
  if (listOtherMetadata.length === 1) {
    _currency = listOtherMetadata[0].CurrencyMetadatas.CurrencyMetadata.Name;
  }

  let soapData = `<soapenv:Envelope xmlns:edis="http://www.iata.org/IATA/EDIST" xmlns:head="http://tpconnects.com/security/header" xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/">`;
  soapData += `<soapenv:Header><head:SecurityHeader>`;
  soapData += `<agent>${agent}</agent><apiKey>${apiKey}</apiKey><secretKey>${secretKey}</secretKey>`;
  soapData += `</head:SecurityHeader></soapenv:Header>`;
  soapData += `<soapenv:Body>`;
  soapData += `<CalendarSearchRQ xmlns="http://www.iata.org/IATA/EDIST" AltLangID="EN" EchoToken="${data.echoToken}" PrimaryLangID="EN" Version="1.1.5">`;
  soapData += `<PointOfSale>`;
  soapData += `<Location><CountryCode/><CityCode/></Location>`;
  soapData += `<TouchPoint><Device><Code/><Definition/><Position><Latitude/><Longitude/><NAC /></Position></Device></TouchPoint>`;
  soapData += `</PointOfSale>`;
  soapData += `<Document><Metadata>NDC GATEWAY</Metadata><Name/><ReferenceVersion>16.1</ReferenceVersion></Document>`;
  soapData += `<Party><Sender><AggregatorSender><Name>TpConnects</Name><Category><Code>M</Code><Definition>NDC GATEWAY</Definition></Category><AggregatorID>travelfusion</AggregatorID></AggregatorSender></Sender></Party>`;
  soapData += `<Parameters><Languages><LanguageCode ObjectKey="en">en</LanguageCode></Languages><CurrCodes><CurrCode>${_currency}</CurrCode></CurrCodes><Parameters/>`;
  soapData += `<Travelers>`;
  let travelerList = convertToArray(data.DataLists.AnonymousTravelerList);
  travelerList.map((obj, index) => {
    let traveler = obj.AnonymousTraveler;
    soapData += `<Traveler>`;
    soapData += `<AnonymousTraveler ObjectKey="${traveler["@ObjectKey"]}">`;
    soapData += `<PTC Quantity="${traveler.PTC["@Quantity"]}">${traveler.PTC}</PTC>`;
    soapData += `<Age>`;
    soapData += `<Value UOM="${traveler.Age.Value["@UOM"]}">${traveler.Age.Value}</Value>`;
    soapData += `</Age>`;
    soapData += `</AnonymousTraveler>`;
    soapData += `</Traveler>`;
  });
  soapData += `</Travelers>`;
  soapData += `<CoreQuery><OriginDestinations>`;
  let originDestinationList = convertToArray(data.DataLists.OriginDestinationList);
  originDestinationList.map((obj, index) => {
    let originDestination = obj.OriginDestination;
    soapData += `<OriginDestination>`;
    soapData += `<Departure>`;
    soapData += `<AirportCode>${originDestination.DepartureCode}</AirportCode>`;
    soapData += `<Date>NOT_FOUND_IN_JSON</Date>`;
    soapData += `</Departure>`;
    soapData += `<Arrival>`;
    soapData += `<AirportCode>${originDestination.ArrivalCode}</AirportCode>`;
    soapData += `</Arrival>`;
    soapData += `<CalendarDates DaysBefore="3" DaysAfter="3"/>`;
    soapData += `</OriginDestination>`;
  });
  soapData += `</OriginDestinations></CoreQuery>`;

  soapData += `<Preference>`;
  soapData += `<CabinPreferences>`;
  soapData += `<CabinType>`;
  soapData += `<Code>Y</Code>`;
  soapData += `<Definition>Y</Definition>`;
  soapData += `</CabinType>`;
  soapData += `</CabinPreferences>`;
  soapData += `<FarePreferences>`;
  soapData += `<Types>`;
  soapData += `<Type>`;
  soapData += `<Code>759-0</Code>`;
  soapData += `<Definition>Lowest Fare</Definition>`;
  soapData += `</Type>`;
  soapData += `<Type>`;
  soapData += `<Code>0</Code>`;
  soapData += `<Definition>Nego Fare</Definition>`;
  soapData += `</Type>`;
  soapData += `</Types>`;
  soapData += `</FarePreferences>`;
  soapData += `</Preference>`;

  soapData += `<Metadata><Other>`;
  let otherMetadataList = convertToArray(data.Metadata.Other.OtherMetadata);
  otherMetadataList.map((otherMeta, index) => {
    soapData += `<OtherMetadata>`;
    soapData += `<CurrencyMetadatas>`;
    soapData += `<CurrencyMetadata MetadataKey="${otherMeta.CurrencyMetadatas.CurrencyMetadata["@MetadataKey"]}">`;
    soapData += `<Decimals>${otherMeta.CurrencyMetadatas.CurrencyMetadata.Decimals}</Decimals>`;
    soapData += `<Name>${otherMeta.CurrencyMetadatas.CurrencyMetadata.Name}</Name>`;
    soapData += `</CurrencyMetadata>`;
    soapData += `</CurrencyMetadatas>`;
    soapData += `</OtherMetadata>`;
  });
  soapData += `</Other></Metadata>`;
  soapData += `</Query></CalendarSearchRQ></soapenv:Body></soapenv:Envelope>`;

  return soapData;
};

module.exports = CalendarSearch;
