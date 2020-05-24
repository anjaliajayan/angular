const express = require('express');
const router = express.Router();
const config = require('../../config/config');
const { Airport, Sequelize } = require('../../config/db')
const Op = Sequelize.Op;
const {makeResponse} = require('../helpers/utils');
const insuranceDao = require('../dao/insurance.dao');

/**
 * @swagger
 *
 * /api/insurance:
 *   post:
 *    tags:
 *      - Insurance
 *    summary: Login to system
 *    description: Login to get access token
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
router.post('/search', insuranceDao.searchInsurance);
router.post('/block', insuranceDao.blockInsurance);
router.post('/book', insuranceDao.bookInsurance);
// router.post('/cancel', insuranceDao.cancelInsurance);
// router.post('/orderretrieve', insuranceDao.orderretrieveInsurance);
// router.post('/corporatebook', insuranceDao.corporatebookInsurance);

router.get('/get-airports/:airport_name', async (req, res) => {
    const {airport_name} = req.params;

    if(!airport_name){
        return makeResponse(res, false, 200, 'error', 'Airport', 'Airport name required.');
    }
    let result = await Airport.findAll({
        where: {AirportName: { [Op.like]: '%' + airport_name + '%' }},
        order:[["AirportName", "ASC"]]
    })
    
    if(result){
        return makeResponse(res, true, 200, 'success', 'Airport', 'Airport fetched successfully.', result);
    }else{
        return makeResponse(res, false, 200, 'danger', 'Airport', 'Airport not found.');
    }
});


module.exports = router;