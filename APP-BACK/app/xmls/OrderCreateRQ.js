const _ = require('lodash');
const {buildSOAPStart, buildSOAPQueryPassengers, buildSOAPEnd} = require('../../config/soap_const');
let {
  getOrgDetails,
  getUserDetails,
  convertToArray
} = require("./../helpers/utils");

let OrderCreate = async (req) => {
  let resultOrgDetails = [];
  console.log("THIS IS MY BOOKING",req.body)
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

  //let resultOrgDetails = getOrgDetails(req);
  let errorList ={};
  if (!resultOrgDetails.auth) {
    errorList.push("Not authorized to access OrderCreate");
    return errorList;
  }
  let data = req.body;

  let myFareList = data.DataLists.FareList;
  let myFlightList = data.DataLists.FlightList;
  let myFlightSegmentList = convertToArray(data.DataLists.FlightSegmentList);
  let myOriginDestinationList = data.DataLists.OriginDestinationList;
  let myAnonymousTraveller = data.AnonymousTravelersListInfo;
  let myAirlineOffer = _.values(data.AirlineOffer)[0];
  let myPaxFormList = data.PaxForms;
  let myPaymentList = data.Payments;
  let soapData = buildSOAPStart("OrderCreateRQ", req, resultOrgDetails);
  soapData += `<Query>`;
  soapData += buildSOAPQueryPassengers(myPaxFormList, myAnonymousTraveller, myPaymentList);
  soapData += `<OrderItems>`;
  soapData += `<ShoppingResponse>`;
  soapData += `<Owner>${myAirlineOffer.OfferID.attributes.Owner}</Owner>`;
  soapData += `<ResponseID>ResponseID</ResponseID>`;
  soapData += `<Offers>`;
  soapData += `<Offer>`;
  soapData += `<OfferID Owner="${myAirlineOffer.OfferID.attributes.Owner}">${myAirlineOffer.OfferID.text}</OfferID>`;
  soapData += `<OfferItems>`;
  let pax_info_tmp;
  if (myAirlineOffer.PricedOffer.OfferPrice.length > 1) {
    myAirlineOffer.PricedOffer.OfferPrice.forEach((offerItmId, index) => {
      soapData += `<OfferItem>`;
      soapData += `<OfferItemID Owner="${myAirlineOffer.OfferID.attributes.Owner}">${offerItmId.attributes.OfferItemID}</OfferItemID>`;
      soapData += `<Passengers>`;
      let myPax = ``;
      offerItmId.RequestedDate.Associations.forEach(pax => {
        myPax += pax.AssociatedTraveler.TravelerReferences.text + ` `;
      })
      soapData += `<PassengerReference>${myPax.trim()}</PassengerReference>`;
      soapData += `</Passengers>`;
      soapData += `</OfferItem>`;
    })
  } else {
    myAirlineOffer.PricedOffer.OfferPrice.forEach(paxTemp => {
      paxTemp.RequestedDate.Associations.forEach(e => {
        if (e.AssociatedTraveler.TravelerReferences.text.split(" ").length > 1) {
          pax_info_tmp = e.AssociatedTraveler.TravelerReferences.text.split(" ");
          console.log("PAXTEMP", pax_info_tmp);
          soapData += `<OfferItem>`;
          soapData += `<OfferItemID Owner="${myAirlineOffer.OfferID.attributes.Owner}">${myAirlineOffer.PricedOffer.OfferPrice[0].attributes.OfferItemID}</OfferItemID>`;
          soapData += `<Passengers>`;
          let myPax = ``;
          pax_info_tmp.forEach(pax => {
            myPax += pax + ` `;
          });
          soapData += `<PassengerReference>${myPax.trim()}</PassengerReference>`;
          soapData += `</Passengers>`;
          soapData += `</OfferItem>`;
        } else {
          soapData += `<OfferItem>`;
          soapData += `<OfferItemID Owner="${myAirlineOffer.OfferID.attributes.Owner}">${myAirlineOffer.PricedOffer.OfferPrice[0].attributes.OfferItemID}</OfferItemID>`;
          soapData += `<Passengers>`;
          let myPax = ``;
          myAirlineOffer.PricedOffer.OfferPrice[0].RequestedDate.Associations.forEach(pax => {
            myPax += pax.AssociatedTraveler.TravelerReferences.text + ` `;
          })
          soapData += `<PassengerReference>${myPax.trim()}</PassengerReference>`;
          soapData += `</Passengers>`;
          soapData += `</OfferItem>`;
        }
      })
    })
  }

  soapData += `</OfferItems>`;
  soapData += `</Offer>`;
  soapData += `</Offers>`;
  soapData += `</ShoppingResponse>`;
  soapData += `<OfferItem>`;
  soapData += `<OfferItemID Owner="${myAirlineOffer.OfferID.attributes.Owner}">1</OfferItemID>`;
  soapData += `<OfferItemType>`;
  soapData += `<OtherItem/>`;
  soapData += `</OfferItemType>`;
  soapData += `</OfferItem>`;
  soapData += `</OrderItems>`;
  soapData += `<Payments>`;
  soapData += `<Payment>`;
  soapData += `<Method>`;
  soapData += `<PaymentCard/>`;
  soapData += `</Method>`;
  soapData += `<Amount Code="${myAirlineOffer.TotalPrice.DetailCurrencyPrice.Total.attributes.Code}">${myAirlineOffer.TotalPrice.DetailCurrencyPrice.Total.text}</Amount>`;
  soapData += `</Payment>`;
  soapData += `</Payments>`;
  soapData += `<DataLists>`;
  soapData += `<FareList>`;
  myFareList.map((myFareGroup, myFareGroupIndex) => {
    soapData += `<FareGroup ListKey="${myFareGroup.attributes.ListKey}">`;
    soapData += `<Fare>`;
    if (myFareGroup.hasOwnProperty("Fare") && myFareGroup.Fare.hasOwnProperty("FareCode")) {
      soapData += `<FareCode><Code>${myFareGroup.Fare.FareCode.Code}</Code></FareCode>`;
    }
    let myFareComponent = null;

    myAirlineOffer.PricedOffer.OfferPrice.map((offerPrice) => {
      if (offerPrice.FareDetail && offerPrice.FareDetail.FareComponent) {
        offerPrice.FareDetail.FareComponent.map((tmpFareComponent) => {
          if (tmpFareComponent.attributes.refs === myFareGroup.attributes.ListKey) {
            myFareComponent = tmpFareComponent;
            return;
          }
          if (tmpFareComponent.attributes.refs == '') {
            myFareComponent = tmpFareComponent;
          }
        });
      }
      return;
    })

    if (myFareComponent !== null) {
      let mySegmentList = '';
      if (typeof myFareComponent.SegmentReference.text == 'string') {
        mySegmentList = myFareComponent.SegmentReference.text.split(" ");
      } else {
        mySegmentList = myFareComponent.SegmentReference.text['#text'].split(" ");
      }
      soapData += `<FareDetail>`;
      mySegmentList.map((segment, segmentIndex) => {
        soapData += `<FareComponent refs="${myFareComponent.attributes.refs}">`;
        if (typeof myFareComponent.SegmentReference.text == 'string') {
          soapData += `<SegmentReference>${segment}</SegmentReference>`;
        } else {
          soapData += `<SegmentReference OnPoint="${myFareComponent.SegmentReference.text.ON_Point}" OffPoint="${myFareComponent.SegmentReference.text.OFF_Point}">`;
          soapData += `${segment}</SegmentReference>`;
        }
        soapData += `</FareComponent>`;
      });
      soapData += `</FareDetail>`;
    }
    soapData += `</Fare>`;
    if (myFareGroup.hasOwnProperty("FareBasisCode") && myFareGroup.FareBasisCode.hasOwnProperty("Code")) {
      soapData += `<FareBasisCode><Code>${myFareGroup.FareBasisCode.Code}</Code></FareBasisCode>`;
    }
    if (myFareComponent !== null) {
      if (typeof myFareComponent.SegmentReference.text == 'string') {
        soapData += `<SegmentReference>${myFareComponent.SegmentReference.text}</SegmentReference>`;
      } else {
        soapData += `<SegmentReference OnPoint="${myFareComponent.SegmentReference.text.ON_Point}" OffPoint="${myFareComponent.SegmentReference.text.OFF_Point}">`;
        soapData += `${myFareComponent.SegmentReference.text["#text"]}</SegmentReference>`;
      }
    }
    soapData += `</FareGroup>`;
  });
  soapData += `</FareList>`;
  soapData += `<FlightList>`;
  myFlightList1 = objToArray(myFlightList)
  myFlightList1.forEach(myFlightList => {
    for (let [_key, _value] of Object.entries(myFlightList)) {
      if (_value.attributes.refs == undefined) {
        soapData += `<Flight FlightKey="${_value.attributes.FlightKey}" refs="${_value.SegmentReferences.text}">`;
      } else {
        soapData += `<Flight FlightKey="${_value.attributes.FlightKey}" refs="${_value.attributes.refs}">`;
      }

      soapData += `<Journey><Time>${_value.Journey.Time.text}</Time></Journey>`;
      soapData += `<SegmentReferences OnPoint="${_value.SegmentReferences.attributes.OnPoint}" OffPoint="${_value.SegmentReferences.attributes.OffPoint}">`;
      soapData += `${_value.SegmentReferences.text}</SegmentReferences>`;
      soapData += `<status>1</status><status_airline>1</status_airline><Layovers>1</Layovers>`;
      soapData += `</Flight>`;
    }
  })

  soapData += `</FlightList>`;
  soapData += `<FlightSegmentList>`;
  // console.log("FLIGHT SEGMENT LIST", myFlightSegmentList)
  myFlightSegmentList = objToArray(myFlightSegmentList);
  myFlightSegmentList.map((_value, _valueIndex) => {
    soapData += `<FlightSegment SegmentKey="${_value.attributes.SegmentKey}">`;
    soapData += `<Departure>`;
    soapData += `<AirportCode>${_value.Departure.AirportCode.text}</AirportCode>`;
    soapData += `<Date>${_value.Departure.Date.text}</Date>`;
    soapData += `<Time>${_value.Departure.Time.text}</Time>`;
    soapData += `<AirportName>${_value.Departure.AirportName.text}</AirportName>`;
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
    soapData += `<AirportName>${_value.Arrival.AirportName.text}</AirportName>`;
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
    if (_value.ClassOfService.Code.attributes.hasOwnProperty('SeatsLeft') &&
      _value.ClassOfService.Code.hasOwnProperty('text')) {
      soapData += `<Code SeatsLeft="${_value.ClassOfService.Code.attributes.SeatsLeft}">${_value.ClassOfService.Code.text["#text"]}</Code>`;
    }
    if (_value.ClassOfService.hasOwnProperty('MarketingName')) {
      soapData += `<MarketingName`;
      if (_value.ClassOfService.MarketingName.hasOwnProperty('attributes') &&
        _value.ClassOfService.MarketingName.attributes.hasOwnProperty('CabinDesignator') &&
        _value.ClassOfService.MarketingName.attributes.CabinDesignator !== 'undefined') {
        soapData += ` CabinDesignator="${_value.ClassOfService.MarketingName.attributes.CabinDesignator}"`;
      } else {
        soapData += ` CabinDesignator=""`;
      }
      if (_value.ClassOfService.MarketingName.hasOwnProperty('text') &&
        _value.ClassOfService.MarketingName.text !== 'undefined' &&
        _value.ClassOfService.MarketingName.text !== '') {
          if (_value.ClassOfService.MarketingName.text.hasOwnProperty("#text")) {
            soapData += `>${_value.ClassOfService.MarketingName.text["#text"]}</MarketingName>`;
          } else {
            soapData += `>${_value.ClassOfService.MarketingName.text}</MarketingName>`;
          }
      } else {
        soapData += `>ECONOMY</MarketingName>`;
      }
    }
    soapData += `</ClassOfService>`;
    soapData += `</FlightSegment>`;
  })
  soapData += `</FlightSegmentList>`;
  soapData += `<OriginDestinationList>`;
  for (let [_key, _value] of Object.entries(myOriginDestinationList)) {
    soapData += `<OriginDestination refs="${_value[0].flight}" OriginDestinationKey="${_value[0].OnPoint + _value[0].OffPoint}">`;
    soapData += `<DepartureCode>${_value[0].OnPoint}</DepartureCode>`;
    soapData += `<ArrivalCode>${_value[0].OffPoint}</ArrivalCode>`;
    soapData += `<FlightReferences>${_value[0].flight}</FlightReferences>`;
    soapData += `</OriginDestination>`;
  }
  soapData += `</OriginDestinationList>`;
  soapData += `</DataLists>`;
  if (data.hasOwnProperty("Metadata") && data.Metadata.hasOwnProperty("OtherMetadata")) {
    soapData += `<Metadata><Other>`;
    data.Metadata.OtherMetadata.map((myMeta, myMetaIndex) => {
      if (
        (myMeta.hasOwnProperty("CurrencyMetadata") && myMeta.CurrencyMetadata.hasOwnProperty("attributes") && myMeta.CurrencyMetadata.attributes.hasOwnProperty("MetadataKey")) ||
        (myMeta.hasOwnProperty("EquivalentID_Metadatas") && myMeta.EquivalentID_Metadatas[0].hasOwnProperty("EquivalentID_Metadata")) ||
        (myMeta.hasOwnProperty("RuleMetadata"))
      ) {
        soapData += `<OtherMetadata>`;
        if (myMeta.hasOwnProperty("EquivalentID_Metadatas") && myMeta.EquivalentID_Metadatas[0].hasOwnProperty("EquivalentID_Metadata")) {
          soapData += `<EquivalentID_Metadatas>`;
          soapData += `<EquivalentID_Metadata MetadataKey="${myMeta.EquivalentID_Metadatas[0].EquivalentID_Metadata.attributes.MetadataKey}">`;

          if (myMeta.EquivalentID_Metadatas[0].EquivalentID_Metadata.EquivID[0].attributes == undefined && myMeta.EquivalentID_Metadatas[0].EquivalentID_Metadata.EquivID[0].EquivalentID_Key) {
            soapData += `<EquivID MetadataKey="${myMeta.EquivalentID_Metadatas[0].EquivalentID_Metadata.EquivID[0].EquivalentID_Key}">`;
          } else if (myMeta.EquivalentID_Metadatas[0].EquivalentID_Metadata.EquivID[0].attributes !== undefined) {
            soapData += `<EquivID MetadataKey=''>`
          } else if (myMeta.EquivalentID_Metadatas[0].EquivalentID_Metadata.EquivID[0].attributes) {
            soapData += `<EquivID MetadataKey="${myMeta.EquivalentID_Metadatas[0].EquivalentID_Metadata.EquivID[0].attributes.MetadataKey}">`;
          }

          soapData += `<EquivalentID_Key>${myMeta.EquivalentID_Metadatas[0].EquivalentID_Metadata.EquivID[0].EquivalentID_Key}</EquivalentID_Key>`;
          if (myMeta.EquivalentID_Metadatas[0].EquivalentID_Metadata.EquivID[0].ID_Value == undefined && myMeta.EquivalentID_Metadatas[0].EquivalentID_Metadata.EquivID[0].EquivalentID_Key) {
            soapData += `<ID_Value>${myMeta.EquivalentID_Metadatas[0].EquivalentID_Metadata.EquivID[0].EquivalentID_Key}</ID_Value>`;
          } else {
            soapData += `<ID_Value>${myMeta.EquivalentID_Metadatas[0].EquivalentID_Metadata.EquivID[0].ID_Value}</ID_Value>`;
          }
          if (myMeta.EquivalentID_Metadatas[0].EquivalentID_Metadata.EquivID[0].Owner !== undefined) {
            soapData += `<Owner>${myMeta.EquivalentID_Metadatas[0].EquivalentID_Metadata.EquivID[0].Owner}</Owner>`;
          } else if (data.Owner !== undefined) {
            soapData += `<Owner>${data.Owner}</Owner>`;
          }
          soapData += `</EquivID>`;
          soapData += `</EquivalentID_Metadata>`;
          soapData += `</EquivalentID_Metadatas>`;
        } else if (myMeta.hasOwnProperty("CurrencyMetadata")) {
          soapData += `<CurrencyMetadatas>`;
          soapData += `<CurrencyMetadata MetadataKey="${myMeta.CurrencyMetadata.attributes.MetadataKey}">`;
          if (myMeta.CurrencyMetadata.hasOwnProperty("Application")) {
            soapData += `<Application>${myMeta.CurrencyMetadata.Application}</Application>`;
          }
          soapData += `<Decimals>${myMeta.CurrencyMetadata.Decimals ? myMeta.CurrencyMetadata.Decimals : ""}</Decimals>`;
          if (myMeta.CurrencyMetadata.hasOwnProperty("Name")) {
            soapData += `<Name>${myMeta.CurrencyMetadata.Name}</Name>`;
          }
          soapData += `</CurrencyMetadata>`;
          soapData += `</CurrencyMetadatas>`;
        } else if (myMeta.hasOwnProperty("RuleMetadata")) {
          soapData += `<RuleMetadatas>`;
          soapData += `<RuleMetadata MetadataKey="${myMeta.RuleMetadata.attributes.MetadataKey}">`;
          soapData += `<RuleID>${myMeta.RuleMetadata.RuleID}</RuleID>`;
          soapData += `<Name>${myMeta.RuleMetadata.Name}</Name>`;
          soapData += `<Values><Value><Instruction>${myMeta.RuleMetadata.Values.Value.Instruction}</Instruction></Value></Values>`;
          soapData += `<Remarks><Remark>${myMeta.RuleMetadata.Remarks.Remark}</Remark></Remarks>`;
          soapData += `</RuleMetadata>`;
          soapData += `</RuleMetadatas>`;
        }
        soapData += `</OtherMetadata>`;
      }
    });
    soapData += `</Other></Metadata>`;
  }
  soapData += `</Query>`;
  soapData += buildSOAPEnd("OrderCreateRQ");
  return soapData;
}

const objToArray = obj => (Array.isArray(obj) ? obj : [obj]);
module.exports = OrderCreate;

let dateToMoment = function (val) {
  try {
    let arr = val.split('/');
    return arr[2] + '-' + arr[0] + '-' + arr[1];
  } catch (error) {
    return "0000-00-00";
  }
}
