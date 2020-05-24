const express = require('express');
const router = express.Router();

const flightDao = require('../dao/flight.dao');

const axios = require('axios');
const fs = require('fs');

let {
  getOrgDetails,
  convertToArray,
  makeResponse
} = require("./../helpers/utils");

const parser = require('fast-xml-parser');
const path = require('path');
//const csvjson = require('csvjson');
const config = require('../../config/config');
const FareRulesRQ = require('../xmls/FareRulesRQ');
const CalendarSearch = require('../xmls/CalendarSearchRQ');
const ItinReshop = require('../xmls/ItinReshopRQ');
const ItinReshopRepriceOnly = require('../xmls/ItinReshopRepriceOnlyRQ');
const ItinReshopOrderChange = require('../xmls/ItinReshopOrderChangeRQ');
const AncillariesServiceList = require('../xmls/AncillariesServiceListRQ');
const BookingRefundConfirmRQ = require('../xmls/BookingRefundConfirmRQ');
let myWriteXmlRequestResponse = config.writeXmlRequestResponse;
const NodeCache = require('node-cache');
const cache = new NodeCache({ stdTTL: 0, checkperiod: 0});
// const airportsCSV = path.join(__dirname, '../../data/airports.csv');
//const airportsCSV = path.join(__dirname, '../../data/airports_detailed_popular.csv');
const airportsJson = path.join(__dirname, '../../data/airports.json');
const paxTypesJSON = path.join(__dirname, '../../data/pax.json');
const serviceGroupsJSON = path.join(__dirname, '../../data/services.json');
// Post Filtering in booking
const CancelRequest = require('../xmls/cancel/CancelBookingRQ');
const VoidRequest = require('../xmls/void/VoidBookingRQ');
const OrderRetrieveXML = require('../xmls/OrderRetrieveRQ');
const Refund = require('../xmls/Refund/RefundRQ');
const SplitPNROrderChangeRQ = require('../xmls/SplitPNROrderChangeRQ');
const {
  Bookings,
  FlightBookings,
  FlightTicket,
  FlightTicketEmd,
  SettingModel,
  Users,
  sequelizeOrganisation,
  PassengerDetail,
  TripDetails,
  SegmentDetails
} = require('../../config/db');

const objBookings = {};

let url = config.api.flightConnectServiceURL;

const logThis = 'FlightDao';

/**
 * @swagger
 * /api/flights/air-shopping:
 *   post:
 *    tags:
 *      - Flights Prime Booking
 *    summary: List of flights
 *    description: Search flights
 *    consumes:
 *       - application/json
 *    produces:
 *      - application/json
 *    parameters:
 *      - in: body
 *        name: body
 *        description: Provide paramters to get result and consume rest of the API's
 *        required: true
 *        schema:
 *          properties:
 *            quantityADT:
 *              type: integer
 *              format: int32
 *              default: 1
 *              enum: [1]
 *            quantityCHD:
 *              type: integer
 *              format: int32
 *              default: 0
 *              enum: [0]
 *            quantityINF:
 *              type: integer
 *              format: int32
 *              default: 0
 *              enum: [0]
 *            currency:
 *              type: string
 *              default: AED
 *              enum: [AED]
 *            cabinType:
 *              type: string
 *              default: all
 *              enum: [all]
 *            markupBy:
 *              type: string
 *              required: false
 *              default: percentage
 *              enum: [percentage]
 *            markupValue:
 *              type: integer
 *              required: false
 *              default: 60
 *              enum: [60]
 *            calendarDates:
 *              type: boolean
 *              default: false
 *            nearBy:
 *              type: boolean
 *              default: false
 *            nonStop:
 *              type: boolean
 *              default: true
 *            farePreferences:
 *              required: false
 *              type: object
 *              properties:
 *                pref:
 *                  type: object
 *                  properties:
 *                    code:
 *                      type: string
 *                      default: 759-0
 *                      enum: [759-0]
 *                    name:
 *                      type: string
 *                      default: Lowest Fare
 *                      enum: [Lowest Fare]
 *                negoFare:
 *                  required: false
 *                  type: object
 *                  properties:
 *                    code:
 *                      type: string
 *                      default: NO IDEA - TO CONFIRM
 *                      enum: []
 *                    name:
 *                      type: string
 *                      default: Published and Private Fares
 *                      enum: []
 *            airlinePreference:
 *              type: array
 *              items:
 *                type: string
 *                default: EK
 *                enum: [EK]
 *            destinations:
 *              type: array
 *              items:
 *                type: object
 *                properties:
 *                  departure:
 *                    type: string
 *                    default: DXB
 *                    enum: [DXB]
 *                  arrival:
 *                    type: string
 *                    default: JED
 *                    enum: [JED]
 *                  flightDate:
 *                    type: string
 *                    format: date
 *                    default: "2020-04-28"
 *                    enum: ["2020-04-28"]
 *    responses:
 *      200:
 *        description: Return object
 *      400:
 *       description: Bad Request
 *      401:
 *        description: Not Authrized
 *      403:
 *        description: You do not have necessary permissions for the resource or JWT Expired
 *      500:
 *         description: Something went wrong
 */
router.post('/air-shopping', flightDao.airShopping);

/**
 * @swagger
 * /api/flights/flight-price:
 *   post:
 *    tags:
 *      - Flights Prime Booking
 *    summary: Flight price result
 *    description: Flight price
 *    consumes:
 *       - application/json
 *    produces:
 *      - application/json
 *    parameters:
 *      - in: body
 *        name: body
 *        description: Provide paramters to get result and consume rest of the API's
 *        required: true
 *        schema:
 *          properties:
 *            EchoToken:
 *              type: string
 *              default: 98f86884-101f-4bc7-a704-d51cdf933c6f
 *              enum: [98f86884-101f-4bc7-a704-d51cdf933c6f]
 *            Owner:
 *              type: string
 *              default: 1A
 *              enum: [1A]
 *            OffersGroup:
 *              type: array
 *              items:
 *                type: object
 *                properties:
 *                  OfferID:
 *                    type: object
 *                    properties:
 *                      text:
 *                        type: string
 *                        default: 1A-EK-FL-SEG-EK801-EK801-202003040015-202003040210-O#1A-EK-1-1-1
 *                        enum: [1A-EK-FL-SEG-EK801-EK801-202003040015-202003040210-O#1A-EK-1-1-1]
 *                  PricedOffer:
 *                    type: object
 *                    properties:
 *                      OfferPrice:
 *                        type: array
 *                        items:
 *                          type: object
 *                          properties:
 *                            attributes:
 *                              type: object
 *                              properties:
 *                                OfferItemID:
 *                                  type: string
 *                                  default: ADT-3-RP
 *                                  enum: [ADT-3-RP]
 *                            FareDetail:
 *                              type: object
 *                              properties:
 *                                FareComponent:
 *                                  type: array
 *                                  items:
 *                                    type: object
 *                                    properties:
 *                                      attributes:
 *                                        type: object
 *                                        properties:
 *                                          refs:
 *                                            type: string
 *                                            default: 1-X1XERAE1
 *                                            enum: [1-X1XERAE1]
 *            DataLists:
 *              type: object
 *              properties:
 *                AnonymousTravellerList:
 *                  type: object
 *                  properties:
 *                    adult:
 *                      type: integer
 *                      default: 3
 *                      enum: [3]
 *                    child:
 *                      type: integer
 *                      default: 2
 *                      enum: [2]
 *                    infant:
 *                      type: integer
 *                      default: 1
 *                      enum: [1]
 *                FlightList:
 *                  type: array
 *                  items:
 *                    type: object
 *                    properties:
 *                      attributes:
 *                        type: object
 *                        properties:
 *                          FlightKey:
 *                            type: string
 *                            default: FL-SEG-EK801-EK801-202003040015-202003040210-O
 *                            enum: [FL-SEG-EK801-EK801-202003040015-202003040210-O]
 *                          refs:
 *                             type: string
 *                             default: SEG-EK801-EK801-202003040015-202003040210-O
 *                             enum: [SEG-EK801-EK801-202003040015-202003040210-O]
 *                      Journey:
 *                        type: object
 *                        properties:
 *                          type: object
 *                          properties:
 *                            Time:
 *                              type: object
 *                              properties:
 *                                text:
 *                                  type: string
 *                                  default: PT2H55M
 *                                  enum: [PT2H55M]
 *                      SegmentReferences:
 *                        type: object
 *                        properties:
 *                          text:
 *                            type: string
 *                            default: SEG-EK801-EK801-202003040015-202003040210-O
 *                            enum: [SEG-EK801-EK801-202003040015-202003040210-O]
 *                          attributes:
 *                            type: object
 *                            properties:
 *                              OnPoint:
 *                                type: string
 *                                default: DXB
 *                                enum: [DXB]
 *                              OffPoint:
 *                                type: string
 *                                default: JED
 *                                enum: [JED]
 *                FlightSegmentList:
 *                  type: array
 *                  items:
 *                    type: object
 *                    properties:
 *                      attributes:
 *                        type: object
 *                        properties:
 *                          SegmentKey:
 *                            type: string
 *                            default: SEG-EK801-EK801-202003040015-202003040210-O
 *                            enum: [SEG-EK801-EK801-202003040015-202003040210-O]
 *                      Departure:
 *                        type: object
 *                        properties:
 *                          AirportCode:
 *                            type: object
 *                            properties:
 *                              text:
 *                                type: string
 *                                default: DXB
 *                                enum: [DXB]
 *                          Date:
 *                            type: object
 *                            properties:
 *                              text:
 *                                type: string
 *                                format: date
 *                                default: "2020-03-04"
 *                                enum: ["2020-03-04"]
 *                          Time:
 *                            type: object
 *                            properties:
 *                              text:
 *                                type: string
 *                                default: "00:15"
 *                                enum: ["00:15"]
 *                          AirportName:
 *                            type: object
 *                            properties:
 *                              text:
 *                                type: string
 *                                default: "Dubai, United Arab Emirates (DXB-Dubai Intl.)"
 *                                enum: ["Dubai, United Arab Emirates (DXB-Dubai Intl.)"]
 *                          Terminal:
 *                            type: object
 *                            properties:
 *                              Name:
 *                                type: object
 *                                properties:
 *                                  text:
 *                                    type: string
 *                                    default: "3"
 *                                    enum: ["3"]
 *                      Arrival:
 *                        type: object
 *                        properties:
 *                          AirportCode:
 *                            type: object
 *                            properties:
 *                              text:
 *                                type: string
 *                                default: JED
 *                                enum: [JED]
 *                          Date:
 *                            type: object
 *                            properties:
 *                              text:
 *                                type: string
 *                                format: date
 *                                default: "2020-03-04"
 *                                enum: ["2020-03-04"]
 *                          Time:
 *                            type: object
 *                            properties:
 *                              text:
 *                                type: string
 *                                default: "02:10"
 *                                enum: ["02:10"]
 *                          AirportName:
 *                            type: object
 *                            properties:
 *                              text:
 *                                type: string
 *                                default: "Jeddah, Saudi Arabia (JED-King Abdulaziz Intl.)"
 *                                enum: ["Jeddah, Saudi Arabia (JED-King Abdulaziz Intl.)"]
 *                          Terminal:
 *                            type: object
 *                            properties:
 *                              Name:
 *                                type: object
 *                                properties:
 *                                  text:
 *                                    type: string
 *                                    default: "N"
 *                                    enum: ["N"]
 *                      MarketingCarrier:
 *                        type: object
 *                        properties:
 *                          AirlineID:
 *                            type: object
 *                            properties:
 *                              text:
 *                                type: string
 *                                default: EK
 *                                enum: [EK]
 *                          Name:
 *                            type: object
 *                            properties:
 *                              text:
 *                                type: string
 *                                default: Emirates
 *                                enum: [Emirates]
 *                          FlightNumber:
 *                            type: object
 *                            properties:
 *                              text:
 *                                type: integer
 *                                default: 801
 *                                enum: [801]
 *                      OperationCarrier:
 *                        type: object
 *                        properties:
 *                          AirlineID:
 *                            type: object
 *                            properties:
 *                              text:
 *                                type: string
 *                                default: EK
 *                                enum: [EK]
 *                          Name:
 *                            type: object
 *                            properties:
 *                              text:
 *                                type: string
 *                                default: Emirates
 *                                enum: [Emirates]
 *                          FlightNumber:
 *                            type: object
 *                            properties:
 *                              text:
 *                                type: integer
 *                                default: 801
 *                                enum: [801]
 *                      Equipment:
 *                        type: object
 *                        properties:
 *                          AircraftCode:
 *                            type: object
 *                            properties:
 *                              text:
 *                                type: string
 *                                default: "388"
 *                                enum: ["388"]
 *                      FlightDetail:
 *                        type: object
 *                        properties:
 *                          FlightDuration:
 *                            type: object
 *                            properties:
 *                              Value:
 *                                type: object
 *                                properties:
 *                                  text:
 *                                    type: string
 *                                    default: PT2H55M
 *                                    enum: [PT2H55M]
 *                      ClassOfService:
 *                        type: object
 *                        properties:
 *                          Code:
 *                            type: object
 *                            properties:
 *                              attributes:
 *                                type: object
 *                                properties:
 *                                  SeatsLeft:
 *                                    type: integer
 *                                    default: 7
 *                                    enum: [7]
 *                              text:
 *                                type: object
 *                                properties:
 *                                  "#text":
 *                                    type: string
 *                                    default: X
 *                                    enum: [X]
 *                          MarketingName:
 *                            type: object
 *                            properties:
 *                              attributes:
 *                                type: object
 *                              text:
 *                                type: string
 *                OriginDestinationList:
 *                  type: array
 *                  items:
 *                    type: object
 *                    properties:
 *                      OnPoint:
 *                        type: string
 *                        default: DXB
 *                        enum: [DXB]
 *                      OffPoint:
 *                        type: string
 *                        default: JED
 *                        enum: [JED]
 *                      flight:
 *                        type: string
 *                        default: FL-SEG-EK801-EK801-202003040015-202003040210-O
 *                        enum: [FL-SEG-EK801-EK801-202003040015-202003040210-O]
 *                FareList:
 *                  type: array
 *                  items:
 *                    type: object
 *                    properties:
 *                      attributes:
 *                        type: object
 *                        properties:
 *                          ListKey:
 *                            type: string
 *                            default: 1-X1XERAE1
 *                            enum: [1-X1XERAE1]
 *                      FareBasisCode:
 *                        type: object
 *                        properties:
 *                          Code:
 *                            type: string
 *                            default: X1XERAE1
 *                            enum: [X1XERAE1]
 *                      Fare:
 *                        type: object
 *                        properties:
 *                          FareCode:
 *                            type: object
 *                            properties:
 *                              Code:
 *                                type: string
 *                                default: X
 *                                enum: [X]
 *            Metadata:
 *              type: object
 *              properties:
 *                OtherMetadata:
 *                  type: array
 *                  items:
 *                    type: object
 *                    properties:
 *                      CurrencyMetadata:
 *                        type: object
 *                        properties:
 *                          Name:
 *                            type: string
 *                            default: AED
 *                            enum: [AED]
 *                          Decimals:
 *                            type: integer
 *                            default: 2
 *                            enum: [2]
 *                          attributes:
 *                            type: object
 *                            properties:
 *                              MetadataKey:
 *                                type: string
 *                                default: Currency
 *                                enum: [Currency]
 *                      EquivalentID_Metadatas:
 *                        type: array
 *                        items:
 *                          type: object
 *                          properties:
 *                            type: object
 *                            properties:
 *                              EquivalentID_Metadata:
 *                                attributes:
 *                                  type: object
 *                                  properties:
 *                                    MetadataKey:
 *                                    type: string
 *                                    default: EM1
 *                                    enum: [EM1]
 *                                EquivID:
 *                                  type: array
 *                                  items:
 *                                    type: object
 *                                    properties:
 *                                      Owner:
 *                                        type: string
 *                                        default: 1A
 *                                        enum: [1A]
 *                                      ID_Value:
 *                                        type: string
 *                                        default: dfgdfryhdhdhxdfhbd
 *                                        enum: [dfgdfryhdhdhxdfhbd]
 *                                      EquivalentID_key:
 *                                        type: string
 *                                        default: dfgdfryhdhdhxdfhbd
 *                                        enum: [dfgdfryhdhdhxdfhbd]
 *                      RuleMetadata:
 *                        type: object
 *                        properties:
 *                          Name:
 *                            type: string
 *                            default: DynamicMarkup-BYPERC
 *                            enum: [DynamicMarkup-BYPERC]
 *                          RuleID:
 *                            type: string
 *                            default: DynamicMarkup
 *                            enum: [DynamicMarkup]
 *                          Values:
 *                            type: object
 *                            properties:
 *                              Value:
 *                                type: object
 *                                properties:
 *                                  Instruction:
 *                                    type: string
 *                                    default: DM-by_percentage-60-UPSALE-BY_PAX
 *                                    enum: [DM-by_percentage-60-UPSALE-BY_PAX]
 *                          Remarks:
 *                            type: object
 *                            properties:
 *                              Remark:
 *                                type: string
 *                                default: By percentage
 *                                enum: [By percentage]
 *                          Decimals:
 *                            type: integer
 *                            default: 2
 *                            enum: [2]
 *                          attributes:
 *                            type: object
 *                            properties:
 *                              MetadataKey:
 *                                type: string
 *                                default: DynamicMarkup_byPerc/byAmt_1
 *                                enum: [DynamicMarkup_byPerc/byAmt_1]
 *    responses:
 *      200:
 *        description: Return object
 *      400:
 *       description: Bad Request
 *      401:
 *        description: Not Authrized
 *      403:
 *        description: You do not have necessary permissions for the resource or JWT Expired
 *      500:
 *         description: Something went wrong
 */
router.post('/flight-price', flightDao.flightPrice);

/**
 * @swagger
 * /api/flights/order-create:
 *   post:
 *    tags:
 *      - Flights Prime Booking
 *    summary: Create an order
 *    description: Order create
 *    consumes:
 *       - application/json
 *    produces:
 *      - application/json
 *    parameters:
 *      - in: body
 *        name: body
 *        description: Provide paramters to get result and consume rest of the API's
 *        required: true
 *        schema:
 *          properties:
 *            dummyKey:
 *              type: string
 *    responses:
 *      200:
 *        description: Return object
 *      400:
 *       description: Bad Request
 *      401:
 *        description: Not Authrized
 *      403:
 *        description: You do not have necessary permissions for the resource or JWT Expired
 *      500:
 *         description: Something went wrong
 */
router.post('/order-create', flightDao.orderCreate);

/**
 * @swagger
 * /api/flights/air-doc-issue:
 *   post:
 *    tags:
 *      - Flights Prime Booking
 *    summary: Issue a ticket
 *    description: Air Doc Issue
 *    consumes:
 *       - application/json
 *    produces:
 *      - application/json
 *    parameters:
 *      - in: body
 *        name: body
 *        description: Provide paramters to get result and consume rest of the API's
 *        required: true
 *        schema:
 *          properties:
 *            dummyKey:
 *              type: string
 *    responses:
 *      200:
 *        description: Return object
 *      400:
 *       description: Bad Request
 *      401:
 *        description: Not Authrized
 *      403:
 *        description: You do not have necessary permissions for the resource or JWT Expired
 *      500:
 *         description: Something went wrong
 */
router.post('/air-doc-issue', flightDao.airDocIssue);

/**
 * @swagger
 * /api/flights/calendar-search:
 *   post:
 *    tags:
 *      - Flights Prime Booking
 *    summary: Calendar search
 *    description: Calendar search
 *    consumes:
 *       - application/json
 *    produces:
 *      - application/json
 *    parameters:
 *      - in: body
 *        name: body
 *        description: Provide paramters to get result and consume rest of the API's
 *        required: true
 *        schema:
 *          properties:
 *            dummyKey:
 *              type: string
 *    responses:
 *      200:
 *        description: Return object
 *      400:
 *       description: Bad Request
 *      401:
 *        description: Not Authrized
 *      403:
 *        description: You do not have necessary permissions for the resource or JWT Expired
 *      500:
 *         description: Something went wrong
 */
router.post('/calendar-search', (req, res) => {
  let result = getOrgDetails(req);
  if (!result.auth) {
    return res.status(500).json(result);
  }
  const xml = CalendarSearch(result.agent, result.api_key, result.secret_key, req.body);
  fs.writeFile(path.join(__dirname, '../../logs/CalendarSearchRQ.xml'), xml, (err) => {
    if (err) {
      return // console.log(err);
    }
    // console.log('CalendarSearchRQ file was saved!');
  });

  axios.post(url, xml, {
      headers: {
        'Content-Type': 'text/xml'
      }
    }).then((resp) => {
      fs.writeFile(path.join(__dirname, '../../logs/CalendarSearchRS.xml'), resp.data, (err) => {
        if (err) {
          return // console.log(err);
        }
        // console.log('CalendarSearchRS was saved!');

        if (parser.validate(resp.data) === true) {
          // optional (it'll return an object in case it's not valid)
          const jsonObj = parser.parse(resp.data, config.pkgConfigs.x2joptions);

          // let orderObj = jsonObj.Envelope.Body.OrderViewRS;

          // // console.log(orderObj.Response);

          res.status(200).json({
            pnr: jsonObj,
          });
        }
      });
    })
    .catch((error) => {
      // console.log(error);
      res.status(500).json({
        type: 'error',
        msg: error,
      });
    });
});

/** TO BE CLEANED */

/**
 * @swagger
 *
 * /api/flights/fetch-airports:
 *   get:
 *    tags:
 *      - Flights Utilities
 *    summary: Fetch airports
 *    description: Fetch airports
 *    consumes:
 *       - application/json
 *    produces:
 *      - application/json
 *    responses:
 *      200:
 *        description: Return object
 *      400:
 *       description: Bad Request
 *      401:
 *        description: Not Authrized
 *      403:
 *        description: You do not have necessary permissions for the resource or JWT Expired
 *      500:
 *         description: Something went wrong
 */
router.get('/fetch-airports', (req, res) => {
  let resultFromCache = cache.get('airports');
  if (resultFromCache === undefined) {
    const airports = JSON.parse(fs.readFileSync(airportsJson, {encoding: 'utf8'}));
    let resultFromInsertIntoCache = cache.set('airports', airports);
    if (resultFromInsertIntoCache) {
      return res.json({ type: 'data', airports: airports, cached: false});
    }
  } else {
    return res.json({type: 'data', airports: resultFromCache, cached: true});
  }
  return res.status(500).json({type: 'error', msg: error});
  // cache.get('airports', (err, airports) => {
  //   if (!err) {
  //     if (airports == undefined) {
  //       const airports = JSON.parse(fs.readFileSync(airportsJson, {
  //         encoding: 'utf8'
  //       }));
  //       cache.set('airports', airports, (err, success) => {
  //         if (!err && success) {
  //           res.json({
  //             type: 'data',
  //             airports,
  //             cached: false
  //           });
  //         }
  //       });
  //     } else {
  //       res.json({
  //         type: 'data',
  //         airports,
  //         cached: true
  //       });
  //     }
  //   } else {
  //     res.status(500).json({
  //       type: 'error',
  //       msg: error
  //     });
  //   }
  // });
});
/*
router.get('/fetch-airports', async (req, res) => {
  cache.get('airports', (err, airports) => {
    if (!err) {
      if (airports == undefined) {
        const data = fs.readFileSync(airportsCSV, {encoding: 'utf8'});
        const options = {
          delimiter: ',', //optional
          quote: '"' // optional
        };
        const json = csvjson.toObject(data, options);
        cache.set('airports', json, (err, success) => {
          if (!err && success) {
            res.json({
              type: 'data',
              json,
            });
          }
        });
      } else {
        res.json({
          type: 'data',
          airports,
          cached: true,
        });
      }
    } else {
      res.status(500).json({
        type: 'error',
        msg: error,
      });
    }
  });

  // let elasticSearchURL = 'http://192.168.10.131:9200/tpconnects_inhouse/airport_final/_search';
  // const airportList = await axios.get(elasticSearchURL, {
  //   data: JSON.stringify({
  //     "from": 0,
  //     "size": 10000
  //   })
  // });
  // const output = [];
  // airportList.data.hits.hits.map((e) => {
  //   output.push(e._source);
  // });

  // fs.writeFile(path.join(__dirname, '../../logs/airports.json'), JSON.stringify(output), (err) => {
  //   if (err) {
  //     return console.log(err);
  //   }
  //   console.log('airports.json file was saved!');
  // });
});*/

/**
 * @swagger
 *
 * /api/flights/all-pax-types:
 *   get:
 *    tags:
 *      - Flights Utilities
 *    summary: All PAX types
 *    description: All PAX types
 *    consumes:
 *       - application/json
 *    produces:
 *      - application/json
 *    responses:
 *      200:
 *        description: Return object
 *      400:
 *       description: Bad Request
 *      401:
 *        description: Not Authrized
 *      403:
 *        description: You do not have necessary permissions for the resource or JWT Expired
 *      500:
 *         description: Something went wrong
 */
router.get('/all-pax-types', (req, res) => {
  try {
    let data = fs.readFileSync(paxTypesJSON, { encoding: 'utf8' });
    data = JSON.parse(data);
    switch (req.query.paxType) {
      case 'codes':
        res.json({
          type: 'info',
          msg: 'Successfully got All PAX Types.',
          pax: data.paxCodes,
        });
        break;
      case 'types':
        res.json({
          type: 'info',
          msg: 'Successfully got All PAX Types.',
          pax: data.paxTypes,
        });
        break;
    }
  } catch (error) {
    console.log("flights::all-pax-types - Error");
    console.log(error);
  }
});

/**
 * @swagger
 *
 * /api/flights/all-services-groups:
 *   get:
 *    tags:
 *      - Flights Utilities
 *    summary: All services groups
 *    description: All services groups
 *    consumes:
 *       - application/json
 *    produces:
 *      - application/json
 *    responses:
 *      200:
 *        description: Return object
 *      400:
 *       description: Bad Request
 *      401:
 *        description: Not Authrized
 *      403:
 *        description: You do not have necessary permissions for the resource or JWT Expired
 *      500:
 *         description: Something went wrong
 */
router.get('/all-services-groups', (req, res) => {
  let data = fs.readFileSync(serviceGroupsJSON, {
    encoding: 'utf8',
  });
  data = JSON.parse(data);

  switch (req.query.type) {
    case 'groups':
      res.json({
        type: 'info',
        msg: 'Successfully got All Service Groups.',
        group: data.serviceGroup,
      });
      break;
    case 'sub-groups':
      res.json({
        type: 'info',
        msg: 'Successfully got All Service Sub-Groups.',
        group: data.serviceSubGroup,
      });
      break;
  }
});

/**
 * @swagger
 * /api/flights/fare-rules:
 *   post:
 *    tags:
 *      - Flights Common
 *    summary: Fare rules
 *    description: Fare rules
 *    consumes:
 *       - application/json
 *    produces:
 *      - application/json
 *    parameters:
 *      - in: body
 *        name: body
 *        description: Provide paramters to get result and consume rest of the API's
 *        required: true
 *        schema:
 *          properties:
 *            dummyKey:
 *              type: string
 *    responses:
 *      200:
 *        description: Return object
 *      400:
 *       description: Bad Request
 *      401:
 *        description: Not Authrized
 *      403:
 *        description: You do not have necessary permissions for the resource or JWT Expired
 *      500:
 *         description: Something went wrong
 */


router.post('/fare-rules', flightDao.fareRules);

// router.post('/', (req, res) => {
  
//   let result = getOrgDetails(req);
//   if (!result.auth) {
//     return res.status(500).json(result);
//   }
//   let xml = FareRulesRQ(result.agent, result.api_key, result.secret_key, req.body);

//    xml = `<?xml version="1.0" encoding="UTF-8"?>
//   <soapenv:Envelope xmlns:edis="http://www.iata.org/IATA/EDIST" xmlns:head="http://tpconnects.com/security/header" xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/">
//     <soapenv:Header>
//       <head:SecurityHeader>
//         <agent>STT</agent>
//         <apiKey>1ddcada954359bc78088f6739b743430</apiKey>
//         <secretKey>fa6d2ad2-5d05-4004-a72a-fa55499720c1</secretKey>
//       </head:SecurityHeader>
//     </soapenv:Header>
//     <soapenv:Body>
//       <FareRulesRQ xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns="http://www.iata.org/IATA/EDIST" Version="1.1.5" EchoToken="1c44a501-bd4b-4bdc-8496-34efaddc5996" xsi:schemaLocation="http://www.iata.org/IATA/EDIST ../ServiceListRQ.xsd">
//         <Document>
//           <Name>A3 NDC GATEWAY</Name>
//           <ReferenceVersion>1.0</ReferenceVersion>
//         </Document>
//         <Party>
//           <Sender>
//             <AggregatorSender>
//               <Name>TPCONNECTS</Name>
//               <Category>NDC</Category>
//               <AggregatorID>1G</AggregatorID>
//             </AggregatorSender>
//           </Sender>
//           <Participants>
//             <Participant>
//               <TravelAgencyParticipant SequenceNumber="1">
//                 <Name/>
//                 <Type>TravelAgency</Type>
//                 <Contacts>
//                   <Contact>
//                     <EmailContact>
//                       <Address>ndc@usdtravel.com</Address>
//                     </EmailContact>
//                   </Contact>
//                 </Contacts>
//                 <PseudoCity>AF74</PseudoCity>
//                 <IATA_Number>05666721</IATA_Number>
//                 <AgencyID Owner="1G">xmltpc001</AgencyID>
//                 <AgentUser>
//                   <Name/>
//                   <AgentUserID>xmltpc001</AgentUserID>
//                   <UserRole>Admin</UserRole>
//                 </AgentUser>
//               </TravelAgencyParticipant>
//             </Participant>
//           </Participants>
//         </Party>
//         <Query>
//           <Departure>
//             <AirportCode>DXB</AirportCode>
//             <Date>2020-05-19</Date>
//             <Time>11:05</Time>
//           </Departure>
//           <Arrival>
//             <AirportCode>MCT</AirportCode>
//             <Date>2020-05-19</Date>
//             <Time>12:10</Time>
//           </Arrival>
//           <FareBasisCode>
//             <Code>NELOAE</Code>
//             <Application/>
//           </FareBasisCode>
//           <AirlineID>WY</AirlineID>
//           <SpecialFare>
//             <AirlineID>WY</AirlineID>
//             <CompanyIndex>1G</CompanyIndex>
//           </SpecialFare>
//           <FareReferenceKey>1G_ysAiwC7Q2BKAmjv3AAAAAA==_6UUVoSldxwji/OVSW7NVL8bKj3F8T9EyxsqPcXxP0TLGyo9xfE/RMsuWFfXVd1OAly5qxZ3qLwOXLmrFneovA5cuasWd6i8Dly5qxZ3qLwOXLmrFneovAy9IRW295xdJ4bHmxr88+l3zd/VTAJtvZYOz9XCaxgMoEVtA1EB/YYHnWmtUsVS8UbukFUXsDjRYikKboRdzA6+k61sL6REQRsCIbRqMTJch6v9tEaRJgF5C/YIEuJEelqX0jsL6zlsA2lqxMa88CrhJTyB5x9tYSQLWhthMb3jloqtCGkPeThdKMmTakCLpOm0N03Bf4LZGly5qxZ3qLwOXLmrFneovA5cuasWd6i8Dly5qxZ3qLwOXLmrFneovA2+QKPIWaRvq6oxE1UL944DjaSte7T4ddDlN7mTMg9Nhgh6aIbmAcr16RcX/bGKItYRYMwQ757LHgFiv/cQsvrs=</FareReferenceKey>
//         </Query>
//         <Metadata/>
//       </FareRulesRQ>
//     </soapenv:Body>
//   </soapenv:Envelope>
//   `
  
//   fs.writeFile(path.join(__dirname, '../../logs/FareRulesRQ.xml'), xml, (err) => {
//     if (err) {
//       return // console.log(err);
//     }
//     // console.log('FareRulesRQ file was saved!');
//   });

//   axios.post(url, xml, {
//       headers: {
//         'Content-Type': 'text/xml'
//       }
//     }).then((resp) => {
//       fs.writeFile(path.join(__dirname, '../../logs/FareRulesRS.xml'), resp.data, (err) => {
//         if (err) {
//           return // console.log(err);
//         }
//         // console.log('FareRulesRS was saved!');

//         if (parser.validate(resp.data) === true) {
//           // optional (it'll return an object in case it's not valid)
//           const jsonObj = parser.parse(resp.data, config.pkgConfigs.x2joptions);

//           const fareRules = jsonObj.Envelope.Body.FareRulesRS;

//           res.status(200).json({
//             type: 'data',
//             msg: 'Successfully got Fare Rules',
//             fareRules,
//           });
//         }
//       });
//     })
//     .catch((error) => {
//       // console.log(error);
//       res.status(500).json({
//         type: 'error',
//         msg: error,
//       });
//     });
// });

/**
 * @swagger
 * /api/flights/ancillaries-service-list:
 *   post:
 *    tags:
 *      - Flights Common
 *    summary: Fare rules
 *    description: Fare rules
 *    consumes:
 *       - application/json
 *    produces:
 *      - application/json
 *    parameters:
 *      - in: body
 *        name: body
 *        description: Provide paramters to get result and consume rest of the API's
 *        required: true
 *        schema:
 *          properties:
 *            dummyKey:
 *              type: string
 *    responses:
 *      200:
 *        description: Return object
 *      400:
 *       description: Bad Request
 *      401:
 *        description: Not Authrized
 *      403:
 *        description: You do not have necessary permissions for the resource or JWT Expired
 *      500:
 *         description: Something went wrong
 */
router.post('/ancillaries-service-list', async (req, res) => {
  let result = getOrgDetails(req);
  if (!result.auth) {
    return res.status(500).json(result);
  }
  const xml = AncillariesServiceList(result.agent, result.api_key, result.secret_key, req.body);
  fs.writeFile(path.join(__dirname, '../../logs/AncillariesServiceListRQ.xml'), xml, (error) => {
    if (error) {
      // console.log(error);
      return res.status(500).json({
        type: 'error',
        title: `AncillariesServiceList`,
        message: `Error writing AncillariesServiceListRQ.xml to logs folder. Error: ${error}`
      });
    }
    // console.log('AncillariesServiceListRQ.xml file was saved!');
  });

  try {
    axios.post(url, xml, {
        headers: {
          'Content-Type': 'text/xml'
        }
      }).then((resp) => {
        fs.writeFile(path.join(__dirname, '../../logs/AncillariesServiceListRS.xml'), resp.data, (error) => {
          if (error) {
            // console.log(error);
            return res.status(500).json({
              type: 'error',
              title: `AncillariesServiceList`,
              message: `Error writing AncillariesServiceListRS.xml to logs folder. Error: ${error}`
            });
          }
          // console.log('AncillariesServiceListRS.xml file was saved!');

          if (parser.validate(resp.data) === true) { // optional (it'll return an object in case it's not valid)
            const jsonObj = parser.parse(resp.data, config.pkgConfigs.x2joptions);
            const serviceListObj = jsonObj.Envelope.Body.ServiceListRS;
            // res.status(200).json(serviceListObj);

            return makeResponse(res, true, 200, 'success', '', `Request was successful`, serviceListObj);

          } else {
            return res.status(500).json({
              type: 'error',
              title: `AncillariesServiceList`,
              message: `Internal Error: Got Empty Resposne from Supplier | ServiceListRS`
            });
          }
        });
      })
      .catch((error) => {
        //throw `${error}`;
        return makeResponse(res, false, 500, 'danger', 'AncillariesServiceList', `Oops! Something went wrong while processing your request. Error: ${error}`);
      });
  } catch (error) {
    return makeResponse(res, false, 500, 'danger', 'AncillariesServiceList', `Oops! Something went wrong while processing your request. Error: ${error}`);
  }
});

/**
 * @swagger
 *
 * /api/flights/booking-cancel:
 *   post:
 *    tags:
 *      - Flights After Sale
 *    summary: Cancel booking by ID
 *    description: Cancel booking by ID
 *    consumes:
 *       - application/json
 *    produces:
 *      - application/json
 *    parameters:
 *      - in: path
 *        name: id
 *        description: Booking ID
 *        required: true
 *        schema:
 *          properties:
 *            id:
 *              type: string
 *    responses:
 *      200:
 *        description: Return object
 *      400:
 *       description: Bad Request
 *      401:
 *        description: Not Authrized
 *      403:
 *        description: You do not have necessary permissions for the resource or JWT Expired
 *      500:
 *         description: Something went wrong
 */
router.post('/booking-cancel', async (req, res) => {
  const { tripId, serviceFee } = req.body;
  try {
    const bookingResult = await Bookings.findAll({
      where: {
        trip_id: tripId,
      },
      plain: true,
      include: [{
        model: FlightBookings,
        as: 'Flights'
      }]
    });
    if (bookingResult) {
      const PNRsplit = bookingResult.Flights[0].pnr_no;
      const PNR = PNRsplit.split('-');
      objBookings.booking_id = bookingResult.booking_id;
      objBookings.ownerId = PNR[0];
      objBookings.ownerPNR = PNR[1];
      objBookings.echoToken = bookingResult.echoToken;
      objBookings.retSenderAgentUserId = bookingResult.users_id;
      objBookings.tripId = bookingResult.trip_id;
      const userTable = await Users.findOne({
        where: {
          users_id: bookingResult.users_id
        },
        raw: false
      });
      if (userTable) {
        objBookings.retSenderAgentName = userTable.username;
        // console.log(userTable.organisation_id);
        const orgTable = await sequelizeOrganisation.findOne({
          where: {
            organisation_id: userTable.organisation_id
          },
          raw: false
        });
        if (orgTable) {
          objBookings.aggSenderName = orgTable.name;
          objBookings.retSenderCity = orgTable.agent_code;
          // console.log('THIS IS THE NEW OBJECT', objBookings);
          // logic of XML start
          const headersRQ = {
            headers: {
              'Content-Type': 'text/xml'
            }
          };
          // logic of XML start
          let result = getOrgDetails(req);
          if (!result.auth) {
            return res.status(500).json(result);
          }
          const xml = CancelRequest(result.agent, result.api_key, result.secret_key, objBookings);
          // FEQ - BGN
          // console.log("Booking Cancel - Request");
          // console.log("======================================================================");
          // console.log(xml);
          // console.log("======================================================================");
          // FEQ - END
          // console.dir('THIS IS MY XML', xml);
          axios.post(url, xml, headersRQ)
            .then(async (resp) => {
              // console.log("THIS IS THE DATA FOR CANCEL===================================", resp.data);
              // var SampleXml = `<?xml version="1.0" encoding="UTF-8"?>
              //     <soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/">
              //       <soapenv:Body>
              //         <ns2:OrderCancelRS xmlns:ns2="http://www.iata.org/IATA/EDIST" xmlns:ns3="http://tpconnects.com/security/header">
              //           <ns2:Success/>
              //           <ns2:Response>
              //             <ns2:OrderCancelProcessing/>
              //             <ns2:OrderReference>IZDJZX</ns2:OrderReference>
              //           </ns2:Response>
              //         </ns2:OrderCancelRS>
              //       </soapenv:Body>
              //     </soapenv:Envelope>`
              //var jsonObj = parser.getTraversalObj(SampleXml);
              // var he = require('he');
              // var options = {
              //   attributeNamePrefix: "@_",
              //   attrNodeName: "attr", //default is 'false'
              //   textNodeName: "#text",
              //   ignoreAttributes: true,
              //   ignoreNameSpace: false,
              //   allowBooleanAttributes: false,
              //   parseNodeValue: true,
              //   parseAttributeValue: false,
              //   trimValues: true,
              //   cdataTagName: "__cdata", //default is 'false'
              //   cdataPositionChar: "\\c",
              //   localeRange: "", //To support non english character in tag/attribute values.
              //   parseTrueNumberOnly: false,
              //   arrayMode: false, //"strict"
              //   attrValueProcessor: (val, attrName) => he.decode(val, {
              //     isAttributeValue: true
              //   }), //default is a=>a
              //   tagValueProcessor: (val, tagName) => he.decode(val), //default is a=>a
              //   stopNodes: ["parse-me-as-string"]
              // };
              // var jsonObj = parser.parse(SampleXml, options);
              // console.log(JSON.stringify(jsonObj));
              if (parser.validate(resp.data) === true) {
                // FEQ - BGN
                // console.log("Booking Cancel - Response");
                // console.log("======================================================================");
                // console.log(resp.data);
                // console.log("======================================================================");
                // FEQ - END
                try {
                  // console.log("THIS IS THE TRIP ID GIVEN IN THE URL", id)
                  const bookingUpdateResult = await Bookings.update({
                    booking_status: 'cancel',
                    service_charge_cancel: serviceFee ? serviceFee : 0
                  }, {
                    where: {
                      trip_id: tripId
                    }
                  });
                  if (bookingUpdateResult) {
                    const bookingFlightResult = await FlightBookings.update({
                      booking_status: 'cancel'
                    }, {
                      where: {
                        booking_id: objBookings.booking_id
                      }
                    });
                    if (bookingFlightResult) {
                      // console.log("THIS IS BOOKING ID", objBookings.booking_id);
                      // console.log(bookingUpdateResult);
                      // console.log(bookingFlightResult);

                      return res.json({
                        type: "data",
                        status: 200,
                        msg: "fetched",
                        data: bookingResult
                      });
                    }
                    return res.json({
                      type: "error",
                      status: 400,
                      msg: "Oops! Something went wrong while processing your request. Err: bookingFlight Updating Status Failed.",
                      data: error
                    });

                  }
                  return res.json({
                    type: "error",
                    status: 400,
                    msg: "Oops! Something went wrong while processing your request. Err: Booking Status Updated Failed.",
                    data: error
                  });


                } catch (err) {
                  console.log(err);
                }
              } else {
                console.log("response of cancel xml error")
              }
            });
          // logic of XML stop
        } else {
          console.log('ORGANIZATION TABLE ERROR');
        }
      } else {
        console.log('USER TABLE ERROR');
      }
    } else {
      console.log('BOOKING TABLE ERROR');
    }
  } catch (error) {
    console.log(error);
    return res.json({
      type: 'error',
      status: 400,
      msg: 'Oops! Something went wrong while processing your request.',
      data: error,
    });
  }
});

/**
 * @swagger
 *
 * /api/flights/booking-void/{id}:
 *   get:
 *    tags:
 *      - Flights After Sale
 *    summary: Void booking by ID
 *    description: Void booking by ID
 *    consumes:
 *       - application/json
 *    produces:
 *      - application/json
 *    parameters:
 *      - in: path
 *        name: id
 *        description: Booking ID
 *        required: true
 *        schema:
 *          properties:
 *            id:
 *              type: string
 *    responses:
 *      200:
 *        description: Return object
 *      400:
 *       description: Bad Request
 *      401:
 *        description: Not Authrized
 *      403:
 *        description: You do not have necessary permissions for the resource or JWT Expired
 *      500:
 *         description: Something went wrong
 */
router.get('/booking-void/:id', async (req, res) => {
  const {
    id
  } = req.params;
  try {
    const bookingResult = await Bookings.findAll({
      where: {
        trip_id: id
      },
      plain: true,
      include: [{
        model: FlightBookings,
        as: 'Flights'
      }]
    });
    if (bookingResult) {
      const PNRsplit = bookingResult.Flights[0].pnr_no;
      const PNR = PNRsplit.split('-');
      objBookings.booking_id = bookingResult.booking_id;
      objBookings.ownerId = PNR[0];
      objBookings.ownerPNR = PNR[1];
      objBookings.echoToken = bookingResult.echoToken;
      objBookings.retSenderAgentUserId = bookingResult.users_id;
      objBookings.tripId = bookingResult.trip_id;
      // start flight tickets
      const flightTicket = await FlightTicket.findOne({
        where: {
          ticket_booking_id: bookingResult.booking_id
        }
      });
      // console.log('THIS IS TICKET', flightTicket.ticket_number);
      // stop flight ticket
      if (flightTicket) {
        objBookings.ticket_number = flightTicket.ticket_number;
      }
      const userTable = await Users.findOne({
        where: {
          users_id: bookingResult.users_id
        },
        raw: false
      });
      if (userTable) {
        objBookings.retSenderAgentName = userTable.username;
        const orgTable = await sequelizeOrganisation.findOne({
          where: {
            organisation_id: userTable.organisation_id
          },
          raw: false
        });
        if (orgTable) {
          objBookings.aggSenderName = orgTable.name;
          objBookings.retSenderCity = orgTable.agent_code;
          objBookings.countryCode = orgTable.country_id;
          objBookings.cityCode = orgTable.city_id;
          // logic of XML start
          let result = getOrgDetails(req);
          if (!result.auth) {
            return res.status(500).json(result);
          }
          const xml = VoidRequest(result.agent, result.api_key, result.secret_key, objBookings);
          // FEQ - BGN
          // console.log("Booking Void - Request");
          // console.log("======================================================================");
          // console.log(xml);
          // console.log("======================================================================");
          // FEQ - END
          axios.post(url, xml, {
            headers: {
              'Content-Type': 'text/xml'
            }
          }).then(async (resp) => {
            // console.log("THIS IS THE DATA FOR Void===================================", resp.data);
            // var SampleXml = `<?xml version="1.0" encoding="UTF-8"?>
            //     <soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/">
            //       <soapenv:Body>
            //         <ns2:OrderCancelRS xmlns:ns2="http://www.iata.org/IATA/EDIST" xmlns:ns3="http://tpconnects.com/security/header">
            //           <ns2:Success/>
            //           <ns2:Response>
            //             <ns2:OrderCancelProcessing/>
            //             <ns2:OrderReference>IZDJZX</ns2:OrderReference>
            //           </ns2:Response>
            //         </ns2:OrderCancelRS>
            //       </soapenv:Body>
            //     </soapenv:Envelope>`
            //var jsonObj = parser.getTraversalObj(SampleXml);
            // var he = require('he');
            // var options = {
            //   attributeNamePrefix: "@_",
            //   attrNodeName: "attr", //default is 'false'
            //   textNodeName: "#text",
            //   ignoreAttributes: true,
            //   ignoreNameSpace: false,
            //   allowBooleanAttributes: false,
            //   parseNodeValue: true,
            //   parseAttributeValue: false,
            //   trimValues: true,
            //   cdataTagName: "__cdata", //default is 'false'
            //   cdataPositionChar: "\\c",
            //   localeRange: "", //To support non english character in tag/attribute values.
            //   parseTrueNumberOnly: false,
            //   arrayMode: false, //"strict"
            //   attrValueProcessor: (val, attrName) => he.decode(val, {
            //     isAttributeValue: true
            //   }), //default is a=>a
            //   tagValueProcessor: (val, tagName) => he.decode(val), //default is a=>a
            //   stopNodes: ["parse-me-as-string"]
            // };
            // var jsonObj = parser.parse(resp.data, options);
            // console.log(JSON.stringify(jsonObj));
            if (parser.validate(resp.data) === true) {
              // FEQ - BGN
              // console.log("Booking Void - Response");
              // console.log("======================================================================");
              // console.log(resp.data);
              // console.log("======================================================================");
              // FEQ - END
              try {
                // console.log("THIS IS THE TRIP ID GIVEN IN THE URL", id)
                const bookingUpdateResult = await Bookings.update({
                  booking_status: 'void',
                  supplier_price: '0',
                  markup_price: '0'
                }, {
                  where: {
                    trip_id: id
                  }
                })
                if (bookingUpdateResult) {
                  const bookingFlightResult = await FlightBookings.update({
                    booking_status: 'void'
                  }, {
                    where: {
                      booking_id: objBookings.booking_id
                    }
                  })
                  if (bookingFlightResult) {
                    const flightTicketResult = await flightTicket.update({
                      ticket_status: 'void'
                    }, {
                      where: {
                        ticket_booking_id: objBookings.booking_id
                      }
                    })
                    if (flightTicketResult) {
                      // console.log("THIS IS BOOKING ID", objBookings.booking_id);
                      // console.log(bookingUpdateResult);
                      // console.log(bookingFlightResult);
                      // console.log(flightTicketResult);
                      return res.json({
                        type: "data",
                        status: 200,
                        msg: "fetched",
                        data: bookingResult
                      });
                    }
                    return res.json({
                      type: "error",
                      status: 400,
                      msg: "Oops! Something went wrong while processing your request. Err: FlightTickets Updated Status Failed.",
                      data: error
                    });

                  }
                  return res.json({
                    type: "error",
                    status: 400,
                    msg: "Oops! Something went wrong while processing your request. Err: BookingsFlights Updated Status Failed.",
                    data: error
                  });

                } else {
                  return res.json({
                    type: "error",
                    status: 400,
                    msg: "Oops! Something went wrong while processing your request. Err: Bookings Updated Status Failed.",
                    data: error
                  });
                }

              } catch (err) {
                console.log(err);
              }
            } else {
              console.log("response of cancel xml error")
            }
          });
          // logic of XML stop
        } else {
          console.log('ORGANIZATION TABLE ERROR');
        }
      } else {
        console.log('USER TABLE ERROR');
      }
    } else {
      console.log('BOOKING TABLE ERROR');
    }
  } catch (error) {
    console.log(error);
    return res.json({
      type: 'error',
      status: 400,
      msg: 'Oops! Something went wrong while processing your request.',
      data: error
    });
  }
});

let myGenericMethod = require('./../helpers/ModelsGenericMethods');
let myCustomTripDetails = new myGenericMethod(TripDetails);
let myCustomSegmentDetails = new myGenericMethod(SegmentDetails);

let myCustomFlightBookings = new myGenericMethod(FlightBookings);
let myCustomBookings = new myGenericMethod(Bookings);
let myCustomFlightTicketEmd = new myGenericMethod(FlightTicketEmd);
let myCustomFlightTicket = new myGenericMethod(FlightTicket);
let myCustomPassengerDetail = new myGenericMethod(PassengerDetail);

let createTripAndSegments = async (paxDetails, Bookings, flt, data, orderObj) => {
  console.log("createTripAndSegments");
  console.log(paxDetails);
  // console.log('I am called');
  PassengerDetail.create(paxDetails)
    .then((pax) => {
      const tripDetails = {};
      tripDetails.trip_booking_id = Bookings.booking_id;
      tripDetails.trip_details = '';
      if (Array.isArray(orderObj.Response.DataLists.OriginDestinationList.OriginDestination)) {
        orderObj.Response.DataLists.OriginDestinationList.OriginDestination.map((ond, index) => {
          tripDetails.trip_details += `${ond.DepartureCode}-${ond.ArrivalCode}`;
          tripDetails.trip_details += (orderObj.Response.DataLists.OriginDestinationList.OriginDestination.length - 1) == index ? '' : ',';
        });
      } else {
        tripDetails.trip_details = orderObj.Response.DataLists.OriginDestinationList.OriginDestination['@OriginDestinationKey'];
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
          console.log(data);
          //const flightOnward = data.ticket.flights.onwards;
          segmentDetails.trip_id = trip.trip_id;
          if (Array.isArray(orderObj.Response.DataLists.FlightSegmentList.FlightSegment)) {
            orderObj.Response.DataLists.FlightSegmentList.FlightSegment.map((flight) => {
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
              segmentDetails.segment_aircraft_code = flight.Equipment.AircraftCode['text'];
              segmentDetails.equipment_name = flight.Equipment.Name;
              segmentDetails.segment_airline_id = flight.MarketingCarrier.AirlineID;
              segmentDetails.segment_operating_airline_id = flight.OperatingCarrier.AirlineID;
              segmentDetails.segment_operating_airline_name = flight.OperatingCarrier.Name;
              segmentDetails.segment_operating_flight_number = flight.OperatingCarrier.FlightNumber;
              segmentDetails.segment_marketing_airline_id = flight.MarketingCarrier.AirlineID;
              segmentDetails.segment_marketing_airline_name = flight.MarketingCarrier.Name;
              segmentDetails.segment_marketing_flight_number = flight.MarketingCarrier.FlightNumber;
              // segmentDetails.segment_seatingClassCode = flightOnward[0].offers[0].offersArr[0].pclass.Code;
              // segmentDetails.segment_seatingClass = flightOnward[0].offers[0].offersArr[0].pclass.Name;
              segmentDetails.segment_flight_number = flight.MarketingCarrier.FlightNumber;
              console.log("PAX FORM 2", segmentDetails);
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
                  console.log("ERROR 4", error)
                  // throw `${error}`;
                });
            });
          } else {
            // One Way Trip
            const flight = orderObj.Response.DataLists.FlightSegmentList.FlightSegment;
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
            segmentDetails.equipment_name = flight.Equipment.Name;
            segmentDetails.segment_operating_airline_name = flight.OperatingCarrier.Name;
            segmentDetails.segment_operating_flight_number = flight.OperatingCarrier.FlightNumber;
            segmentDetails.segment_aircraft_code = JSON.stringify(flight.Equipment.AircraftCode['text']);
            segmentDetails.segment_airline_id = JSON.stringify(flight.MarketingCarrier.AirlineID);
            segmentDetails.segment_operating_airline_id = JSON.stringify(flight.OperatingCarrier.AirlineID);
            segmentDetails.segment_marketing_airline_id = JSON.stringify(flight.MarketingCarrier.AirlineID);
            segmentDetails.segment_marketing_airline_name = flight.MarketingCarrier.Name;
            segmentDetails.segment_marketing_flight_number = flight.MarketingCarrier.FlightNumber;
            // segmentDetails.segment_seatingClassCode = flightOnward[0].offers[0].offersArr[0].pclass.Code;
            // segmentDetails.segment_seatingClass = flightOnward[0].offers[0].offersArr[0].pclass.Name;
            segmentDetails.segment_flight_number = flight.MarketingCarrier.FlightNumber;
            console.log("PAX FORM 3", data);
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
                console.log("ERROR 5", error)
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

/**
 * @swagger
 *
 * /api/flights/order-retrieve/{id}:
 *   get:
 *    tags:
 *      - Flights After Sale
 *    summary: Order retrieve by ID
 *    description: Order retrieve by ID
 *    consumes:
 *       - application/json
 *    produces:
 *      - application/json
 *    parameters:
 *      - in: path
 *        name: id
 *        description: Order ID
 *        required: true
 *        schema:
 *          properties:
 *            id:
 *              type: string
 *    responses:
 *      200:
 *        description: Return object
 *      400:
 *       description: Bad Request
 *      401:
 *        description: Not Authrized
 *      403:
 *        description: You do not have necessary permissions for the resource or JWT Expired
 *      500:
 *         description: Something went wrong
 */
router.get('/order-retrieve/:id', async (req, res) => {
  const logMethod = `${logThis}OrderCreate`;
  const { id } = req.params;
  try {
    const bookingResult = await Bookings.findAll({
      where: { trip_id: id },
      plain: true,
      include: [{ model: FlightBookings, as: 'Flights' }],
    });
    if (bookingResult) {
      const PNRsplit = bookingResult.Flights[0].pnr_no;
      const PNR = PNRsplit.split('-');
      objBookings.ownerId = PNR[0];
      objBookings.ownerPNR = PNR[1];
      objBookings.echoToken = bookingResult.echoToken;
      objBookings.retSenderAgentUserId = bookingResult.users_id;
      objBookings.tripId = bookingResult.trip_id;
      objBookings.currency = bookingResult.booking_currency;
      const userTable = await Users.findOne({
        where: { users_id: bookingResult.users_id },
        raw: false
      });
      if (userTable) {
        objBookings.retSenderAgentName = userTable.username;
        // console.log(userTable.organisation_id);
        const orgTable = await sequelizeOrganisation.findOne({
          where: { organisation_id: userTable.organisation_id },
          raw: false
        });
        if (orgTable) {
          objBookings.aggSenderName = orgTable.name;
          objBookings.retSenderCity = orgTable.agent_code;
          // logic of XML start
          let result = getOrgDetails(req);
          if (!result.auth) {
            return res.status(500).json(result);
          }
          const xml = OrderRetrieveXML(result.agent, result.api_key, result.secret_key, objBookings);
          if (myWriteXmlRequestResponse) {
            fs.writeFile(path.join(__dirname, '../../logs/OrderRetrieveRQ.xml'), xml, (error) => {
              if (error) {
                return makeResponse(res, false, 500, 'error', `OrderRetrieve`, `Error writing OrderRetrieveRQ.xml to logs folder. Error: ${error}`);
              }
            });
          }
          let resp = await axios.post(url, xml, { headers: { 'Content-Type': 'text/xml' } });
            if (myWriteXmlRequestResponse) {
              fs.writeFile(path.join(__dirname, '../../logs/OrderRetrieveRS.xml'), resp.data, (error) => {
                if (error) {
                  return makeResponse(res, false, 500, 'error', `OrderRetrieve`, `Error writing OrderRetrieveRS.xml to logs folder. Error: ${error}`);
                }
              });
            }

            if (parser.validate(resp.data) === true) {
              const jsonObj = parser.parse(resp.data, config.pkgConfigs.x2joptions);
              let result = jsonObj.Envelope.Body.OrderViewRS;
              if (result.hasOwnProperty("Errors") && result.Errors.hasOwnProperty("Error")) {
                return makeResponse(res, false, 200, 'error', 'OrderRetrieve', 'Error happened during retrieving the order. ' + result.Errors.Error["#text"], result);
              } else {
                return makeResponse(res, true, 200, 'success', 'OrderRetrieve', 'Success', result);
              }
            }
          // logic of XML stop
        } else {
          console.log('ORGANIZATION TABLE ERROR');
        }
      } else {
        console.log('USER TABLE ERROR');
      }
    } else {
      console.log('BOOKING TABLE ERROR');
    }
    return makeResponse(res, false, 400, 'error', 'INTERNAL SERVER ERROR', 'INTERNAL SERVER ERROR');
  } catch (error) {
    console.log(logMethod, error);
    return makeResponse(res, false, 400, 'error', 'INTERNAL SERVER ERROR', 'INTERNAL SERVER ERROR', error);
  }
});

/**
 * @swagger
 *
 * /api/flights/refund_confirm/{id}:
 *   get:
 *    tags:
 *      - Flights After Sale
 *    summary: Refund Confirmation by ID
 *    description: Refund Confirmation by ID
 *    consumes:
 *       - application/json
 *    produces:
 *      - application/json
 *    parameters:
 *      - in: path
 *        name: id
 *        description: Ticket ID
 *        required: true
 *        schema:
 *          properties:
 *            id:
 *              type: string
 *    responses:
 *      200:
 *        description: Return object
 *      400:
 *       description: Bad Request
 *      401:
 *        description: Not Authrized
 *      403:
 *        description: You do not have necessary permissions for the resource or JWT Expired
 *      500:
 *         description: Something went wrong
 */
router.get('/refund_confirm/:id', async (req, res) => {
  const { id } = req.params;
  try {
    let retail;
    const item = await SettingModel.findOne({ where: { name: "RetailPartnerSender" } });
    if (item) {
      retail = JSON.parse(item.value);
    }
    const bookingResult = await Bookings.findAll({
      where: {
        trip_id: id
      },
      plain: true,
      include: [{
        model: FlightBookings,
        as: 'Flights'
      }]
    });
    if (bookingResult) {
      const PNRsplit = bookingResult.Flights[0].pnr_no;
      const PNR = PNRsplit.split('-');
      objBookings.ownerId = PNR[0];
      objBookings.ownerPNR = PNR[1];
      objBookings.echoToken = bookingResult.echoToken;
      //objBookings.retSenderAgentUserId = bookingResult.users_id;
      objBookings.tripId = bookingResult.trip_id;
      objBookings.currency = bookingResult.booking_currency;
      objBookings.bookingInfo = (bookingResult.Flights[0].airDocIssue !== '') ? bookingResult.Flights[0].airDocIssue : bookingResult.Flights[0].TicketDocInfos;
      const userTable = await Users.findOne({
        where: {
          users_id: bookingResult.users_id
        },
        raw: false
      });
      if (userTable) {
        objBookings.retSenderAgentName = userTable.username;
        // console.log(userTable.organisation_id);
        const orgTable = await sequelizeOrganisation.findOne({
          where: {
            organisation_id: userTable.organisation_id
          },
          raw: false
        });
        if (orgTable) {
          objBookings.aggSenderName = orgTable.name;
          objBookings.retSenderCity = orgTable.agent_code;
          const xml = BookingRefundConfirmRQ(req, objBookings, retail);
          if (myWriteXmlRequestResponse) {
            fs.writeFile(path.join(__dirname, '../../logs/BookingRefundConfirmRQ.xml'), xml, (error) => {
              if (error) {
                return makeResponse(res, false, 500, 'error', `Refund`, `Error writing BookingRefundConfirmRQ.xml to logs folder. Error: ${error}`);
              }
            });
          }
          let resp = await axios.post(url, xml, {headers: {'Content-Type': 'text/xml'}});
          if (myWriteXmlRequestResponse) {
            fs.writeFile(path.join(__dirname, '../../logs/BookingRefundConfirmRS.xml'), resp.data, (error) => {
              if (error) {
                return makeResponse(res, false, 500, 'error', `Refund`, `Error writing BookingRefundConfirmRS.xml to logs folder. Error: ${error}`);
              }
            });
          }
            if (parser.validate(resp.data) === true) {
              const jsonObj = parser.parse(resp.data, config.pkgConfigs.x2joptions);
              let itinReShopRS = jsonObj.Envelope.Body.ItinReshopRS;
              if (itinReShopRS === '') {
                return makeResponse(res, false, 200, 'danger', 'Reshop', `Empty response from suppliers`);
              }
              if (itinReShopRS.hasOwnProperty('Errors')) {
                res.status(200).json(itinReShopRS.Errors);
                return;
              }
              let result = itinReShopRS.Response.ReShopOffers.ReShopOffer.ReshopDifferential;
              let original_order_amount = result.OriginalOrder.Total.Amount;
              let cancel_supplier_price = result.ReshopDue.ByAirline.Total.Amount;
              let refund_service_amount = result.NewOffer.Total.Amount;
              let refund_penalty_amount = result.PenaltyAmount.Total.Amount;
              return makeResponse(res, true, 200, 'success', `Refund`, `Refund Confirmation`, {
                original_order_amount, cancel_supplier_price, refund_service_amount, refund_penalty_amount
              });
            } else {
              console.error("ERROR - Parsing response");
            }
        } else {
          console.error('ERROR - No organisation found with ID: ' + userTable.organisation_id);
        }
      } else {
        console.error('ERROR - No user found with ID: ' + bookingResult.users_id);
      }
    } else {
      console.error('ERROR - No booking found for trip ID: ' + id);
    }
    return res.json({
      type: 'data',
      status: 200,
      msg: 'fetched',
      data: bookingResult
    });
  } catch (error) {
    // console.log(error);
    return res.json({
      type: 'error',
      status: 400,
      msg: 'Oops! Something went wrong while processing your request.',
      data: error
    });
  }
});



















/**
 * @swagger
 *
 * /api/flights/refund:
 *   post:
 *    tags:
 *      - Flights After Sale
 *    summary: Itinerary reissue
 *    description: Itinerary reissue
 *    consumes:
 *       - application/json
 *    produces:
 *      - application/json
 *    parameters:
 *      - in: body
 *        name: body
 *        description: Provide paramters to get result and consume rest of the API's
 *        required: true
 *        schema:
 *          properties:
 *            dummyKey:
 *              type: string
 *    responses:
 *      200:
 *        description: Return object
 *      400:
 *       description: Bad Request
 *      401:
 *        description: Not Authrized
 *      403:
 *        description: You do not have necessary permissions for the resource or JWT Expired
 *      500:
 *         description: Something went wrong
 */
router.post('/refund', async (req, res) => {
  try {
    const bookingResult = await Bookings.findAll({
      where: {
        trip_id: req.body.tripId
      },
      plain: true,
      include: [{
        model: FlightBookings,
        as: 'Flights'
      }]
    });
    if (bookingResult) {
      const PNRsplit = bookingResult.Flights[0].pnr_no;
      const PNR = PNRsplit.split('-');
      objBookings.ownerId = PNR[0];
      objBookings.ownerPNR = PNR[1];
      objBookings.echoToken = bookingResult.echoToken;
      objBookings.retSenderAgentUserId = bookingResult.users_id;
      objBookings.tripId = bookingResult.trip_id;
      objBookings.currency = bookingResult.booking_currency;
      objBookings.amount = req.body.amount;//bookingResult.amount;
      const userTable = await Users.findOne({
        where: {
          users_id: bookingResult.users_id
        },
        raw: false
      });
      if (userTable) {
        objBookings.retSenderAgentName = userTable.username;
        // console.log(userTable.organisation_id);
        const orgTable = await sequelizeOrganisation.findOne({
          where: {
            organisation_id: userTable.organisation_id
          },
          raw: false
        });
        if (orgTable) {
          objBookings.aggSenderName = orgTable.name;
          objBookings.retSenderCity = orgTable.agent_code;
          // console.log('THIS IS THE NEW OBJECT', objBookings);
          // logic of XML start
          let result = getOrgDetails(req);
          if (!result.auth) {
            return res.status(500).json(result);
          }
          const xml = Refund(result.agent, result.api_key, result.secret_key, objBookings);
          if (myWriteXmlRequestResponse) {
            fs.writeFile(path.join(__dirname, '../../logs/RefundRQ.xml'), xml, (error) => {
              if (error) {
                return makeResponse(res, false, 500, 'error', `Refund`, `Error writing RefundRQ.xml to logs folder. Error: ${error}`);
              }
            });
          }

          // FEQ - BGN
          // console.log("Refund - Response");
          // console.log("======================================================================");
          // console.log(xml);
          // console.log("======================================================================");
          // FEQ - END
          //console.dir('THIS IS MY XML', xml);
          let resp = await axios.post(url, xml, {
            headers: {
              'Content-Type': 'text/xml'
            }
          });
          if (myWriteXmlRequestResponse) {
            fs.writeFile(path.join(__dirname, '../../logs/RefundRS.xml'), resp.data, (error) => {
              if (error) {
                return makeResponse(res, false, 500, 'error', `Refund`, `Error writing RefundRS.xml to logs folder. Error: ${error}`);
              }
            });
          }
            if (parser.validate(resp.data) === true) {
              const jsonObj = parser.parse(resp.data, config.pkgConfigs.x2joptions);
              let OrderCancelRS = jsonObj.Envelope.Body.OrderCancelRS;
              if (OrderCancelRS === '') {
                return makeResponse(res, false, 200, 'danger', 'Reshop', `Empty response from suppliers`);
              }
              if (OrderCancelRS.hasOwnProperty('Errors')) {
                res.status(200).json(OrderCancelRS.Errors);
                return;
              }
              // FEQ - BGN
              // console.log("Refund - Response");
              // console.log("======================================================================");
              // console.log(resp.data);
              // console.log("======================================================================");
              // return;
              // FEQ - END
              try {
                const bookingUpdateResult = await Bookings.update({
                  booking_status: 'refund',
                  service_charge_refund: req.body.serviceFee ? req.body.serviceFee : 0
                }, {
                  where: {
                    trip_id: req.body.tripId
                  }
                })
                if (bookingUpdateResult) {
                  const bookingFlightResult = await FlightBookings.update({
                    booking_status: 'refund'
                  }, {
                    where: {
                      booking_id: objBookings.booking_id
                    }
                  });
                  if (bookingFlightResult) {
                    return res.json({
                      type: "data",
                      status: 200,
                      msg: "fetched",
                      data: bookingResult
                    });
                  }
                  return res.json({
                    type: "error",
                    status: 400,
                    msg: "Oops! Something went wrong while processing your request. Err: bookingFlight Updating Status Failed.",
                    data: error
                  });
                }
                return res.json({
                  type: "error",
                  status: 400,
                  msg: "Oops! Something went wrong while processing your request. Err: Booking Status Updated Failed.",
                  data: error
                });
              } catch (err) {
                console.log(err);
              }
            } else {
              console.log("response of cancel xml error")
            }
          // logic of XML stop
        } else {
          console.log('ORGANIZATION TABLE ERROR');
        }
      } else {
        console.log('USER TABLE ERROR');
      }
    } else {
      console.log('BOOKING TABLE ERROR');
    }
    return res.json({
      type: 'data',
      status: 200,
      msg: 'fetched',
      data: bookingResult
    });
  } catch (error) {
    // console.log(error);
    return res.json({
      type: 'error',
      status: 400,
      msg: 'Oops! Something went wrong while processing your request.',
      data: error
    });
  }
});

/**
 * @swagger
 * /api/flights/itin-reissue:
 *   post:
 *    tags:
 *      - Flights After Sale
 *    summary: Itinerary reissue
 *    description: Itinerary reissue
 *    consumes:
 *       - application/json
 *    produces:
 *      - application/json
 *    parameters:
 *      - in: body
 *        name: body
 *        description: Provide paramters to get result and consume rest of the API's
 *        required: true
 *        schema:
 *          properties:
 *            dummyKey:
 *              type: string
 *    responses:
 *      200:
 *        description: Return object
 *      400:
 *       description: Bad Request
 *      401:
 *        description: Not Authrized
 *      403:
 *        description: You do not have necessary permissions for the resource or JWT Expired
 *      500:
 *         description: Something went wrong
 */
router.post('/itin-reissue', (req, res) => {
  const xml = ItinReshop(req);
  if (xml === '') {
    return makeResponse(res, false, 500, 'error', 'Not Authenticated', 'Error in extracting credentials', [{
      auth: true
    }]);
  }
  fs.writeFile(path.join(__dirname, '../../logs/ItinReshopRQ.xml'), xml, (error) => {
    if (error) {
      // console.log(error);
      return res.status(500).json({
        type: 'error',
        title: `Reissue`,
        message: `Error writing ItinReshopRQ.xml to logs folder. Error: ${error}`
      });
    }
  });
  axios.post(url, xml, { headers: { 'Content-Type': 'text/xml' } }).then((resp) => {
      fs.writeFile(path.join(__dirname, '../../logs/ItinReshopRS.xml'), resp.data, (error) => {
        if (error) {
          // console.log(error);
          return res.status(500).json({
            type: 'error',
            title: `Reissue`,
            message: `Error writing ItinReshopRS.xml to logs folder. Error: ${error}`
          });
        }
        // console.log('ItinReshopRQ.xml file was saved!');
        if (parser.validate(resp.data) === true) {
          const jsonObj = parser.parse(resp.data, config.pkgConfigs.x2joptions);
          let itinReShopRS = jsonObj.Envelope.Body.ItinReshopRS;
          if (itinReShopRS === '') {
            return makeResponse(res, false, 200, 'danger', 'Reshop', `Empty response from suppliers`);
          }
          if (itinReShopRS.hasOwnProperty('Errors')) {
            res.status(200).json(itinReShopRS.Errors);
            return;
          }
          let itinReShopObj = itinReShopRS.Response;
          let myOriginDestinationList = convertToArray(itinReShopObj.DataLists.OriginDestinationList.OriginDestination);
          let myFlightSegmentList = convertToArray(itinReShopObj.DataLists.FlightSegmentList.FlightSegment);
          let reShopOffer = convertToArray(itinReShopObj.ReShopOffers.ReShopOffer);
          let myJourneyList = [];
          let filteredFareList = [];
          let filteredFlightSegmentList = [];
          reShopOffer.map((offer) => {
            let segmentList = convertToArray(offer.ReShopPricedOffer.Associations);
            //let myFareComponentList = convertToArray(offer.ReShopPricedOffer.OfferPrice.FareDetail.FareComponent);
            let tmpJourneyList = [];
            myOriginDestinationList.map((ond) => {
              let myDepartureCode = ond.DepartureCode;
              let flightUnderJourneyList = [];
              segmentList.map((segment) => {
                let ref = segment.ApplicableFlight.FlightSegmentReference;
                //let fareComponent = myFareComponentList.filter(e => e.SegmentReference === ref['@ref'])[0];
                let classCode = ref.ClassOfService.Code;
                let classMarketingName = ref.ClassOfService.MarketingName;
                // Search for the flight
                let tmpFlightSegment = myFlightSegmentList.filter(e => e['@SegmentKey'] === ref['@ref'] && e.Departure.AirportCode === myDepartureCode);
                if (tmpFlightSegment !== undefined && tmpFlightSegment.length === 1) {
                  flightSegment = tmpFlightSegment[0];
                  if (filteredFlightSegmentList.filter(e => e['@SegmentKey'] === ref['@ref']).length === 0) {
                    filteredFlightSegmentList.push(flightSegment);
                  }
                  flightUnderJourneyList.push({
                    Flight: flightSegment,
                    ClassCode: classCode,
                    ClassMarketingName: classMarketingName
                    //, FareComponentRef: fareComponent['@refs']
                  });
                  if (flightSegment.Arrival.AirportCode === ond.ArrivalCode) {
                    // We reached the end of the journey
                    return;
                  } else {
                    myDepartureCode = flightSegment.Arrival.AirportCode;
                  }
                }
              });
              tmpJourneyList.push({
                Departure: ond.DepartureCode,
                Arrival: ond.ArrivalCode,
                SegmentList: flightUnderJourneyList
              });
            });
            myJourneyList.push({
              ID: offer.OfferID['#text'],
              Price: offer.TotalPrice.SimpleCurrencyPrice['#text'],
              Currency: offer.TotalPrice.SimpleCurrencyPrice['@Code'],
              Journey: tmpJourneyList
            });
            let myFareGroupList = convertToArray(itinReShopObj.DataLists.FareList.FareGroup);
            /*let offerPriceList = convertToArray(offer.ReShopPricedOffer.OfferPrice);
            offerPriceList.map((offerPrice) => {
              let myFareComponentList = convertToArray(offerPrice.FareDetail.FareComponent);
              myFareComponentList.map((fareComponent) => {
                if (filteredFareList.filter(e => e['@ListKey'] === fareComponent['@refs']).length === 0) {
                  filteredFareList.push(myFareGroupList.filter(e => e['@ListKey'] === fareComponent['@refs'])[0]);
                }
              });
            });*/
          });
          let resultMap = {
            offers: itinReShopObj,
            JourneyList: myJourneyList,
            echoToken: itinReShopRS['@EchoToken'],
            Document: {
              Name: itinReShopRS.Document.Name
            },
            Order: itinReShopObj.Order,
            DataLists: {
              RecognizedTravelerList: itinReShopObj.DataLists.RecognizedTravelerList,
              OriginDestinationList: itinReShopObj.DataLists.OriginDestinationList,
              FareList: filteredFareList,
              FlightSegmentList: filteredFlightSegmentList
            }
          };
          res.status(200).json(resultMap);
        } else {
          res.status(500).json({
            type: 'error',
            title: `Reissue`,
            message: 'Error parsing response from server'
          });
        }
      });
    })
    .catch((error) => {
      return res.status(500).json({
        type: 'error',
        title: `Reissue`,
        message: `Oops! Something went wrong while processing your request. Error: ${error}`
      });
    });
});

/**
 * @swagger
 * /api/flights/itin-reissue-price:
 *   post:
 *    tags:
 *      - Flights After Sale
 *    summary: Itinerary reissue price
 *    description: Itinerary reissue price
 *    consumes:
 *       - application/json
 *    produces:
 *      - application/json
 *    parameters:
 *      - in: body
 *        name: body
 *        description: Provide paramters to get result and consume rest of the API's
 *        required: true
 *        schema:
 *          properties:
 *            dummyKey:
 *              type: string
 *    responses:
 *      200:
 *        description: Return object
 *      400:
 *       description: Bad Request
 *      401:
 *        description: Not Authrized
 *      403:
 *        description: You do not have necessary permissions for the resource or JWT Expired
 *      500:
 *         description: Something went wrong
 */
router.post('/itin-reissue-reprice', (req, res) => {
  const xml = ItinReshopRepriceOnly(req);
  if (xml === '') {
    return makeResponse(res, false, 500, 'error', 'Not Authenticated', 'Error in extracting credentials', [{
      auth: true
    }]);
  }
  fs.writeFile(path.join(__dirname, '../../logs/ItinReshopRepriceOnlyRQ.xml'), xml, (error) => {
    if (error) {
      // console.log(error);
      return res.status(500).json({
        type: 'error',
        title: `Itin Reshop Reprice Only`,
        message: `Error writing ItinReshopRepriceOnlyRQ.xml to logs folder. Error: ${error}`
      });
    }
  });

  axios.post(url, xml, {
      headers: {
        'Content-Type': 'text/xml'
      }
    }).then((resp) => {
      fs.writeFile(path.join(__dirname, '../../logs/ItinReshopRepriceOnlyRS.xml'), resp.data, (error) => {
        if (error) {
          // console.log(error);
          return res.status(500).json({
            type: 'error',
            title: `Itin Reshop Reprice Only`,
            message: `Error writing ItinReshopRepriceOnlyRS.xml to logs folder. Error: ${error}`
          });
        }
        // console.log('ItinReshopRepriceOnlyRS.xml was saved!');

        if (parser.validate(resp.data) === true) {
          // optional (it'll return an object in case it's not valid)
          const jsonObj = parser.parse(resp.data, config.pkgConfigs.x2joptions);
          let itinReShopRS = jsonObj.Envelope.Body.ItinReshopRS;
          if (itinReShopRS.hasOwnProperty('Errors')) {
            res.status(200).json(itinReShopRS.Errors);
            return;
          }
          let itinReShopObj = itinReShopRS.Response;
          if (itinReShopObj === undefined) {
            res.status(200).json({
              "Error": {
                '@Code': 400,
                '@ShortText': '',
                "#text": "Empty response from supplier"
              }
            });
            return;
          }
          let myFlightSegmentList = convertToArray(itinReShopObj.DataLists.FlightSegmentList.FlightSegment);
          let repriceDetails = [];
          if (itinReShopObj.ReShopOffers.ReShopOffer.ReShopPricedOffer.OfferPrice &&
            itinReShopObj.ReShopOffers.ReShopOffer.ReShopPricedOffer.OfferPrice.FareDetail &&
            itinReShopObj.ReShopOffers.ReShopOffer.ReShopPricedOffer.OfferPrice.FareDetail.FareComponent) {
            let myFareComponentList = convertToArray(itinReShopObj.ReShopOffers.ReShopOffer.ReShopPricedOffer.OfferPrice.FareDetail.FareComponent);
            myFareComponentList.map((fare) => {
              let segment = myFlightSegmentList.filter(e => e['@SegmentKey'] === fare.SegmentReference)[0];
              let detailList = convertToArray(fare.FareRules.Penalty.Details.Detail);
              let myPenaltyList = [];
              detailList.map((detail) => {
                // console.log(detail.Amounts.Amount);
                myPenaltyList.push({
                  type: detail.Type,
                  currency: detail.Amounts.Amount.CurrencyAmountValue['@Code'],
                  amount: detail.Amounts.Amount.CurrencyAmountValue['#text'],
                  remark: detail.Amounts.Amount.ApplicableFeeRemarks.Remark
                });
              });
              repriceDetails.push({
                Arrival: segment.Arrival.AirportCode,
                Departure: segment.Departure.AirportCode,
                Details: myPenaltyList
              });
            });
          }
          // Calculate the panalty
          let penalty = itinReShopObj.ReShopOffers.ReShopOffer.ReshopDifferential.PenaltyAmount;
          let newOffer = itinReShopObj.ReShopOffers.ReShopOffer.ReshopDifferential.NewOffer;
          let originalOrder = itinReShopObj.ReShopOffers.ReShopOffer.ReshopDifferential.OriginalOrder;

          console.log(originalOrder);

          let _totalCurrency = newOffer.Total.Amount['@Code'];
          let _totalAmount = parseFloat(Math.round(newOffer.Total.Amount['#text'] * 100) / 100).toFixed(2);
          let _originalTotalAmount = parseFloat(Math.round(originalOrder.Total['@EquivRate'] * 100) / 100).toFixed(2);
          let _fareDifferenceAmount = parseFloat(Math.round(_totalAmount - _originalTotalAmount * 100) / 100).toFixed(2);
          let _newTax = parseFloat(Math.round(newOffer.Taxes.Total['#text'] * 100) / 100).toFixed(2);
          let _taxDifferenceAmount = parseFloat(Math.round((_newTax - parseFloat(Math.round(originalOrder.Taxes.Total['#text'] * 100) / 100).toFixed(2)) * 100) / 100).toFixed(2);
          let _penaltyAmount = parseFloat(Math.round(penalty.Total['@EquivRate'] * 100) / 100).toFixed(2);
          console.log('');
          console.log('╔════════════════════════════════════════════════════════╗');
          console.log('║ New Offer   Currency: ' + _totalCurrency);
          console.log('║ New Offer      Total: ' + _totalAmount);
          console.log('║ Original Offer Total: ' + _originalTotalAmount);
          console.log('║ Amount Diff Fare    : ' + _fareDifferenceAmount);
          console.log('║ Amount Diff Tax     : ' + _taxDifferenceAmount);
          console.log('║ Penalty             : ' + _penaltyAmount);
          console.log('╚════════════════════════════════════════════════════════╝');
          console.log('');
          if (_fareDifferenceAmount < 0) {
            _fareDifferenceAmount = 0;
            if (_taxDifferenceAmount < 0) {
              _taxDifferenceAmount = 0;
            }
          }

          let resultMap = {
            all: itinReShopObj,
            Penalty: _penaltyAmount,
            FareDiff: _fareDifferenceAmount,
            TaxDiff: _taxDifferenceAmount,
            TaxNew: _newTax,
            Total: _totalAmount,
            Currency: _totalCurrency,
            Details: repriceDetails
            /*,
                        ReShopOffer: itinReShopObj.ReShopOffers.ReShopOffer,
                        echoToken: itinReShopRS['@EchoToken'],
                        Document: {
                          Name:  itinReShopRS.Document.Name
                        },
                        Order: itinReShopObj.Order,
                        DataLists: {
                    CheckedBagAllowanceList: itinReShopObj.DataLists.CheckedBagAllowanceList
                        }*/
          };
          res.status(200).json(resultMap);
        } else {
          res.status(500).json({
            type: 'error',
            title: `Reissue`,
            message: 'Error parsing response from server'
          });
        }
      });
    })
    .catch((error) => {
      res.status(500).json({
        type: 'error',
        title: `Reissue`,
        message: `Oops! Something went wrong while processing your request. Error: ${error}`
      });
    });
});

/**
 * @swagger
 * /api/flights/itin-reissue-order-change:
 *   post:
 *    tags:
 *      - Flights After Sale
 *    summary: Itinerary reissue order change
 *    description: Itinerary reissue order change
 *    consumes:
 *       - application/json
 *    produces:
 *      - application/json
 *    parameters:
 *      - in: body
 *        name: body
 *        description: Provide paramters to get result and consume rest of the API's
 *        required: true
 *        schema:
 *          properties:
 *            dummyKey:
 *              type: string
 *    responses:
 *      200:
 *        description: Return object
 *      400:
 *       description: Bad Request
 *      401:
 *        description: Not Authrized
 *      403:
 *        description: You do not have necessary permissions for the resource or JWT Expired
 *      500:
 *         description: Something went wrong
 */
router.post('/itin-reissue-order-change', (req, res) => {
  const xml = ItinReshopOrderChange(req);
  if (xml === '') {
    return makeResponse(res, false, 500, 'error', 'Not Authenticated', 'Error in extracting credentials', [{
      auth: true
    }]);
  }
  fs.writeFile(path.join(__dirname, '../../logs/ItinReshopOrderChangeRQ.xml'), xml, (error) => {
    if (error) {
      // console.log(error);
      return res.status(500).json({
        type: 'error',
        title: `Reissue`,
        message: `Error writing ItinReshopOrderChangeRQ.xml to logs folder. Error: ${error}`
      });
    }
    // console.log('ItinReshopOrderChangeRQ.xml file was saved!');
  });
  axios.post(url, xml, {
    headers: {
      'Content-Type': 'text/xml'
    }
  }).then((resp) => {
    fs.writeFile(path.join(__dirname, '../../logs/ItinReshopOrderChangeRS.xml'), resp.data, (error) => {
      if (error) {
        // console.log(error);
        return res.status(500).json({
          type: 'error',
          title: `Reissue`,
          message: `Error writing ItinReshopOrderChangeRS.xml to logs folder. Error: ${error}`
        });
      }
      // console.log('ItinReshopOrderChangeRS.xml was saved!');
    });

    if (parser.validate(resp.data) === true) {
      const jsonObj = parser.parse(resp.data, config.pkgConfigs.x2joptions);
      let orderViewRS = jsonObj.Envelope.Body.OrderViewRS;
      if (orderViewRS.hasOwnProperty('Errors')) {
        res.status(200).json(orderViewRS.Errors);
        return;
      }
      let resultMap = orderViewRS;
      res.status(200).json(resultMap);
    } else {
      res.status(500).json({
        type: 'error',
        title: `Reissue`,
        message: 'Error parsing response from server'
      });
    }
  }).catch((error) => {
    res.status(500).json({
      type: 'error',
      title: `Reissue`,
      message: `Oops! Something went wrong while processing your request. Error: ${error}`,
    });
  });
});

/**
 * @swagger
 * /api/flights/itin-reissue-order-change-db:
 *   post:
 *    tags:
 *      - Flights After Sale
 *    summary: Itinerary reissue order change db
 *    description: Itinerary reissue order change db
 *    consumes:
 *       - application/json
 *    produces:
 *      - application/json
 *    parameters:
 *      - in: body
 *        name: body
 *        description: Provide paramters to get result and consume rest of the API's
 *        required: true
 *        schema:
 *          properties:
 *            dummyKey:
 *              type: string
 *    responses:
 *      200:
 *        description: Return object
 *      400:
 *       description: Bad Request
 *      401:
 *        description: Not Authrized
 *      403:
 *        description: You do not have necessary permissions for the resource or JWT Expired
 *      500:
 *         description: Something went wrong
 */
router.post('/itin-reissue-order-change-db', async (req, res) => {
  // From Request
  let segmentListToUpdate = req.body.updateSegmentList;
  let passengerListToUpdate = req.body.updatePassengerList;
  let ticketListToUpdate = req.body.updateTicketList;
  let ticketListToCreate = req.body.createTicketList;
  let ticketEmdListToCreate = req.body.createTicketEmdList;
  let bookingsListToUpdate = req.body.updateBookingsList;
  let bookingsFlightListToUpdate = req.body.updateBookingsFlightList;
  // Prepare the arrays for the async execution
  let asyncResponseArrSegmentListToUpdate = [];
  let asyncResponseArrPassengerListToUpdate = [];
  let asyncResponseArrTicketListToUpdate = [];
  let asyncResponseArrTicketListToCreate = [];
  let asyncResponseArrTicketEmdListToCreate = [];
  let asyncResponseArrBookingsListToUpdate = [];
  let asyncResponseArrBookingsFlightListToUpdate = [];
  // Process started
  if (segmentListToUpdate.length > 0) {
    //let myTripID = '';
    segmentListToUpdate.map((segment, segmentIndex) => {
      asyncResponseArrSegmentListToUpdate.push(myCustomSegmentDetails.updateOrAdd({}, segment))
    });
  }
  if (passengerListToUpdate.length > 0) {
    // List of users to update
    let bookingFlightId = passengerListToUpdate[0].bookings_flight_id;
    let passengersList = await PassengerDetail.findAll({ where: { bookings_flight_id: bookingFlightId } });
    passengersList.map(async (pax, paxIndex) => {
      let filteredList = passengerListToUpdate.filter(e => e.pax_first_name === pax.pax_first_name
        && e.pax_last_name === pax.pax_last_name);
        if (filteredList.length === 1) {
          pax.pax_ref_key = filteredList[0].pax_ref_key;
        } else if (filteredList.length > 1) {
          filteredList = passengerListToUpdate.filter(e => e.pax_dob === pax.pax_dob);
          if (filteredList.length === 1) {
            pax.pax_ref_key = filteredList[0].pax_ref_key;
          } else if (filteredList.length > 1) {
            console.error("Something weird");
          }
        }
        asyncResponseArrPassengerListToUpdate.push(myCustomPassengerDetail.updateByID(pax.pax_id, {
          pax_ref_key: pax.pax_ref_key
        }));
    });
  }
  if (ticketListToUpdate.length > 0) {
    ticketListToUpdate.map(async (ticket, ticketIndex) => {
      asyncResponseArrTicketListToUpdate.push(myCustomFlightTicket.updateByAttributes({
        ticket_booking_id: ticket.ticket_booking_id
      }, {
        ticket_status: ticket.ticket_status
      }));
    });
  }
  if (ticketListToCreate.length > 0) {
    ticketListToCreate.map(async (ticket, ticketIndex) => {
      asyncResponseArrTicketListToCreate.push(myCustomFlightTicket.add(ticket));
    });
  }
  if (ticketEmdListToCreate.length > 0) {
    ticketEmdListToCreate.map(async (ticket, ticketIndex) => {
      asyncResponseArrTicketEmdListToCreate.push(myCustomFlightTicketEmd.add(ticket));
    });
  }
  if (bookingsListToUpdate.length > 0) {
    bookingsListToUpdate.map(async (booking, bookingIndex) => {
      asyncResponseArrBookingsListToUpdate.push(myCustomBookings.updateByID(booking.booking_id, {
        markup_price: booking.markup_price,
        supplier_price: booking.supplier_price
      }));
    });
  }
  if (bookingsFlightListToUpdate.length > 0) {
    bookingsFlightListToUpdate.map(async (bookingFlight, bookingFlightIndex) => {
      asyncResponseArrBookingsFlightListToUpdate.push(myCustomFlightBookings.updateByID(bookingFlight.booking_id, {
        markupPrice: bookingFlight.markupPrice,
        supplierPrice: bookingFlight.supplierPrice
      }));
    });
  }

  let finalArr = asyncResponseArrSegmentListToUpdate;
  finalArr = finalArr.concat(asyncResponseArrPassengerListToUpdate)
  finalArr = finalArr.concat(asyncResponseArrTicketListToUpdate)
  finalArr = finalArr.concat(asyncResponseArrTicketListToCreate)
  finalArr = finalArr.concat(asyncResponseArrTicketEmdListToCreate)
  finalArr = finalArr.concat(asyncResponseArrBookingsListToUpdate)
  finalArr = finalArr.concat(asyncResponseArrBookingsFlightListToUpdate)

  let values = await Promise.all(finalArr);
  if (values) {
    {
      let myTripID = '';
      let seg = values[0];
      if (Array.isArray(seg)) {
        if (seg[0] === 1) {
          // console.log('Segment has been updated successfully!');
        } else {
          // console.log('Segment was not updated!');
        }
        if (segmentListToUpdate.length > 0) {
          myTripID = segmentListToUpdate[0].trip_id;
        }
      } else {
        if (seg && seg.dataValues && seg.dataValues.trip_id) {
          myTripID = seg.dataValues.trip_id;
        }
      }
      if (myTripID !== '') {
        res.status(200).json({
          success: true,
          tripID: myTripID,
          title: `Reissue`,
          message: 'Operation has been successfully executed!'
        });
      } else {
        res.status(200).json({
          success: false,
          title: `Reissue`,
          message: 'No Trip ID found, check if the trip has segments!'
        });
      }
    }
  } else {
    res.status(500).json({
      success: false,
      type: 'error',
      title: `Reissue`,
      message: `Oops! Something went wrong while processing your request. Error: ${error}`
    });
  }
});

router.post('/seatmap', flightDao.seatMap);

router.post('/split-pnr', flightDao.splitPNR);

module.exports = router;