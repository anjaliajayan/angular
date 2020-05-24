const request = require('request');
const selcomGateway = require('./paymentGateways/selcom.gateway');
const payfortGateway = require('./paymentGateways/payfort.gateway');


const selcomCreateOrder = async (parameters, signedFields) => {

    try {
        const gs = selcomGateway.setting();

        var options = {
            'method': 'POST',
            'url': gs.url,
            'headers': {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Cache-Control': 'no-cache',
                'authorization': 'SELCOM ' + Buffer.from(gs.authorization).toString('base64'),
                'Digest': selcomGateway.computeSignature(parameters, signedFields, new Date().toISOString(), gs.apiSecret),
                'Digest-Method': 'HS256',
                'Timestamp': new Date().toISOString(),
                'Signed-Fields': signedFields
            },
            body: JSON.stringify(parameters)
        }

        await request(options, function (error, response) {
            if (error) {
                throw new Error(error);
            } 
            console.log(response.body)
            return response.body;
        })
    }
    catch (err) {
        console.log(err);
        return false;
    }
};



const payfortCreateOrder = async(parameters, signedFields) => {
    try {
        payfortGateway.setting
    }
    catch (err) {
        console.log(err);
        return false;
    }
};


module.exports = {
    selcomCreateOrder
}