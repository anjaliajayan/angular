const axios = require('axios');
const fastXmlParser = require('fast-xml-parser');
const JsonFind = require('json-find');
const fs = require('fs');
const moment = require('moment');
const path = require('path');
const activitySearchXml = require('../xmls/activity/serach.xml');
const detailsXml = require('../xmls/activity/details.xml.js');
const blockXml = require('../xmls/activity/block.xml.js');
const bookXml = require('../xmls/activity/book.xml.js');
const cancelXml = require('../xmls/activity/cancel.xml.js');
const utilsHelper = require('../helpers/utils');
const commonEndPointHelper = require('./../helpers/commonApiEndPointsFetchs');
const {
  bookingModel_AJ,
  activityBooking_AJ,
  sequelizeOrganisation,
  Users,
  OrganisationModel,
} = require('../../config/db');

const objBookings = {};


const logThis = 'ActivityDao';

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

const searchActivity = async (req, res) => {
  const logMethod = `${logThis}SearchActivity`;
  try {
    const xmlRQ = activitySearchXml.searchActivityTemplate(req);// write the xml request
    if (xmlRQ === '') {
      return res.status(500).json({
        auth: false,
      });
    }

    // eslint-disable-next-line no-undef,consistent-return
    fs.writeFile(path.join(__dirname, '../../logs/SearchActivityRQ.xml'), xmlRQ, (error) => {
      if (error) {
        // console.log(error);
        return res.status(500).json({
          type: 'error',
          title: 'SearchActivityRQ',
          message: `Error writing SearchActivityRQ.xml to logs folder. Error: ${error}`,
        });
      }
    });

    const xmlData = await axios.post('http://merchandising.tpconnects.com/TpConnectsLatestV7/services/ActivityConnect?wsdl', xmlRQ, headers);
    // eslint-disable-next-line no-undef,consistent-return
    fs.writeFile(path.join(__dirname, '../../logs/SearchActivityRS.xml'), xmlData.data, (error) => {
      if (error) {
        // console.log(error);
        return res.status(500).json({
          type: 'error',
          title: 'SearchActivityRS',
          message: `Error writing SearchActivityRS.xml to logs folder. Error: ${error}`,
        });
      }
    });
    const result = fastXmlParser.parse(xmlData.data, options);

    const ActivitySearchRecords = getAttr('ActivityResult', result);
    return utilsHelper.makeResponse(res, true, 200, 'success', 'Your request is successful', 'List of available Activity', ActivitySearchRecords);
  } catch (err) {
    console.log(logMethod, err);
    return utilsHelper.makeResponse(res, false, 400, 'error', 'INTERNAL SERVER ERROR', 'INTERNAL SERVER ERROR');
  }
};
const detailsActivity = async (req, res) => {
  const logMethod = `${logThis}SearchActivity`;
  try {
    const xmlRQ = detailsXml.detailsActivityTemplate(req);
    // eslint-disable-next-line no-undef,consistent-return
    fs.writeFile(path.join(__dirname, '../../logs/detailsActivityRQ.xml'), xmlRQ, (error) => {
      if (error) {
        // console.log(error);
        return res.status(500).json({
          type: 'error',
          title: 'detailsActivityRQ',
          message: `Error writing detailsActivityRQ.xml to logs folder. Error: ${error}`,
        });
      }
    });
    const xmlData = await axios.post('http://merchandising.tpconnects.com/TpConnectsLatestV7/services/ActivityConnect?wsdl', xmlRQ, headers);
    // eslint-disable-next-line no-undef,consistent-return
    fs.writeFile(path.join(__dirname, '../../logs/detailsActivityRS.xml'), xmlData.data, (error) => {
      if (error) {
        // console.log(error);
        return res.status(500).json({
          type: 'error',
          title: 'detailsActivityRS',
          message: `Error writing detailsActivityRS.xml to logs folder. Error: ${error}`,
        });
      }
    });

    const result = fastXmlParser.parse(xmlData.data, options);
    const ActivityDetailsRecords = getAttr('GetActivityDetailsResponse', result);
    return utilsHelper.makeResponse(res, true, 200, 'success', 'Your request is successful', 'List of available Activity', ActivityDetailsRecords);
  } catch (err) {
    console.log(logMethod, err);
    return utilsHelper.makeResponse(res, false, 400, 'error', 'INTERNAL SERVER ERROR', 'INTERNAL SERVER ERROR');
  }
};
const blockActivity = async (req, res) => {
  const logMethod = `${logThis}SearchActivity`;
  try {
    console.log(blockXml.blockActivityTemplate);
    const xmlRQ = blockXml.blockActivityTemplate(req);
    // eslint-disable-next-line no-undef,consistent-return
    fs.writeFile(path.join(__dirname, '../../logs/BlockActivityRQ.xml'), xmlRQ, (error) => {
      if (error) {
        // console.log(error);
        return res.status(500).json({
          type: 'error',
          title: 'BlockActivityRQ',
          message: `Error writing BlockActivityRQ.xml to logs folder. Error: ${error}`,
        });
      }
    });
    const xmlData = await axios.post('http://merchandising.tpconnects.com/TpConnectsLatestV7/services/ActivityConnect?wsdl', xmlRQ, headers);
    // eslint-disable-next-line no-undef,consistent-return
    fs.writeFile(path.join(__dirname, '../../logs/BlockActivityRS.xml'), xmlData.data, (error) => {
      if (error) {
        // console.log(error);
        return res.status(500).json({
          type: 'error',
          title: 'BlockActivityRS',
          message: `Error writing BlockActivityRS.xml to logs folder. Error: ${error}`,
        });
      }
    });
    const result = fastXmlParser.parse(xmlData.data, options);
    const ActivityBlockRecords = getAttr('BlockActivityResponse', result);
    return utilsHelper.makeResponse(res, true, 200, 'success', 'Your request is successful', 'List of available Activity', ActivityBlockRecords);
  } catch (err) {
    console.log(logMethod, err);
    return utilsHelper.makeResponse(res, false, 400, 'error', 'INTERNAL SERVER ERROR', 'INTERNAL SERVER ERROR');
  }
};
const bookActivity = async (req, res) => {
  const logMethod = `${logThis}bookActivity`;
  try {
    const xmlRQ = bookXml.bookActivityTemplate(req);
    // eslint-disable-next-line no-undef,consistent-return
    fs.writeFile(path.join(__dirname, '../../logs/BookActivityRQ.xml'), xmlRQ, (error) => {
      if (error) {
        // console.log(error);
        return res.status(500).json({
          type: 'error',
          title: 'BookActivityRQ',
          message: `Error writing BookActivityRQ.xml to logs folder. Error: ${error}`,
        });
      }
    });
    const xmlData = await axios.post('http://merchandising.tpconnects.com/TpConnectsLatestV7/services/ActivityConnect?wsdl', xmlRQ, headers);
    // eslint-disable-next-line no-undef,consistent-return
    fs.writeFile(path.join(__dirname, '../../logs/BookActivityRS.xml'), xmlData.data, (error) => {
      if (error) {
        // console.log(error);
        return res.status(500).json({
          type: 'error',
          title: 'BookActivityRS',
          message: `Error writing BookActivityRS.xml to logs folder. Error: ${error}`,
        });
      }
    });
    const result = fastXmlParser.parse(xmlData.data, options);
    const ActivityBookRecords = getAttr('BookActivityResponse', result);
    const bookedActivity = ActivityBookRecords.ActivityResult;

    // let status = '';
    // if (bookedActivity.TransactionLog.status.status == 'Booked') {
    //   status = 'confirm';
    // }
    // if (bookedActivity.TransactionLog.status.status == 'Failure') {
    //   status = 'failed';
    // }
    if (bookedActivity.TransactionLog.status === 'Failure') {
      return utilsHelper.makeResponse(res, true, 400, 'success', 'Your request is successful', 'Your selected activity is not booked', ActivityBookRecords);
    }
    if (bookedActivity.Activity.is_booked === 'Booked' || bookedActivity.TransactionLog.status === 'Success') {
      // console.log("book room");
      const bookingObj = {};
      const totalPrice = bookedActivity.Activity.markupPrice;
      // eslint-disable-next-line camelcase
      const searchCriteria = ActivityBookRecords.ActivityResult.ActivitySearchCriteria;
      // if (status == 'confirm') {
      //   console.log('======available_deposit========', parseFloat(available_deposit));
      //   const transactionObj = {};
      //   transactionObj.users_id = userId;
      //   transactionObj.organisation_id = organisation_id;
      //   transactionObj.transaction_type = 'credit';
      //   transactionObj.payment_type = 'credit';
      //   transactionObj.amount = markup_price > 0 ? markup_price : hotel.room.markup_price;
      //   transactionObj.currency_id = orgCurrencyId;
      //   transactionObj.transaction_comments = 'Hotel Booking Confirmed';
      //   transactionObj.status = 1;
      //   transactionObj.created = moment().format('YYYY-MM-DD HH:mm:ss');
      //   transactionObj.before_debit = credit_limit;
      //   transactionObj.trip_id = hotel.tripId;
      //   transactionObj.payment_gateway_id = null;
      //   transactionObj.tax_no = null;
      //   transactionObj.tax_email = null;
      //   const transactionData = await Transaction.create(transactionObj);
      //   transaction_id = transactionData.transaction_id;
      //   // console.log("=====userDetail=====",userDetail);
      //   if (transaction_id) {
      //     const amountOrg = await sequelizeOrganisation.findOne({ where: { organisation_id } });
      //     const amountAccount = await OrganizationAccount.findOne({ where: { organisation_id } });
      //     // console.log("AMOUNT__________________",amountOrg.dataValues.credit_limit);
      //     //   console.log("AMOUNT ORG__________________",amountAccount.dataValues.available_deposit);
      //     const amount = (markup_price > 0 ? markup_price : hotel.room.markup_price);
      //     console.log('=====transaction_id=====', transaction_id, amount, amount, parseFloat(available_deposit));
      //     await sequelizeOrganisation.update({
      //       credit_limit: amountOrg.dataValues.credit_limit - amount,
      //     }, {
      //       where: {
      //         organisation_id,
      //       },
      //     });
      //     await OrganizationAccount.update({
      //       available_deposit: amountAccount.dataValues.available_deposit - parseFloat(amount),
      //     }, {
      //       where: {
      //         organisation_id,
      //       },
      //     });
      //   }
      // }
      bookingObj.agent_code = String(86200213);
      bookingObj.trip_id = bookedActivity.Activity.bookingDetail.tripID;
      bookingObj.users_id = 0;
      bookingObj.transaction_id = null;
      bookingObj.booking_email = bookedActivity.Activity.bookingDetail.bookingEmail;
      bookingObj.booking_comments = null;
      bookingObj.booking_currency = bookedActivity.Activity.currencyCode;
      bookingObj.booking_status = (bookedActivity.Activity.is_booked === 'Booked') ? 'confirm' : 'hold';
      bookingObj.agent_reference = 'TPC'; // need to add the UI field of agent reference in the order create page.
      bookingObj.amount = totalPrice;
      bookingObj.payment_type = 'Credit'; // if its agent then it should be deposit so need to add check here.
      bookingObj.supplier_price = bookedActivity.Activity.supplierPrice;
      bookingObj.markup_price = bookedActivity.Activity.markupPrice;
      bookingObj.has_hotel = 0;
      bookingObj.has_flight = 0;
      bookingObj.created = moment().format('YYYY-MM-DD HH:mm:ss');
      bookingObj.status = 1;
      bookingObj.has_activities = 1;
      bookingObj.has_car = 0;
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
      // eslint-disable-next-line max-len
      // bookingObj.user_currency = Array.isArray(orderObj.Response.Metadata.Other.OtherMetadata) ? orderObj.Response.Metadata.Other.OtherMetadata[orderObj.Response.Metadata.Other.OtherMetadata.length - 1].CurrencyMetadatas.CurrencyMetadata.Name : orderObj.Response.Metadata.Other.OtherMetadata.CurrencyMetadatas.CurrencyMetadata.Name; // From Frontend I need to pass it
      bookingObj.user_currency = searchCriteria.currency;
      bookingObj.curnversion_value = null;
      bookingObj.service_charge_cancel = 0;
      bookingObj.service_charge_create = 0;
      bookingObj.service_charge_refund = 0;
      bookingObj.supplier = bookedActivity.Activity.supplierCode;
      // //adding detail to table
      const booking = await bookingModel_AJ.create(bookingObj);

      // console.log("booking",booking);

      if (booking) {
        // console.log(hotel)
        const bookingActivityObj = {};
        const supplier = await commonEndPointHelper.fetchSupplierDetails(bookedActivity.Activity.supplierCode);
        // carBookingModel_AJ.booking_hotel_id = bookedActivity.Activity.room.booking_hotel_id;
        bookingActivityObj.booking_id = booking.booking_id;
        bookingActivityObj.supplier_id = supplier.supplier_id;
        bookingActivityObj.hotel_id = String(bookedActivity.Activity.activityCode);
        // eslint-disable-next-line eqeqeq
        bookingActivityObj.booking_status = (bookedActivity.Activity.is_booked == 'Booked') ? 'voucher' : 'hold';
        bookingActivityObj.voucher_no = bookedActivity.Activity.bookingDetail.tripID;
        bookingActivityObj.country = searchCriteria.country;
        bookingActivityObj.destination = searchCriteria.city;
        bookingActivityObj.start_date = searchCriteria.startDate;
        bookingActivityObj.end_date = searchCriteria.endDate;
        bookingActivityObj.adult = searchCriteria.adultCount;
        bookingActivityObj.child = searchCriteria.childCount;
        bookingActivityObj.room = 'N/a';
        bookingActivityObj.room_info = JSON.stringify(bookedActivity);
        bookingActivityObj.supplier_code = bookedActivity.Activity.supplierCode;
        bookingActivityObj.booking_code = bookedActivity.Activity.bookingDetail.bookingCode;
        bookingActivityObj.reference_number = bookedActivity.Activity.booking_activity_id;
        bookingActivityObj.search_criteria = JSON.stringify(searchCriteria);
        bookingActivityObj.response_key = searchCriteria.responseKey;
        bookingActivityObj.booking_currency = searchCriteria.currency;
        bookingActivityObj.booking_amount = bookedActivity.Activity.markupPrice;
        bookingActivityObj.supplier_price = bookedActivity.Activity.supplierPrice;
        bookingActivityObj.markup_price = bookedActivity.Activity.markupPrice;
        bookingActivityObj.markups = bookedActivity.Activity.markupPrice;
        bookingActivityObj.cancel_supplier_price = 'N/a';
        bookingActivityObj.cancel_markup_price = 'N/a';
        bookingActivityObj.cancellation_dead_line = 'N/a';
        bookingActivityObj.created = moment().format('YYYY-MM-DD HH:mm:ss');
        bookingActivityObj.status = 1;


        // console.log("bookingActivityObj", bookingActivityObj)

        const activityBook = await activityBooking_AJ.create(bookingActivityObj);

        if (activityBook) {
          return utilsHelper.makeResponse(res, true, 200, 'success', 'Your request is successful', 'List of available Activity', bookedActivity);
        }
        return utilsHelper.makeResponse(res, false, 200, 'danger', 'Your request is successful', 'Your selected room is not saved');
      }
    } else {
      return utilsHelper.makeResponse(res, true, 200, 'success', 'Your request is successful', 'Your selected activity is not booked', ActivityBookRecords);
    }
  } catch (err) {
    console.log(logMethod, err);
    return utilsHelper.makeResponse(res, false, 400, 'error', 'INTERNAL SERVER ERROR', 'INTERNAL SERVER ERROR');
  }
};

// eslint-disable-next-line consistent-return
const cancelActivity = async (req, res) => {
  const logMethod = `${logThis}SearchActivity`;

  const id = req.body.tripId;
  console.log(id);
  try {
    const bookingResult = await bookingModel_AJ.findAll({
      where: {
        trip_id: id,
      },
      plain: true,
      include: [{
        model: activityBooking_AJ,
        // as: 'activity_details',
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
            console.log(cancelXml.cancelActivityTemplate);
            const xmlRQ = cancelXml.cancelActivityTemplate(req);

            fs.writeFile(path.join(__dirname, '../../logs/CancelActivityRQ.xml'), xmlRQ, (error) => {
              if (error) {
                // console.log(error);
                return res.status(500).json({
                  type: 'error',
                  title: 'CancelActivityRQ',
                  message: `Error writing CancelActivityRQ.xml to logs folder. Error: ${error}`,
                });
              }
            });
            const xmlData = await axios.post('http://merchandising.tpconnects.com/TpConnectsLatestV7/services/ActivityConnect?wsdl', xmlRQ, headers);
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
                  const bookingActivityResult = await activityBooking_AJ.update({
                    booking_status: 'cancel',
                  }, {
                    where: {
                      booking_id: objBookings.booking_id,
                    },
                  });
                  fs.writeFile(path.join(__dirname, '../../logs/CancelActivityRS.xml'), xmlData.data, (error) => {
                    if (error) {
                      // console.log(error);
                      return res.status(500).json({
                        type: 'error',
                        title: 'CancelActivityRS',
                        message: `Error writing CancelActivityRS.xml to logs folder. Error: ${error}`,
                      });
                    }
                  });
                  const result = fastXmlParser.parse(xmlData.data, options);
                  // eslint-disable-next-line no-unused-vars
                  const ActivityCancelRecords = getAttr('CancelActivityResponse', result);
                  if (bookingActivityResult) {
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
  searchActivity,
  detailsActivity,
  blockActivity,
  bookActivity,
  cancelActivity,
};
