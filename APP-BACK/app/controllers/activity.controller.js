const express = require('express');
const sgMail = require('@sendgrid/mail');
const router = express.Router();
const axios = require('axios');
const { makeResponse } = require('../helpers/utils');
const activityDao = require('../dao/activity.dao');
const config = require('../../config/config');

/**
 * @swagger
 * /api/Activity:
 *   post:
 *    tags:
 *      - Activity
 *    summary: List of Activity
 *    description: Search Activity
 *    consumes:
 *       - application/json
 *    produces:
 *      - application/json
 *    parameters:
 *      - in: body
 *        name: body
 *     description: Provide username and password to get access token and consume rest of the API's
 *        required: true
 *        schema:
 *          properties:
 *            username:
 *              type: string
 *            password:
 *              type: string
 *            rememberMe:
 *              type: boolean
 *              default: false
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
router.post('/', activityDao.searchActivity);
router.post('/details', activityDao.detailsActivity);
router.post('/block', activityDao.blockActivity);
router.post('/book', activityDao.bookActivity);
router.post('/cancel', activityDao.cancelActivity);
router.get('/activity-get-city/:city_name', async (req, res) => {
    // eslint-disable-next-line no-tabs
    // 	var url = require('url');
    // var url_parts = url.parse(request.url, true);
    // var query = url_parts.query;

    const {city_name} = req.params
    console.log(city_name);
    if(!city_name){
        return makeResponse(res, false, 200, 'danger', 'Activity City Search', 'City name is required');
    }
    try{
        const cityData = await axios.get('http://elasticsearch.tpconnects.in/ajax.php?term=' + city_name);

        console.log(cityData.data)
        if(cityData.data){
            return makeResponse(res, false, 200, 'danger', 'Car City Search', 'Lit of cities', cityData.data);
        }
        else {
            return makeResponse(res, true, 200, 'success', 'City not found', 'City not found');
        }
    }
    catch (error){
        console.log(error)
        return makeResponse(res, false, 200, 'danger', 'Activity City Search', 'Something went wrong', error);
    }

});
router.post('/booking-voucher-send', async (req, res) => {
    console.log('resmail111111111:::::::::::::::', req.body.Trip_id);
    console.log('resmail111111111:::::::::::::::', req.body.mailForm);
    // eslint-disable-next-line no-useless-concat
    pdfAttachementPath = path.join(__dirname, '../../pdf/' + `${req.body.Trip_id}`+'.pdf');
    var attachment, msg;
    // eslint-disable-next-line no-undef
    console.log('attached pdf',pdfAttachementPath);
    try {
        let mailAdress = req.body.mailForm.userEmail;
        let splitArray = mail_id.toString().split('@');
        let name = splitArray[0];
        let message = req.body.mailForm.message;
        let tripId = req.body.Trip_id;
        // eslint-disable-next-line no-undef
        if(fs.existsSync(pdfAttachementPath)){
            // eslint-disable-next-line no-undef
            attachment = fs.readFileSync(pdfAttachementPath).toString('base64');
            msg = {
        to: `${mailAdress}`,
        from: 'inbox@tpconnects.com',
        subject: 'Booking Voucher',
        text: `${message}`,
        html: `<h5>Dear ${name}<h5><p>${message} </p><p> Your  Tripid is <strong>${tripId} </strong><br>Please find the attached voucher</p>`,
        attachments: [
          {
            content: attachment,
            filename: 'attachment.pdf',
            type: 'application/pdf',
            disposition: 'attachment',
          },
        ],
      };
    } else {
      msg = {
        to: `${mailAdress}`,
        from: 'inbox@tpconnects.com',
        subject: 'Booking Voucher',
        text: `${message}`,
        html: `<h5>Dear ${name}<h5><p>${message} </p><p> Your  Tripid is <strong>${tripId} </strong></p>`,
      };
    }

        sgMail.setApiKey(config.api.sendGridApiKey);
        let result = sgMail.send(msg);
        return makeResponse(res, true, 200, 'success', 'Your request is successful', 'Mail send successfully',result);
    } catch (err) {
        console.log('email api', err);
        return makeResponse(res, false, 400, 'error', 'INTERNAL SERVER ERROR', 'INTERNAL SERVER ERROR');
    }
});

module.exports = router;
