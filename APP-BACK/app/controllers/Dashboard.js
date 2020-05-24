const express = require('express');
const router = express.Router();
const {
  Op,
  Bookings,
  OrganisationModel,
  FlightSearchLog,
  Preset,
  flightBookingModel_AJ,
  carBookingModel_AJ,
  insuranceBookingModel_AJ,
  hotelBookingModel_AJ,
  activityBooking_AJ,
  transferBookingModel_AJ,
  cruiseBookingModel_AJ,
  holidayBookingModel_AJ,
  bookingModel_AJ,
  organsationModel_AJ
} = require('./../../config/db');
const dataConvertorHelper = require('./../helpers/dataconversionforgraphs');
const {dateFormat} = require("../helpers/utils");

router.get('/fetch-bookings-information', async (req, res) => {
  var params = req.query;

  var timeSpan = {
    searchFrom: new Date('2017-10-23'),
    searchTo: new Date()
  }

  if (params.period_from && params.period_from != '') {
    timeSpan.searchFrom = dateFormat(params.period_from)
  }
  if (params.period_to && params.period_to != '') {
    timeSpan.searchTo = dateFormat(params.period_to)
  }
  let flghtBookingFilter = {},
    bookingFilter = {},
    organisationFilter = {}

  flghtBookingFilter = {
    created: {
      [Op.gt]: timeSpan.searchFrom,
      [Op.lte]: timeSpan.searchTo
    }
  }
  if (params.agent_code && params.agent_code != '-1') {
    bookingFilter.agent_code = params.agent_code;
  }
  if (params.organization_id && params.organization_id != '-1')
    organisationFilter.organisation_id = params.organization_id;
  if (params.pos && params.pos != '-1')
    organisationFilter.corporate_type = params.pos;

  try {
    let flightBookings = await flightBookingModel_AJ.count({
      where: flghtBookingFilter,
      include: [{
        model: bookingModel_AJ,
        where: bookingFilter,
        required: true,
        include: [{
          model: organsationModel_AJ,
          where: organisationFilter,
          required: true
        }]
      }]
    });
    let carBookings = await carBookingModel_AJ.count({
      where: flghtBookingFilter,
      include: [{
        model: bookingModel_AJ,
        where: bookingFilter,
        required: true,
        include: [{
          model: organsationModel_AJ,
          where: organisationFilter,
          required: false
        }]
      }]
    });
    let insuranceBookings = await insuranceBookingModel_AJ.count({
      where: flghtBookingFilter,
      include: [{
        model: bookingModel_AJ,
        where: bookingFilter,
        required: true,
        include: [{
          model: organsationModel_AJ,
          where: organisationFilter,
          required: false
        }]
      }]
    });
    let hotelBookings = await hotelBookingModel_AJ.count({
      where: flghtBookingFilter,
      include: [{
        model: bookingModel_AJ,
        where: bookingFilter,
        required: true,
        include: [{
          model: organsationModel_AJ,
          where: organisationFilter,
          required: false
        }]
      }]
    });
    let activityBookings = await activityBooking_AJ.count({
      where: flghtBookingFilter,
      include: [{
        model: bookingModel_AJ,
        where: bookingFilter,
        required: true,
        include: [{
          model: organsationModel_AJ,
          where: organisationFilter,
          required: true
        }]
      }]
    });
    let transferBookings = await transferBookingModel_AJ.count({
      where: flghtBookingFilter,
      include: [{
        model: bookingModel_AJ,
        where: bookingFilter,
        required: true,
        include: [{
          model: organsationModel_AJ,
          where: organisationFilter,
          required: true
        }]
      }]
    });
    let cruiseBookings = await cruiseBookingModel_AJ.count({
      where: flghtBookingFilter,
      include: [{
        model: bookingModel_AJ,
        where: bookingFilter,
        required: true,
        include: [{
          model: organsationModel_AJ,
          where: organisationFilter,
          required: true
        }]
      }]
    });
    let holidayBookings = await holidayBookingModel_AJ.count({
      where: flghtBookingFilter,
      include: [{
        model: bookingModel_AJ,
        where: bookingFilter,
        required: true,
        include: [{
          model: organsationModel_AJ,
          where: organisationFilter,
          required: true
        }]
      }]
    });
    res.json({
      type: 'data',
      status: 200,
      msg: 'Flight Fetched Successfully.',
      Stats: {
        flights: flightBookings,
        hotels: hotelBookings,
        activities: activityBookings,
        carHire: carBookings,
        insurance: insuranceBookings,
        transfers: transferBookings,
        holidays: holidayBookings,
        cruise: cruiseBookings
      }
    });
  } catch (error) {
    console.log("Dashboard::fetch-bookings-information - Error");
    console.log(error);
    res.status(500).json({
      type: 'error',
      status: 400,
      msg: 'Oops! Something went wrong while processing your request.',
    });
  }
});

router.get('/fetch-preset-information', (req, res) => {
  // // console.log(req.body);
  var params = req.query;

  var timeSpan = {
    searchFrom: new Date('2017-10-23'),
    searchTo: new Date()
  }

  if (params.period_from && params.period_from != '') {
    timeSpan.searchFrom = dateFormat(params.period_from)
  }
  if (params.period_to && params.period_to != '') {
    timeSpan.searchTo = dateFormat(params.period_to)
  }
  let flghtBookingFilter = {},
    bookingFilter = {},
    organisationFilter = {}

  flghtBookingFilter = {
    created: {
      [Op.gt]: timeSpan.searchFrom,
      [Op.lte]: timeSpan.searchTo
    }
  }
  if (params.agent_code && params.agent_code != '-1') {
    bookingFilter.agent_code = params.agent_code;
  }
  if (params.organization_id && params.organization_id != '-1')
    organisationFilter.organisation_id = params.organization_id;
  if (params.pos && params.pos != '-1')
    organisationFilter.corporate_type = params.pos;
    
  organsationModel_AJ.findAll({
      where: flghtBookingFilter
    })
    .then((Organisations) => {

      Preset.findAll({
          where: {}
        })
        .then((Preset) => {

          var output = {

            subagents: (Organisations.filter(function (hero) {
              if (hero.corporate_type == 'Agent' || hero.corporate_type == null)
                return true;
              return false;
            })).length,
            websites: (Organisations.filter(function (hero) {
              return hero.corporate_type == 'B2C';
            })).length,
            corporates: (Organisations.filter(function (hero) {
              return hero.corporate_type == 'Corporate';
            })).length,

            total: Preset.length,
            active: (Preset.filter(function (hero) {
              return hero.status == 1;
            })).length,
            inactive: (Preset.filter(function (hero) {
              return hero.status != 1;
            })).length
          }
          res.json({
            type: 'data',
            status: 200,
            msg: 'Preset Stats Fetched Successfully.',
            Stats: output
          });
        }).catch((error) => {
          res.status(500).json({
            type: 'error',
            status: 400,
            msg: 'Oops! Something went wrong while processing your request.',
          });
        });

    }).catch((error) => {
      console.log("Dashboard::fetch-preset-information - Error");
      console.log(error);
      res.status(500).json({
        type: 'error',
        status: 400,
        msg: 'Oops! Something went wrong while processing your request.',
      });
    });
});

router.get('/fetch-flights-information', (req, res) => {
  var report = 'week';
  if (req.query.report && req.query.report != '')
    report = req.query.report;

  var searchFrom = new Date("September 15, 2001 11:20:25") //new Date();
  var searchTo = new Date();
  searchFrom.setDate(searchFrom.getDate() - 7);
  FlightSearchLog.findAll({
      where: {
        created_at: {
          // [Op.lte]: searchFrom,
          // [Op.gte]: searchTo
          [Op.between]: [searchFrom, searchTo]
        }
      },
      order: [
        ['created_at', 'DESC']
      ]
    })
    .then((FlightSearchLog) => {
      const Stats = dataConvertorHelper.getFlightSearchStats(FlightSearchLog, report)
      res.json({
        type: 'data',
        status: 200,
        msg: 'Flight Search Logs Fetched Successfully.',
        Stats: Stats
      });
    }).catch((error) => {
      console.log("Dashboard::fetch-flights-information - Error");
      console.log(error);
      res.status(500).json({
        type: 'error',
        status: 400,
        msg: 'Oops! Something went wrong while processing your request.',
      });
    });
});

router.get('/fetch-performance-information', async (req, res) => {
  var params = req.query;
  var report = 'custom';

  var timeSpan = {
    searchFrom: new Date("September 15, 2001 11:20:25"),
    searchTo: new Date()
  }

  if (params.period_from && params.period_from != '') {
    timeSpan.searchFrom = new Date(req.query.period_from)
  }
  if (params.period_to && params.period_to != '') {
    timeSpan.searchTo = new Date(req.query.period_to)
  }

  var where_query = {
    created: {
      [Op.gt]: timeSpan.searchFrom,
      [Op.lte]: timeSpan.searchTo
    }
  }
  if (params.agent_code && params.agent_code != '-1') {
    where_query.agent_code = req.query.agent_code;
  }
  if (params.producttype && params.producttype != '-1') {
    var producttype = req.query.producttype;
    if (producttype == 'has_hotel')
      where_query.has_hotel = true;
    if (producttype == 'has_flight')
      where_query.has_flight = true;
    if (producttype == 'has_activities')
      where_query.has_activities = true;
    if (producttype == 'has_car')
      where_query.has_car = true;
    if (producttype == 'has_insurance')
      where_query.has_insurance = true;
    if (producttype == 'has_transfers')
      where_query.has_transfers = true;
    if (producttype == 'has_marhaba')
      where_query.has_marhaba = true;
    if (producttype == 'has_cruises')
      where_query.has_cruises = true;
    if (producttype == 'has_holiday')
      where_query.has_holiday = true;
    if (producttype == 'has_visa')
      where_query.has_visa = true;
  }

  var organisation_filter = {};
  if (params.organization_id && params.organization_id != '-1')
    organisation_filter.organisation_id = req.query.organization_id;
  if (params.pos && params.pos != '-1')
    organisation_filter.corporate_type = params.pos;

  bookingModel_AJ.findAll({
      where: where_query,
      include: [{
        model: organsationModel_AJ,
        where: organisation_filter
      }]
    })
    .then(Booking => {
      // // console.log('vale s ', Booking[0])
      res.json({
        type: 'data',
        status: 200,
        msg: 'Bookings Fetched Successfully.',
        Stats: dataConvertorHelper.getPerformanceStats(Booking, report, timeSpan)
      });
    })
    .catch(error => {
      console.log("Dashboard::fetch-performance-information - Error");
      console.log(error);
    });
});

router.get('/fetch-productivity-information', async (req, res) => {
  var report = 'month';
  if (req.query.report && req.query.report != '')
    report = req.query.report;

  var timeSpan = {
    searchFrom: new Date("September 15, 2001 11:20:25"),
    searchTo: new Date()
  }

  if (req.query.start && req.query.start != '') {
    timeSpan.searchFrom = new Date(req.query.start)
  }
  if (req.query.end && req.query.end != '') {
    timeSpan.searchTo = new Date(req.query.end)
  }


  var where_query = {
    created: {
      // [Op.gt]: timeSpan.searchFrom,
      // [Op.lte]: timeSpan.searchTo
      [Op.between]: [timeSpan.searchFrom, timeSpan.searchTo]
    }
  };
  if (req.query.agent_code && req.query.agent_code != '') {
    where_query.agent_code = req.query.agent_code;
  }
  if (req.query.producttype && req.query.producttype != '') {
    var producttype = req.query.producttype;
    if (producttype == 'has_hotel')
      where_query.has_hotel = true;
    if (producttype == 'has_flight')
      where_query.has_flight = true;
    if (producttype == 'has_activities')
      where_query.has_activities = true;
    if (producttype == 'has_car')
      where_query.has_car = true;
    if (producttype == 'has_insurance')
      where_query.has_insurance = true;
    if (producttype == 'has_transfers')
      where_query.has_transfers = true;
    if (producttype == 'has_marhaba')
      where_query.has_marhaba = true;
    if (producttype == 'has_cruises')
      where_query.has_cruises = true;
    if (producttype == 'has_holiday')
      where_query.has_holiday = true;
    if (producttype == 'has_visa')
      where_query.has_visa = true;
  }

  Bookings.findAll({
      where: where_query
    })
    .then(Booking => {
      res.json({
        type: 'data',
        status: 200,
        msg: 'Bookings Fetched Successfully.',
        Stats: dataConvertorHelper.getProductivityStas(Booking, report, timeSpan)
      });
    })
    .catch(error => {
      console.log("Dashboard::fetch-productivity-information - Error");
      console.log(error);
    });
});




module.exports = router;
