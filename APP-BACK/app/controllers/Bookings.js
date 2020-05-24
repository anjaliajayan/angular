const express = require('express');
const router = express.Router();
const { Sequelize, Bookings_M, FlightBookings_M, Suppliers_M, carsBookings_M, hotelBookings_M, activityBookings_M, insuranceBookings_M, transferBookings_M, OrganisationModel_M, Users_M, visaBookings_M, guideBookings_M, marhabalBookings_M, holidayBookings_M, cruiseBookings_M, paymentGetway_M, Transaction_M, SettingModel, sequelizeOrganisation } = require('./../../config/db');
const Op = Sequelize.Op;
let moment = require('moment');
var pdf = require('html-pdf');
const config = require('./../../config/config')
const path = require('path');
const pug = require('pug');
const fs = require('fs');
const { makeResponse, getOrgDetails } = require('../helpers/utils');
const pdfHelper = require('../helpers/pdf.helper');


const {
    organsationModel_AJ,
    bookingModel_AJ,
    flightTicketModel_AJ,
    flightBookingModel_AJ,
    hotelBookingModel_AJ,
    carBookingModel_AJ,
    insuranceBookingModel_AJ,
    transferBookingModel_AJ,
    activityBooking_AJ,
    holidayBookingModel_AJ,
    cruiseBookingModel_AJ,
    supplierModel_AJ,
    flightTicketEmdModel_AJ,
    passengerDetailModel_AJ,
    tripDetailModel_AJ,
    segmentDetailModel_AJ,
    userModel_AJ,
    Suppliers
} = require('./../../config/db')


router.post('/fetch-all-bookings', async (req, res) => {
    // console.log("---req.body", req.body);
    // get Organisation ID of currenct user
    const orgDetails = getOrgDetails(req);
    const orgID = orgDetails.org_id
    // get all users of currenct Organisation ID
    const users_ids = await Users_M.findAll({where: {organisation_id:orgID}, attributes:["users_id"]})
    let u_ids = []
    users_ids.forEach(id => {
        u_ids.push(id.users_id)
    })
    u_ids.push(orgDetails.user_users_id)
    u_ids = [... new Set(u_ids)]
    
    let { limit, page, agent_reference,
        end_date,
        organisation_id,
        product_id,
        start_date,
        status,
        supplier_id,
        trip_id,
        booking_date,
        booking_email } = req.body;
    limit = (!limit) ? parseInt(config.pageLimit) : parseInt(limit)
    page = (!page) ? parseInt(0) : parseInt(page)
    let offset = limit * page;
    let bookingsArr = [];
    let includeArray = [];

    let query = { status: 1}

    if(orgDetails.org_id != orgDetails.parent_id){
        query = { users_id: { [Op.in]:u_ids }, ...query}
    }
    let flightBookQuery = {};
    let hotelQuery = visaQuery = cruisesQuery = holidayQuery = marhabaQuery = carQuery = activitiesQuery = insuranceQuery = flightQuery = transferQuery = {};

    if (trip_id != undefined && trip_id != '') {
        query = { trip_id: { [Op.like]: '%' + trip_id + '%' }, ...query }
        flightBookQuery = { pnr_no: { [Op.like]: '%' + trip_id + '%' }, ...flightBookQuery }
    }

    if (agent_reference != undefined && agent_reference != '') {
        query = { agent_reference: { [Op.like]: '%' + agent_reference + '%' }, ...query }
    }

    if (status != undefined && status != "" && status != 'all') {
        query = { booking_status: status, ...query }
    }
    if (product_id != undefined && product_id != 'all') {
        switch (product_id) {
            case "Hotels":
                query = { 'has_hotel': 1, ...query }
                break;
            case "Flights":
                query = { 'has_flight': 1, ...query }
                break;
            case "Activities":
                query = { 'has_activities': 1, ...query }
                break;
            case "Cars":
                query = { 'has_car': 1, ...query }
                break;
            case "Insurances":
                query = { 'has_insurance': 1, ...query }
                break;
            case "Transfers":
                query = { 'has_transfers': 1, ...query }
                break;
            case "Cruises":
                query = { 'has_cruises': 1, ...query }
                break;
            case "Holidays":
                query = { 'has_holiday': 1, ...query }
                break;
        }
    }
    if (supplier_id != undefined && supplier_id != 'all') {

        // query = { supplier_id: supplier_id, ...query }
        let supplierData = await Suppliers_M.findOne({ where: { supplier_code: supplier_id }, attributes: ['supplier_id', 'is_hotel', 'is_car', 'is_flight', 'is_transfers', 'is_insurance', 'is_activities'], raw: true })
        if (supplierData) {
            if (supplierData.is_hotel) {
                // join booking hotels
                hotelQuery = { supplier_code: supplier_id }
            } else if (supplierData.is_car) {
                // join booking car)
                carQuery = { supplier_code: supplier_id }
            } else if (supplierData.is_flight) {
                // join booking flight
                flightQuery = { supplier_id: supplierData.supplier_id }
            } else if (supplierData.is_transfers) {
                // join booking transfers
                transferQuery = { supplier_code: supplier_id }
            } else if (supplierData.is_insurance) {
                // join booking insurance
                insuranceQuery = { supplier_code: supplier_id }
            } else if (supplierData.is_activities) {
                // join booking is_activities
                activitiesQuery = { supplier_code: supplier_id }
            } else if (supplierData.has_visa) {
                // join booking has_visa
                visaQuery = { supplier_code: supplier_id }
            } else if (supplierData.has_marhaba) {
                // join booking has_marhaba
                marhabaQuery = { supplier_code: supplier_id }
            } else if (supplierData.has_cruises) {
                // join booking has_cruises
                cruisesQuery = { supplier_code: supplier_id }
            } else if (supplierData.has_holiday) {
                // join booking has_holiday
                holidayQuery = { supplier_code: supplier_id }
            }
        }
    } else {
        // otherwise join with payment getway
        includeArray.push({
            model: paymentGetway_M,
            attributes: ['paymentgateway_id', 'order_transaction_id', 'order_status'],
            required: false
        })
    }
    if (organisation_id != undefined && organisation_id != "" && organisation_id != 'all') {
        query = { agent_code: organisation_id, ...query }
    }
    // if there is no date define then will get last 90 days
    if ((start_date != undefined && start_date != "" && start_date != '') || (end_date != undefined && end_date != "" && end_date != '')) {
        if (start_date != undefined && start_date != '' && end_date != undefined && end_date != '') {
            start_date = moment(start_date).startOf('day').format("YYYY-MM-DD HH:mm:ss");
            end_date = moment(end_date).endOf('day').format("YYYY-MM-DD HH:mm:ss");
            query = { created: { [Op.between]: [start_date, end_date] }, ...query }
        } else if (start_date != undefined && start_date != "" && start_date != '') {
            start_date = moment(start_date).startOf('day').format("YYYY-MM-DD HH:mm:ss");
            query = { created: { [Op.gte]: start_date }, ...query }
        } else if (end_date != undefined && end_date != "" && end_date != '') {
            end_date = moment(end_date).endOf('day').format("YYYY-MM-DD HH:mm:ss");
            query = { created: { [Op.lte]: end_date }, ...query }
        }
    }
    // else {
    //     start_date = moment().subtract(90, 'days').startOf('day').format("YYYY-MM-DD HH:mm:ss");
    //     end_date = moment().endOf('day').format("YYYY-MM-DD HH:mm:ss");

    //     query = { created: { [Op.between]: [start_date, end_date] }, ...query }
    // }
    if (booking_date != undefined && booking_date != "" && booking_date != '') {
        query = { created: moment(booking_date).format("YYYY-MM-DD HH:mm:ss"), ...query }
    }
    if (booking_email != undefined && booking_email != '') {
        query = { booking_email: booking_email, ...query }
    }
    // console.log("--query", query)
    // join array object
    includeArray = [
        {
            model: FlightBookings_M,
            attributes: ['booking_flight_id', 'booking_status', 'flight_id', 'pnr_no', 'supplier_id', 'flightPrice'],
            where: flightQuery,
            required: false,
            include: [{
                model: Suppliers_M,
                attributes: ['supplier_id', 'supplier_code'],
                required: false
            }]
        },
        {
            model: hotelBookings_M,
            attributes: ['booking_hotel_id', 'supplier_id'],
            where: hotelQuery,
            required: false,
            include: [{
                model: Suppliers_M,
                attributes: ['supplier_id', 'supplier_code'],
                required: false
            }]
        },
        {
            model: carsBookings_M,
            attributes: ['bookings_car_id', 'supplier_code'],
            where: carQuery,
            required: false,
            include: [{
                model: Suppliers_M,
                attributes: ['supplier_id', 'supplier_code'],
                required: false
            }]
        },
        /*
        {
            model: transferBookings_M,
            attributes: ['booking_transfer_id', 'supplier_code'],
            where: transferQuery,
            required: false,
            include: [{
                model: Suppliers_M,
                attributes: ['supplier_id', 'name'],
                required: false
            }]
        },
        */
        {
            model: insuranceBookings_M,
            attributes: ['booking_insurance_id', 'supplier_code'],
            where: insuranceQuery,
            required: false
        },

        {
            model: activityBookings_M,
            attributes: ['booking_activity_id', 'supplier_code'],
            where: activitiesQuery,
            required: false,
            include: [{
                model: Suppliers_M,
                attributes: ['supplier_id', 'supplier_code'],
                required: false
            }]
        },
        /*
        {
            model: visaBookings_M,
            attributes: ['booking_visa_id', 'status', 'supplier_code'],
            where: visaQuery,
            required: false,
            include: [{
                model: Suppliers_M,
                attributes: ['supplier_id', 'name'],
                required: false
            }]
        },
        {
            model: marhabalBookings_M,
            attributes: ['booking_marhaba_id', 'status', 'supplier_code'],
            where: marhabaQuery,
            required: false,
            include: [{
                model: Suppliers_M,
                attributes: ['supplier_id', 'name'],
                required: false
            }]
        },
        {
            model: holidayBookings_M,
            attributes: ['booking_holiday_id', 'status', 'supplier_code'],
            where: holidayQuery,
            required: false,
            include: [{
                model: Suppliers_M,
                attributes: ['supplier_id', 'name'],
                required: false
            }]
        },
        {
            model: cruiseBookings_M,
            attributes: ['bookings_cruise_id', 'status', 'supplier_code'],
            where: cruisesQuery,
            required: false,
            include: [{
                model: Suppliers_M,
                attributes: ['supplier_id', 'name'],
                required: false
            }]
        },*/
        {
            model: Users_M,
            attributes: ['username'],
            required: false,
            include: [{
                model: OrganisationModel_M,
                attributes: ['name'],
                required: false
            }],
        }];
    // console.log("---query", query)

    Bookings_M.findAndCountAll({
        where: query,
        attributes: [`agent_code`, `booking_id`, `transaction_id`, `trip_id`, `users_id`, `booking_email`, `booking_currency`, `booking_status`, `agent_reference`, `amount`, `payment_type`, `supplier_price`, `markup_price`, `has_hotel`, `has_flight`, `created`, `status`, `has_activities`, `has_car`, `has_insurance`, `has_transfers`, `has_marhaba`, `has_cruises`, `has_holiday`, `has_visa`, `remarks`, `user_currency`, `curnversion_value`, `supplier`, `service_charge_cancel`, `service_charge_create`, `service_charge_refund`],
        include: includeArray,
        order: [['booking_id', 'DESC']],
        offset: offset,
        limit: limit,
    })
        .then(bookings => {
            bookings.rows.map(async (booking, ind) => {
                //// console.log("--booking",booking)
                let newObj = {};
                let productNames = '';
                let supplierName = '';

                if (booking.has_flight) {
                    productNames += "Flight";
                    if (booking.bookings_flights.length) {
                        booking.bookings_flights.map((bookEle) => {
                            if (bookEle.supplier) {
                                supplierName += (bookEle.supplier.supplier_code) ? bookEle.supplier.supplier_code + " /" : "";
                            }
                        })
                    }
                }
                if (booking.has_hotel) {
                    productNames += "Hotel /";
                    if (booking.bookings_hotels.length) {
                        booking.bookings_hotels.map((bookHotEle) => {
                            if (bookHotEle.supplier) {
                                supplierName += (bookHotEle.supplier.supplier_code) ? bookHotEle.supplier.supplier_code + " /" : "";
                            }
                        })
                    }
                }

                if (booking.has_activities) {
                    productNames += "Act /";
                    if (booking.bookings_activities.length) {
                        booking.bookings_activities.map((bookActEle) => {
                            if (bookActEle.supplier) {
                                supplierName += (bookActEle.supplier.supplier_code) ? bookActEle.supplier.supplier_code + " /" : "";
                            }
                        })
                    }
                }
                if (booking.has_car) {
                    productNames += "Car /";
                    if (booking.bookings_cars.length) {
                        booking.bookings_cars.map((bookCatEle) => {
                            if (bookCatEle.supplier) {
                                supplierName += (bookCatEle.supplier.supplier_code) ? bookCatEle.supplier.supplier_code + " /" : "";
                            }
                        })
                    }
                }

                if (booking.has_insurance) {
                    productNames += "Ins /";
                    if (booking.bookings_insurances.length) {
                        booking.bookings_insurances.map((bookInsEle) => {
                            if (bookInsEle.supplier) {
                                supplierName += (bookInsEle.supplier.supplier_code) ? bookInsEle.supplier.supplier_code + " /" : "";
                            }
                        })
                    }
                }
                /*
                if (booking.has_transfers) {
                    productNames += "Tra /";
                    if (booking.booking_transfer.length) {
                        booking.booking_transfer.map((bookTraEle) => {
                            if (bookTraEle.supplier) {
                                supplierName += (bookTraEle.supplier.supplier_code) ? bookTraEle.supplier.supplier_code + " /" : "";
                            }
                        })
                    }
                }
                if (booking.has_cruises) {
                    productNames += "Cru /";
                    if (booking.booking_cruises.length) {
                        booking.booking_cruises.map((bookCruEle) => {
                            if (bookCruEle.supplier) {
                                supplierName += (bookCruEle.supplier.supplier_code) ? bookCruEle.supplier.supplier_code + " /" : "";
                            }
                        })
                    }
                }
                if (booking.has_holiday) {
                    productNames += "Holiday /";
                    if (booking.booking_holiday.length) {
                        booking.booking_holiday.map((bookhHolEle) => {
                            if (bookhHolEle.supplier) {
                                supplierName += (bookhHolEle.supplier.supplier_code) ? bookhHolEle.supplier.supplier_code + " /" : "";
                            }
                        })
                    }
                }
                if (booking.has_visa) {
                    productNames += "Visa /";
                    if (booking.bookings_visas.length) {
                        booking.bookings_visas.map((bookhVisEle) => {
                            if (bookhVisEle.supplier) {
                                supplierName += (bookhVisEle.supplier.supplier_code) ? bookhVisEle.supplier.supplier_code + " /" : "";
                            }
                        })
                    }
                }
                if (booking.has_marhaba) {
                    productNames += "Marhabas /";
                    if (booking.bookings_marhabas.length) {
                        booking.bookings_marhabas.map((bookhMahEle) => {
                            if (bookhMahEle.supplier) {
                                supplierName += (bookhMahEle.supplier.supplier_code) ? bookhMahEle.supplier.supplier_code + " /" : "";
                            }
                        })
                    }
                }*/
                let organisationName = '';
                if (booking.user != undefined) {
                    let username = (booking.user.username != undefined && booking.user.username != '') ? " / " + booking.user.username : '';
                    if (booking.user.organisation != undefined) {
                        organisationName = (booking.user.organisation.name != '') ? booking.user.organisation.name + username : 'Guest';
                    }
                }

                // round amount first will check in settings then update
                let bookingAmount = booking.booking_currency + ' ' + (booking.markup_price) ? booking.markup_price : booking.amount;
                bookingAmount = parseFloat(Math.round(bookingAmount * 100) / 100).toFixed(2);
                booking.supplier = supplierName.slice(0, -1);
                productNames = productNames.slice(0, -1);

                newObj = {
                    booking_id: booking.booking_id,
                    trip_id: booking.trip_id,
                    agent_reference: booking.agent_reference,
                    created: booking.created,
                    payment_type: booking.payment_type,
                    amount: bookingAmount,
                    booking_currency: booking.booking_currency,
                    supplier: booking.supplier,
                    booking_status: booking.booking_status,
                    productNames: productNames,
                    organisationName: organisationName,
                    ...newObj
                }
                bookingsArr.push(newObj);
            });
            const result = {
                data: bookingsArr,
                total: bookings.count,
                page: page
            }
            return makeResponse(res, true, 200, 'success', 'Bookings', 'Bookings fetched successfully.', result)
        })
        .catch(error => {
            // console.log("---error", error)
            return makeResponse(res, false, 200, 'danger', 'Bookings', 'Oops! Something went wrong while processing your request.', error)
        });
});

router.post('/search-bookings-by-organisation', async (req, res) => {
    var params = req.body;

    let organisationsLimit = 10, organisationsOffset = 0;
    let bookingsLimit = 30, bookingsOffset = 0;

    let agent_code = [];
    let product = 'all';
    let end_date = new Date();
    let start_date = new Date(new Date().setMonth(end_date.getMonth() - 2));

    if (params.organisations_limit && params.organisations_limit != '')
        organisationsLimit = Number(params.organisations_limit)
    if (params.organisations_offset && params.organisations_offset != '')
        organisationsOffset = Number(params.organisations_offset)

    if (params.bookings_limit && params.bookings_limit != '')
        bookingsLimit = Number(params.bookings_limit)
    if (params.bookings_offset && params.bookings_offset != '')
        bookingsOffset = Number(params.bookings_offset)

    if (params.start_date && params.start_date != '')
        start_date = new Date(params.start_date)
    if (params.end_date && params.end_date != '')
        end_date = new Date(params.end_date)
    if (params.agent_codes)
        agent_code = params.agent_codes;

    if (params.product && params.product != '')
        product = params.product;

    let whereQuery = {};

    whereQuery.created = {
        [Op.gte]: start_date,
        [Op.lte]: end_date
    }
    let whereQueryFlightBooking = {}
    if (params.supplier_id != "") {
        whereQueryFlightBooking.supplier_id = params.supplier_id
    }
    if (product == 'flights')
        whereQuery.has_flight = true;
    if (product == 'hotels')
        whereQuery.has_hotel = true;
    if (product == 'cars')
        whereQuery.has_car = true;
    if (product == 'activities')
        whereQuery.has_activities = true;
    if (product == 'insurances')
        whereQuery.has_insurance = true;
    if (product == 'transfers')
        whereQuery.has_transfers = true;
    if (product == 'holidays')
        whereQuery.has_holiday = true;
    if (product == 'cruises')
        whereQuery.has_cruises = true;
    if (agent_code.length > 0)
        whereQuery.agent_code = {
            [Op.in]: agent_code
        }
    let includeArr = [];
    includeArr.push({
        model: organsationModel_AJ,
        attributes: ['name', 'agent_code']
    })
    if (true) {
        if (product == 'all' || product == 'flights') {
            includeArr.push({
                model: flightBookingModel_AJ,
                attributes: ['booking_status', 'pnr_no', 'markupPrice', 'supplierPrice', 'created', 'supplier_id'],
                where: whereQueryFlightBooking,
                include: [
                    {
                        model: supplierModel_AJ,
                        attributes: ['supplier_code', 'name', 'supplier_id', 'is_hotel', 'is_flight', 'is_holidays', 'is_activities', 'is_car', 'is_transfers', 'is_cruises', 'is_visa', 'is_insurance']
                    },
                    {
                        model: flightTicketModel_AJ
                    }
                ]
            })
        }
        if (product == 'all' || product == 'hotels') {
            includeArr.push({
                model: hotelBookingModel_AJ,
                attributes: ['booking_status', 'booking_currency', 'supplier_price', 'markup_price', 'created', 'supplier_id'],
                include: [
                    {
                        model: supplierModel_AJ,
                        attributes: ['supplier_code', 'name', 'supplier_id', 'is_hotel', 'is_flight', 'is_holidays', 'is_activities', 'is_car', 'is_transfers', 'is_cruises', 'is_visa', 'is_insurance'],
                    }
                ],

            })
        }
        if (product == 'all' || product == 'cars') {
            includeArr.push({
                model: carBookingModel_AJ,
                attributes: ['booking_status', 'booking_currency', 'supplier_price', 'markup_price', 'created', 'supplier_id'],
                include: [
                    {
                        model: supplierModel_AJ,
                        attributes: ['supplier_code', 'name', 'supplier_id', 'is_hotel', 'is_flight', 'is_holidays', 'is_activities', 'is_car', 'is_transfers', 'is_cruises', 'is_visa', 'is_insurance'],
                    }
                ]
            })
        }
        if (product == 'all' || product == 'activities') {
            includeArr.push({
                model: activityBooking_AJ,
                attributes: ['supplier_id', 'booking_activity_id', 'booking_id', 'booking_status', 'created', 'voucher_no', 'reference_number', 'booking_currency', 'booking_amount', 'supplier_currency', 'supplier_price', 'markup_price', 'cancel_supplier_price'],
                include: [
                    {
                        model: Suppliers,
                        attributes: ['supplier_code', 'name', 'supplier_id', 'is_hotel', 'is_flight', 'is_holidays', 'is_activities', 'is_car', 'is_transfers', 'is_cruises', 'is_visa', 'is_insurance'],
                    }
                ],
            })
        }
        if (product == 'all' || product == 'insurances') {
            includeArr.push({
                model: insuranceBookingModel_AJ,
                attributes: ['supplier_id', 'booking_insurance_id', 'booking_id', 'booking_status', 'created', 'voucher_no', 'reference_number', 'booking_amount', 'booking_currency', 'supplier_price', 'markup_price', 'cancel_supplier_price'],
                include: [
                    {
                        model: Suppliers,
                        attributes: ['supplier_code', 'name', 'supplier_id', 'is_hotel', 'is_flight', 'is_holidays', 'is_activities', 'is_car', 'is_transfers', 'is_cruises', 'is_visa', 'is_insurance'],
                    }
                ],
            })
        }
        if (product == 'all' || product == 'transfers') {
            includeArr.push({
                model: transferBookingModel_AJ,
                attributes: ['supplier_id', 'booking_transfer_id', 'booking_id', 'booking_status', 'created', 'voucher_no', 'reference_number', 'booking_currency', 'booking_amount', 'supplier_price', 'markup_price', 'cancel_supplier_price'],
                include: [
                    {
                        model: Suppliers,
                        attributes: ['supplier_code', 'name', 'supplier_id', 'is_hotel', 'is_flight', 'is_holidays', 'is_activities', 'is_car', 'is_transfers', 'is_cruises', 'is_visa', 'is_insurance'],
                    }
                ],
            })
        }
        if (product == 'all' || product == 'holidays') {
            includeArr.push({
                model: holidayBookingModel_AJ,
                attributes: ['supplier_id', 'booking_holiday_id', 'booking_id', 'booking_status', 'created', 'voucher_no', 'reference_number', 'booking_currency', 'booking_amount', 'supplier_currency', 'supplier_price', 'markup_price', 'cancel_supplier_price'],
                include: [
                    {
                        model: Suppliers,
                        attributes: ['supplier_code', 'name', 'supplier_id', 'is_hotel', 'is_flight', 'is_holidays', 'is_activities', 'is_car', 'is_transfers', 'is_cruises', 'is_visa', 'is_insurance'],
                    }
                ],
            })
        }
        if (product == 'all' || product == 'cruises') {
            includeArr.push({
                model: cruiseBookingModel_AJ,
                attributes: ['supplier_id', 'bookings_cruise_id', 'booking_id', 'booking_status', 'created', 'voucher_no', 'reference_number', 'booking_currency', 'booking_amount', 'supplier_price', 'markup_price', 'cancel_supplier_price'],
                include: [
                    {
                        model: Suppliers,
                        attributes: ['supplier_code', 'name', 'supplier_id', 'is_hotel', 'is_flight', 'is_holidays', 'is_activities', 'is_car', 'is_transfers', 'is_cruises', 'is_visa', 'is_insurance'],
                    }
                ],
            })
        }
    }
    try {

        var agent_bookings = await bookingModel_AJ.findAll({
            group: ['agent_code'],
            attributes: [
                'agent_code',
                [Sequelize.fn("COUNT", Sequelize.col("*")), "count"]
            ],
            order: [
                [Sequelize.fn("COUNT", Sequelize.col("*")), 'DESC']
            ],
            limit: organisationsLimit,
            offset: organisationsOffset,
            where: whereQuery
        });
        // // console.log('dsf ', agent_bookings)

        var bookings = []
        for (let ind = 0; ind < agent_bookings.length; ind++) {
            let bookingObj = agent_bookings[ind];
            bookingObj = bookingObj.dataValues;
            // // console.log('DDD ', bookingObj)
            whereQuery.agent_code = bookingObj.agent_code;
            // console.log(whereQuery);
            bookings.push(
                bookingModel_AJ.findAll({
                    where: whereQuery,
                    attributes: [
                        'booking_id', 'supplierTax', 'appliedTotalTax', 'appliedCommissionTax', 'agent_code', 'transaction_id',
                        'trip_id', 'booking_currency', 'booking_status', 'amount', 'supplier_price', 'markup_price', 'has_hotel',
                        'has_flight', 'has_activities', 'has_car', 'has_insurance', 'has_transfers', 'has_marhaba', 'has_cruises',
                        'has_holiday', 'has_visa', 'created'
                    ],
                    include: includeArr,
                    limit: bookingsLimit,
                    offset: bookingsOffset

                })
            )
        }

        Promise.all(bookings).then(function (values) {

            let output = []
            for (let ind = 0; ind < values.length; ind++) {
                const element = values[ind];
                // console.log(element);
                if (element.length > 0) {
                    var bookingObj = element[0];
                    var findOrg = agent_bookings.filter(obj => obj.agent_code == bookingObj.agent_code)
                    if (findOrg.length > 0) {
                        output.push({
                            organisation: bookingObj.organisation,
                            bookings: element
                        })
                    }

                }

            }
            output = parseOrganisationsBooking(output)
            // res.json(output)
            return res.json({
                type: 'data',
                status: 200,
                msg: 'Bookings Fetched Successfully.',
                Data: output
            });

        }).catch(error => {
            // console.log('errrrrrr ', error)
        })



    }
    catch (error) {
        return res.json({ type: 'error', msg: 'No result found!', err: error });
    }


})

router.get('/booking/:id', async (req, res) => {

    var trip_id = req.params.id;
    var booking = await bookingModel_AJ.findOne({
        where: {
            trip_id: trip_id
        },
        attributes: ['trip_id', 'booking_id', 'users_id'],
        include: [{
            model: flightBookingModel_AJ,
            attributes: ['booking_status', 'pnr_no', 'markupPrice', 'supplierPrice', 'created', 'supplier_id', 'booking_id', 'booking_flight_id'],
            include: [{
                model: flightTicketEmdModel_AJ,
                // attributes: ['']
            }, {
                model: flightTicketModel_AJ
            }, {
                model: supplierModel_AJ,
                attributes: ['supplier_id', 'name']
            }]
        }, {
            model: passengerDetailModel_AJ,
            attributes: ['pax_first_name', 'pax_middle_name', 'pax_last_name', 'pax_gender']
        }, {
            model: tripDetailModel_AJ,
            include: [{
                model: segmentDetailModel_AJ,
                attributes: ['trip_id', 'segment_seatingClass', 'segment_departure_airport_code', 'segment_departure_airport_name', 'segment_departure_date',
                    'segment_departure_time', 'segment_arrival_airport_name', 'segment_arrival_date', 'segment_operating_airline_name',
                    'segment_marketing_airline_name',
                ]
            }]
        }, {
            model: userModel_AJ,
            attributes: ['first_name', 'last_name', 'username']
        }]
    })
    try {
        if (booking.trip_detail) {
            if (booking.trip_detail.trip_details) {
                var trip_details = booking.trip_detail.trip_details;
                var tps = [];
                trip_details = trip_details.split(',')
                for (let ind = 0; ind < trip_details.length; ind++) {
                    let td = trip_details[ind];
                    td = td.split('-')
                    tps.push({ departure: td[0], arrival: td[1] })
                }
                // console.log('dd ', tps)

                booking.trip_detail.trip_details = tps
            }
        }
    } catch (error) {
        // console.log('er ', error)
    }


    res.json(booking)
})

router.post('/export-bookings', async (req, res) => {
    // console.log("---req.body", req.body);
    const orgDetails = getOrgDetails(req);
    const orgID = orgDetails.org_id
    // get all users of currenct Organisation ID
    const users_ids = await Users_M.findAll({where: {organisation_id:orgID}, attributes:["users_id"]})
    let u_ids = []
    users_ids.forEach(id => {
        u_ids.push(id.users_id)
    })
    u_ids.push(orgDetails.user_users_id)
    u_ids = [... new Set(u_ids)]

    let { agent_reference,
        end_date,
        organisation_id,
        product_id,
        start_date,
        status,
        supplier_id,
        trip_id,
        booking_date,
        booking_email } = req.body;

    let bookingsArr = [];
    let includeArray = [];

    let query = { status: 1 };
    if(orgDetails.org_id != orgDetails.parent_id){
        query = { users_id: { [Op.in]:u_ids }, ...query}
    }
    let flightBookQuery = {};
    let hotelQuery = visaQuery = cruisesQuery = holidayQuery = marhabaQuery = carQuery = activitiesQuery = insuranceQuery = flightQuery = transferQuery = {};

    if (trip_id != undefined && trip_id != '') {
        query = { trip_id: { [Op.like]: '%' + trip_id + '%' }, ...query }
        flightBookQuery = { pnr_no: { [Op.like]: '%' + trip_id + '%' }, ...flightBookQuery }
    }

    if (agent_reference != undefined && agent_reference != '') {
        query = { agent_reference: { [Op.like]: '%' + agent_reference + '%' }, ...query }
    }

    if (status != undefined && status != 'all') {
        query = { booking_status: status, ...query }
    }
    if (product_id != undefined && product_id != 'all') {
        switch (product_id) {
            case "Hotels":
                query = { 'has_hotel': 1, ...query }
                break;
            case "Flights":
                query = { 'has_flight': 1, ...query }
                break;
            case "has_activities":
                query = { 'has_activities': 1, ...query }
                break;
            case "Cars":
                query = { 'has_car': 1, ...query }
                break;
            case "Insurances":
                query = { 'has_insurance': 1, ...query }
                break;
            case "Transfers":
                query = { 'has_transfers': 1, ...query }
                break;
            case "Cruises":
                query = { 'has_cruises': 1, ...query }
                break;
            case "Holidays":
                query = { 'has_holiday': 1, ...query }
                break;
        }
    }
    if (supplier_id != undefined && supplier_id != 'all') {

        // query = { supplier_id: supplier_id, ...query }
        let supplierData = await Suppliers_M.findOne({ where: { supplier_code: supplier_id }, attributes: ['supplier_id', 'is_hotel', 'is_car', 'is_flight', 'is_transfers', 'is_insurance', 'is_activities'], raw: true })
        if (supplierData.is_hotel) {
            // join booking hotels
            hotelQuery = { supplier_code: supplier_id }
        } else if (supplierData.is_car) {
            // join booking car)
            carQuery = { supplier_code: supplier_id }
        } else if (supplierData.is_flight) {
            // join booking flight
            flightQuery = { supplier_id: supplierData.supplier_id }
        } else if (supplierData.is_transfers) {
            // join booking transfers
            transferQuery = { supplier_code: supplier_id }
        } else if (supplierData.is_insurance) {
            // join booking insurance
            insuranceQuery = { supplier_code: supplier_id }
        } else if (supplierData.is_activities) {
            // join booking is_activities
            activitiesQuery = { supplier_code: supplier_id }
        } else if (supplierData.has_visa) {
            // join booking has_visa
            visaQuery = { supplier_code: supplier_id }
        } else if (supplierData.has_marhaba) {
            // join booking has_marhaba
            marhabaQuery = { supplier_code: supplier_id }
        } else if (supplierData.has_cruises) {
            // join booking has_cruises
            cruisesQuery = { supplier_code: supplier_id }
        } else if (supplierData.has_holiday) {
            // join booking has_holiday
            holidayQuery = { supplier_code: supplier_id }
        }
    } else {
        // otherwise join with payment getway
        includeArray.push({
            model: paymentGetway_M,
            attributes: ['paymentgateway_id', 'order_transaction_id', 'order_status'],
            required: false
        })
    }
    if (organisation_id != undefined && organisation_id != 'all') {
        query = { agent_code: organisation_id, ...query }
    }
    // if there is no date define then will get last 90 days
    if (start_date != undefined && start_date != '' && end_date != undefined && end_date != '') {
        start_date = moment(start_date, "DD/MM/YYYY")
        end_date = moment(end_date, "DD/MM/YYYY")
        start_date = moment(start_date).format("YYYY-MM-DD HH:mm:ss");
        end_date = moment(end_date).format("YYYY-MM-DD HH:mm:ss");

        query = { created: { [Op.between]: [start_date, end_date] }, ...query }
    } else {
        start_date = moment(start_date, "DD/MM/YYYY")
        end_date = moment(end_date, "DD/MM/YYYY")
        start_date = moment().subtract(90, 'days').format("YYYY-MM-DD HH:mm:ss");
        end_date = moment().format("YYYY-MM-DD HH:mm:ss");

        query = { created: { [Op.between]: [start_date, end_date] }, ...query }
    }
    if (booking_date != undefined && booking_date != '') {
        query = { created: moment(booking_date).format("YYYY-MM-DD HH:mm:ss"), ...query }
    }
    if (booking_email != undefined && booking_email != '') {
        query = { booking_email: booking_email, ...query }
    }
    // console.log("--query", query)
    // join array object
    includeArray = [
        {
            model: FlightBookings_M,
            attributes: ['booking_flight_id', 'booking_status', 'flight_id', 'pnr_no', 'supplier_id', 'flightPrice'],
            where: flightQuery,
            required: false,
            include: [{
                model: Suppliers_M,
                attributes: ['supplier_id', 'supplier_code'],
                required: false
            }]
        },
        {
            model: hotelBookings_M,
            attributes: ['booking_hotel_id', 'supplier_id'],
            where: hotelQuery,
            required: false,
            include: [{
                model: Suppliers_M,
                attributes: ['supplier_id', 'supplier_code'],
                required: false
            }]
        },
        {
            model: carsBookings_M,
            attributes: ['bookings_car_id', 'supplier_code'],
            where: carQuery,
            required: false,
            include: [{
                model: Suppliers_M,
                attributes: ['supplier_id', 'supplier_code'],
                required: false
            }]
        },
        /*
        {
            model: transferBookings_M,
            attributes: ['booking_transfer_id', 'supplier_code'],
            where: transferQuery,
            required: false,
            include: [{
                model: Suppliers_M,
                attributes: ['supplier_id', 'name'],
                required: false
            }]
        },
        */
        {
            model: insuranceBookings_M,
            attributes: ['booking_insurance_id', 'supplier_code'],
            where: insuranceQuery,
            required: false
        },
        {
            model: activityBookings_M,
            attributes: ['booking_activity_id', 'supplier_code'],
            where: activitiesQuery,
            required: false,
            include: [{
                model: Suppliers_M,
                attributes: ['supplier_id', 'supplier_code'],
                required: false
            }]
        },
        /*
        {
            model: visaBookings_M,
            attributes: ['booking_visa_id', 'status', 'supplier_code'],
            where: visaQuery,
            required: false,
            include: [{
                model: Suppliers_M,
                attributes: ['supplier_id', 'name'],
                required: false
            }]
        },
        {
            model: marhabalBookings_M,
            attributes: ['booking_marhaba_id', 'status', 'supplier_code'],
            where: marhabaQuery,
            required: false,
            include: [{
                model: Suppliers_M,
                attributes: ['supplier_id', 'name'],
                required: false
            }]
        },
        {
            model: holidayBookings_M,
            attributes: ['booking_holiday_id', 'status', 'supplier_code'],
            where: holidayQuery,
            required: false,
            include: [{
                model: Suppliers_M,
                attributes: ['supplier_id', 'name'],
                required: false
            }]
        },
        {
            model: cruiseBookings_M,
            attributes: ['bookings_cruise_id', 'status', 'supplier_code'],
            where: cruisesQuery,
            required: false,
            include: [{
                model: Suppliers_M,
                attributes: ['supplier_id', 'name'],
                required: false
            }]
        },*/
        {
            model: Users_M,
            attributes: ['username'],
            required: false,
            include: [{
                model: sequelizeOrganisation,
                attributes: ['name'],
                required: false
            }],
        }];
    // console.log("---query", query)

    Bookings_M.findAll({
        where: query,
        attributes: [`agent_code`, `booking_id`, `transaction_id`, `trip_id`, `users_id`, `booking_email`, `booking_currency`, `booking_status`, `agent_reference`, `amount`, `payment_type`, `supplier_price`, `markup_price`, `has_hotel`, `has_flight`, `created`, `status`, `has_activities`, `has_car`, `has_insurance`, `has_transfers`, `has_marhaba`, `has_cruises`, `has_holiday`, `has_visa`, `remarks`, `user_currency`, `curnversion_value`, `supplier`, `service_charge_cancel`, `service_charge_create`, `service_charge_refund`],
        include: includeArray,
        order: [['created', 'DESC']],
        limit: config.exportLimit,
    })
        .then(bookings => {
            bookings.map(async (booking, ind) => {
                //// console.log("--booking",booking)
                let newObj = {};
                let productNames = '';
                let supplierName = '';

                if (booking.has_flight) {
                    productNames += "Flight ";
                    if (booking.bookings_flights.length) {
                        booking.bookings_flights.map((bookEle) => {
                            if (bookEle.supplier) {
                                supplierName += (bookEle.supplier.supplier_code) ? bookEle.supplier.supplier_code + " /" : "";
                            }
                        })
                    }
                }
                if (booking.has_hotel) {
                    productNames += "Hotel /";
                    if (booking.bookings_hotels.length) {
                        booking.bookings_hotels.map((bookHotEle) => {
                            if (bookHotEle.supplier) {
                                supplierName += (bookHotEle.supplier.supplier_code) ? bookHotEle.supplier.supplier_code + " /" : "";
                            }
                        })
                    }
                }
                if (booking.has_activities) {
                    productNames += "Activity /";
                    if (booking.bookings_activities.length) {
                        booking.bookings_activities.map((bookActEle) => {
                            if (bookActEle.supplier) {
                                supplierName += (bookActEle.supplier.supplier_code) ? bookActEle.supplier.supplier_code + " /" : "";
                            }
                        })
                    }
                }
                if (booking.has_car) {
                    productNames += "Car /";
                    if (booking.bookings_cars.length) {
                        booking.bookings_cars.map((bookCatEle) => {
                            if (bookCatEle.supplier) {
                                supplierName += (bookCatEle.supplier.supplier_code) ? bookCatEle.supplier.supplier_code + " /" : "";
                            }
                        })
                    }
                }
                if (booking.has_insurance) {
                    productNames += "Insurance /";
                    if (booking.bookings_insurances.length) {
                        booking.bookings_insurances.map((bookInsEle) => {
                            if (bookInsEle.supplier) {
                                supplierName += (bookInsEle.supplier.supplier_code) ? bookInsEle.supplier.supplier_code + " /" : "";
                            }
                        })
                    }
                }
                /*
                if (booking.has_transfers) {
                    productNames += "Tra /";
                    if (booking.booking_transfer.length) {
                        booking.booking_transfer.map((bookTraEle) => {
                            if (bookTraEle.supplier) {
                                supplierName += (bookTraEle.supplier.supplier_code) ? bookTraEle.supplier.supplier_code + " /" : "";
                            }
                        })
                    }
                }
                if (booking.has_cruises) {
                    productNames += "Cru /";
                    if (booking.booking_cruises.length) {
                        booking.booking_cruises.map((bookCruEle) => {
                            if (bookCruEle.supplier) {
                                supplierName += (bookCruEle.supplier.supplier_code) ? bookCruEle.supplier.supplier_code + " /" : "";
                            }
                        })
                    }
                }
                if (booking.has_holiday) {
                    productNames += "Holiday /";
                    if (booking.booking_holiday.length) {
                        booking.booking_holiday.map((bookhHolEle) => {
                            if (bookhHolEle.supplier) {
                                supplierName += (bookhHolEle.supplier.supplier_code) ? bookhHolEle.supplier.supplier_code + " /" : "";
                            }
                        })
                    }
                }
                if (booking.has_visa) {
                    productNames += "Visa /";
                    if (booking.bookings_visas.length) {
                        booking.bookings_visas.map((bookhVisEle) => {
                            if (bookhVisEle.supplier) {
                                supplierName += (bookhVisEle.supplier.supplier_code) ? bookhVisEle.supplier.supplier_code + " /" : "";
                            }
                        })
                    }
                }
                if (booking.has_marhaba) {
                    productNames += "Marhabas /";
                    if (booking.bookings_marhabas.length) {
                        booking.bookings_marhabas.map((bookhMahEle) => {
                            if (bookhMahEle.supplier) {
                                supplierName += (bookhMahEle.supplier.supplier_code) ? bookhMahEle.supplier.supplier_code + " /" : "";
                            }
                        })
                    }
                }*/
                let organisationName = '';
                if (booking.user != undefined) {
                    let username = (booking.user.username != undefined && booking.user.username != '') ? " / " + booking.user.username : '';
                    if (booking.user.organisation != undefined) {
                        organisationName = (booking.user.organisation.name != '') ? booking.user.organisation.name + username : 'Guest';
                    }
                }

                // round amount first will check in settings then update
                let bookingAmount = booking.booking_currency + ' ' + (booking.markup_price) ? booking.markup_price : booking.amount;
                bookingAmount = parseFloat(Math.round(bookingAmount * 100) / 100).toFixed(2);
                booking.supplier = supplierName.slice(0, -1);
                productNames = productNames.slice(0, -1);

                bookingsArr.push({
                    "Trip Id": booking.trip_id,
                    "Agent Reference": booking.agent_reference,
                    "Booked By": organisationName,
                    "Booked Date": moment(booking.created).format("DD MMM, YYYY"),
                    "Payment Type": booking.payment_type,
                    "Amount": bookingAmount,
                    "Currency": booking.booking_currency,
                    "Product": productNames,
                    "Supplier": booking.supplier,
                    "Status": (booking.booking_status) ? 'Active' : 'Inactive'
                })
            });
            res.json({
                type: 'data',
                status: 200,
                msg: 'Exported data Successfully.',
                data: bookingsArr
            });
        })
        .catch(error => {
            // console.log("---error", error)
            return res.json({
                type: 'error',
                status: 400,
                msg: 'Oops! Something went wrong while processing your request.',
            });
        });
});

router.get("/booking-voucher-print/:trip_id", async (req, res) => {

    try {
        const { trip_id } = req.params;
        let booking = await bookingModel_AJ.findOne({
            where: {
                trip_id: trip_id
            },
            include: [{
                model: flightBookingModel_AJ,
                include: [{
                    model: flightTicketEmdModel_AJ,
                }, {
                    model: flightTicketModel_AJ,
                }, {
                    model: supplierModel_AJ,
                    attributes: ['supplier_id', 'name']
                }]
            }, {
                model: passengerDetailModel_AJ
            }, {
                model: tripDetailModel_AJ,
                include: [{
                    model: segmentDetailModel_AJ
                }]
            }, {
                model: userModel_AJ
            }, {
                model: organsationModel_AJ,
                required: false
            }, {
                model: Transaction_M,
                attributes: ['tax_no', 'tax_email', 'organisation_id']
            }
            ],
        });

        // console.log("BOOKING", booking);

        // return res.json({
        //     type: 'data',
        //     status: 200,
        //     msg: 'Voucher details.',
        //     data: booking
        // });


        let settings = [];
        let settingData = await SettingModel.findAll({ where: { name: ['AWSConnect', 'DisplayField', 'PDFConfig', 'BookingMailCC'] } });
        settingData.map(set => {
            if (set.name == 'BookingMailCC') {
                settings[set.name] = set.value;
            } else {
                settings[set.name] = JSON.parse(set.value);
            }
        })

        // console.log("SETTING DATA", settingData);

        // get parent org invoice image if org not
        let logo = booking.organisation.image_invoice;
        let airLinelogo = `${config.awsS3.BASE_PATH_AWS}/${settings.AWSConnect.AWS_ORG_NAME}/airplane.png`;
        if (booking.organisation.image_invoice == '') {
            //let parentOrg = await OrganisationModel_M.findOne({ attributes: ['parent_id'], where: { organisation_id: booking.transactions[0].organisation_id } })
            let parentOrg = await OrganisationModel_M.findOne({ attributes: ['parent_id'], where: { organisation_id: organisation.organisation_id } })
            let getadminlogo = await OrganisationModel_M.findOne({ attributes: ['image_invoice'], where: { organisation_id: parentOrg.parent_id } })
            logo = getadminlogo.image_invoice;
            // console.log("PARENT ORGANIZATION", parentOrg);
            // console.log("GET ADMIN LOGO", getadminlogo);
        }
        if (!logo) {
            // aws variables
            logo = `${config.awsS3.BASE_PATH_AWS}/${settings.AWSConnect.AWS_ORG_NAME}/websiteLogo.png`;
        }

        let pnr = '-';
        let pnrArr = [];
        booking.bookings_flights.map(pnr => {
            if (pnr.airline_pnr_no != null) {
                let exp = pnr.airline_pnr_no.split("-");
                pnrArr.push(exp[0]);
            }
        })
        pnr = (pnrArr.length) ? pnrArr.join(', ') : pnr;

        let crs = '-';
        let crsArr = [];
        booking.bookings_flights.map(crs => {
            if (crs.pnr_no != '') {
                let exp = crs.pnr_no.split("-");
                crsArr.push(exp[0]);
            }
        })
        crs = (crsArr.length) ? crsArr.join(', ') : crs;

        let passangers = [];
        let tickets = [];

        //let baggage_details = JSON.parse(booking.bookings_flights[0]['airDocIssue'].replace("@", ""));
        // let tickDoc = JSON.parse(booking.bookings_flights[0]['TicketDocInfos']);
        let tickDoc = (booking.bookings_flights && booking.bookings_flights.length > 0 && booking.bookings_flights[0].TicketDocInfos) ? JSON.parse(booking.bookings_flights[0].TicketDocInfos) : "";
        if (tickDoc.hasOwnProperty("Response")) {
            tickDoc = tickDoc.Response;
        }

        // console.log(tickDoc);
        let serviceArr = [];
        let routearray = [];

        if (booking.bookings_flights[0].booking_status !== 'hold') {
            console.log(booking.bookings_flights[0].booking_status)
            booking.passenger_details.map((pass, passInd) => {
                if (pass.pax_ref_key != '') {
                    if (booking.bookings_flights[0].flight_tickets[passInd].ticket_pax_ref_key != undefined && booking.bookings_flights[0].flight_tickets[passInd].ticket_pax_ref_key == pass.pax_ref_key) {
                        let aaa = booking.bookings_flights[0].flight_tickets[passInd];
                        passangers.push(pass);
                        tickets.push(aaa);
                    }
                }
            })


            if (tickDoc.DataLists && tickDoc.DataLists.ServiceList && tickDoc.DataLists.ServiceList.Service) {
                if (typeof tickDoc.DataLists.ServiceList.Service == 'object') {
                    serviceArr.push(tickDoc.DataLists.ServiceList.Service);
                } else {
                    serviceArr = tickDoc.DataLists.ServiceList.Service;
                }
                serviceArr.forEach((service, serKey) => {
                    booking.passenger_details.forEach(passenger => {
                        let pax_arr = service.Associations.Traveler.TravelerReferences.join(" ");
                        if (passenger.pax_ref_key.includes(pax_arr)) {
                            serviceArr.push({
                                'Name': service.Name,
                                'Code': service.ServiceID['@'],
                                'pax': passenger.pax_ref_key,
                                'seg': service.Associations.Flight.SegmentReferences,
                                'price': service.Price.Total['@Code'] + ' ' + service.Price.Total['@']
                            });
                        }
                    })
                    routearray[serKey] = [];
                    let ser_segments = service['seg'].join(" ");
                    booking.trip_detail.segment_details.map(seg => {
                        if (seg.pax_ref_key.includes(ser_segments)) {
                            routearray[serKey].push(seg['segment_departure_airport_code'] + '-' + seg['segment_arrival_airport_code']);
                        }
                    })

                })
            }

        }

        // seats
        // Code to find if its non-stop  or has any stop-over.
        let OrderItemArr = [];
        // console.log("---tickDoc.Order.OrderItems.OrderItem", tickDoc.Order.OrderItems.OrderItem)
        if (typeof tickDoc.Order.OrderItems.OrderItem == 'object') {
            OrderItemArr.push(tickDoc.Order.OrderItems.OrderItem);
        } else {
            OrderItemArr = tickDoc.Order.OrderItems.OrderItem;
        }
        let seats = [];
        OrderItemArr.forEach(elementOrd => {
            if (elementOrd.SeatItem) {
                if (typeof elementOrd.SeatItem == 'object') {
                    elementOrd.SeatItem = [elementOrd.SeatItem];
                }
                seats.push(elementOrd.SeatItem);
            }
        })
        let templateVariables = { data: booking, passangers, tickets, pnr, crs, serviceArr, logo, settings, airLinelogo }; // If you have any to pass in

        // console.log("TEMPLATE VARIABLES", templateVariables);


        // console.log("Booking", booking.bookings_flights[0].pnr_no);

        // return


        if (booking.bookings_flights[0].airline_pnr_no !== null) {
            airline_pnr_no = booking.bookings_flights[0].airline_pnr_no
        } else {
            airline_pnr_no = booking.bookings_flights[0].pnr_no;
        }

        if (booking.passenger_details[0].pax_mobile !== "") {
            contact_info = booking.passenger_details[0].pax_mobile;
        } else {
            contact_info = "N/A"
        }

        if (booking.passenger_details[0].pax_passport_number !== "") {
            passport_info = booking.passenger_details[0].pax_passport_number;
        } else {
            passport_info = "N/A"
        }

        const pdfData = {
            booking_status: booking.booking_status,
            last_ticketing_date: booking.agent_reference,
            agent_reference: booking.organisation.name,
            booking_date: booking.created,
            trip_id: booking.trip_id,
            pnr_no: booking.bookings_flights[0].pnr_no.split('-')[1],
            airline_ref_no: airline_pnr_no,
            travellers_name: booking.passenger_details[0].pax_title + ' ' + booking.passenger_details[0].pax_first_name + ' ' + booking.passenger_details[0].pax_last_name,
            passenger_type: booking.passenger_details[0].pax_type,
            contact: contact_info,
            email: booking.passenger_details[0].pax_email,
            passport_info: passport_info,

            total: 'total',
            due_date: 'due_date',
            action_url: 'action_url',
            invoice_id: 'invoice_id',
            date: 'date',
            total: 'total',
            support_url: 'support_url',
            invoice_details: [{
                description: 'description 1',
                amount: 'amount 1'
            }, {
                description: 'description 2',
                amount: 'amount 2'
            }, {
                description: 'description 3',
                amount: 'amount 3'
            }, {
                description: 'description 4',
                amount: 'amount 4'
            }]
        };

        // console.log("CHECK PDF")

        // const fileBuffer = await pdfHelper.generatePdf('voucher', pdfData);
        // await pdfHelper.savePdf(fileBuffer);


        // return res.json({
        //     type: 'data',
        //     status: 200,
        //     msg: 'Voucher details.',
        //     data: templateVariables
        // });

        let pdfFile = './invoices/invoice_' + Date.now() + '_' + Math.floor(Math.random() * 1000) + '.pdf'
        var fileLoc = path.resolve('./app/views');
        fileLoc = path.join(fileLoc, 'invoice.pug');
        fs.readFile(fileLoc, 'utf8', function (err, data) {

            if (err) throw err;
            let fn = pug.compile(data);

            let html = fn(templateVariables);
            // console.log("ERROR IS", html);
            let options = {
                pageSize: 'Letter',
                marginTop: '0.5in',
                marginLeft: '0.25in',
                marginRight: '0.25in',
                marginBottom: '0.5in'
            };
            if (html) {
                pdf.create(html, options).toFile(pdfFile, function (err, resp) {
                    if (err) return false // res.send(err);
                    // console.log("--resp", resp);
                    // res.setHeader('Content-Type', 'application/pdf');
                    // res.setHeader('Content-Disposition', 'attachment; filename=invoice.pdf');
                    // res.contentType("application/pdf");
                    // res.download(resp.filename);
                });
            }
        });

        // res.sendFile(path.join(__dirname + '/invoice.pug'), { title: 'Express', data: booking, passangers, tickets, pnr, crs, serviceArr, logo, settings, airLinelogo });
        if (booking.bookings_flights && booking.bookings_flights.length > 0 && booking.bookings_flights[0].TicketDocInfos) {
            booking.bookings_flights[0].TicketDocInfos = JSON.parse(booking.bookings_flights[0].TicketDocInfos)
        }
        if (booking.bookings_flights && booking.bookings_flights.length > 0 && booking.bookings_flights[0].TicketContact) {
            booking.bookings_flights[0].TicketContact = JSON.parse(booking.bookings_flights[0].TicketContact)
        }
        return res.json({
            type: 'data',
            status: 200,
            msg: 'Voucher details.',
            data: booking
        });

    } catch (error) {
        console.log("Bookings::booking-voucher-print - Error");
        console.log(error);
        return res.json({
            type: 'error',
            status: 400,
            msg: 'Oops! Something went wrong while processing your request.',
        });
    }
})

router.get("/booking-print-invoice/:trip_id", async (req, res) => {
    try {
        const { trip_id } = req.params;
        let booking = await bookingModel_AJ.findOne({
            where: {
                trip_id: trip_id
            },
            include: [{
                model: flightBookingModel_AJ,
                include: [{
                    model: flightTicketEmdModel_AJ,
                }, {
                    model: flightTicketModel_AJ,
                }, {
                    model: supplierModel_AJ,
                    attributes: ['supplier_id', 'name']
                }]
            }, {
                model: passengerDetailModel_AJ
            }, {
                model: tripDetailModel_AJ,
                include: [{
                    model: segmentDetailModel_AJ
                }]
            }, {
                model: userModel_AJ
            }, {
                model: organsationModel_AJ,
            }, {
                model: Transaction_M,
                attributes: ['tax_no', 'tax_email', 'organisation_id']
            }
            ],
        });

        console.log("BBOOOKKINNGG INFO-------------------------", booking)

        let settings = [];
        let settingData = await SettingModel.findAll({ where: { name: ['AWSConnect'] } });
        settingData.map(set => {
            if (set.name == 'BookingMailCC') {
                settings[set.name] = set.value;
            } else {
                settings[set.name] = JSON.parse(set.value);
            }
        })



        // get parent org invoice image if org not
        let logo = booking.organisation.image_invoice;

        if (booking.organisation.image_invoice == '') {
            let parentOrg = await OrganisationModel_M.findOne({ attributes: ['parent_id'], where: { organisation_id: organisation.organisation_id } })
            let getadminlogo = await OrganisationModel_M.findOne({ attributes: ['image_invoice'], where: { organisation_id: parentOrg.parent_id } })
            logo = getadminlogo.image_invoice;
        }
        if (!logo) {
            // aws variables
            logo = `${config.awsS3.BASE_PATH_AWS}/${settings.AWSConnect.AWS_ORG_NAME}/websiteLogo.png`;
        }

        let pnr = '-';
        let pnrArr = [];
        booking.bookings_flights.map(pnr => {
            if (pnr.airline_pnr_no != null) {
                let exp = pnr.airline_pnr_no.split("-");
                pnrArr.push(exp[0]);
            }
        })
        pnr = (pnrArr.length) ? pnrArr.join(', ') : pnr;

        let templateVariables = { data: booking, pnr, logo, settings }; // If you have any to pass in
        let pdfFile = './invoices/print_' + Date.now() + '_' + Math.floor(Math.random() * 1000) + '.pdf'
        var fileLoc = path.resolve('./app/views');
        fileLoc = path.join(fileLoc, 'print.pug');
        fs.readFile(fileLoc, 'utf8', function (err, data) {
            if (err) throw err;
            let fn = pug.compile(data);
            let html = fn(templateVariables);
            let options = {
                pageSize: 'Letter',
                marginTop: '0.5in',
                marginLeft: '0.25in',
                marginRight: '0.25in',
                marginBottom: '0.5in'
            };
            if (html) {
                pdf.create(html, options).toFile(pdfFile, function (err, resp) {
                    if (err) return res.send(err);
                    // console.log("--resp", resp);
                    res.setHeader('Content-Type', 'application/pdf');
                    res.setHeader('Content-Disposition', 'attachment; filename=invoice_print.pdf');
                    res.contentType("application/pdf");
                    res.download(resp.filename);
                });
            }
        });

        res.sendFile(path.join(__dirname + '/invoice.pug'), { title: 'Express', data: booking, passangers, tickets, pnr, crs, serviceArr, logo, settings, airLinelogo });
        return res.json({
            type: 'data',
            status: 200,
            msg: 'Voucher details.',
            data: booking
        });

    } catch (error) {
        // console.log("---error", error)
        return res.json({
            type: 'error',
            status: 400,
            msg: 'Oops! Something went wrong while processing your request.',
        });
    }
})

module.exports = router;



var parseOrganisationsBooking = function (organisations) {

    // return booking;
    try {
        let dataOutput = [];

        for (let org_ind = 0; org_ind < organisations.length; org_ind++) {
            let org = organisations[org_ind];

            let organisationObject = {
                name: org.organisation ? org.organisation.name : "",
                // organisation_id: org.organisation_id,
                // parent_id: org.parent_id,
                agent_code: org.organisation ? org.organisation.agent_code : "",
                bookings: []
            }

            // console.log('org.bookings', org.bookings)
            if (org.bookings) {
                var bookingsReal = org.bookings;
                for (let book_ind = 0; book_ind < bookingsReal.length; book_ind++) {

                    const bookingObject = bookingsReal[book_ind].dataValues;
                    // // console.log('booking ', bookingObject)

                    let bookingData = {
                        has_hotel: bookingObject.has_hotel,
                        has_flight: bookingObject.has_flight,
                        has_activities: bookingObject.has_activities,
                        has_car: bookingObject.has_car,
                        has_insurance: bookingObject.has_insurance,
                        has_transfers: bookingObject.has_transfers,
                        has_marhaba: bookingObject.has_marhaba,
                        has_cruises: bookingObject.has_cruises,
                        has_holiday: bookingObject.has_holiday,
                        has_visa: bookingObject.has_visa,

                        agent_code: bookingObject.agent_code,
                        trip_id: bookingObject.trip_id,
                        supplier_price: bookingObject.supplier_price,
                        amount: bookingObject.amount,

                        markup_price: bookingObject.markup_price,
                        // "supplierTax": null,
                        tax: bookingObject.appliedTotalTax,
                        // "appliedCommissionTax": null,
                        booking_status: bookingObject.booking_status,
                        created: bookingObject.created

                    }

                    // fetch suppliers start
                    var supplierForBooking = []
                    var pnrs = [];
                    var commisions = [];
                    if (bookingObject.has_flight && bookingObject.bookings_flights && bookingObject.bookings_flights.length > 0) {
                        var flightBookings_arr = bookingObject.bookings_flights;

                        for (let flightBoooking_ind = 0; flightBoooking_ind < flightBookings_arr.length; flightBoooking_ind++) {
                            const flightBookings = flightBookings_arr[flightBoooking_ind];
                            if (flightBookings.dataValues.pnr_no) {
                                let pnr = flightBookings.dataValues.pnr_no;
                                if (pnr) {
                                    pnr = pnr.split('-')
                                    if (pnr.length > 0)
                                        pnr = pnr[1]
                                    else
                                        pnr = pnr[0]
                                }
                                pnrs.push(pnr)
                            }
                            // // console.log('flight ickets ', flightBookings.flight_tickets)
                            if (flightBookings.dataValues.supplier) {
                                var tmp_supplier = flightBookings.dataValues.supplier;
                                supplierForBooking.push(tmp_supplier.dataValues)
                            }
                            if (flightBookings.flight_tickets) {
                                var f_tickets = flightBookings.flight_tickets;
                                for (let index = 0; index < f_tickets.length; index++) {
                                    const f_ticket = f_tickets[index];
                                    if (f_ticket.Commission)
                                        commisions.push(f_ticket.Commission)
                                }
                            }
                        }
                    }
                    // fetch suppliers end
                    bookingData.suppliers = supplierForBooking.map(function (value) {
                        return value.name;
                    });
                    bookingData.pnr_no = pnrs;
                    bookingData.commision = commisions;
                    organisationObject.bookings.push(bookingData)

                }


            }
            dataOutput.push(organisationObject)
        }
        return dataOutput;
        return organisations;
    } catch (error) {
        // console.log('error in Parsing ', error);
        return []
    }



}
