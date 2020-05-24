
const parser = require('fast-xml-parser');
var fs = require('fs');
// let xmlObject = require("./FS-apiresponse_2way.txt");

// let filename = '__test.txt';
let filename = '_2way.txt';
if( process.argv[2] == 1)
  filename = '_1way.txt'
if( process.argv[2] == 2)
  filename = '_2way.txt'
if( process.argv[2] == 3)
  filename = '_3way.txt'

let xmlObject = fs.readFileSync(__dirname+'/../../data/testxmls/'+filename, "utf8");
const config = require("./../../config/config");

let url = config.api.flightConnectServiceURL;


let jsonObj = parser.parse(xmlObject, config.pkgConfigs.x2joptions);


let makeArrayIfObject = (obj) =>{
    if(!obj)
      return [];
    if(Array.isArray(obj))
      return obj;
    return [obj];
}

let parseAirlineOffers = ( AirlineOffers ) => {
    AirlineOffers = makeArrayIfObject( AirlineOffers ) ;
    let tmp_AirlineOffers = []
    AirlineOffers.map(_airlineOffer => {
        // console.log('offer ', _airlineOffer.Owner)
        let airlineOfferObj = {
            owner : _airlineOffer.Owner,
            // snapshot: _airlineOffer.AirlineOfferSnapshot,
            offers: []
        };
        _airlineOffer.AirlineOffer = makeArrayIfObject( _airlineOffer.AirlineOffer );
        _airlineOffer.AirlineOffer.map( (offer, iii) => {
            let tmp_Offer = {
                TotalPrice: offer.TotalPrice.DetailCurrencyPrice.Total,
                PriceClass: makeArrayIfObject( offer.PricedOffer.OfferPrice ),
                OfferPrice: offer.PricedOffer.Associations.ApplicableFlight,
                OfferObjectComplete: offer,
            }
            airlineOfferObj.offers.push( tmp_Offer )
        });
        tmp_AirlineOffers.push( airlineOfferObj );
    });
    // // console.log('airline offer s', JSON.stringify(tmp_AirlineOffers))
    return tmp_AirlineOffers;
}

let getServiceClass = ( flight, airlineOffers ) => {
    let AirlineOffers = airlineOffers.filter(offer => { return offer["OfferPrice"]["FlightReferences"] == flight["@FlightKey"] });
    return AirlineOffers;
}

let getFlightSegments = (SegmentReferences, FlightSegments, airlineOffers) => {
    SegmentReferences = SegmentReferences.split(" ");
    let segments = [];
    SegmentReferences.map(obj => {
        segments = segments.concat( FlightSegments.filter(segment => { return  obj ==  segment["@SegmentKey"]}) )
    })
    return segments
}

let getflights = (FlightReferences, responseObject, airlineOffers) => {
    
    let FlightList = responseObject.DataLists.FlightList.Flight;
    FlightList = makeArrayIfObject( FlightList )
    let FlightSegments = responseObject.DataLists.FlightSegmentList.FlightSegment;
    FlightSegments = makeArrayIfObject( FlightSegments )

    let output = [];
    FlightReferences.map(obj => {
        output = output.concat( FlightList.filter(flight => {return flight["@FlightKey"] == obj }) )
    })

    output.map(flight => {
      // // console.log('flight => ', flight.SegmentReferences);
      let segmentString = '';
      if( typeof flight.SegmentReferences == 'string' )
        segmentString = flight.SegmentReferences;
      else
        segmentString = flight.SegmentReferences["#text"]

      flight.segments = getFlightSegments( segmentString, FlightSegments, airlineOffers);
      flight.AirlineOffers = getServiceClass(flight, airlineOffers)
    })

    return output;
}

let parseData = ( tmpjson ) => {

  // if(tmpjson)
  //   jsonObj = tmpjson;

  let responseObj = jsonObj.Envelope.Body.AirShoppingRS;
  if(responseObj.Errors){
    return {error: responseObj.Errors.Error}
  }
  let OutputData = []

  let OfferGroups = responseObj.OffersGroup
  let AirlineOffers = parseAirlineOffers(OfferGroups.AirlineOffers);
  let OriginDestinations = responseObj["DataLists"]["OriginDestinationList"]["OriginDestination"];
  OriginDestinations = makeArrayIfObject( OriginDestinations );

  AirlineOffers.map((airlineOffer, index) => {
      let airlineOfferObj = {
          Owner: airlineOffer.owner,
          OriginDestination: []
      }
      OriginDestinations.map(OriginDestination => {
          // let flightRefrences = OriginDestination["@refs"].split(" ");
          let originDestinationObj = {
            DepartureCode: OriginDestination.DepartureCode,
            ArrivalCode: OriginDestination.ArrivalCode,
            // FlightReferences: OriginDestination.FlightReferences.split(" "),
            FlightReferences: OriginDestination["@refs"].split(" ")
          };
          // // console.log('originDestinationObj ', OriginDestination["@refs"].split(" ").length)
          originDestinationObj.flights = getflights( originDestinationObj.FlightReferences, responseObj, airlineOffer.offers );
          airlineOfferObj.OriginDestination.push( originDestinationObj )
      })
      OutputData.push( airlineOfferObj )
  });

  // // console.log( responseObj["DataLists"]["PriceClassList"] )

  return {data: OutputData, PirceClass:responseObj["DataLists"]["PriceClassList"]["PriceClass"] };
}

// parseData()
module.exports = parseData;
