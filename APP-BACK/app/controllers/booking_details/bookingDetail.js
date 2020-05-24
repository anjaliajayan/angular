const express = require('express');
const router = express.Router();
const { Bookings, FlightBookings, FlightTicket, flightTicketEmd, TripDetails, SegmentDetails, PassengerDetail, Users, Suppliers, hotelBookings,insuranceBookings_M,carsBookings, activityBookings, Supp } = require('../../../config/db');
const config = require('./../../../../aggregator-backend/config/config');
const fs = require("fs");
const path = require('path');
const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(config.api.sendGridApiKey);
const utilsHelper = require('../../helpers/utils');

var bookingID;

router.get('/fetch_value/:id', async (req, res) => {
    // console.log("res:::::::::::::::",res);
    const { id } = req.params;
    try {
      //  console.log(id);
        const result = await Bookings.findAll({
            where: { trip_id: id }, plain: true,
            include: [
                {
                    model: FlightBookings,
                    as: 'Flights'
                },
                {
                    model: FlightTicket,
                    as: 'flight_ticket'
                },
                {
                    model: TripDetails,
                    as: 'trip_details'
                },
                {
                    model: PassengerDetail,
                    as: 'passenger_details'
                },
                {
                    model: carsBookings,
                    as: 'car_details'
                },
                {
                    model: activityBookings,
                    as: 'activity_details'
                },
                {
                    model: hotelBookings,
                    // as: 'Hotels'
                },{
                     model: insuranceBookings_M,
                    as: 'insurance_details'
                }
                

            ]
        });
       // console.log(result)
        const userTable = await Users.findOne({ where: { users_id: result.users_id }, raw: true });
        if (userTable.salute === null) {
            userTable.salute = 'Mr.';
        }
        let resultTrip = resultSupplier = ""
        if(result.trip_details && result.trip_details.length > 0){
            resultTrip = await SegmentDetails.findAll({ where: { trip_id: result.trip_details[0].trip_id }, raw: true });
            resultSupplier = await Suppliers.findOne({ where: { organisation_id: userTable.organisation_id }, raw: true });
        }


        return res.json({
            type: 'data',
            status: 200,
            msg: "fetched",
            data: result,
            SegmentDetails: resultTrip,
            userDetails: userTable ? userTable : 0,
            SupplierDetails: resultSupplier ? resultSupplier : 0
        })
    } catch (error) {
        console.log(error)
        return res.json({
            type: 'error',
            status: 400,
            msg: 'Oops! Something went wrong while processing your request.',
            data: error
        });
    }
});


//ZYR34757D1882S
router.post('/booking-voucher-send', async (req, res) => {
const file = `Voucher_${req.body.Trip_id}.pdf`;
var fileLoc = path.resolve('./voucher/pdfs');
fileLoc = path.join(fileLoc, file);
pathToAttachment = `${fileLoc}`;
attachment = fs.readFileSync(pathToAttachment).toString("base64");
try{
  let mail_id =req.body. mailForm.mail;
  let message =req.body. mailForm.message;
  let trip_id =req.body.Trip_id;
        const msg = {
          to: `${mail_id}`,
          from: 'inbox@tpconnects.com',
          subject: 'Booking Voucher',
        //   text: `${message}`,
          html: `<p> <strong>message:</strong> ${message} </p>`,
          attachments: [
            {
              content: attachment,
              filename: `Voucher_${trip_id}.pdf`,
              type: "application/pdf/text",
              disposition: "attachment"
            }
          ]
          
        };
        sgMail.send(msg);
        return utilsHelper.makeResponse(res, true, 200, 'success', 'Your request is successful', 'Mail send successfully');
    }
    catch(err) {
       
        return utilsHelper.makeResponse(res, false, 400, 'error', 'INTERNAL SERVER ERROR', 'INTERNAL SERVER ERROR');
    }



});
module.exports = router;