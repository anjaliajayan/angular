const axios = require('axios');
const fastXmlParser = require('fast-xml-parser');
const JsonFind = require('json-find');
const fs = require('fs');
const moment = require('moment');
const path = require('path');
const carSearchXml = require('../xmls/cars/serach.xml.js');
const detailsXml = require('../xmls/cars/details.xml.js');
const blockXml = require('../xmls/cars/block.xml.js');
const bookXml = require('../xmls/cars/book.xml.js');
const cancelXml = require('../xmls/cars/cancel.xml.js');
const commonEndPointHelper = require('./../helpers/commonApiEndPointsFetchs');
const utilsHelper = require('../helpers/utils');

const {
  bookingModel_AJ,
  carBookingModel_AJ,
  sequelizeOrganisation,
  Users,
  OrganisationModel,
} = require('../../config/db');

const logThis = 'CarDao';
const objBookings = {};

const headers = {
  headers: { 'Content-Type': 'text/xml' },
  responseType: 'text/xml',
};

const getAttr = (k, data) => {
  const doc = JsonFind(data);
  const attr = doc.checkKey(k);
  return attr;
};

// fast-xml-parser option
const options = {
  ignoreNameSpace: true,
  attributeNamePrefix: '',
  ignoreAttributes: false,
};

const searchCars = async (req, res) => {
  const logMethod = `${logThis}SearchCars`;
  try {
    const xmlRQ = carSearchXml.searchCarTemplate(req);// write the xml request
    if (xmlRQ === '') {
      return res.status(500).json({
        auth: false,
      });
    }

    // eslint-disable-next-line no-undef,consistent-return
    fs.writeFile(path.join(__dirname, '../../logs/SearchCarsRQ.xml'), xmlRQ, (error) => {
      if (error) {
        // console.log(error);
        return res.status(500).json({
          type: 'error',
          title: 'SearchCarsRQ',
          message: `Error writing SearchCarsRQ.xml to logs folder. Error: ${error}`,
        });
      }
    });

    const xmlData = await axios.post('http://merchandising.tpconnects.com/TpConnectsLatestV7/services/CarsConnect?wsdl', xmlRQ, headers);
    // eslint-disable-next-line no-undef,consistent-return
    fs.writeFile(path.join(__dirname, '../../logs/SearchCarsRS.xml'), xmlData.data, (error) => {
      if (error) {
        // console.log(error);
        return res.status(500).json({
          type: 'error',
          title: 'SearchCarsRS',
          message: `Error writing SearchCarsRS.xml to logs folder. Error: ${error}`,
        });
      }
    });
    const result = fastXmlParser.parse(xmlData.data, options);

    const CarsSearchRecords = getAttr('SearchCarsResponse', result);
    return utilsHelper.makeResponse(res, true, 200, 'success', 'Your request is successful', 'List of available cars', CarsSearchRecords);
  } catch (err) {
    console.log(logMethod, err);
    return utilsHelper.makeResponse(res, false, 400, 'error', 'INTERNAL SERVER ERROR', 'INTERNAL SERVER ERROR');
  }
};
const detailsCars = async (req, res) => {
  const logMethod = `${logThis}SearchCars`;
  try {
    console.log(req.body);
    const xmlRQ = detailsXml.detailsCarTemplate(req);
    // eslint-disable-next-line no-undef,consistent-return
    fs.writeFile(path.join(__dirname, '../../logs/detailsCarsRQ.xml'), xmlRQ, (error) => {
      if (error) {
        // console.log(error);
        return res.status(500).json({
          type: 'error',
          title: 'detailsCarsRQ',
          message: `Error writing detailsCarsRQ.xml to logs folder. Error: ${error}`,
        });
      }
    });
    const xmlData = await axios.post('http://merchandising.tpconnects.com/TpConnectsLatestV7/services/CarsConnect?wsdl', xmlRQ, headers);
    // eslint-disable-next-line no-undef,consistent-return
    fs.writeFile(path.join(__dirname, '../../logs/detailsCarsRS.xml'), xmlData.data, (error) => {
      if (error) {
        // console.log(error);
        return res.status(500).json({
          type: 'error',
          title: 'detailsCarsRS',
          message: `Error writing detailsCarsRS.xml to logs folder. Error: ${error}`,
        });
      }
    });

    const result = fastXmlParser.parse(xmlData.data, options);
    const CarsDetailsRecords = getAttr('CarDetailsResponse', result);
    return utilsHelper.makeResponse(res, true, 200, 'success', 'Your request is successful', 'List of available cars', CarsDetailsRecords);
  } catch (err) {
    console.log(logMethod, err);
    return utilsHelper.makeResponse(res, false, 400, 'error', 'INTERNAL SERVER ERROR', 'INTERNAL SERVER ERROR');
  }
};
const blockCars = async (req, res) => {
  const logMethod = `${logThis}SearchCars`;
  try {
    const xmlRQ = blockXml.blockCarTemplate(req);
    // eslint-disable-next-line no-undef,consistent-return
    fs.writeFile(path.join(__dirname, '../../logs/BlockCarsRQ.xml'), xmlRQ, (error) => {
      if (error) {
        // console.log(error);
        return res.status(500).json({
          type: 'error',
          title: 'BlockCarsRQ',
          message: `Error writing BlockCarsRQ.xml to logs folder. Error: ${error}`,
        });
      }
    });
    const xmlData = await axios.post('http://merchandising.tpconnects.com/TpConnectsLatestV7/services/CarsConnect?wsdl', xmlRQ, headers);
    // eslint-disable-next-line no-undef,consistent-return
    fs.writeFile(path.join(__dirname, '../../logs/BlockCarsRS.xml'), xmlData.data, (error) => {
      if (error) {
        // console.log(error);
        return res.status(500).json({
          type: 'error',
          title: 'BlockCarsRS',
          message: `Error writing BlockCarsRS.xml to logs folder. Error: ${error}`,
        });
      }
    });
    const result = fastXmlParser.parse(xmlData.data, options);
    const CarsBlockRecords = getAttr('BlockCarsResponse', result);
    return utilsHelper.makeResponse(res, true, 200, 'success', 'Your request is successful', 'List of available cars', CarsBlockRecords);
  } catch (err) {
    console.log(logMethod, err);
    return utilsHelper.makeResponse(res, false, 400, 'error', 'INTERNAL SERVER ERROR', 'INTERNAL SERVER ERROR');
  }
};
// eslint-disable-next-line consistent-return
const bookCars = async (req, res) => {
  const logMethod = `${logThis}bookCars`;
  try {
    const xmlRQ = bookXml.bookCarTemplate(req);
    // eslint-disable-next-line no-undef,consistent-return
    fs.writeFile(path.join(__dirname, '../../logs/BookCarsRQ.xml'), xmlRQ, (error) => {
      if (error) {
        // console.log(error);
        return res.status(500).json({
          type: 'error',
          title: 'BookCarsRQ',
          message: `Error writing BookCarsRQ.xml to logs folder. Error: ${error}`,
        });
      }
    });
    const xmlData = await axios.post('http://merchandising.tpconnects.com/TpConnectsLatestV7/services/CarsConnect?wsdl', xmlRQ, headers);
    // eslint-disable-next-line no-undef,consistent-return
    fs.writeFile(path.join(__dirname, '../../logs/BookCarsRS.xml'), xmlData.data, (error) => {
      if (error) {
        // console.log(error);
        return res.status(500).json({
          type: 'error',
          title: 'BookCarsRS',
          message: `Error writing BookCarsRS.xml to logs folder. Error: ${error}`,
        });
      }
    });
    const result = fastXmlParser.parse(xmlData.data, options);
    const CarsBookRecords = getAttr('BookCarsResponse', result);
    const bookedCar = CarsBookRecords.CarsResult;
    if (bookedCar.Cars.status == 'Booked' || bookedCar.TransactionLog.status == 'Success') {
      // console.log("book room");
      const bookingObj = {};
      const totalPrice = bookedCar.Cars.markupPrice;
      const search_criteria = CarsBookRecords.CarsResult.CarSearchCriteria;

      // if(status == "confirm"){
      //   console.log("======available_deposit========",parseFloat(available_deposit));
      //   const transactionObj = {};
      //   transactionObj.users_id = userId;
      //   transactionObj.organisation_id = organisation_id;
      //   transactionObj.transaction_type = 'credit';
      //   transactionObj.payment_type = 'credit';
      //   transactionObj.amount = markup_price > 0 ?  markup_price: hotel.room.markup_price;
      //   transactionObj.currency_id = orgCurrencyId;
      //   transactionObj.transaction_comments = "Hotel Booking Confirmed";
      //   transactionObj.status = 1;
      //   transactionObj.created = moment().format('YYYY-MM-DD HH:mm:ss');
      //   transactionObj.before_debit = credit_limit;
      //   transactionObj.trip_id = hotel.tripId;
      //   transactionObj.payment_gateway_id = null;
      //   transactionObj.tax_no = null;
      //   transactionObj.tax_email = null;
      //   let transactionData  = await Transaction.create(transactionObj);
      //   transaction_id = transactionData.transaction_id;
      //   // console.log("=====userDetail=====",userDetail);
      //   if(transaction_id){
      //     let amountOrg = await sequelizeOrganisation.findOne({where:{ organisation_id: organisation_id}})
      //     let amountAccount = await OrganizationAccount.findOne({where:{organisation_id: organisation_id}})
      //     // console.log("AMOUNT__________________",amountOrg.dataValues.credit_limit);
      //     //   console.log("AMOUNT ORG__________________",amountAccount.dataValues.available_deposit);
      //     let amount  = ( markup_price > 0 ?  markup_price: hotel.room.markup_price);
      //     console.log("=====transaction_id=====",transaction_id,amount, amount,parseFloat(available_deposit));
      //     await sequelizeOrganisation.update({
      //       credit_limit: amountOrg.dataValues.credit_limit - amount
      //     }, {
      //       where: {
      //         organisation_id: organisation_id,
      //       },
      //     });
      //     await OrganizationAccount.update({
      //       available_deposit: amountAccount.dataValues.available_deposit - parseFloat(amount)
      //     }, {
      //       where: {
      //         organisation_id: organisation_id,
      //       },
      //     })
      //   }

      // }

      bookingObj.agent_code = String(86200213);
      bookingObj.trip_id = bookedCar.Cars.bookingDetail.tripID;
      bookingObj.users_id = 0;
      bookingObj.transaction_id = null;
      bookingObj.booking_email = bookedCar.Cars.bookingDetail.bookingEmail;
      bookingObj.booking_comments = bookedCar.Cars.bookingDetail.bookingComments;
      bookingObj.booking_currency = bookedCar.Cars.currencyCode;
      bookingObj.booking_status = (bookedCar.Cars.is_booked === 'Booked') ? 'confirm' : 'hold';
      bookingObj.agent_reference = bookedCar.Cars.bookingDetail.agentReference; // need to add the UI field of agent reference in the order create page.
      bookingObj.amount = totalPrice;
      bookingObj.payment_type = 'Credit'; // if its agent then it should be deposit so need to add check here.
      bookingObj.supplier_price = bookedCar.Cars.supplierPrice;
      bookingObj.markup_price = bookedCar.Cars.markupPrice;
      bookingObj.has_hotel = 0;
      bookingObj.has_flight = 0;
      bookingObj.created = moment().format('YYYY-MM-DD HH:mm:ss');
      bookingObj.status = 1;
      bookingObj.has_activities = 0;
      bookingObj.has_car = 1;
      bookingObj.has_insurance = 0;
      bookingObj.has_transfers = 0;
      bookingObj.has_marhaba = 0;
      bookingObj.has_cruises = 0;
      bookingObj.echoToken = null;
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
      bookingObj.supplier = bookedCar.Cars.supplierCode;
      // //adding detail to table
      const booking = await bookingModel_AJ.create(bookingObj);

      // console.log("booking",booking);

      if (booking) {
        // console.log(hotel)
        const bookingCarsObj = {};
        const supplier = await commonEndPointHelper.fetchSupplierDetails(bookedCar.Cars.supplier_code);
        console.log('supplier',supplier);
        if(supplier){
          supplier_id = supplier.supplier_id
        }else{
          supplier_id = '';
        }
        // carBookingModel_AJ.booking_hotel_id = bookedCar.Cars.room.booking_hotel_id;
        bookingCarsObj.booking_id = booking.booking_id;
        bookingCarsObj.supplier_id = supplier_id ;
        bookingCarsObj.hotel_id = String(bookedCar.Cars.CarsCode);
        bookingCarsObj.booking_status = (bookedCar.Cars.is_booked == 'Booked') ? 'voucher' : 'hold';
        bookingCarsObj.voucher_no = bookedCar.Cars.bookingDetail.tripID;
        bookingCarsObj.country = search_criteria.country;
        bookingCarsObj.destination = search_criteria.city;
        bookingCarsObj.start_date = search_criteria.startDate;
        bookingCarsObj.end_date = search_criteria.endDate;
        bookingCarsObj.days = search_criteria.days;
        bookingCarsObj.adult = search_criteria.adultCount;
        bookingCarsObj.child = search_criteria.childCount;
        bookingCarsObj.room = 'N/a';
        bookingCarsObj.room_info = JSON.stringify(bookedCar);
        bookingCarsObj.hotel_name = bookedCar.Cars.carName;
        bookingCarsObj.hotel_rating = 'N/a';
        bookingCarsObj.hotel_address = 'N/a';
        bookingCarsObj.hotel_phone = 'N/a';
        bookingCarsObj.supplier_code = bookedCar.Cars.supplierCode;
        bookingCarsObj.booking_code = bookedCar.Cars.bookingDetail.bookingCode;
        bookingCarsObj.reference_number = bookedCar.Cars.booking_Cars_id;
        bookingCarsObj.search_criteria = JSON.stringify(search_criteria);
        bookingCarsObj.response_key = search_criteria.responseKey;
        bookingCarsObj.hotel = 'N/a';
        bookingCarsObj.booking_currency = search_criteria.currency;
        bookingCarsObj.booking_amount = bookedCar.Cars.markupPrice;
        bookingCarsObj.supplier_price = bookedCar.Cars.supplierPrice;
        bookingCarsObj.markup_price = bookedCar.Cars.markupPrice;
        bookingCarsObj.markups = bookedCar.Cars.markupPrice;
        bookingCarsObj.cancel_supplier_price = 'N/a';
        bookingCarsObj.cancel_markup_price = 'N/a';
        bookingCarsObj.cancellation_dead_line = 'N/a';
        bookingCarsObj.created = moment().format('YYYY-MM-DD HH:mm:ss');
        bookingCarsObj.status = 1;


        // console.log("bookingCarsObj", bookingCarsObj)

        const carsBook = await carBookingModel_AJ.create(bookingCarsObj);

        if (carsBook) {
          return utilsHelper.makeResponse(res, true, 200, 'success', 'Your request is successful', 'List of available Car', bookedCar);
        }
        return utilsHelper.makeResponse(res, false, 200, 'danger', 'Your request is successful', 'Your selected room is not saved');
      }
    } else {
      return utilsHelper.makeResponse(res, true, 200, 'success', 'Your request is successful', 'Your selected room is not booked', CarsBookRecords);
    }
  } catch (err) {
    console.log(logMethod, err);
    return utilsHelper.makeResponse(res, false, 400, 'error', 'INTERNAL SERVER ERROR', 'INTERNAL SERVER ERROR');
  }
};

// eslint-disable-next-line consistent-return
const cancelCars = async (req, res) => {
  const logMethod = `${logThis}SearchCars`;

  const id = req.body.tripId;
  console.log(id);
  try {
    const bookingResult = await bookingModel_AJ.findAll({
      where: {
        trip_id: id,
      },
      plain: true,
      include: [{
        model: carBookingModel_AJ,

      }],
    });
    console.log('bookingResult', bookingResult);
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
        console.log(userTable.organisation_id);
        const orgTable = await sequelizeOrganisation.findOne({
          where: {
            organisation_id: userTable.organisation_id,
          },
          raw: false,
        });
        if (orgTable) {
          objBookings.aggSenderName = orgTable.name;
          objBookings.retSenderCity = orgTable.agent_code;

          const results = utilsHelper.getOrgDetails(req);
          if (!results.auth) {
            return res.status(500).json(results);
          }
          try {
            console.log(cancelXml.cancelCarTemplate);
            const xmlRQ = cancelXml.cancelCarTemplate(req);

            fs.writeFile(path.join(__dirname, '../../logs/CancelCarRQ.xml'), xmlRQ, (error) => {
              if (error) {
                // console.log(error);
                return res.status(500).json({
                  type: 'error',
                  title: 'CancelCarRQ',
                  message: `Error writing CancelCarRQ.xml to logs folder. Error: ${error}`,
                });
              }
            });
            const xmlData = await axios.post('http://merchandising.tpconnects.com/TpConnectsLatestV7/services/CarsConnect?wsdl', xmlRQ, headers);
            if (fastXmlParser.validate(xmlData.data) === true) {
              try {
                const bookingUpdateResult = await bookingModel_AJ.update({
                  booking_status: 'cancel',
                }, {
                  where: {
                    trip_id: id,
                  },
                });
                if (bookingUpdateResult) {
                  const bookingCarResult = await carBookingModel_AJ.update({
                    booking_status: 'cancel',
                  }, {
                    where: {
                      booking_id: objBookings.booking_id,
                    },
                  });
                  fs.writeFile(path.join(__dirname, '../../logs/CancelCarRS.xml'), xmlData.data, (error) => {
                    if (error) {
                      // console.log(error);
                      return res.status(500).json({
                        type: 'error',
                        title: 'CancelCarRS',
                        message: `Error writing CancelCarRS.xml to logs folder. Error: ${error}`,
                      });
                    }
                  });
                  const result = fastXmlParser.parse(xmlData.data, options);
                  // eslint-disable-next-line no-unused-vars
                  const CarCancelRecords = getAttr('CancelCarResponse', result);
                  if (bookingCarResult) {
                    return res.json({
                      type: 'data',
                      status: 200,

                      msg: 'fetched',
                      data: bookingResult,
                    });
                  }
                  return res.json({
                    type: 'error',
                    status: 400,
                    msg: 'Oops! Something went wrong while processing your request. Err: bookingFlight Updating Status Failed.',
                    // eslint-disable-next-line no-undef
                    data: error,
                  });
                }
                return res.json({
                  type: 'error',
                  status: 400,
                  msg: 'Oops! Something went wrong while processing your request. Err: Booking Status Updated Failed.',
                  // eslint-disable-next-line no-undef
                  data: error,
                });
              } catch (err) {
                // console.log(err);
              }
            } else {
              // console.log("response of cancel xml error")
            }
            // eslint-disable-next-line no-undef,consistent-return

          } catch (err) {
            console.log(logMethod, err);
            return utilsHelper.makeResponse(res, false, 400, 'error', 'INTERNAL SERVER ERROR', 'INTERNAL SERVER ERROR');
          }
          // logic of XML stop
        } else {
          console.log('ORGANIZATION TABLE ERROR');
        }
      } else {
        // console.log('USER TABLE ERROR');
      }
    } else {
      // console.log('BOOKING TABLE ERROR');
    }
  } catch (error) {
    // console.log(error);
    return res.json({
      type: 'error',
      status: 400,
      msg: 'Oops! Something went wrong while processing your request.',
      data: error,
    });
  }
};


module.exports = {
  searchCars,
  detailsCars,
  blockCars,
  bookCars,
  cancelCars,
};
