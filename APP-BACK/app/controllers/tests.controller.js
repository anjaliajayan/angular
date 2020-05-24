const express = require('express');
const router = express.Router();

//const parser = require('xml2json');
const fs = require('fs');
const path = require('path');
const _ = require('lodash');

const {
    PassengerDetail,
} = require('../../config/db');

let myGenericMethod = require('./../helpers/ModelsGenericMethods');
let myCustomPassengerDetail = new myGenericMethod(PassengerDetail);

/**
 * @swagger
 *
 * /api/tests/index:
 *   get:
 *     tags:
 *       - Test API in tests.controller.js
 *     description: Test API for TPConnects
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: Return object
 *       400:
 *        description: Bad Request
 *       401:
 *         description: Not Authrized
 *       403:
 *         description: You do not have necessary permissions for the resource or JWT Expired
 *       500:
 *         description: Something went wrong
 */
router.get('/index', async (req, res) => {
    console.log("Tests::index");
    let bookings_flight_id = 793;
    passenger_detail_object = await PassengerDetail.findAll({
        where: {
            bookings_flight_id
        }
    });
    return res.json(passenger_detail_object);
    // return res.send({ message: 'Welcome to Tests Controller' });
});

router.get('/update', async (req, res) => {
    console.log("Tests::update");
    let bookings_flight_id = 793;
    passengersList = await PassengerDetail.findAll({
        where: {
            bookings_flight_id
        }
    });
    let asyncResponseArrPassengerListToUpdate = [];
    passengersList.map(async (pax, paxIndex) => {
        asyncResponseArrPassengerListToUpdate.push(myCustomPassengerDetail.updateByID(pax.pax_id, {
            pax_ref_key: "TALEB"
        }));
    });
    let finalArr = asyncResponseArrPassengerListToUpdate;

    let values = await Promise.all(finalArr);
    if (values) {
        console.log(values);
        return res.json(values);
    } 
    return res.json('ERROR');
});

module.exports = router;