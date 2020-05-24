

const express = require('express');
const router = express.Router();
const { Op, Sequelize, Bookings, FlightBookings, Suppliers, carsBookings, hotelBookings, activityBookings, insuranceBookings, transferBookings, OrganisationModel, Users, visaBookings, guideBookings, marhabalBookings, holidayBookings, cruiseBookings, paymentGetway, paymentGetway_M, FlightBookings_M, Suppliers_M, Users_M, OrganisationModel_M, Bookings_M, FlightSearchLog, organisationHModel } = require('./../../config/db');
let moment = require('moment');

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
    flightSearchLogModel_AJ
} = require('./../../config/db')

const config = require('./../../config/config')
const commonEndPointHelper = require('./../helpers/commonApiEndPointsFetchs');

// update search-tickets - 26-12-2019
router.post('/search-tickets-new', async(req, res) => {
    let { limit, page } = req.body;
    limit = (!limit) ? parseInt(config.pageLimit) : parseInt(limit)
    page = (!page) ? parseInt(0) : parseInt(page)
    let offset = limit * page;

    let { product, supplier_id, agent_codes, start_date, end_date } = req.body
    
    if(start_date && start_date != '')
        start_date = new Date( start_date )
    if(end_date && end_date != '')
        end_date = new Date( end_date )
    if( product)
        product = product;
    
    let whereQuery = {};
    // whereQuery.ticket_booking_id  = 106386;

    let whereQueryBookingFlight = {};
    if(start_date && end_date){
        whereQueryBookingFlight.created = {
            [Op.gte] : start_date,
            [Op.lte] : end_date
        }
    }
    if(supplier_id){
        whereQueryBookingFlight.supplier_id = supplier_id
    }

    let whereQueryBooking = {}
    if(agent_codes && agent_codes.length > 0){
        whereQueryBooking.agent_code = {
            [Op.in]: agent_codes,
        } 
    }

    let includeArr = [];

    if(!product || product == 'all' || product == 'flights' ){
        includeArr.push({
            model: flightBookingModel_AJ,
            attributes: ['booking_id', 'booking_status', 'pnr_no', 'markupPrice', 'supplierPrice', 'created', 'supplier_id','TicketContact'],
            where: whereQueryBookingFlight,
            require:false,
            include: [{
                model: supplierModel_AJ,
                attributes: ['name', 'supplier_id']
            }]
        })
        includeArr.push({
            attributes: ['agent_code', 'transaction_id', 'booking_id', 'trip_id', 'booking_status', 'created', 'users_id'],
            model: bookingModel_AJ,
            require:false,
            where:whereQueryBooking,
            // include: [{
            //     model: organsationModel_AJ
            // }]
        })
    }
    try {
        
        var tickets = await flightTicketModel_AJ.findAll({
            where: whereQuery,
            include: includeArr,
            offset: offset,
            limit: limit

        })
        // output = parseOrganisationsBooking( [{organisation: {}, bookings: bookings}] )
        var output = []
        for (let index = 0; index < tickets.length; index++) {
            let ticket = tickets[index];
            if(ticket.bookings_flight){
                if(ticket.bookings_flight.pnr_no){
                    let pnr = ticket.bookings_flight.pnr_no;
                    pnr = pnr.split('-');
                    if(pnr.length>1)
                        pnr = pnr[1]
                    else 
                        pnr = pnr[0]
                    ticket.bookings_flight.pnr_no = pnr
                }
                if(ticket.bookings_flight.TicketContact){
                    let contact = JSON.parse(ticket.bookings_flight.TicketContact);
                    try {
                        // ticket.passenger_detail = contact.Passengers.Passenger;
                        let pass_array = contact.Passengers.Passenger;
                        ticket.bookings_flight.TicketContact = pass_array.map(function(value) {
                            return value.Name;
                          });
                    } catch (error) {
                        ticket.bookings_flight.TicketContact = null;
                    }
                    // ticket.bookings_flight.TicketContact = null;                    
                }
            }
            output.push(ticket)            
        }
        
        return res.json({
            type: 'data',
            status: 200,
            msg: 'Tickes Fetched Successfully.',
            Data: output
        });                
    }
    catch(error){
        // console.log('rrrrrrrr ', error)
        return res.json({ type: 'error', msg: 'No result found!', err: error });    
    }
})

router.post('/search-segments', async(req, res) => {
    let { limit, page } = req.body;
    limit = (!limit) ? parseInt(config.pageLimit) : parseInt(limit)
    page = (!page) ? parseInt(0) : parseInt(page)
    let offset = limit * page;

    let { start_date, end_date, departures, arrivals, airline } = req.body

    if (start_date && start_date != '')
        start_date = new Date(start_date)
    if (end_date && end_date != '')
        end_date = new Date(end_date)

    let whereQuery = {};
    if(departures &&  departures.length > 0){
        whereQuery.segment_departure_airport_code = {
            [Op.in] : departures
        }
    }
    if(arrivals && arrivals.length > 0){
        whereQuery.segment_arrival_airport_code = {
            [Op.in] : arrivals
        }
    }
    if(airline){
        whereQuery.segment_operating_airline_name = airline;
    }
    
    try {
        const result = await segmentDetailModel_AJ.findAndCountAll({
            where: whereQuery,
            offset: offset,
            limit: limit,
            include:[{
                model: tripDetailModel_AJ,
                attributes:[
                    "trip_id",
                    "trip_booking_id",
                    "trip_details",
                    "bookings_flight_id"
                ],
                include: [{
                    model: bookingModel_AJ,
                    where: {
                        created: {
                            [Op.gte]: new Date( start_date ),
                            [Op.lte]: new Date(end_date) 
                        }
                    },
                    attributes: ['created'],
                    required: true
                }],
                required: true
            }]
        })
        let dataArr = [];
        if(result.count > 0){
            result.rows.map(row => {
                dataArr.push(row);
            });
            return res.json({
                status: true,
                code: 200,
                type: 'success',
                title: "Segments",
                message: 'Segments Fetched Successfully.',
                result: dataArr,
                totalResult: result.count,
                page: page
            });
        }else{
            return res.json({
                status: false,
                code: 200,
                type: 'success',
                title: "Segments",
                message: 'No Segment Found.',
                result: dataArr,
                totalResult: result.count,
                page: page
            });
        }
    } catch (error) {
        console.log(error)
        return makeResponse(res, false, 200, 'success', 'Segments.', 'Oops! Something went wrong while processing your request.', error)
    }
})

router.post('/search-flight-logs', async(req, res) => {
    
    let limit=30, offset=0;
    let end_date = new Date();
    let start_date =new Date( new Date().setMonth( end_date.getMonth() -2 ) );
    
    var params = req.body;
    if(params.start_date)
        start_date = params.start_date
    if(params.end_date)
        end_date = params.end_date
    
    let whereQuery = {}
    
    whereQuery.created_at = {
        [Op.gte] : start_date,
        [Op.lte] : end_date
    }
    if( params.agent_code )
        whereQuery.agent_code = params.agent_code;
    
        
    try {
        
        var search_logs = await flightSearchLogModel_AJ.findAll({
            where: whereQuery,
            limit: limit,
            offset: offset,
            include: [{
                model: organsationModel_AJ
            }]
        })
        var output = []
        for (let ind = 0; ind < search_logs.length; ind++) {
            let obj = search_logs[ind];
            obj.stream = JSON.parse( obj.stream )
            output.push( obj )
            
        }
        return res.json({
            type: 'data',
            status: 200,
            msg: 'Search logs Fetched Successfully.',
            Data: output
        });

    } catch (error) {
        return res.json({ type: 'error', msg: 'No result found!', err: error });    
    }

    

})


router.post('/export-booking-report', async (req, res) => {
    let { 
        agent_codes,
        product,
        supplier_id,
        start_date,
        end_date,
        status
         } = req.body;

    let bookingsArr = [];
    let includeArray = [];

    let query = { status: 1 };

    let flightQuery = {};

    if (agent_codes != undefined && agent_codes.length > 0 ) {
        let filtered_agent_codes = agent_codes.filter(function (el) {
            return el != null && el!=='';
          });

        if(filtered_agent_codes.length > 0){
            query = { agent_code: { [Op.in]: filtered_agent_codes }, ...query }    
        }
    }

    if (status != undefined && status != 'all') {
        query = { booking_status: status, ...query }
    }
    if (product != undefined && product != 'all') {
        if(product == "Flights"){
            query = { 'has_flight': 1, ...query }
        }
    }
    if (supplier_id != undefined && supplier_id != '1') {
        let supplierData = await Suppliers_M.findOne({ where: { supplier_id: supplier_id }, attributes: ['supplier_id', 'name', 'is_hotel', 'is_car', 'is_flight', 'is_transfers', 'is_insurance', 'is_activities'], raw: true })
        
       if (supplierData && supplierData.is_flight) {
            // join booking flight
            flightQuery = { supplier_id: supplierData.supplier_id }
        } 
    } 

    // if there is no date define then will get last 90 days 
    if (start_date != undefined && start_date != '' && end_date != undefined && end_date != '') {
        start_date = moment(start_date).format("YYYY-MM-DD HH:mm:ss");
        end_date = moment(end_date).format("YYYY-MM-DD HH:mm:ss");

        query = { created: { [Op.between]: [start_date, end_date] }, ...query }
    } else {
        start_date = moment().subtract(90, 'days').format("YYYY-MM-DD HH:mm:ss");
        end_date = moment().format("YYYY-MM-DD HH:mm:ss");

        query = { created: { [Op.between]: [start_date, end_date] }, ...query }
    }

    // join array object
    includeArray = [
        {
            model: FlightBookings_M,
            attributes: ['booking_flight_id', 'booking_status', 'flight_id', 'pnr_no', 'supplier_id', 'flightPrice'],
            where: flightQuery,
            include: [{
                model: Suppliers_M,
                attributes: ['supplier_id', 'name'],
                required: false
            }]
        },       
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

    Bookings_M.findAll({
        where: query,
        attributes: [`agent_code`, `booking_id`, `transaction_id`, `trip_id`, `users_id`, `booking_email`, `booking_currency`, `booking_status`, `agent_reference`, `amount`, `payment_type`, `supplier_price`, `markup_price`, `has_hotel`, `has_flight`, `created`, `status`, `has_activities`, `has_car`, `has_insurance`, `has_transfers`, `has_marhaba`, `has_cruises`, `has_holiday`, `has_visa`, `remarks`, `user_currency`, `curnversion_value`, `supplier`, `service_charge_cancel`, `service_charge_create`, `service_charge_refund`],
        include: includeArray,
        order: [['created', 'DESC']],
        limit: config.exportLimit,
    })
        .then(bookings => {
            bookings.map(async (booking, ind) => {
                let productNames = '';
                let supplierName = '';
                let pnrNo = '';

                if (booking.has_flight) {
                    productNames += "Flights";
                    if (booking.bookings_flights.length) {
                        booking.bookings_flights.map((bookEle) => {
                            if (bookEle.supplier) {
                                supplierName += (bookEle.supplier.name) ? bookEle.supplier.name + "/" : "";
                                pnrNo += (bookEle.pnr_no) ? bookEle.pnr_no : "";
                            }
                        })
                    }
                }
              
                let organisationName = '';
                if (booking.user != undefined) {
                    let username = (booking.user.username != undefined && booking.user.username != '') ? " / " + booking.user.username : '';
                    if (booking.user.organisation != undefined) {
                        organisationName = (booking.user.organisation.name != '') ? booking.user.organisation.name + username : 'Guest';
                    }
                }

                // round amount first will check in settings then update
                // let bookingAmount = booking.booking_currency + ' ' + (booking.markup_price) ? booking.markup_price : booking.amount;                
                let bookingAmount = parseInt(booking.amount)
                bookingAmount = booking.booking_currency + ' ' + parseFloat(Math.round(bookingAmount * 100) / 100).toFixed(2);
                booking.supplier = supplierName.slice(0, -1);

                bookingsArr.push({
                    "Product": productNames,
                    "Agent Code": booking.agent_code,
                    "Trip Id": booking.trip_id,
                    "Supplier": booking.supplier,
                    "Supplier Conf No": pnrNo,
                    "Booked By": organisationName,
                    "Booked Date": moment(booking.created).format("YYYY-MM-DD HH:mm:ss"),
                    "Payment Type": booking.payment_type,
                    "Amount": bookingAmount,
                    "Status": booking.booking_status
                })
            });
            res.json({
                type: 'data',
                status: 200,
                msg: 'Booking data exported successfully.',
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

router.post('/export-search-log-report', (req, res) => {
    // console.log("--------",req.body);
    let searchLogArr = []
    let end_date = new Date();
    let start_date =new Date( new Date().setMonth( end_date.getMonth() -2 ) );
    
    var params = req.body;
    if(params.start_date)
        start_date = params.start_date
    if(params.end_date)
        end_date = params.end_date
    
    let whereQuery = {}
    
    whereQuery.created_at = {
        [Op.gte] : start_date,
        [Op.lte] : end_date
    }
    if( params.agent_code && params.agent_code.length > 0 ){
        let filtered_agent_codes = params.agent_code.filter(function (el) {
            return el != null && el!=='';
        });
        if(filtered_agent_codes.length > 0){
            whereQuery.agent_code = {
                [Op.in]: filtered_agent_codes
            }
        }
    }    
    let includeArr = [];
    includeArr.push({
        model: organisationHModel,
        attributes: ['agent', 'agent_code']
    })
    FlightSearchLog.findAll({        
        where: whereQuery,
        limit: config.exportLimit,
        include:includeArr,
    })
        .then(searchLogs => {
            let stream, departure, arrival
            searchLogs.map((searchLog) => {
                let agent_name = ""
                stream = JSON.parse(searchLog.stream)
                if(stream.LocationsDetail){
                    if(stream.LocationsDetail[0].departure){
                        if(stream.TripType && stream.TripType == 'twoway'){
                            departure = stream.LocationsDetail[0].departure.airport_code + ", "+ stream.LocationsDetail[0].arrival.airport_code
                        }else{
                            departure = stream.LocationsDetail[0].departure.airport_code
                        }
                    }
                    if(stream.LocationsDetail[0].arrival){                        
                        if(stream.TripType && stream.TripType == 'twoway'){
                            arrival =  stream.LocationsDetail[0].arrival.airport_code + ", "+ stream.LocationsDetail[0].departure.airport_code
                        }else{
                            arrival = stream.LocationsDetail[0].arrival.airport_code
                        }
                    }
                }
                if(searchLog.organisation && searchLog.organisation.agent){
                    agent_name = searchLog.organisation.agent
                    }
                searchLogArr.push({
                    "Agency Name": agent_name,
                    "Username": searchLog.username,
                    "Remote Address": searchLog.browserIp,
                    "Platform": searchLog.platform,
                    "Trip Type": stream.TripType,
                    "No of Passengers": stream.TotalPassengers,
                    "Departure Location(s)": departure,
                    "Arrival Location(s)": arrival,
                    "Update From": searchLog.updateFrom,
                    "Status": searchLog.gotResult,             
                    "Date": searchLog.created_at,                    
                })
            });

            res.json({
                type: 'data',
                status: 200,
                msg: 'Flight Search Logs Exported Successfully.',
                data: searchLogArr
            });
        }).catch((error) => {
            // console.log('eee ', error)
            res.status(500).json({
                type: 'error',
                status: 400,
                msg: 'Oops! Something went wrong while processing your request.',
            });
        });
});

router.post('/export-tickets-report', async(req, res) => {
    var params = req.body ;
    // console.log("-----------",params)
    let ticketsArr = [];
    let agent_code = [];
    let product = 'flights';
    let end_date = new Date();
    let start_date =new Date( new Date().setMonth( end_date.getMonth() -2 ) );

    if(params.start_date && params.start_date != '')
        start_date = new Date( params.start_date )
    if(params.end_date && params.end_date != '')
        end_date = new Date( params.end_date )
    if( params.agent_codes )
        agent_code = params.agent_codes;

    if( params.product && params.product != '')
        product = params.product;
    
    if(params.tickets_limit)
        tickets_limit = params.tickets_limit
    if(params.tickets_offset)
        tickets_offset = params.tickets_offset

    let whereQuery = {};
    // whereQuery.ticket_booking_id  = 106386;

    let whereQueryBookingFlight = {};
    if(start_date && end_date){
        whereQueryBookingFlight = {
            created:{
                [Op.gte] : start_date,
                [Op.lte] : end_date
            }
        }
    }
    if(params.supplier_id){
        whereQueryBookingFlight = {            
            supplier_id: params.supplier_id
        }
    }

    let whereQueryBooking = {}
    if(agent_code.length > 0){
        whereQueryBooking.agent_code = {
            [Op.in]: agent_code
        }
    }

    let includeArr = [];

    if(true){
        if( product == 'all' || product == 'flights' ){
            includeArr.push({
                model: flightBookingModel_AJ,
                attributes: ['booking_status', 'created','TicketContact'],
                where: whereQueryBookingFlight,
                include: [{
                    model: supplierModel_AJ,
                    attributes: ['name', 'supplier_id']
                }]
            })
            includeArr.push({
                attributes: ['agent_code', 'trip_id', 'created', 'users_id'],
                model: bookingModel_AJ,
                where:whereQueryBooking,                
            })
        }
    }
    try {
        
        flightTicketModel_AJ.findAll({
            attributes:["ticket_number", "ticket_status", "BaseFare", "Tax", "Total"],
            where: whereQuery,
            include: includeArr,
            limit: config.exportLimit,            
        }).then(tickets => {
            tickets.map((ticket) => {
                let passengerName = []
                if(ticket.bookings_flight.TicketContact){
                    let contact = JSON.parse(ticket.bookings_flight.TicketContact);
                    if(contact.Passengers){
                        let pass_array = Array.isArray(contact.Passengers.Passenger) ? contact.Passengers.Passenger : [contact.Passengers.Passenger];
                        if(pass_array){
                            pass_array.map(pass => {
                                if(pass && pass.Name){
                                    pd = pass.Name
                                    passengerName.push(((pd.Given) ? (pd.Given) : "" ) + ((pd.Middle) ? " "+ pd.Middle : "") + ((pd.Surname) ? " " + pd.Surname : ""))
                                }
                            })
                        }
                    }
                }
                
                ticketsArr.push({
                    "Agent Code": ticket.booking.agent_code,
                    "Ticket Number": ticket.ticket_number,
                    "Trip ID": ticket.booking.trip_id,
                    "Base Amount": ticket.BaseFare,
                    "Fee And Tax": ticket.Tax,
                    "Passenger Name": passengerName.toString(),
                    "Supplier": ticket.bookings_flight.supplier.name,
                    "Booking Status": ticket.bookings_flight.booking_status,
                    "Booked Date": ticket.bookings_flight.created,
                })
            })

            return res.json({
                type: 'data',
                status: 200,
                msg: 'Tickets Exported Successfully.',
                Data: ticketsArr
            }); 
        })                       
    }
    catch(error){       
        return res.json({ type: 'error', msg: 'No result found!', err: error });    
    }
})

module.exports = router;
