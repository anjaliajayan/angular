const express = require('express');
const router = express.Router();
const axios = require('axios')
const { makeResponse } = require('../helpers/utils');
const hotelDao = require('../dao/hotel.dao');
const sgMail = require('@sendgrid/mail');
// const config = require('./../../../../aggregator-backend/aggregator-backend/config/config');
const config = require('../../config/config');
const path = require('path');
const fs = require('fs');

/**
 * @swagger
 * /api/hotels:
 *   post:
 *    tags:
 *      - Hotels
 *    summary: List of hotels
 *    description: Search hotels
 *    consumes:
 *       - application/json
 *    produces:
 *      - application/json
 *    parameters:
 *      - in: body
 *        name: body
 *        description: Provide username and password to get access token and consume rest of the API's
 *        required: true
 *        schema:
 *          properties:
 *            adults_per_room:
 *              type: string
 *              enum: [1]
 *            children_per_room:
 *              type: string
 *              enum: [0]
 *            no_of_rooms:
 *              type: string
 *              enum: [1]
 *            extra_bed:
 *              type: string
 *              enum: [0]
 *            check_in:
 *              type: string
 *              format: date
 *            check_out:
 *              type: string
 *              format: date
 *            city:
 *              type: string
 *            city_code:
 *              type: string
 *            country:
 *              type: string
 *              enum: ['AE']
 *            currency:
 *              type: string
 *              enum: ['AED']
 *            markupBy:
 *              type: string
 *            nationality:
 *              type: string
 *            resident:
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
router.post('/', hotelDao.searchHotels);

router.post('/rooms/search', hotelDao.searchRooms);

router.post('/rooms/block', hotelDao.blockRooms);

router.post('/rooms/book', hotelDao.bookRooms);

router.post('/details', hotelDao.hotelInfo);

router.post('/rooms/cancel', hotelDao.cancelRooms);


router.post('/search', hotelDao.hotelsById);

router.get('/hotel-get-city/:city_name', async (req, res) => {
	// 	var url = require('url');
	// var url_parts = url.parse(request.url, true);
	// var query = url_parts.query;


	const { city_name } = req.params


	if (!city_name) {
		return makeResponse(res, false, 200, 'danger', 'Hotel City Search', 'City name is required');
	}
	try {
		const cityData = await axios.get('http://elasticsearch.tpconnects.in/ajax.php?term=' + city_name);


		if (cityData.data) {
			return makeResponse(res, false, 200, 'danger', 'Hotel City Search', 'Lit of cities', cityData.data);
		}
		else {
			return makeResponse(res, true, 200, 'success', 'City not found', 'City not found');
		}
	}
	catch (error) {
		console.log(error)
		return makeResponse(res, false, 200, 'danger', 'Hotel City Search', 'Something went wrong', error);
	}

});

router.get('/hotel-get-citybyId/:cityid', async (req, res) => {
	// 	var url = require('url');
	// var url_parts = url.parse(request.url, true);
	// var query = url_parts.query;


	const { cityid } = req.params

	// console.log(cityid);
	if (!cityid) {
		return makeResponse(res, false, 200, 'danger', 'Hotel City Search', 'City name is required');
	}
	try {
		const cityData = await axios.get('http://elasticsearch.tpconnects.in/ajax.php?city_id=' + cityid);
		// console.log(cityData.data)
		if (cityData.data) {
			return makeResponse(res, true, 200, 'success', 'Request was successful', 'Returned City', cityData.data);
		} else {
			return makeResponse(res, true, 200, 'success', 'City not found', 'City not found');
		}
	}
	catch (error) {
		console.log(error)
		return makeResponse(res, false, 200, 'danger', 'Returned City', 'Something went wrong', error);
	}

});

router.post('/places', async (req, res) => {
	var url = require('url');
	var url_parts = url.parse(req.url, true);
	var query = url_parts.query;
	const reqParams = req.body;

	if (!reqParams) {
		return makeResponse(res, false, 200, 'danger', 'Popular Places', 'Provide the parameters');
	}
	try {
		const popCities = await axios.get(`http://elasticsearch.tpconnects.in/location.php?loclat=${reqParams.loclat}&loclong=${reqParams.loclong}&_=${reqParams.usLocation}`);
		if (popCities.data) {
			return makeResponse(res, true, 200, 'success', 'Request was successful', 'Returned Popular Cities', popCities.data);
		} else {
			return makeResponse(res, true, 200, 'success', 'No Popular Cities Found', 'Popular cities not found');
		}
	}
	catch (error) {
		console.log(error)
		return makeResponse(res, false, 200, 'danger', 'Returned Popular Places', 'Something went wrong', error);
	}

});

router.post('/nearbylocations', async (req, res) => {
	var url = require('url');
	var url_parts = url.parse(req.url, true);
	var query = url_parts.query;
	const reqParams = req.body;

	if (!reqParams) {
		return makeResponse(res, false, 200, 'danger', 'Near By Locations', 'Provide the parameters');
	}
	try {
		const popLocs = await axios.get(`http://elasticsearch.tpconnects.in/locationsearch.php?loclat=${reqParams.loclat}&loclong=${reqParams.loclong}&random=${reqParams.random}`);
		if (popLocs.data) {
			return makeResponse(res, true, 200, 'success', 'Request was successful', 'Returned Nearby Places', popLocs.data);
		} else {
			return makeResponse(res, true, 200, 'success', 'No Nearby Places Found', 'Nearby Places not found');
		}
	}
	catch (error) {
		console.log(error)
		return makeResponse(res, false, 200, 'danger', 'Returned Popular Places', 'Something went wrong', error);
	}

});
router.post('/booking-voucher-send', async (req, res) => {
	console.log("resmail111111111:::::::::::::::", req.body.Trip_id);
	console.log("resmail111111111:::::::::::::::", req.body.mailForm);
	pdfAttachementPath = path.join(__dirname,'../../logs/'+ `${req.body.Trip_id}`+'.pdf');
	var attachment, msg;
	console.log("attached pdf",pdfAttachementPath);
	try {
		let mail_id = req.body.mailForm.userEmail;
		let splitArray = mail_id.toString().split("@");
		let name = splitArray[0];
		let message = req.body.mailForm.message;
		let trip_id = req.body.Trip_id;
		console.log(mail_id,"========",message,"==================",trip_id);
		//read the file 
		if(fs.existsSync(pdfAttachementPath)){
			attachment = fs.readFileSync(pdfAttachementPath).toString("base64");
			msg = {
				to: `${mail_id}`,
				from: 'inbox@tpconnects.com',
				subject: 'Booking Voucher',
				text: `${message}`,
				html: `<h5>Dear ${name}<h5><p>${message} </p><p> Your  Tripid is <strong>${trip_id} </strong><br>Please find the attached voucher</p>`,	
				attachments: [
					{
						content: attachment,
						filename: "attachment.pdf",
						type: "application/pdf",
						disposition: "attachment"
					}
				]
			};			
		}else{
			msg = {
				to: `${mail_id}`,
				from: 'inbox@tpconnects.com',
				subject: 'Booking Voucher',
				text: `${message}`,
				html: `<h5>Dear ${name}<h5><p>${message} </p><p> Your  Tripid is <strong>${trip_id} </strong></p>`,				
			};
		}
				
		sgMail.setApiKey(config.api.sendGridApiKey);
		let result = sgMail.send(msg);
		return makeResponse(res, true, 200, 'success', 'Your request is successful', 'Mail send successfully',result);
	} catch (err) {
		console.log("email api", err);
		return makeResponse(res, false, 400, 'error', 'INTERNAL SERVER ERROR', 'INTERNAL SERVER ERROR');
	}
});

module.exports = router;