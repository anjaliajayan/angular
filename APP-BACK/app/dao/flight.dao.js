const moment = require('moment')
const parser = require('fast-xml-parser')
const jsonFind = require('json-find');
const axios = require('axios');
const utilsHelper = require('../helpers/utils');
const config = require('../../config/config');
const {
  convertXML2Json,
  flightPrice2Json
} = require("../controllers/convertXML2Json")
const commonEndPointHelper = require('./../helpers/commonApiEndPointsFetchs');

let {
  getOrgDetails,
  convertToArray
} = require("./../helpers/utils");

const {
  Bookings,
  FlightBookings,
  FlightTicket,
  PassengerDetail,
  TripDetails,
  SegmentDetails,
  Transaction,
  sequelizeOrganisation,
  OrganizationAccount,
  Users,
  sequelizeCurrency
} = require('../../config/db');

let myGenericMethod = require('./../helpers/ModelsGenericMethods');
let myCustomTripDetails = new myGenericMethod(TripDetails);
let myCustomSegmentDetails = new myGenericMethod(SegmentDetails);

const AirShoppingXML = require('../xmls/AirShoppingRQ');
const FlightPriceXML = require('../xmls/FlightPriceRQ');
const OrderCreateXML = require('../xmls/OrderCreateRQ');
const OrderRetrieveXML = require('../xmls/OrderRetrieveRQ');
const AirDocIssueXML = require('../xmls/AirDocIssueRQ');
const SeatMapXML = require('../xmls/SeatMapRQ');
const FareRulesXML = require('../xmls/FareRulesRQ');
const SplitPNROrderChangeXML = require('../xmls/SplitPNROrderChangeRQ');

const logThis = 'FlightDao';

const headers = {
  headers: {
    'Content-Type': 'text/xml'
  },
  responseType: 'text/xml'
}

let url = config.api.flightConnectServiceURL;
let myWriteXmlRequestResponse = config.writeXmlRequestResponse;
let fs = '';
let path = '';
if (myWriteXmlRequestResponse) {
  fs = require('fs');
  path = require('path');
}

let createTripAndSegments = async (paxDetails, Bookings, flt, data, orderObj) => {
  // console.log('I am called');
  // console.log("I AM I AM I AM PAX DETAILS")
  // console.log(paxDetails)
  PassengerDetail.create(paxDetails)
    .then((pax) => {
      const tripDetails = {};
      tripDetails.trip_booking_id = Bookings.booking_id;
      tripDetails.trip_details = '';
      if (Array.isArray(orderObj.DataLists.OriginDestinationList.OriginDestination)) {
        orderObj.DataLists.OriginDestinationList.OriginDestination.map((ond, index) => {
          tripDetails.trip_details += `${ond.DepartureCode}-${ond.ArrivalCode}`;
          tripDetails.trip_details += (orderObj.DataLists.OriginDestinationList.OriginDestination.length - 1) == index ? '' : ',';
        });
      } else {
        tripDetails.trip_details = orderObj.DataLists.OriginDestinationList.OriginDestination['@OriginDestinationKey'];
      }
      tripDetails.trip_departure_airport_code = null;
      tripDetails.trip_departure_airport_name = null;
      tripDetails.trip_departure_date = null;
      tripDetails.trip_departure_time = null;
      tripDetails.trip_arrival_airport_code = null;
      tripDetails.trip_arrival_airport_name = null;
      tripDetails.trip_arrival_date = null;
      tripDetails.trip_arrival_time = null;
      tripDetails.trip_flight_duration = null;
      tripDetails.bookings_flight_id = flt.booking_flight_id;

      //TripDetails.create(tripDetails)
      myCustomTripDetails.updateOrAdd({}, tripDetails)
        .then((trip) => {
          if (Array.isArray(trip)) {
            if (trip[0] === 1) {
              // console.log('Trip has been updated successfully!');
            } else {
              // console.log('Trip was not updated!');
            }
          } else {
            // console.log('Trip has been created successfully!');
          }
          const segmentDetails = {};
          // console.log("SEGMENT DETAILS", flight.Equipment.AircraftCode['text']);
          //const flightOnward = data.ticket.flights.onwards;
          segmentDetails.trip_id = trip.trip_id;
          if (Array.isArray(orderObj.DataLists.FlightSegmentList.FlightSegment)) {
            orderObj.DataLists.FlightSegmentList.FlightSegment.map((flight) => {
              segmentDetails.segment_key = flight['@SegmentKey'];
              segmentDetails.segment_departure_airport_code = flight.Departure.AirportCode;
              segmentDetails.segment_departure_airport_name = flight.Departure.AirportName;
              segmentDetails.segment_departure_terminal = flight.Departure.hasOwnProperty('Terminal') ? flight.Departure.Terminal.Name : '';
              segmentDetails.segment_departure_date = flight.Departure.Date;
              segmentDetails.segment_departure_time = flight.Departure.Time;
              segmentDetails.segment_arrival_airport_code = flight.Arrival.AirportCode;
              segmentDetails.segment_arrival_airport_name = flight.Arrival.AirportName;
              segmentDetails.segment_arrival_terminal = flight.Arrival.hasOwnProperty('Terminal') ? flight.Arrival.Terminal.Name : '';
              segmentDetails.segment_arrival_date = flight.Arrival.Date;
              segmentDetails.segment_arrival_time = flight.Arrival.Time;
              segmentDetails.segment_flight_duration = flight.FlightDetail.FlightDuration.Value;
              segmentDetails.segment_aircraft_code = JSON.stringify(flight.Equipment.AircraftCode['text']);
              segmentDetails.equipment_name = flight.Equipment.Name;
              segmentDetails.segment_airline_id = flight.MarketingCarrier.AirlineID['#text'];
              segmentDetails.segment_operating_airline_id = flight.OperatingCarrier.AirlineID['#text'];
              segmentDetails.segment_operating_airline_name = flight.OperatingCarrier.Name;
              segmentDetails.segment_operating_flight_number = flight.OperatingCarrier.FlightNumber;
              segmentDetails.segment_marketing_airline_id = JSON.stringify(flight.MarketingCarrier.AirlineID);
              segmentDetails.segment_marketing_airline_name = flight.MarketingCarrier.Name;
              segmentDetails.segment_marketing_flight_number = flight.MarketingCarrier.FlightNumber;
              // segmentDetails.segment_seatingClassCode = flightOnward[0].offers[0].offersArr[0].pclass.Code;
              // segmentDetails.segment_seatingClass = flightOnward[0].offers[0].offersArr[0].pclass.Name;

              segmentDetails.segment_flight_number = flight.MarketingCarrier.FlightNumber;
              data.PaxForms.map((pax, index) => {
                if (pax.freqFlyerVendorCode !== '') {
                  segmentDetails.segment_freequentflair_number = pax.freqFlyerVendorCode;
                }
              });

              //SegmentDetails.create(segmentDetails)
              myCustomSegmentDetails.updateOrAdd({}, segmentDetails)
                .then((seg) => {
                  if (Array.isArray(seg)) {
                    if (seg[0] === 1) {
                      // console.log('Segment has been updated successfully!');
                    } else {
                      // console.log('Segment was not updated!');
                    }
                  } else {
                    // console.log('Segment has been created successfully!');
                  }
                })
                .catch((error) => {
                  console.log("ERROR 6", error);
                  // throw `${error}`;
                });
            });
          } else {
            // console.log("this is not running")
            // One Way Trip
            const flight = orderObj.DataLists.FlightSegmentList.FlightSegment;
            // console.log("this is not running", flight)
            segmentDetails.segment_key = flight['@SegmentKey'];
            segmentDetails.segment_departure_airport_code = flight.Departure.AirportCode;
            segmentDetails.segment_departure_airport_name = flight.Departure.AirportName;
            segmentDetails.segment_departure_terminal = flight.Departure.hasOwnProperty('Terminal') ? flight.Departure.Terminal.Name : '';
            segmentDetails.segment_departure_date = flight.Departure.Date;
            segmentDetails.segment_departure_time = flight.Departure.Time;
            segmentDetails.segment_arrival_airport_code = flight.Arrival.AirportCode;
            segmentDetails.segment_arrival_airport_name = flight.Arrival.AirportName;
            segmentDetails.segment_arrival_terminal = flight.Arrival.hasOwnProperty('Terminal') ? flight.Arrival.Terminal.Name : '';
            segmentDetails.segment_arrival_date = flight.Arrival.Date;
            segmentDetails.segment_arrival_time = flight.Arrival.Time; //fix
            segmentDetails.segment_flight_duration = flight.FlightDetail.FlightDuration.Value;
            segmentDetails.segment_aircraft_code = JSON.stringify(flight.Equipment.AircraftCode['text']);
            segmentDetails.equipment_name = flight.Equipment.Name;
            segmentDetails.segment_airline_id = flight.MarketingCarrier.AirlineID['#text'];
            segmentDetails.segment_operating_airline_id = flight.OperatingCarrier.AirlineID['#text'];
            segmentDetails.segment_operating_airline_name = flight.OperatingCarrier.Name;
            segmentDetails.segment_operating_flight_number = flight.OperatingCarrier.FlightNumber;
            segmentDetails.segment_marketing_airline_id = JSON.stringify(flight.MarketingCarrier.AirlineID);
            segmentDetails.segment_marketing_airline_name = flight.MarketingCarrier.Name;
            segmentDetails.segment_marketing_flight_number = flight.MarketingCarrier.FlightNumber;
            // console.log("FLIGHT IS THIS IS IS IS IS IS IS IS IS", flight.Arrival)
            // segmentDetails.segment_seatingClassCode = flightOnward[0].offers[0].offersArr[0].pclass.Code;
            // segmentDetails.segment_seatingClass = flightOnward[0].offers[0].offersArr[0].pclass.Name;
            segmentDetails.segment_flight_number = flight.MarketingCarrier.FlightNumber;
            // console.log("PAX FORM 3", data);
            // console.log("FLIGHT IS THIS IS IS IS IS IS IS IS IS", flight.Arrival);
            // console.log("THERE IT IS THE SEGMENT DETAILS", flight.MarketingCarrier.AirlineID['#text']);
            data.PaxForms.map((pax, index) => {
              if (pax.freqFlyerVendorCode !== '') {
                segmentDetails.segment_frequentflair_number = pax.freqFlyerVendorCode;
              }
            });

            //SegmentDetails.create(segmentDetails)
            myCustomSegmentDetails.updateOrAdd({}, segmentDetails)
              .then((seg) => {
                if (Array.isArray(seg)) {
                  if (seg[0] === 1) {
                    // console.log('Segment has been updated successfully!');
                  } else {
                    // console.log('Segment was not updated!');
                  }
                } else {
                  // console.log('Segment has been created successfully!');
                }
              })
              .catch((error) => {
                console.log("ERROR 7", error)
                // throw `${error}`;
              });
          }
        }).catch((error) => {
          console.log("ERROR 5", error)
          // throw `${error}`;
        });
    })
    .catch((error) => {
      console.log("ERROR 6", error)
      // throw `${error}`;
    });
};


const airShopping = async (req, res) => {
  const logMethod = `${logThis}AirShopping`;
  try {
    const xml = await AirShoppingXML(req);
    if (xml === '') {
      return utilsHelper.makeResponse(res, false, 500, 'error', 'Not Authenticated', 'Error in extracting credentials', [{
        auth: true
      }]);
    }
    if (myWriteXmlRequestResponse) {
      fs.writeFile(path.join(__dirname, '../../logs/AirShoppingRQ.xml'), xml, (error) => {
        if (error) {
          return utilsHelper.makeResponse(res, false, 500, 'error', `AirShopping`, `Error writing AirShoppingRQ.xml to logs folder. Error: ${error}`);
        }
      });
    }


    
    axios.post(url, xml, headers).then((resp) => {
      if (myWriteXmlRequestResponse) {
        fs.writeFile(path.join(__dirname, '../../logs/AirShoppingRS.xml'), resp.data, (error) => {
          if (error) {
            return utilsHelper.makeResponse(res, false, 500, 'error', `AirShopping`, `Error writing AirShoppingRS.xml to logs folder. Error: ${error}`);
          }
        });
      }
      let jsonResponse = convertXML2Json(resp.data);
      // if (myWriteXmlRequestResponse) {
      //   fs.writeFile(path.join(__dirname, '../../logs/AirShoppingRS.json'), JSON.stringify(jsonResponse), (error) => {
      //     if (error) {
      //       return utilsHelper.makeResponse(res, false, 500, 'error', `AirShopping`, `Error writing AirShoppingRS.json to logs folder. Error: ${error}`);
      //     }
      //   });
      // }
      return utilsHelper.makeResponse(res, true, 200, 'success', 'AirShopping', 'List of available flights', jsonResponse);
    }).catch((error) => {
      console.log(error);
      return utilsHelper.makeResponse(res, false, 500, 'error', `AirShopping`, `Oops! Something went wrong while processing your request. Error: ${error}`);
    });
  } catch (err) {
    console.log(logMethod, err);
    return utilsHelper.makeResponse(res, false, 400, 'error', 'INTERNAL SERVER ERROR', 'INTERNAL SERVER ERROR');
  }
}

const flightPrice = async (req, res) => {
  const logMethod = `${logThis}FlightPrice`;
  try {
    const xml = await FlightPriceXML(req);
    if (xml instanceof Array) {
      return utilsHelper.makeResponse(res, false, 500, 'error', 'Not Authenticated', 'Error in extracting credentials', xml);
    }
    if (myWriteXmlRequestResponse) {
      fs.writeFile(path.join(__dirname, '../../logs/FlightPriceRQ.xml'), xml, (error) => {
        if (error) {
          return utilsHelper.makeResponse(res, false, 500, 'error', `FlightPrice`, `Error writing FlightPriceRQ.xml to logs folder. Error: ${error}`);
        }
      });
    }

    axios.post(url, xml, headers).then((resp) => {
      if (myWriteXmlRequestResponse) {
        fs.writeFile(path.join(__dirname, '../../logs/FlightPriceRS.xml'), resp.data, (error) => {
          if (error) {
            return utilsHelper.makeResponse(res, false, 500, 'error', `FlightPrice`, `Error writing FlightPriceRS.xml to logs folder. Error: ${error}`);
          }
        });
      }
      return utilsHelper.makeResponse(res, true, 200, 'success', 'FlightPrice', 'List of available flights', flightPrice2Json(resp.data));
    }).catch((error) => {
      console.log(error);
      return utilsHelper.makeResponse(res, false, 500, 'error', `FlightPrice`, `Oops! Something went wrong while processing your request. Error: ${error}`);
    });
  } catch (err) {
    console.log(logMethod, err);
    return utilsHelper.makeResponse(res, false, 400, 'error', 'INTERNAL SERVER ERROR', 'INTERNAL SERVER ERROR');
  }
}


const fareRules = async (req, res) => {
  const logMethod = `${logThis}FareRules`;
  try {
    let xml = await FareRulesXML(req);
    if (xml instanceof Array) {
      return utilsHelper.makeResponse(res, false, 500, 'error', 'Not Authenticated', 'Error in extracting credentials', xml);
    }
    if (myWriteXmlRequestResponse) {
      fs.writeFile(path.join(__dirname, '../../logs/FareRulesRQ.xml'), xml, (error) => {
        if (error) {
          return utilsHelper.makeResponse(res, false, 500, 'error', `FareRules`, `Error writing FareRulesRQ.xml to logs folder. Error: ${error}`);
        }
      });
    }
    axios.post(url, xml, headers).then((resp) => {
      let fareRules = {}
      if (parser.validate(resp.data) === true) {
        const jsonObj = parser.parse(resp.data, config.pkgConfigs.x2joptions);
        fareRules = jsonObj.Envelope.Body.FareRulesRS;
      }
      if (myWriteXmlRequestResponse) {
        fs.writeFile(path.join(__dirname, '../../logs/FareRulesRS.xml'), resp.data, (error) => {
          if (error) {
            return utilsHelper.makeResponse(res, false, 500, 'error', `FareRules`, `Error writing FareRulesRS.xml to logs folder. Error: ${error}`);
          }
        });
      }
      return utilsHelper.makeResponse(res, true, 200, 'success', 'FareRules', 'List of available flights', fareRules);
    }).catch((error) => {
      console.log(error);
      return utilsHelper.makeResponse(res, false, 500, 'error', `FareRules`, `Oops! Something went wrong while processing your request. Error: ${error}`);
    });
  } catch (err) {
    console.log(logMethod, err);
    return utilsHelper.makeResponse(res, false, 400, 'error', 'INTERNAL SERVER ERROR', 'INTERNAL SERVER ERROR');
  }
}

const orderCreate = async (req, res) => {
  const logMethod = `${logThis}OrderCreate`;
  try {
    const xml = await OrderCreateXML(req);
    if (xml instanceof Array) {
      return utilsHelper.makeResponse(res, false, 500, 'error', 'Not Authenticated', 'Error in extracting credentials', xml);
    }
    if (myWriteXmlRequestResponse) {
      fs.writeFile(path.join(__dirname, '../../logs/OrderCreateRQ.xml'), xml, (error) => {
        if (error) {
          return utilsHelper.makeResponse(res, false, 500, 'error', `OrderCreate`, `Error writing OrderCreateRQ.xml to logs folder. Error: ${error}`);
        }
      });
    }
    axios.post(url, xml, headers).then((resp) => {
      if (myWriteXmlRequestResponse) {
        fs.writeFile(path.join(__dirname, '../../logs/OrderCreateRS.xml'), resp.data, (error) => {
          if (error) {
            return utilsHelper.makeResponse(res, false, 500, 'error', `OrderCreate`, `Error writing OrderCreateRS.xml to logs folder. Error: ${error}`);
          }
        });
      }
      if (parser.validate(resp.data) === true) {
        const jsonObj = parser.parse(resp.data, config.pkgConfigs.x2joptions);
        let orderObj = jsonObj.Envelope.Body.OrderViewRS;
        if (orderObj.hasOwnProperty("Response")) {
          orderObj = orderObj.Response;
        }
        const org_agent_code = getOrgDetails(req);
        if (orderObj.hasOwnProperty('Passengers')) {
          const bookingObj = {};
          bookingObj.agent_code = org_agent_code.org_agent_code;
          bookingObj.trip_id = orderObj.Order.BookingReferences.BookingReference.OtherID['#text'];
          bookingObj.users_id = 0;
          bookingObj.transaction_id = null;
          const passengerList = convertToArray(orderObj.Passengers.Passenger);
          bookingObj.booking_email = passengerList[0].Contacts.Contact.EmailContact.Address;

          bookingObj.booking_comments = null;
          if (orderObj.Metadata.Other.OtherMetadata) {
            let myOtherMetadata = convertToArray(orderObj.Metadata.Other.OtherMetadata);
            bookingObj.booking_currency = myOtherMetadata[0].CurrencyMetadatas.CurrencyMetadata.Name;
          }
          bookingObj.booking_status = 'hold';
          bookingObj.agent_reference = 'TPC'; // need to add the UI field of agent reference in the order create page.
          bookingObj.amount = orderObj.Order.TotalOrderPrice.DetailCurrencyPrice.Total['#text'];
          bookingObj.payment_type = 'Credit'; // if its agent then it should be deposit so need to add check here.
          bookingObj.supplier_price = orderObj.hasOwnProperty('Commission') ? orderObj.Commission.Amount : orderObj.Order.TotalOrderPrice.DetailCurrencyPrice.Total['#text'];
          bookingObj.markup_price = orderObj.Order.TotalOrderPrice.DetailCurrencyPrice.Total['#text']; // agenl needs to tell
          bookingObj.has_hotel = 0;
          bookingObj.has_flight = 1;
          bookingObj.created = moment().format('YYYY-MM-DD HH:mm:ss');
          bookingObj.status = 1;
          bookingObj.has_activities = 0;
          bookingObj.has_car = 0;
          bookingObj.has_insurance = 0;
          bookingObj.has_transfers = 0;
          bookingObj.has_marhaba = 0;
          bookingObj.has_cruises = 0;
          bookingObj.echoToken = orderObj['@EchoToken'];
          bookingObj.has_holiday = 0;
          bookingObj.has_visa = 0;
          bookingObj.deviceId = null;
          bookingObj.appliedCommissionTax = 0.00;
          bookingObj.appliedTotalTax = 0.00;
          bookingObj.supplierTax = 0.00;
          bookingObj.remarks = null;
          if (orderObj.Metadata.Other.OtherMetadata) {
            let myOtherMetadata = convertToArray(orderObj.Metadata.Other.OtherMetadata);
            bookingObj.user_currency = myOtherMetadata[0].CurrencyMetadatas.CurrencyMetadata.Name;
          }
          bookingObj.curnversion_value = null;
          bookingObj.service_charge_cancel = 0;
          bookingObj.service_charge_create = 0;
          bookingObj.service_charge_refund = 0;
          bookingObj.supplier = orderObj.Order.OrderID['@Owner'];

          Bookings.create(bookingObj)
            .then(async (Bookings) => {
              const supplier = await commonEndPointHelper.fetchSupplierDetails(orderObj.Order.OrderID['@Owner']);
              if (supplier) {
                const bookingFlightsObj = {};
                bookingFlightsObj.booking_id = Bookings.booking_id;
                bookingFlightsObj.supplier_id = supplier.supplier_id;
                bookingFlightsObj.flight_id = '';
                if (Array.isArray(orderObj.DataLists.OriginDestinationList.OriginDestination)) {
                  orderObj.DataLists.OriginDestinationList.OriginDestination.map((ond, index) => {
                    //console.log("OND is", ond);
                    bookingFlightsObj.flight_id += ond.hasOwnProperty('@refs') ? `${ond['@refs']}` : `${ond.FlightReferences}`;
                    bookingFlightsObj.flight_id += (orderObj.DataLists.OriginDestinationList.OriginDestination.length - 1) == index ? '' : ',';
                  });
                } else {
                  var ond = orderObj.DataLists.OriginDestinationList.OriginDestination;
                  bookingFlightsObj.flight_id = ond.hasOwnProperty('@refs') ? `${ond['@refs']}` : `${ond.FlightReferences}`;
                }

                bookingFlightsObj.booking_status = 'hold';
                bookingFlightsObj.status = 1;
                bookingFlightsObj.created = moment().format('YYYY-MM-DD HH:mm:ss');
                bookingFlightsObj.pnr_no = orderObj.Order.OrderID['#text'];
                bookingFlightsObj.TicketDocInfos = JSON.stringify(orderObj);
                bookingFlightsObj.TicketContact = JSON.stringify(orderObj);
                bookingFlightsObj.markupPrice = orderObj.Order.TotalOrderPrice.DetailCurrencyPrice.Total['#text'];
                bookingFlightsObj.supplierPrice = orderObj.hasOwnProperty('Commission') ? orderObj.Commission.Amount : orderObj.Order.TotalOrderPrice.DetailCurrencyPrice.Total['#text'];
                bookingFlightsObj.airline_pnr_no = orderObj.Order.BookingReferences.BookingReference.AirlineID['#text'];
                bookingFlightsObj.airDocIssue = "";
                bookingFlightsObj.serviseList = null;
                bookingFlightsObj.markups = null;
                bookingFlightsObj.flightPrice = null;
                bookingFlightsObj.fareRules = null;
                bookingFlightsObj.cancel_supplier_price = null;
                bookingFlightsObj.refund_service_amount = null;
                bookingFlightsObj.refund_penalty_amount = null;

                if (passengerList.length > 0) {
                  if (passengerList[0].Contacts.Contact.hasOwnProperty('PhoneContact')) {
                    let numbers = convertToArray(passengerList[0].Contacts.Contact.PhoneContact.Number);
                    let tmpNumbers = ``;
                    numbers.map((item, itemIndex) => {
                      if (itemIndex > 0) {
                        tmpNumbers += `,`;
                      }
                      tmpNumbers += `${item['@CountryCode']}-${item['#text']}`;
                    });
                    bookingFlightsObj.phone_contacts = tmpNumbers;
                  }
                }

                FlightBookings.create(bookingFlightsObj)
                  .then(async (flt) => {
                    const paxDetails = {};
                    paxDetails.pax_booking_id = Bookings.booking_id;

                    passengerList.forEach(async pax => {
                      paxDetails.pax_ref_key = pax['@ObjectKey'];
                      paxDetails.pax_title = pax.Name.Title;
                      paxDetails.pax_first_name = pax.Name.hasOwnProperty('Surname') ? pax.Name.Surname : '';
                      paxDetails.pax_middle_name = pax.Name.hasOwnProperty('Middle') ? pax.Name.Middle : '';
                      paxDetails.pax_last_name = pax.Name.hasOwnProperty('Given') ? pax.Name.Given : '';
                      paxDetails.pax_dob = pax.hasOwnProperty('Age') ? pax.Age.BirthDate : '';
                      paxDetails.pax_gender = pax.hasOwnProperty('Gender') ? pax.Gender : '';
                      if (pax.Contacts.Contact.hasOwnProperty('PhoneContact')) {
                        let numbers = convertToArray(pax.Contacts.Contact.PhoneContact.Number);
                        let tmpNumbers = ``;
                        numbers.map((item, itemIndex) => {
                          if (itemIndex > 0) {
                            tmpNumbers += `,`;
                          }
                          tmpNumbers += `${item['@CountryCode']}-${item['#text']}`;
                        });
                        paxDetails.pax_mobile = tmpNumbers;
                      }
                      paxDetails.pax_email = pax.Contacts.Contact.EmailContact.Address;
                      paxDetails.pax_type = pax.hasOwnProperty('PTC') ? pax.PTC['#text'] : '';
                      if (pax.hasOwnProperty('PassengerIDInfo')) {
                        let paxIDinfo = pax.PassengerIDInfo;
                        if (paxIDinfo.hasOwnProperty('PassengerDocument')) {
                          let docs = paxIDinfo.PassengerDocument;
                          paxDetails.pax_resi_country = docs.CountryOfResidence;
                          paxDetails.pax_ID_type = docs.Type;
                          paxDetails.pax_passport_number = docs.ID;
                          paxDetails.pax_passport_experiration = docs.DateOfExpiration;
                          paxDetails.pax_passport_country = docs.CountryOfIssuance;
                        }
                        if (paxIDinfo.hasOwnProperty('FOID')) {
                          paxDetails.pax_frequentFlyer = paxIDinfo.FOID.ID["@VendorCode"];
                          paxDetails.pax_frequentFlyerNumber = paxIDinfo.FOID.ID["#text"];
                        }
                      }
                      paxDetails.bookings_flight_id = flt.booking_flight_id;
                      await createTripAndSegments(paxDetails, Bookings, flt, req.body, orderObj);
                    })

                    return utilsHelper.makeResponse(res, true, 200, 'success', 'OrderCreate', `Booking Created Successfully with following Bookings ID => ${Bookings.booking_id}.`, {
                      Bookings,
                      FlightBookings: flt,
                      pnr: orderObj
                    });
                  }).catch((error) => {
                    console.log("STR1", error)
                    return utilsHelper.makeResponse(res, false, 500, 'error', `OrderCreate`, `Oops! Something went wrong while processing your request. Error: ${error}`);
                  });
              }
            }).catch((error) => {
              console.log("STR2", error)
              return utilsHelper.makeResponse(res, false, 500, 'error', `OrderCreate`, `Oops! Something went wrong while processing your request. Error: ${error}`);
            });
        } else {
          return utilsHelper.makeResponse(res, false, 500, 'error', `OrderCreate`, `Oops! Something went wrong while processing your request. Error: Internal Error: Got Empty Passengers from Supplier | OrderCreateRS`);
        }
      } else {
        return utilsHelper.makeResponse(res, false, 500, 'error', `OrderCreate`, `Oops! Something went wrong while processing your request. Error: Internal Error: Got Empty Response from Supplier | OrderCreateRS`);
      }
    }).catch((error) => {
      console.log(logMethod, error);
      return utilsHelper.makeResponse(res, false, 500, 'error', `OrderCreate`, `Oops! Something went wrong while processing your request. Error: ${error}`);
    });
  } catch (error) {
    console.log(logMethod, error);
    return utilsHelper.makeResponse(res, false, 400, 'error', 'INTERNAL SERVER ERROR', 'INTERNAL SERVER ERROR');
  }
}

const airDocIssue = async (req, res) => {
  //var behalfOf = req.body.bookingFor;
  //console.log(behalfOf);
  
  //agent
  //creditlimit

  const {
    appState,
  } = req.appState;
  
  const logMethod = `${logThis}AirDocIssue`;
  try {
    const xml = await AirDocIssueXML(req);
    console.log("this is my XML",xml);
    if (xml instanceof Array) {
      return utilsHelper.makeResponse(res, false, 500, 'error', 'Not Authenticated', 'Error in extracting credentials', xml);
    }
    if (myWriteXmlRequestResponse) {
      fs.writeFile(path.join(__dirname, '../../logs/AirDocIssueRQ.xml'), xml,  (error)  => {
        if (error) {
          return utilsHelper.makeResponse(res, false, 500, 'error', `FlightPrice`, `Error writing AirDocIssueRQ.xml to logs folder. Error: ${error}`);
        }
      });
    }

    axios.post(url, xml, headers).then(async (resp) => {
      if (myWriteXmlRequestResponse) {
        fs.writeFile(path.join(__dirname, '../../logs/AirDocIssueRS.xml'), resp.data, (error) => {
          if (error) {
            return utilsHelper.makeResponse(res, false, 500, 'error', `AirDocIssue`, `Error writing AirDocIssueRS.xml to logs folder. Error: ${error}`);
          }
        });
      }
      if (parser.validate(resp.data) === true) {
        // optional (it'll return an object in case it's not valid)
        const jsonObj = parser.parse(resp.data, config.pkgConfigs.x2joptions);

        const airDocObj = jsonObj.Envelope.Body.AirDocDisplayRS;

        // // console.log(orderObj.Response);

        const flightTicketObj = {};

        
        // console.log(airDocObj);
        if(req.body.bookingFor){
          let organisation =  await commonEndPointHelper.fetchOrganisationDetails(req.body.bookingFor);
          let user = await Users.findOne({where :{organisation_id : req.body.bookingFor}});
          let curreny = await sequelizeCurrency.findOne({where :{currency_id : organisation.dataValues.currency_id}});
          
          // console.log("GAGGAAANN SUN",organisation);
          // console.log("GAGGAAANN SUN",user.dataValues.users_id);
          // console.log("GAGGAAANN SUN",curreny);
          appState.organisation.organisation_id = organisation.dataValues.organisation_id;
          appState.user.user_id = user.dataValues.users_id;
          appState.organisation.credit_limit = organisation.dataValues.credit_limit;
          appState.currency.currency_id = curreny.dataValues.currency_id;

        }
         if (!airDocObj.hasOwnProperty('Errors')) {
          // console.log('I reached');
          if (Array.isArray(airDocObj.Response.TicketDocInfos.TicketDocInfo)) {
            // console.log('I reached Array');
            airDocObj.Response.TicketDocInfos.TicketDocInfo.map((ticket) => {
              if (ticket.TicketDocument.Type.Code == 'T' ||
                ticket.TicketDocument.CouponInfo[0].Status.Code == 'T' ||
                ticket.TicketDocument.CouponInfo[0].Status.Code == 'O') {
                flightTicketObj.ticket_booking_id = req.body.bookingId;
                flightTicketObj.ticket_pax_ref_key = req.body.paxRefkey;
                flightTicketObj.ticket_number = ticket.hasOwnProperty('TicketDocument') ? ticket.TicketDocument.TicketDocNbr : null;
                flightTicketObj.ticket_status = 'Open';
                flightTicketObj.BaseFare = ticket.hasOwnProperty('FareInfo') ? ticket.FareInfo.BaseFare.Amount['#text'] : null;
                flightTicketObj.Tax = ticket.hasOwnProperty('FareInfo') ? ticket.FareInfo.Taxes.Total['#text'] : null;
                flightTicketObj.Total = ticket.hasOwnProperty('FareInfo') ? ticket.FareInfo.Total.Amount['#text'] : null;
                flightTicketObj.Commission = ticket.hasOwnProperty('Commission') ? ticket.Commission.Amount['#text'] : null;
                flightTicketObj.bookings_flight_id = req.body.bookingsFlightId;
                flightTicketObj.created_at = moment().format('YYYY-MM-DD HH:mm:ss');
                FlightTicket.create(flightTicketObj)
                  .then(async(flightTck) => {
                    const bookingUpdateResult = Bookings.update({
                      booking_status: 'confirm',
                    }, {
                      where: {
                        trip_id: req.body.tripId,
                      },
                    });
                    const bookingFlightResult = FlightBookings.update({
                      booking_status: 'voucher',
                      airline_pnr_no: ticket.BookingReferences.BookingReference.AirlineID["#text"],
                      airDocIssue: JSON.stringify(airDocObj.Response.TicketDocInfos)
                    }, {
                      where: {
                        booking_id: req.body.bookingId,
                      },
                    });




                    const transactionObj = {};
                    transactionObj.users_id = appState.user.user_id;
                    transactionObj.organisation_id = appState.organisation.organisation_id;
                    transactionObj.transaction_type = 'credit';
                    transactionObj.payment_type = 'credit';
                    transactionObj.amount = ticket.hasOwnProperty('FareInfo') ? ticket.FareInfo.Total.Amount['#text'] : null;
                    transactionObj.currency_id = appState.currency.currency_id;
                    transactionObj.transaction_comments = 'Ticket is issued';
                    transactionObj.status = 1;
                    transactionObj.created = moment().format('YYYY-MM-DD HH:mm:ss');
                    transactionObj.before_debit = appState.organisation.credit_limit;
                    transactionObj.trip_id = req.body.tripId;
                    transactionObj.payment_gateway_id = null;
                    transactionObj.tax_no = null;
                    transactionObj.tax_email = null;
                    let amount = await sequelizeOrganisation.findOne({where:{ organisation_id: appState.organisation.organisation_id}})
                  let amountOrg = await OrganizationAccount.findOne({where:{organisation_id: appState.organisation.organisation_id}})
                  console.log("AMOUNT__________________",amount);
                  console.log("AMOUNT__________________",amount.dataValues.credit_limit);
                  console.log("AMOUNT ORG__________________",amountOrg.dataValues.available_deposit);
                    Transaction.create(transactionObj)
                      .then((trans) => {
                        if(trans){
                          sequelizeOrganisation.update({
                            credit_limit: amount.dataValues.credit_limit - (ticket.hasOwnProperty('FareInfo') ? ticket.FareInfo.Total.Amount['#text'] : null)
                          }, {
                            where: {
                              organisation_id: appState.organisation.organisation_id,
                            },
                          });
                          OrganizationAccount.update({
                            
                            available_deposit: amountOrg.dataValues.available_deposit - (ticket.hasOwnProperty('FareInfo') ? ticket.FareInfo.Total.Amount['#text'] : null)
                            }, {
                              where: {
                                organisation_id: appState.organisation.organisation_id,
                              },
                          })
                        }
                      res.status(200).json({
                        type: "success",
                        status: 200,
                        pnr: jsonObj
                      })
                    })
                      .catch((err) => res.json({
                        type: "error",
                        status: 400,
                        msg: "Oops! Something went wrong while processing your request. Err: Transaction - DB Insertion Failed.",
                        data: err
                      }));
                  })
                  .catch((error) => res.json({
                    type: "error",
                    status: 400,
                    msg: "Oops! Something went wrong while processing your request. Err: FlightTicket - DB Insertion Failed.",
                    data: error
                  }));
              } else {
                flightTicketObj.booking_flight_id = req.body.bookingId;
                flightTicketObj.ticket_id = '';
                flightTicketObj.ticket_number = '';
                flightTicketObj.emd_number = '';
                flightTicketObj.reason_for_issuance_subcode = '';
                flightTicketObj.remarks = '';
                flightTicketObj.amount = '';
                flightTicketObj.code = '';
                flightTicketObj.created_at = moment().format('YYYY-MM-DD HH:mm:ss');
              }
            });
          } else {
            // console.log('I reached non Array');
            const ticket = airDocObj.Response.TicketDocInfos.TicketDocInfo;
            if (ticket.TicketDocument.Type.Code == 'T' ||
              ticket.TicketDocument.CouponInfo[0].Status.Code == 'T' ||
              ticket.TicketDocument.CouponInfo[0].Status.Code == 'O') {
              flightTicketObj.ticket_booking_id = req.body.bookingId;
              flightTicketObj.ticket_pax_ref_key = req.body.paxRefkey;
              flightTicketObj.ticket_number = ticket.hasOwnProperty('TicketDocument') ? ticket.TicketDocument.TicketDocNbr : null;
              flightTicketObj.ticket_status = 'Open';
              flightTicketObj.BaseFare = ticket.hasOwnProperty('FareInfo') ? ticket.FareInfo.BaseFare.Amount['#text'] : null;
              flightTicketObj.Tax = ticket.hasOwnProperty('FareInfo') ? ticket.FareInfo.Taxes.Total['#text'] : null;
              flightTicketObj.Total = ticket.hasOwnProperty('FareInfo') ? ticket.FareInfo.Total.Amount['#text'] : null;
              flightTicketObj.Commission = ticket.hasOwnProperty('Commission') ? ticket.Commission.Amount['#text'] : null;
              flightTicketObj.bookings_flight_id = req.body.bookingsFlightId;
              flightTicketObj.created_at = moment().format('YYYY-MM-DD HH:mm:ss');
              FlightTicket.create(flightTicketObj)
                .then(async(flightTck) => {
                  const bookingUpdateResult = Bookings.update({
                    booking_status: 'confirm'
                  }, {
                    
                    where: {
                      trip_id: req.body.tripId,
                    },
                  });
                  const bookingFlightResult = FlightBookings.update({
                    booking_status: 'voucher',
                    airline_pnr_no: ticket.BookingReferences.BookingReference.AirlineID["#text"],
                    airDocIssue: JSON.stringify(airDocObj.Response.TicketDocInfos)
                  }, {
                    where: {
                      booking_id: req.body.bookingId
                    }
                  });

                  const transactionObj = {};
                  // console.log(req.appState);
                  transactionObj.users_id = appState.user.user_id;
                  transactionObj.organisation_id = appState.organisation.organisation_id;
                  transactionObj.transaction_type = 'credit';
                  transactionObj.payment_type = 'credit';
                  transactionObj.amount = ticket.hasOwnProperty('FareInfo') ? ticket.FareInfo.Total.Amount['#text'] : null;
                  transactionObj.currency_id = appState.currency.currency_id;
                  transactionObj.transaction_comments = 'Ticket is issued';
                  transactionObj.status = 1;
                  transactionObj.created = moment().format('YYYY-MM-DD HH:mm:ss');
                  transactionObj.before_debit = appState.organisation.credit_limit;
                  transactionObj.trip_id = req.body.tripId;
                  transactionObj.payment_gateway_id = null;
                  transactionObj.tax_no = null;
                  transactionObj.tax_email = null;
                  
                  let amount = await sequelizeOrganisation.findOne({where:{ organisation_id: appState.organisation.organisation_id}})
                  let amountOrg = await OrganizationAccount.findOne({where:{organisation_id: appState.organisation.organisation_id}})
                  console.log("AMOUNT__________________",amount);
                  console.log("AMOUNT__________________",amount.dataValues.credit_limit);
                  console.log("AMOUNT ORG__________________",amountOrg.dataValues.available_deposit);
                  Transaction.create(transactionObj)
                    .then((trans) => {
                      if(trans){
                        sequelizeOrganisation.update({
                          credit_limit: amount.dataValues.credit_limit - (ticket.hasOwnProperty('FareInfo') ? ticket.FareInfo.Total.Amount['#text'] : null)
                        }, {
                          where: {
                            organisation_id: appState.organisation.organisation_id,
                          },
                        });
                        OrganizationAccount.update({
                          
                          available_deposit: amountOrg.dataValues.available_deposit - (ticket.hasOwnProperty('FareInfo') ? ticket.FareInfo.Total.Amount['#text'] : null)
                          }, {
                            where: {
                              organisation_id: appState.organisation.organisation_id,
                            },
                        })
                      }
                      res.status(200).json({
                      type: "success",
                      status: 200,
                      pnr: jsonObj
                    })})
                    .catch((err) => res.json({
                      type: "error",
                      status: 400,
                      msg: "Oops! Something went wrong while processing your request. Err: Transaction - DB Insertion Failed.",
                      data: error
                    }));
                })
                .catch((error) => {
                  // console.log(error);
                  return res.json({
                    type: 'error',
                    status: 400,
                    msg: `Oops! Something went wrong while processing your request. Err: FlightTicket - DB Insertion Failed. ${error}`,
                    data: error,
                  });
                });
            } else {
              flightTicketObj.booking_flight_id = req.body.bookingId;
              flightTicketObj.ticket_id = '';
              flightTicketObj.ticket_number = '';
              flightTicketObj.emd_number = '';
              flightTicketObj.reason_for_issuance_subcode = '';
              flightTicketObj.remarks = '';
              flightTicketObj.amount = '';
              flightTicketObj.code = '';
              flightTicketObj.created_at = moment().format('YYYY-MM-DD HH:mm:ss');
            }
          }
        } else {
          return utilsHelper.makeResponse(res, false, 200, 'error', 'AirDocIssue', `Oops! Something went wrong while processing your request. Err: AirDocIssue - ${airDocObj.Errors.Error['#text']}.`, airDocObj);
        }
      } else {
        return utilsHelper.makeResponse(res, false, 500, 'error', `AirDocIssue`, `Oops! Something went wrong while processing your request. Error: Internal Error: Got Empty Resposne from Supplier | AirDocIssueRS`);
      }
    }).catch((error) => {
      console.log(logMethod, error);
      return utilsHelper.makeResponse(res, false, 500, 'error', `AirDocIssue`, `Oops! Something went wrong while processing your request. Error: ${error}`);
    });
  } catch (error) {
    console.log(logMethod, error);
    return utilsHelper.makeResponse(res, false, 400, 'error', 'INTERNAL SERVER ERROR', 'INTERNAL SERVER ERROR');
  }
}

const seatMap = async (req, res) => {
  const logMethod = `${logThis}seatMap`;
  try {

    const xml = await SeatMapXML(req);
    if (xml instanceof Array) {
      return utilsHelper.makeResponse(res, false, 500, 'error', 'Not Authenticated', 'Error in extracting credentials', xml);
    }

    if (myWriteXmlRequestResponse) {
      fs.writeFile(path.join(__dirname, '../../logs/SeatMapRQ.xml'), xml, (error) => {
        if (error) {

          return utilsHelper.makeResponse(res, false, 500, 'error', `OrderCreate`, `Error writing SeatMapRQ.xml to result folder. Error: ${error}`);
        }
      });
    }

    const result = await axios.post(url, xml, headers)

    if (myWriteXmlRequestResponse) {
      fs.writeFile(path.join(__dirname, '../../logs/SeatMapRS.xml'), result.data, (error) => {
        if (error) {

          return utilsHelper.makeResponse(res, false, 500, 'error', `OrderCreate`, `Error writing SeatMapRQ.xml to result folder. Error: ${error}`);
        }
      });
    }

    const getAttr = (k, data) => {
      const doc = jsonFind(data);
      const attr = doc.checkKey(k);
      return attr
    }

    const jsonObj = parser.parse(result.data, config.pkgConfigs.x2joptions);
    const SeatList = getAttr("SeatList", jsonObj)
    const FlightSegment = getAttr("FlightSegment", jsonObj)
    let AllSeats = []
    let Seats = {}

    if (SeatList) {
      // Row Wise Seat
      SeatList.Seats.map(Seat => {
        Seats[`${Seat.Location.Row.Number}`] = []
      })
      SeatList.Seats.map((Seat, i) => {
        Characteristics = Array.isArray(Seat.Location.Characteristics.Characteristic) ? Seat.Location.Characteristics.Characteristic : [Seat.Location.Characteristics.Characteristic]
        Characteristic = Characteristics.map(Characteristic => Characteristic.Definition)

        Seats[`${Seat.Location.Row.Number}`].push({
          "ColumnID": Seat.Location.Column,
          "SeatCharacteristicCode": Characteristic,
          "seatNumber": Seat["@ListKey"]
        })
      })

      // Groups & Columns
      const Flights = getAttr("Flights", jsonObj)
      let Groups = Columns = ""
      let Cabin = Array.isArray(Flights.Cabin) ? Flights.Cabin : [Flights.Cabin]
      Groups = Cabin[0].SeatDisplay.Columns
      if (Groups) {
        Groups = Groups.split('-')
        Columns = Groups.length
      }

      AllSeats.push({
        "RowWiseSeat": Seats,
        "Columns": Columns,
        "Groups": Groups,
        "ATYPE": FlightSegment.Equipment.AircraftCode,
        "CDC": FlightSegment.OperatingCarrier.AirlineID,
        "COF": FlightSegment.OperatingCarrier.FlightNumber,
      })
    }

    const Errors = getAttr("Errors", jsonObj)
    if (Errors) {
      AllSeats = Errors
    }

    return utilsHelper.makeResponse(res, true, 200, 'success', 'Seat Map Request', 'Request was successful', {
      AllSeats
    });
  } catch (error) {
    console.log(logMethod, error)
    return utilsHelper.makeResponse(res, false, 200, 'danger', 'Seat Map Request', 'Request was not successful');
  }
}

const splitPNR = async (req, res) => {
  const logMethod = `${logThis}splitPNR`;
  try {
    const xml = await SplitPNROrderChangeXML(req);
    if (xml instanceof Array) {
      return utilsHelper.makeResponse(res, false, 500, 'error', 'Not Authenticated', 'Error in extracting credentials', xml);
    }

    if (myWriteXmlRequestResponse) {
      fs.writeFile(path.join(__dirname, '../../logs/SplitPNROrderChangeRQ.xml'), xml, (error) => {
        if (error) {
          return utilsHelper.makeResponse(res, false, 500, 'error', `Split PNR`, `Error writing SplitPNROrderChangeRQ.xml to result folder. Error: ${error}`);
        }
      });
    }

    const resp = await axios.post(url, xml, headers);
    if (myWriteXmlRequestResponse) {
      fs.writeFile(path.join(__dirname, '../../logs/SplitPNROrderChangeRS.xml'), resp.data, (error) => {
        if (error) {
          return utilsHelper.makeResponse(res, false, 500, 'error', `Split PNR`, `Error writing SplitPNROrderChangeRS.xml to result folder. Error: ${error}`);
        }
      });
    }
    const jsonObj = parser.parse(resp.data, config.pkgConfigs.x2joptions);
    const orderObj = jsonObj.Envelope.Body.OrderChangeRS;
    return utilsHelper.makeResponse(res, true, 200, 'success', 'Split PNR', `Split PNR successfully done`, orderObj);
  } catch (error) {
    console.log(logMethod, error)
    return utilsHelper.makeResponse(res, false, 200, 'danger', 'Seat Map Request', 'Request was not successful');
  }
}

module.exports = {
  airShopping,
  flightPrice,
  orderCreate,
  airDocIssue,
  seatMap,
  fareRules,
  splitPNR
};