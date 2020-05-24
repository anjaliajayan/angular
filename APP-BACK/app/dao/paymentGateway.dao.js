const axios = require('axios');
const selcomGateway = require('./paymentGateways/selcom.gateway');
const payfortGateway = require('./paymentGateways/payfort.gateway');
const stripeGateway = require('./paymentGateways/stripe.gateway');
const stripeGatewaySettingKeySecret = stripeGateway.setting().keySecret;
const stripe = require('stripe')(stripeGatewaySettingKeySecret);

const selcomOrderCreate = async (parameters, signedFields) => {

  try {
    const gs = selcomGateway.setting();

    var options = {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Cache-Control': 'no-cache',
        'authorization': 'SELCOM ' + Buffer.from(gs.authorization).toString('base64'),
        'Digest': selcomGateway.computeSignature(parameters, signedFields, new Date().toISOString(), gs.apiSecret),
        'Digest-Method': 'HS256',
        'Timestamp': new Date().toISOString(),
        'Signed-Fields': signedFields
      }
    }

    return await axios.post(gs.url, JSON.stringify(parameters), options)
      .then(response => {
        return ({
          status: true,
          data: response.data
        });
      })
      .catch(error => {
        return ({
          status: false,
          data: error.response.data
        });
      });
  } catch (err) {
    console.log(err);
    return false;
  }
}

const payfortOrderCreate = async (parameters, signedFields) => {
  try {
    payfortGateway.setting
  } catch (err) {
    console.log(err);
    return false;
  }
}

const stripeAuthorizeOnly = async (req) => {
  console.log('╔══════════════════════════════════════════╗')
  console.log("║ PaymentGateway - Stripe - Authorize Only ║");
  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount: req.body.amount * 100,
      currency: req.body.currency || 'usd',
      payment_method_types: req.body.payment_method_types || ['card_present'],
      capture_method: 'manual'
    });
    console.log(paymentIntent);
    console.log('╚══════════════════════════════════════════╝')
    return paymentIntent;
  } catch (err) {
    return ({
      status: false,
      data: err
    });
  }
}

const stripeCreateCardToken = async (req) => {
  try {
    return await stripe.tokens.create({
      card: {
        number: req.body.number,
        exp_month: req.body.exp_month,
        exp_year: req.body.exp_year,
        cvc: req.body.cvc
      }
    });
  } catch (err) {
    return ({
      status: false,
      data: err
    });
  }
}

const stripeCustomerCreateThenChargeCreate = async (req) => {
  try {
    return await stripe.customers.create({
      name: req.body.name,
      email: req.body.email,
      source: req.body.source
    }).then(customer => stripe.charges.create({
      amount: req.body.amount * 100,
      currency: req.body.currency,
      customer: customer.id,
      description: 'Charge done successfully'
    }));
  } catch (err) {
    return ({
      status: false,
      data: err
    });
  }
}

const stripeChargeRetrieveByPaymentID = async (paymentID) => {
  try {
    return await stripe.charges.retrieve(paymentID, {
      apiKey: stripeGatewaySettingKeySecret
    });
  } catch (err) {
    console.log(err);
    return false;
  }
}

const stripeChargePreAuthorization = async (req) => {
  try {
    return await stripe.charges.create({
      amount: req.body.amount * 100,
      currency: req.body.currency,
      source: req.body.source,
      description: req.body.description
    });
  } catch (err) {
    console.log(err);
    return false;
  }
}

// app.get('/connected-accounts', (req, res) => {
//     try {
//         stripe.charges.retrieve(listPaymentID[0], {
//                 stripeAccount: 'acct_1G9uIXBRezLOGcnE'
//             }).then(result => res.status(200).json(result))
//             .catch(err => console.error(err));
//     } catch (err) {
//         res.send(err)
//     }
// })

// app.get('/idempotency', (req, res) => {
//     try {
//         stripe.charges.create({
//             amount: 2000,
//             currency: "usd",
//             source: "tok_mastercard", // obtained with Stripe.js
//             description: "My First Test Charge (created for API docs)"
//         }, {
//             idempotencyKey: "DCGkxaUFvt7g0EzU"
//         }, function (err, charge) {
//             // asynchronously called
//             res.status(200).json({
//                 "err": err,
//                 "charge": charge
//             })
//         });
//     } catch (err) {
//         res.send(err)
//     }
// })

// app.get('/metadata', (req, res) => {
//     try {
//         stripe.charges.create({
//             amount: 2000,
//             currency: "usd",
//             source: "tok_mastercard", // obtained with Stripe.js
//             description: "My First Test Charge (created for API docs)",
//             metadata: {
//                 'order_id': '6735'
//             }
//         }, function (err, charge) {
//             // asynchronously called
//             res.status(200).json({
//                 "err": err,
//                 "charge": charge
//             })
//         });
//     } catch (err) {
//         res.send(err)
//     }
// })

// app.get('/list-charges', (req, res) => {
//     try {
//         stripe.charges.list({
//                 limit: 10
//             },
//             function (err, charges) {
//                 // asynchronously called
//                 res.status(200).json({
//                     "err": err,
//                     "charges": charges
//                 })
//             }
//         );
//     } catch (err) {
//         res.send(err)
//     }
// })

module.exports = {
  selcomOrderCreate,
  payfortOrderCreate,
  stripeAuthorizeOnly,
  stripeChargePreAuthorization,
  stripeCreateCardToken,
  stripeCustomerCreateThenChargeCreate,
  stripeChargeRetrieveByPaymentID
}
