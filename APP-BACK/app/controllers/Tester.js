const express = require('express');
const router = express.Router();

//const parser = require('xml2json');
const fs = require('fs');
const path = require('path');
const _ = require('lodash');

/**
 * @swagger
 *
 * /api/test:
 *   get:
 *     tags:
 *       - Test API in Tester.js
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
router.get('/test', async (req, res) => {
    return res.sendStatus(200).send({ message: 'Welcome to Swagger Test' });
});

// router.get('/json', async (req, res) => {
//     try {    
//         const file = path.join(__dirname, '../rq_rs/flight/AirShoppingResponse.xml');

//         const xml = fs.readFileSync(file);
//         const json = JSON.parse(parser.toJson(xml));

//         const airShoppingRS = json['soapenvEnvelope']['soapenvBody']['AirShoppingRS'];
//         const echoToken = airShoppingRS['EchoToken'];
//         const dataLists = airShoppingRS['DataLists'];
//         const metadata = airShoppingRS['Metadata'];
//         const airlineOffers = airShoppingRS['OffersGroup']['AirlineOffers'];

//         return res.status(200).json(airShoppingRS['OffersGroup']['AirlineOffers']);
//         const result = [];
//         airlineOffers.map(AirlineOffer => {
//             const owner = AirlineOffer['Owner'];
//             const offers = AirlineOffer['AirlineOffer'];
//             let temp = [];
//             offers.forEach( offer => {
//                 const offerId = offer['OfferID']['$t'];
//                 const segment = offer['PricedOffer']['Associations']['ApplicableFlight']['FlightSegmentReference']['ref'];
//                 const destination = offer['PricedOffer']['Associations']['ApplicableFlight']['OriginDestinationReferences'];
//                 const flight = offer['PricedOffer']['Associations']['ApplicableFlight']['FlightReferences'];
//                 let obj = {
//                     flight,
//                     key: destination,
//                     [flight]: {
//                         owner,
//                         segment: [segment],
//                         offers: [offerId]
//                     }
//                 };
//                 let oId = temp.find(o => o.flight === flight);
//                 if (oId) {
//                     oId[flight].offers.push(offerId);
//                     temp.push(oId);
//                 } else {
//                     temp.push(obj);
//                 }
//             }); 
//             const temp_data = _.uniqBy(temp, 'flight');
//             const grouped = _.mapValues(_.groupBy(temp_data, 'key'), flist => flist.map(tflight => _.omit(tflight, 'key')));
//             result.push(grouped);
//         });

//         return res.status(200).json({
//             EchoToken: echoToken,
//             DataLists: dataLists,
//             Metadata: metadata,
//             OfferList: result
//         });
//     } catch(e) {
//         return res.status(500).json(e);
//     }
// });

module.exports = router;