const express = require('express');
const crypto = require('crypto');

const router = express.Router();
const utilsHelper = require('../helpers/utils');
const paymentGateway = require('../dao/paymentGateway.dao');

const {
  stripeAuthorizeOnlyValidator,
  stripeCreateCardTokenValidator,
  stripeCustomerCreateThenChargeCreateValidator,
  stripeChargePreAuthorizationValidator
} = require('../validations/stripe.validate');

const LoggerFile = 'paymentGatewayController';

router.post('/selcom/order-create', async (req, res) => {
  console.log(LoggerFile, 'selcomOrderCreate');

  try {
    let parameters = req.body.parameters;
    let signedFields = req.body.signedFields;
    const selcomResponse = await paymentGateway.selcomOrderCreate(parameters, signedFields);
    if (!selcomResponse.status) {
      console.warn(selcomResponse.data);
      return utilsHelper.makeResponse(res, true, 400, 'error', 'Bad Request', selcomResponse.data.message, []);
    }

    const d = selcomResponse.data;
    const respData = {
      reference: d.reference,
      gateway_buyer_uuid: d.data[0].gateway_buyer_uuid,
      payment_token: d.data[0].payment_token,
      payment_gateway_url: d.data[0].payment_gateway_url,
      qr: d.data[0].qr
    }
    return utilsHelper.makeResponse(res, true, 200, selcomResponse.data.result, 'Payment Success', selcomResponse.data.message, [respData]);
  } catch (err) {
    console.error(LoggerFile, err);
    utilsHelper.makeResponse(res, false, 500, 'danger', 'Payment Gateway', `Oops! Something went wrong while processing your request. Error: ${err}`);
  }
});

router.post('/payfort/order_create', async (req, res) => {
  console.log(LoggerFile, 'payfortOrderCreate');

  // const selcomResponse = await paymentGateway.payfortOrderCreate(parameters, signedFields)

  try {
    // Calculate request signature
    //const shaString  = `command=AUTHORIZATION&access_code=0n5L34cfwVhEWBuV6itW&merchant_identifier=NohqwqTr&merchant_reference=123456&amount=100&currency=AED&language=en&customer_email=praveen@tpconnects.com&order_description=iPhone 6-S`;
    const shaString  = `access_code=0n5L34cfwVhEWBuV6itWamount=100check_3ds=NOcommand=PURCHASEcurrency=AEDcustomer_email=praveen@tpconnects.comcustomer_ip=94.200.55.74customer_name=TPCONNECTS CUSTOMERdevice_fingerprint=1language=enmerchant_identifier=NohqwqTrmerchant_reference=123456return_url=http://localhost/route?r=processResponsetoken_name=COp9Vmp`;

    const hmac = crypto.createHmac("sha256", `TESTSHAIN${shaString}TESTSHAIN`);

    let signature = hmac.digest().toString('base64');

    return utilsHelper.makeResponse(res, true, 200, 'selcomResponse.data.result', 'Payment Success', 'selcomResponse.data.message', [signature]);

  } catch (err) {
    console.log(LoggerFile, err);
    // utilsHelper.makeResponse(res, 500, );
  }
});

/**
 * @swagger
 * /api/payments/stripe/token:
 *   post:
 *    tags:
 *      - Payment Gateway Stripe
 *    summary: Create a card token
 *    description: Creates a single-use token that represents a credit card's details. This token can be used in place of a credit card object with any API method. These tokens can be used only once - by creating a new Charge object, or by attaching them to a Customer object.
 *    consumes:
 *       - application/json
 *    produces:
 *      - application/json
 *    parameters:
 *      - in: body
 *        name: body
 *        description: Provide paramters to get result and consume rest of the API's
 *        required: true
 *        schema:
 *          properties:
 *            number:
 *              type: string
 *              default: "4242424242424242"
 *              enum: ["4242424242424242"]
 *            exp_month:
 *              type: number
 *              default: 2
 *              enum: [2]
 *            exp_year:
 *              type: number
 *              default: 2023
 *              enum: [2023]
 *            cvc:
 *              type: string
 *              default: "123"
 *              enum: ["123"]
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
router.post('/stripe/token', stripeCreateCardTokenValidator, async (req, res) => {
  console.log(LoggerFile, 'stripeToken');

  try {
    const response = await paymentGateway.stripeCreateCardToken(req);
    if (response.hasOwnProperty("id")) {
      return utilsHelper.makeResponse(res, true, 200, 'success', 'Payment Success', 'Token has been generated', response);
    } else {
      return utilsHelper.makeResponse(res, false, 402, 'error', 'Error', `Error`, response);
    }
  } catch (err) {
    console.log(LoggerFile, err);
    // utilsHelper.makeResponse(res, 500, );
  }
});

/**
 * @swagger
 * /api/payments/stripe/payment:
 *   post:
 *    tags:
 *      - Payment Gateway Stripe
 *    summary: Customer creation then charge creation
 *    description: First, we should get a token, then we use this token to create a customer, then charge this customer with the amount
 *    consumes:
 *       - application/json
 *    produces:
 *      - application/json
 *    parameters:
 *      - in: body
 *        name: body
 *        description: Provide paramters to get result and consume rest of the API's
 *        required: true
 *        schema:
 *          properties:
 *            name:
 *              type: string
 *              default: Taleb DAHAN
 *              enum: [Taleb DAHAN]
 *            email:
 *              type: string
 *              default: taleb@tpconnects.com
 *              enum: [taleb@tpconnects.com]
 *            source:
 *              type: string
 *              default: TOKEN_ID
 *              enum: [TOKEN_ID]
 *            amount:
 *              type: number
 *              default: 100
 *              enum: [100]
 *            currency:
 *              type: string
 *              default: usd
 *              enum: [usd]
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
router.post('/stripe/payment', stripeCustomerCreateThenChargeCreateValidator, async (req, res) => {
  console.log(LoggerFile, 'stripePayment');

  try {
    const response = await paymentGateway.stripeCustomerCreateThenChargeCreate(req);
    if (response.status === 'succeeded') {
      return utilsHelper.makeResponse(res, true, 200, 'success', 'Payment Success', response.description, response);
    } else if (response.hasOwnProperty("status") && response.status === false) {
      return utilsHelper.makeResponse(res, response.status, response.data.statusCode, 'error', response.data.raw.code, response.data.raw.message, response);
    }
  } catch (err) {
    console.log(LoggerFile, err);
    // utilsHelper.makeResponse(res, 500, );
  }
});

/**
 * @swagger
 *
 * /api/payments/stripe/retrieve/{id}:
 *   get:
 *     tags:
 *        -  Payment Gateway Stripe
 *     description: get user permissions
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: id
 *         description: id of user
 *         in: path
 *         required: true
 *         type: string
 *         schema:
 *         properties:
 *           id:
 *              type: string
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
router.get('/stripe/retrieve/:id', async (req, res) => {
  console.log(LoggerFile, 'stripeRetrieve');

  try {
    const response = await paymentGateway.stripeChargeRetrieveByPaymentID(req.params.id);
    console.log(response);
    if (response.status == "succeeded") {
      return utilsHelper.makeResponse(res, true, 200, 'success', 'Payment Success', 'Congratulation, you did a successful payment', response);
    } else {
      return utilsHelper.makeResponse(res, false, 402, 'error', 'Error', `Error`, response);
    }
  } catch (err) {
    console.log(LoggerFile, err);
    // utilsHelper.makeResponse(res, 500, );
  }
});

/**
 * @swagger
 * /api/payments/stripe/authorize_only:
 *   post:
 *    tags:
 *      - Payment Gateway Stripe
 *    summary: Authorize Only
 *    description: To create the PaymentIntent with authorize only. This instructs Stripe to only authorize the amount on the customer’s card.
 *    consumes:
 *       - application/json
 *    produces:
 *      - application/json
 *    parameters:
 *      - in: body
 *        name: body
 *        description: Provide paramters to get result and consume rest of the API's
 *        required: true
 *        schema:
 *          properties:
 *            amount:
 *              type: number
 *              default: 5
 *              enum: [5]
 *            currency:
 *              type: string
 *              default: usd
 *              enum: [usd]
 *            payment_method_types:
 *              type: array
 *              items:
 *                type: string
 *                default: card_present
 *                enum: [card_present]
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
router.post('/stripe/authorize_only', stripeAuthorizeOnlyValidator, async (req, res) => {
  console.log(LoggerFile, 'stripeAuthorizeOnly');

  try {
    const response = await paymentGateway.stripeAuthorizeOnly(req);
    if (response.status === 'succeeded') {
      return utilsHelper.makeResponse(res, true, 200, 'success', 'Authorize Only', 'Congratulation, you did an authorization only', response);
    } else {
      return utilsHelper.makeResponse(res, false, 400, 'error', 'Authorize Only', response.status, response);
    }
  } catch (err) {
    console.log(LoggerFile, err);
    // utilsHelper.makeResponse(res, 500, );
  }
});

/**
 * @swagger
 * /api/payments/stripe/charge_pre_authorization:
 *   post:
 *    tags:
 *      - Payment Gateway Stripe
 *    summary: Customer creation then charge creation
 *    description: First, we should get a token, then we use this token to create a customer, then charge this customer with the amount
 *    consumes:
 *       - application/json
 *    produces:
 *      - application/json
 *    parameters:
 *      - in: body
 *        name: body
 *        description: Provide paramters to get result and consume rest of the API's
 *        required: true
 *        schema:
 *          properties:
 *            name:
 *              type: string
 *              default: Taleb DAHAN
 *              enum: [Taleb DAHAN]
 *            email:
 *              type: string
 *              default: taleb@tpconnects.com
 *              enum: [taleb@tpconnects.com]
 *            source:
 *              type: string
 *              default: TOKEN_ID
 *              enum: [TOKEN_ID]
 *            amount:
 *              type: number
 *              default: 100
 *              enum: [100]
 *            currency:
 *              type: string
 *              default: usd
 *              enum: [usd]
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
router.post('/stripe/charge_pre_authorization', stripeChargePreAuthorizationValidator, async (req, res) => {
  console.log(LoggerFile, 'stripeChargePreAuthorization');

  try {
    const response = await paymentGateway.stripeChargePreAuthorization(req);
    console.log(response);
    if (response.status === 'succeeded') {
      return utilsHelper.makeResponse(res, true, 200, 'success', 'Authorize Only', 'Congratulation, you did an authorization only', response);
    } else {
      return utilsHelper.makeResponse(res, false, 400, 'error', 'Authorize Only', response.status, response);
    }
  } catch (err) {
    console.log(LoggerFile, err);
    // utilsHelper.makeResponse(res, 500, );
  }
});

module.exports = router;
