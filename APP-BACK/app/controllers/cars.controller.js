const express = require('express');
const router = express.Router();
const axios = require('axios');
const path = require('path');
const {makeResponse} = require('../helpers/utils');
const airportsJson = path.join(__dirname, '../../data/airports.json');
const carDao = require('../dao/car.dao');
const sgMail = require('@sendgrid/mail');
const config = require('../../config/config');
/**
 * @swagger
 * /api/cars:
 *   post:
 *    tags:
 *      - Cars
 *    summary: List of Cars
 *    description: Search Cars
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
router.post('/', carDao.searchCars);
router.post('/details', carDao.detailsCars);
router.post('/block', carDao.blockCars);
router.post('/book', carDao.bookCars);
router.post('/cancel', carDao.cancelCars);
router.get('/car-get-citybyId/:cityid', async (req, res) => {
    // 	var url = require('url');
    // var url_parts = url.parse(request.url, true);
    // var query = url_parts.query;


        const {cityid} = req.params

         console.log(cityid);
        if(!cityid){
            return makeResponse(res, false, 200, 'danger', 'Car City Search', 'City name is required');
        }
        try{
            const cityData = await axios.get('http://elasticsearch.tpconnects.in/ajax.php?city_id='+cityid);
            // console.log(cityData.data)
            if(cityData.data){
                return makeResponse(res, true, 200, 'success', 'Request was successful', 'Returned City', cityData.data);
            } else{
                return makeResponse(res, true, 200, 'success', 'City not found', 'City not found');
            }
        }
        catch (error){
            console.log(error)
            return makeResponse(res, false, 200, 'danger', 'Returned City', 'Something went wrong', error);
        }

    });

router.get('/fetch-airports', async (req, res) => {
    cache.get('airports', (err, airports) => {
        if (!err) {
            if (airports == undefined) {
                const airports = JSON.parse(fs.readFileSync(airportsJson, { encoding: 'utf8' }));
                cache.set('airports', airports, (err, success) => {
                    if (!err && success) {
                        res.json({ type: 'data', airports, cached: false });
                    }
                });
            } else {
                res.json({ type: 'data', airports, cached: true });
            }
        } else {
            res.status(500).json({ type: 'error', msg: error });
        }
    });
});


router.get('/car-get-city/:city_name', async (req, res) => {
        // 	var url = require('url');
        // var url_parts = url.parse(request.url, true);
        // var query = url_parts.query;

  const {city_name} = req.params
   console.log(city_name);
            if(!city_name){
                return makeResponse(res, false, 200, 'danger', 'Car City Search', 'City name is required');
            }
            try{
                const cityData = await axios.get('http://elasticsearch.tpconnects.in/airport.php?term=' + city_name);

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
                return makeResponse(res, false, 200, 'danger', 'Car City Search', 'Something went wrong', error);
            }

        });
router.post('/booking-voucher-send', async (req, res) => {
  console.log("resmail111111111:::::::::::::::", req.body.Trip_id);
  console.log("resmail111111111:::::::::::::::", req.body.mailForm);
  pdfAttachementPath = path.join(__dirname,'../../pdf/'+ `${req.body.Trip_id}`+'.pdf');
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
