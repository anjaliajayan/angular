const axios = require('axios');
const fastXmlParser = require('fast-xml-parser');
const JsonFind = require('json-find');
const moment = require('moment');
const fs = require('fs');
const path = require('path');
const SearchHotelsRQ = require('../xmls/templates/hotels/SearchHotelsRQ');
const SearchRoomsRQ = require('../xmls/templates/hotels/SearchRoomsRQ');
const BlockRoomsRQ = require('../xmls/templates/hotels/BlockRoomsRQ');
const BookRoomRQ = require('../xmls/templates/hotels/BookRoomRQ');
const HotelInfoRQ = require('../xmls/templates/hotels/HotelInfoRQ');
const CancelRoomRQ = require('../xmls/templates/hotels/CancelRoomRQ');
const SearchHotelByIDRQ = require('../xmls/templates/hotels/SearchHotelByIDRQ');
const {writeXmlFile,adminDebitOnDeposit, makeResponse, getOrgDetails} = require('../helpers/utils');
const commonEndPointHelper = require('./../helpers/commonApiEndPointsFetchs');
const {
  bookingModel_AJ,
  hotelBookingModel_AJ,sequelizeOrganisation,Transaction,OrganisationModel_M,OrganizationAccount_M,OrganizationAccount,
  Users,Suppliers,
  OrganisationModel,
} = require('../../config/db');

const logThis = 'HotelDao';

const headers = {
    headers: {'Content-Type': 'text/xml'},
    responseType: 'text/xml'
};

const objBookings = {};


// use this function to find the node inside xml
const getAttr = (k, data) => {
  const doc = JsonFind(data);
  const attr = doc.checkKey(k);
  return attr
}

const searchHotels = async(req, res) => {
  // // console.log("children_per_room ",req.user );
  // console.log("children_per_room ",req.user.organisation);
  //get request paramenters
  // {
  //   "adults_per_room": 2,
  //   "children_per_room": 0,
  //   "no_of_rooms": 1,
  //   "extra_bed": 0,
  //   "check_in": "2020-04-21T00:00:00",
  //   "check_out": "2020-04-22T00:00:00",
  //   "city":"Cochin (all), India",
  //   "city_code": "6053337",
  //   "country": "IN",
  //   "currency": "INR",
  //   "markupBy": "by_amount",
  //   "nationality": "AE",
  //   "resident": "AE"
  // }
    const logMethod = `${logThis}SearchHotels`;
    try {
        // fast-xml-parser option
        var options = {
          ignoreNameSpace: true,
          attributeNamePrefix: "",
          ignoreAttributes: false,
        };

        const xml = SearchHotelsRQ.SearchHotelsRQ(req);
        //write the xml request
        if(xml === '') {
          return res.status(500).json({
            auth: false
          });
        }
        //write RQ XML
        writeXmlFile('SearchHotelsRQ.xml',xml);

        const xmlData = await axios.post('http://merchandising.tpconnects.com/TpConnectsLatestV7/services/HotelsConnect?wsdl', xml, headers);

      // console.log("xmlData", xmlData)
          
      
        //write the xml request
        if(xmlData.data !='') {
          //write RQ XML
        writeXmlFile('SearchHotelsRS.xml', xmlData.data);
        }

        // parse xml data to json
        var result = fastXmlParser.parse(xmlData.data, options);
        const hotels = getAttr("HotelResult", result)
        
        return makeResponse(res, true, 200, 'success', 'Your request is successful', 'List of available hotels and rooms', hotels);
    }
    catch(err) {
        console.log(logMethod, err);
        return makeResponse(res, false, 400, 'error', 'INTERNAL SERVER ERROR', 'INTERNAL SERVER ERROR');
    }
    
}

const searchRooms = async(req, res) => {
    const logMethod = `${logThis}SearchRooms`;
    try {
        // fast-xml-parser option
        var options = {
          ignoreNameSpace: true,
          attributeNamePrefix: "",
          ignoreAttributes: false
        };
        // //reqeust paramenters
        // {
        //   "adults_per_room": 2,
        //   "children_per_room": 0,
        //   "no_of_rooms": 1,
        //   "extra_bed": 0,
        //   "check_in": "2020-04-21T00:00:00",
        //   "check_out": "2020-04-22T00:00:00",
        //   "city": "Dubai Emirate, United Arab Emirates",
        //   "city_code": "6053337",
        //   "country": "ae",
        //   "currency": "INR",
        //   "markupBy": "by_amount",
        //   "nationality": "AE",
        //   "resident": "AE",
        //   "response_key": "d2575ade-6f06-46ab-90fb-0ede892ed2851580912954",
        //   "hotel": {
        //    "supplier_code": "inhouse",
        //     "hotel_id": 84347
        //   }
            
        // }
        const xml = SearchRoomsRQ.SearchRoomsRQ(req);
        //write the xml request
        if(xml === '') {
          return res.status(500).json({
            auth: false
          });
      }
        //write RQ XML
        writeXmlFile('SearchRoomsRQ.xml',xml); 
        // try{
          const xmlData = await axios.post('http://merchandising.tpconnects.com/TpConnectsLatestV7/services/HotelsConnect?wsdl', xml, headers);         
        // }catch(err){
        //   return makeResponse(res, true, 500, 'Failed', 'Your request failed', 'No Rooms found', err);
        // }    
       
      
        //write the xml request
        if(xmlData.data !='') {
            //write RQ XML
          writeXmlFile('SearchRoomsRS.xml', xmlData.data);
        }

        // parse xml data to json
        var result = fastXmlParser.parse(xmlData.data, options);
        const hotels = getAttr("HotelResult", result)
        
        return makeResponse(res, true, 200, 'success', 'Your request is successful', 'List of available rooms for the selected hotel', hotels);
    }
    catch(err) {
        console.log(logMethod, err);
        return makeResponse(res, false, 400, 'error', 'INTERNAL SERVER ERROR', 'INTERNAL SERVER ERROR');
    }
}

const blockRooms = async (req, res) => {
    const logMethod = `${logThis}BlockRooms`;
    try {
        // fast-xml-parser option
        var options = {
          ignoreNameSpace: true,
          attributeNamePrefix: "",
          ignoreAttributes: false
        };
       
        req.body.cancelPolicy = [
            {
                currencyCode: 'INR',
                dynamicMarkUp: '0.0',
                fromUnix: '1580730986',
                markup_price: '0.0',
                original_cancellation_supplier_price: '0.0',
                supplier_price: '0.0',
                toUnix: '1592078340',
            },
            {
                currencyCode: 'INR',
                dynamicMarkUp: '0.0',
                fromUnix: '1580730986',
                markup_price: '0.0',
                original_cancellation_supplier_price: '0.0',
                supplier_price: '0.0',
                toUnix: '1592078340',
            },
            {
                currencyCode: 'INR',
                dynamicMarkUp: '0.0',
                fromUnix: '1580730986',
                markup_price: '0.0',
                original_cancellation_supplier_price: '0.0',
                supplier_price: '0.0',
                toUnix: '1592078340',
            }
        ]
        //request parameters
        /*{
          "adults_per_room": 2,
          "children_per_room": 0,
          "no_of_rooms": 1,
          "extra_bed": 0,
          "check_in": "2020-04-21T00:00:00",
          "check_out": "2020-04-22T00:00:00",
          "city":"Cochin (all), India",
          "city_code": "6053337",
          "country": "IN",
          "currency": "INR",
          "markupBy": "by_amount",
          "nationality": "IN",
          "resident": "IN",
          "response_key": "d2575ade-6f06-46ab-90fb-0ede892ed2851580912954",
          "hotel": {
                "room":{
                  "supplier_code": "apitude",
                        "room_code": "DBL.DX",
                        "room_type_code": "DBL-DLX",
                        "room_description": "DOUBLE DELUXE",
                        "booking_code": "20200420|20200421|W|270|102893|DBL.DX|GR-ALL|BB||1~2~0||N@03~~21b2b~-1589154813~N~4C1AB675E880454158091311014700PAUK0660001000000000521b2b",
                        "currency_code": "INR",
                        "base_rate": 1,
                        "supplier_price": 3397.75,
                        "adult_max": 2,
                        "child_max": 0,
                        "extra_bed": 0,
                        "adult": 2,
                        "child": 0,
                        "beds": 0,
                        "quantity": 1,
                        "timezone": "Asia/Calcutta",
                        "booking_hotel_id": 0,
                        "variables": {
                            "entry": [
                                {
                                    "key": "RoomSplit",
                                    "value": "{\"Room1\":{\"roomName\":\"DOUBLE DELUXE\",\"roomCategory\":\"DOUBLE DELUXE\",\"boardType\":\"BF\",\"totalPrice\":\"3397.75\",\"tax\":null,\"totalSupplierPrice\":\"3397.75\",\"totalMarkupPrice\":\"3397.75\",\"discountedPrice\":null,\"childRate\":null,\"pricePerDay\":[\"20-Apr-2020:Mon-3397.75\"],\"childAge\":null,\"additionalCharges\":null,\"inclusiveFees\":{},\"exclusiveFees\":{}}}"
                                },
                                {
                                    "key": "supplierClientCurrencyRate",
                                    "value": 78.52437
                                },
                                {
                                    "key": "Bookable",
                                    "value": true
                                }
                            ]
                        },
                        "policies": "",
                        "originalSupplierRoomPrice": 43.27,
                        "dynamicMarkup": 0,
                        "sPSupplierCurrency": 43.27,
                        "sCsupplierCurrency": "EUR",
                        "board_type": "BF",
                        "cancel_policy": [
                            {
                                "currencyCode": "INR",
                                "dynamicMarkUp": 0,
                                "fromUnix": 1580913110,
                                "markup_price": 0,
                                "original_cancellation_supplier_price": 0,
                                "supplier_price": 0,
                                "toUnix": 1587061740
                            },
                            {
                                "cancel_restriction": false,
                                "currencyCode": "INR",
                                "dynamicMarkUp": 0,
                                "fromUnix": 1587061740,
                                "markup_price": 3397.75,
                                "original_cancellation_supplier_price": 43.27,
                                "SCSupplierCurrency": "EUR",
                                "SPriceSupplierCurrency": 43.27,
                                "supplier_price": 3397.75,
                                "toUnix": 1587321000
                            }
                        ],
                        "inclusion": "inclusion",
                        "hotel_name": "TRAVANCORE COURT By Spree, Cochin",
                        "hotel_id": 102893,
                        "supplier_name": "apitude",
                        "markup_price": 3397.75
                    }
             
          }  
           
        }*/
        const xml = BlockRoomsRQ.BlockRoomsRQ(req);
        //write the xml request
        if(xml === '') {
            return res.status(500).json({
              auth: false
            });
        }
        
        writeXmlFile('BlockRoomsRQ.xml', xml);

        const xmlData = await axios.post('http://merchandising.tpconnects.com/TpConnectsLatestV7/services/HotelsConnect?wsdl', xml, headers);
        //write the xml request
        if(xmlData.data !='') {
            //write RQ XML
          writeXmlFile('BlockRoomsRS.xml', xmlData.data);
        }
  
        
        // parse xml data to json
        var result = fastXmlParser.parse(xmlData.data, options);
        const hotels = getAttr("HotelResult", result)
        
        return makeResponse(res, true, 200, 'success', 'Your request is successful', 'List of available rooms for the selected hotel', hotels);
    }
    catch(err) {
        console.log(logMethod, err);
        return makeResponse(res, false, 400, 'error', 'INTERNAL SERVER ERROR', 'INTERNAL SERVER ERROR');
    }
}

//request for book room
const bookRooms = async(req, res) => {
    const logMethod = `${logThis}bookRooms`;  
    let userDetail = getOrgDetails(req);
    let orgCurrency = userDetail.currency_code;
    let orgCurrencyId = userDetail.currency_id;
    let organisation_id = userDetail.org_id;
    let available_deposit = userDetail.available_deposit;
    let credit_limit = userDetail.credit_limit;
    
    const rating = req.body.hotel.details.star_rating;
    const phone = req.body.hotel.details.phone;
    const hotel_name = req.body.hotel.hotel_name;
    const hotel_id = req.body.hotel.hotel_id;
    const supplier_code = req.body.hotel.details.supplier_code;
    const address = req.body.hotel.details.address;
    const currency = req.body.hotel.currency;
    const agentCode = userDetail.org_agent_code;
    const userId = userDetail.user_users_id;
    const agent_reference =userDetail.org_agent_code;
    let transaction_id = null;
    //get the supplier id    
    const supplier = await Suppliers.findOne({where: {supplier_code: supplier_code } });
   
    try {
        // fast-xml-parser option
        var options = {
          ignoreNameSpace: true,
          attributeNamePrefix: "",
          ignoreAttributes: false
        };   

        const xml = BookRoomRQ.BookRoomRQ(req);
        //write the xml request
        if(xml === '') {
            return res.status(500).json({
              auth: false
            });
        }
         //write RQ XML
        writeXmlFile('BookRoomRQ.xml',xml);

        const xmlData = await axios.post('http://merchandising.tpconnects.com/TpConnectsLatestV7/services/HotelsConnect?wsdl', xml, headers);
       //write the xml request
        if(xmlData.data !='') {
          //write RQ XML
          writeXmlFile('BookRoomRS.xml', xmlData.data);
      }

        // parse xml data to json
        var result = fastXmlParser.parse(xmlData.data, options);
        const hotels = getAttr("HotelResult", result)
    
        // //insert the date in db
        var hotel = hotels.hotel;
        // console.log("hotel RS=====================",hotel);
      
        if(hotel != undefined  && hotels.hotel.status == 'Booked' ||hotel != undefined && hotels.hotel.status == "Received"){
          var status= "";
          if (hotels.hotel.status == 'Booked') {
            status =  "confirm"  ; 
          }
          if (hotels.hotel.status == "Received") {
            status = "failed";
          }

          var bookingObj = {};       
          var markup_price = 0.00, supplier_price= 0.00;
            if(Array.isArray(hotel.room)){
              hotels.hotel.room.map((room) => {
                markup_price += parseFloat(room.markup_price);
               supplier_price += room.supplier_price;
              }); }
             
          if(status == "confirm"){
              console.log("======available_deposit========",parseFloat(available_deposit));
              const transactionObj = {};
              transactionObj.users_id = userId;
              transactionObj.organisation_id = organisation_id;
              transactionObj.transaction_type = 'credit';
              transactionObj.payment_type = 'credit';
              transactionObj.amount = markup_price > 0 ?  markup_price: hotel.room.markup_price;
              transactionObj.currency_id = orgCurrencyId;
              transactionObj.transaction_comments = "Hotel Booking Confirmed";
              transactionObj.status = 1;
              transactionObj.created = moment().format('YYYY-MM-DD HH:mm:ss');
              transactionObj.before_debit = credit_limit;
              transactionObj.trip_id = hotel.tripId;
              transactionObj.payment_gateway_id = null;
              transactionObj.tax_no = null;
              transactionObj.tax_email = null;
              let transactionData  = await Transaction.create(transactionObj);
              transaction_id = transactionData.transaction_id;  
              // console.log("=====userDetail=====",userDetail);
              if(transaction_id){                
                let amountOrg = await sequelizeOrganisation.findOne({where:{ organisation_id: organisation_id}})
                let amountAccount = await OrganizationAccount.findOne({where:{organisation_id: organisation_id}})
                // console.log("AMOUNT__________________",amountOrg.dataValues.credit_limit);
                //   console.log("AMOUNT ORG__________________",amountAccount.dataValues.available_deposit);
                let amount  = ( markup_price > 0 ?  markup_price: hotel.room.markup_price);
                console.log("=====transaction_id=====",transaction_id,amount, amount,parseFloat(available_deposit));
                await sequelizeOrganisation.update({
                    credit_limit: amountOrg.dataValues.credit_limit - amount
                  }, {
                    where: {
                      organisation_id: organisation_id,
                    },
                  });
                  await OrganizationAccount.update({                    
                    available_deposit: amountAccount.dataValues.available_deposit - parseFloat(amount)
                    }, {
                      where: {
                        organisation_id: organisation_id,
                      },
                  })
                }
                
            }
          var search_criteria = hotels.search_criteria;
              bookingObj.agent_code = String(agentCode);
              bookingObj.trip_id = hotel.tripId;
              bookingObj.users_id = userId;
              bookingObj.transaction_id = transaction_id;
              bookingObj.booking_email = hotel.bookingEmail;
              bookingObj.booking_comments = hotel.bookingComment;
              bookingObj.booking_currency = hotel.currency;
              bookingObj.booking_status = status;
              bookingObj.agent_reference = hotel.agentReference; // need to add the UI field of agent reference in the order create page.
              bookingObj.amount = markup_price > 0 ?  markup_price: hotel.room.markup_price ;
              bookingObj.supplier_price = supplier_price > 0 ?  supplier_price: hotel.room.supplier_price ; 
              bookingObj.markup_price = markup_price > 0 ?  markup_price: hotel.room.markup_price ;
              bookingObj.payment_type = 'Credit'; // if its agent then it should be deposit so need to add check here.
              bookingObj.has_hotel = 1;
              bookingObj.has_flight = 0;
              bookingObj.created = moment().format('YYYY-MM-DD HH:mm:ss');
              bookingObj.status = 1;
              bookingObj.has_activities = 0;
              bookingObj.has_car = 0;
              bookingObj.has_insurance = 0;
              bookingObj.has_transfers = 0;
              bookingObj.has_marhaba = 0;
              bookingObj.has_cruises = 0;
              bookingObj.echoToken =null;
              bookingObj.has_holiday = 0;
              bookingObj.has_visa = 0;
              bookingObj.deviceId = null;
              bookingObj.appliedCommissionTax = 0.00;
              bookingObj.appliedTotalTax = 0.00;
              bookingObj.supplierTax = 0.00;
              bookingObj.remarks = null; // need to add the UI Field for this;
              // bookingObj.user_currency = Array.isArray(orderObj.Response.Metadata.Other.OtherMetadata) ? orderObj.Response.Metadata.Other.OtherMetadata[orderObj.Response.Metadata.Other.OtherMetadata.length - 1].CurrencyMetadatas.CurrencyMetadata.Name : orderObj.Response.Metadata.Other.OtherMetadata.CurrencyMetadatas.CurrencyMetadata.Name; // From Frontend I need to pass it
              bookingObj.user_currency = search_criteria.currency;
              bookingObj.curnversion_value = null;
              bookingObj.service_charge_cancel = 0;
              bookingObj.service_charge_create = 0;
              bookingObj.service_charge_refund = 0;
              bookingObj.supplier = hotel.supplier_code;
              //adding detail to table
              const booking = await bookingModel_AJ.create(bookingObj);

              //console.log("booking",booking);

              if(booking){
                //console.log(hotel)
                const bookingHotelObj = {};
                  
                  bookingHotelObj.booking_id = booking.booking_id;
                  bookingHotelObj.supplier_id = supplier.supplier_id;
                  bookingHotelObj.hotel_id = String(hotel_id);
                  bookingHotelObj.booking_status = status;
                  bookingHotelObj.voucher_no = hotel.tripId;
                  bookingHotelObj.country = search_criteria.country;
                  bookingHotelObj.destination = search_criteria.city;
                  bookingHotelObj.start_date = search_criteria.check_in;
                  bookingHotelObj.end_date = search_criteria.check_out;
                  bookingHotelObj.adult = search_criteria.adults_per_room;
                  bookingHotelObj.child = search_criteria.children_per_room;
                  bookingHotelObj.room = search_criteria.no_of_rooms;
                  bookingHotelObj.room_info = JSON.stringify(hotel.room);
                  bookingHotelObj.hotel_name = hotel_name;
                  bookingHotelObj.hotel_rating = rating;            
                  bookingHotelObj.hotel_address = address; 
                  bookingHotelObj.hotel_phone = phone;
                  bookingHotelObj.supplier_code = hotel.supplier_code;
                  bookingHotelObj.reference_number = Array.isArray(hotel.room) ? hotel.room[0].reference_number: hotel.room.reference_number ;
                  bookingHotelObj.search_criteria = JSON.stringify(search_criteria);
                  bookingHotelObj.response_key = search_criteria.response_key;
                  bookingHotelObj.hotel = hotel_name;
                  bookingHotelObj.booking_currency = search_criteria.currency ;
                  bookingHotelObj.booking_amount = markup_price > 0 ?  markup_price: hotel.room.markup_price ;
                  bookingHotelObj.supplier_price = supplier_price > 0 ?  supplier_price: hotel.room.supplier_price ; 
                  bookingHotelObj.markup_price = markup_price > 0 ?  markup_price: hotel.room.markup_price ;
                  bookingHotelObj.markups = hotel.room.markup_price;
                            
                 if(Array.isArray(hotels.hotel.room)){
                        hotel.room.map((room, key)=> {
                        bookingHotelObj.cancel_supplier_price += room.cancel_policy.supplier_price; 
                        bookingHotelObj.cancel_markup_price += room.markup_price; 
                        bookingHotelObj.appliedCommissionTax = hotel.room.appliedCommissionTax;
                        bookingHotelObj.appliedTotalTax =  hotel.room.appliedTotalTax;
                        bookingHotelObj.supplierTax= 0 ;
                        }); 
                 }else{
                      bookingHotelObj.appliedCommissionTax = hotel.room.appliedCommissionTax;
                      bookingHotelObj.appliedTotalTax =  hotel.room.appliedTotalTax;
                      bookingHotelObj.cancel_supplier_price = hotel.room.cancel_policy.supplier_price;  
                      bookingHotelObj.cancel_markup_price = hotel.room.cancel_policy.markup_price; 
                      bookingHotelObj.supplierTax= 0 ;
                 }     

                  bookingHotelObj.cancellation_dead_line =  search_criteria.check_in;
                  bookingHotelObj.created = moment().format('YYYY-MM-DD HH:mm:ss');
                  bookingHotelObj.status = hotel.status;
                  bookingHotelObj.lifehappens_id = "3242422343";
     

                 // console.log("bookingHotelObj", bookingHotelObj)
                // console.log("=========hotelBookingModel_AJ=============", bookingHotelObj);

                  const hotelBook = await hotelBookingModel_AJ.create(bookingHotelObj)

                  if(hotelBook){
                    return makeResponse(res, true, 200, 'success', 'Your request is successful', 'Your selected room is booked', hotels);
                  }else{
                    return makeResponse(res, false, 200, 'danger', 'Your request is successful', 'Your selected room is not saved');
                  }

              }
                
        }else{
          return makeResponse(res, true, 200, 'success', 'Your request is successful', 'Your selected room is not booked', hotels);
        } //ends booked status if
        
        
    }
    catch(err) {
        // console.log(logMethod, err);
        return makeResponse(res, false, 400, 'error', 'INTERNAL SERVER ERROR', 'INTERNAL SERVER ERROR');
    }
}

//request for hotel information
const hotelInfo = async(req, res) => {
    const logMethod = `${logThis}hotelInfo`;
    //  console.log("HotelInfoRQ",req.body);
    try {
        // fast-xml-parser option
        var options = {
          ignoreNameSpace: true,
          attributeNamePrefix: "",
          ignoreAttributes: false,
        };

        const xml = HotelInfoRQ.HotelInfoRQ(req);
         //write the xml request
         if(xml === '') {
            return res.status(500).json({
              auth: false
            });
        }
        //write RQ XML
        writeXmlFile('HotelInfoRQ.xml',xml);
                
        const xmlData = await axios.post('http://prd.tpconnects.com/GetHotelInfoV1/services/GetHotelInfoService/', xml, headers);
        
       // console.log(xmlData.data);
      
        //write the xml request
        if(xmlData.data !='') {
          //write RQ XML
          writeXmlFile('HotelInfoRS.xml', xmlData.data);
        }
  

        // parse xml data to json
        var result = fastXmlParser.parse(xmlData.data, options);
        const hotelinfo = getAttr("HotelResultInfo", result)
        
        return makeResponse(res, true, 200, 'success', 'Your request is successful', 'Request hotel inforamtion!', hotelinfo);
    }
    catch(err) {
        console.log(logMethod, err);
        return makeResponse(res, false, 400, 'error', 'INTERNAL SERVER ERROR', 'INTERNAL SERVER ERROR');
    }
    
}

// const cancelRooms = async(req, res) => {
//   const logMethod = `${logThis}cancelRooms`;
  
  
//   try {
//       // fast-xml-parser option
//       var options = {
//         ignoreNameSpace: true,
//         attributeNamePrefix: "",
//         ignoreAttributes: false
//       };
     
//       req.body.cancelPolicy = [
//           {
//               currencyCode: 'INR',
//               dynamicMarkUp: '0.0',
//               fromUnix: '1580730986',
//               markup_price: '0.0',
//               original_cancellation_supplier_price: '0.0',
//               supplier_price: '0.0',
//               toUnix: '1592078340',
//           },
//           {
//               currencyCode: 'INR',
//               dynamicMarkUp: '0.0',
//               fromUnix: '1580730986',
//               markup_price: '0.0',
//               original_cancellation_supplier_price: '0.0',
//               supplier_price: '0.0',
//               toUnix: '1592078340',
//           },
//           {
//               currencyCode: 'INR',
//               dynamicMarkUp: '0.0',
//               fromUnix: '1580730986',
//               markup_price: '0.0',
//               original_cancellation_supplier_price: '0.0',
//               supplier_price: '0.0',
//               toUnix: '1592078340',
//           }
//       ]
  
//       const xml = CancelRoomRQ.CancelRoomRQ(req);
//       //write the xml request
//       if(xml === '') {
//           return res.status(500).json({
//             auth: false
//           });
//       }
     
//        //write RQ XML
//       writeXmlFile('CancelRoomRQ.xml',xml);

//       const xmlData = await axios.post('http://merchandising.tpconnects.com/TpConnectsLatestV7/services/HotelsConnect?wsdl', xml, headers);
//      //write the xml request
//       if(xmlData.data !='') {
//          //write RQ XML
//         writeXmlFile('CancelRoomRQ.xml', xmlData.data);
       
//       }

//       // parse xml data to json
//       var result = fastXmlParser.parse(xmlData.data, options);
//       const hotels = getAttr("HotelResult", result)
      
//       return makeResponse(res, true, 200, 'success', 'Your request is successful', 'Your selected room is canceled', hotels);
//   }
//   catch(err) {
//       console.log(logMethod, err);
//       return makeResponse(res, false, 400, 'error', 'INTERNAL SERVER ERROR', 'INTERNAL SERVER ERROR');
//   }
// }

//hotels by id

const cancelRooms = async (req, res) => {
  const logMethod = `${logThis}Cancelhotel`;

  const id = req.body.tripId;
  
  try {
    const bookingResult = await bookingModel_AJ.findAll({
      where: {
        trip_id: id,
      },
      plain: true,
      include: [{
        model: hotelBookingModel_AJ,
      }],
    });
    //console.log('bookingResult', bookingResult);
    if (bookingResult) {
      objBookings.booking_id = bookingResult.booking_id;
      objBookings.retSenderAgentUserId = bookingResult.users_id;
      objBookings.tripId = bookingResult.trip_id;
      const userTable = await Users.findOne({
        where: {
          users_id: bookingResult.users_id,
        },
        raw: false,
      });
      if (userTable) {
        objBookings.retSenderAgentName = userTable.username;
       // console.log("===========================",userTable.organisation_id);
        const orgTable = await sequelizeOrganisation.findOne({
          where: {
            organisation_id: userTable.organisation_id,
          },
          raw: false,
        });
        if (orgTable) {
          objBookings.aggSenderName = orgTable.name;
          objBookings.retSenderCity = orgTable.agent_code;

          const results = getOrgDetails(req);
          if (!results.auth) {
            return res.status(500).json(results);
          }
          try {
            //console.log("===========================",CancelRoomRQ.CancelRoomRQ);
            const xmlRQ = CancelRoomRQ.CancelRoomRQ(req);

            fs.writeFile(path.join(__dirname, '../../logs/CancelRoomRQ.xml'), xmlRQ, (error) => {
               console.log(error);
            });
            const xmlData = await axios.post('http://merchandising.tpconnects.com/TpConnectsLatestV7/services/HotelsConnect?wsdlsss', xmlRQ, headers);
            // console.log("------",xmlData.data);
            if (fastXmlParser.validate(xmlData.data) === true) {
              // console.log("------",xmlData.data);
              try {
                const bookingUpdateResult = await bookingModel_AJ.update({
                  booking_status: 'cancel',
                }, {
                  where: {
                    trip_id: id,
                  },
                });
                // console.log("------",bookingUpdateResult);
                if (bookingUpdateResult) {
                  const bookingHotelResult = await hotelBookingModel_AJ.update({
                    booking_status: 'cancel',
                  }, {
                    where: {
                      booking_id: objBookings.booking_id,
                    },
                  });
                  console.log("==============",bookingHotelResult);
                  fs.writeFile(path.join(__dirname, '../../logs/CancelRoomRS.xml'), xmlData.data, (error) => {
                    if (error) {
                       console.log(error);
                    }
                  });

                  //const result = fastXmlParser.parse(xmlData.data, options);
                  // eslint-disable-next-line no-unused-vars
                  //const hotelCancelRecords = getAttr('CancelRoomsResponse', result);
                 
                  if (bookingHotelResult) {
                    return makeResponse(res, true, 200, 'success', 'Your request is successful', 'Error writing CancelRoomRQ.xml to logs folder. Error: ${error}', bookingHotelResult);
                  }
                  return makeResponse(res, true, 400, 'success', 'Your request is successful', 'Error writing CancelRoomRQ.xml to logs folder. Error: ${error}', bookingHotelResult);
                }
                return makeResponse(res, true, 400, 'success', 'Your request is successful', 'Error writing CancelRoomRQ.xml to logs folder. Error: ${error}', bookingHotelResult);
              } catch (err) {
                 console.log(err);
              }
            } else {
               console.log("response of cancel xml error")
            }
            // eslint-disable-next-line no-undef,consistent-return
          } catch (err) {
            console.log(logMethod, err);
            return makeResponse(res, false, 400, 'error', 'INTERNAL SERVER ERROR', 'INTERNAL SERVER ERROR');
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
  } catch (error) {
     console.log(error);
    return res.json({
      type: 'error',
      status: 400,
      msg: 'Oops! Something went wrong while processing your request.',
      data: error,
    });
  }
};

const hotelsById = async(req, res) => {
 
    const logMethod = `${logThis}SearchHotelByIDRQ`;
    try {
        // fast-xml-parser option
        var options = {
          ignoreNameSpace: true,
          attributeNamePrefix: "",
          ignoreAttributes: false,
        };

        const xml = SearchHotelByIDRQ.SearchHotelByIDRQ(req);
        //write the xml request
        if(xml === '') {
          return res.status(500).json({
            auth: false
          });
        }
        //write RQ XML
        writeXmlFile('SearchHotelByIDRQ.xml',xml);

        const xmlData = await axios.post('http://merchandising.tpconnects.com/TpConnectsLatestV7/services/HotelsConnect?wsdl', xml, headers);
          
      
        //write the xml request
        if(xmlData.data !='') {
          //write RQ XML
        writeXmlFile('SearchHotelByIDRS.xml', xmlData.data);
        }

        // parse xml data to json
        var result = fastXmlParser.parse(xmlData.data, options);
        const hotels = getAttr("HotelResult", result)
        
        return makeResponse(res, true, 200, 'success', 'Your request is successful', 'List of available hotels', hotels);
    }
    catch(err) {
        console.log(logMethod, err);
        return makeResponse(res, false, 400, 'error', 'INTERNAL SERVER ERROR', 'INTERNAL SERVER ERROR');
    }
    
}



module.exports = {
    searchHotels, searchRooms, blockRooms, bookRooms, hotelInfo, cancelRooms, hotelsById
};
  