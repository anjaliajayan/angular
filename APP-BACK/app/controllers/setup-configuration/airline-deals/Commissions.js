const express = require('express');
const router = express.Router();
const { Commissions, db } = require('../../../../config/db');
var config = require('../../../../config/config');
let moment = require('moment');
const { commissionAddValidator, commissionFetchByIDValidator, commissionDeleteByIDValidator } = require('../../../validations/commision.validate')
const { makeResponse } = require("./../../../helpers/utils");

//CREATE NEW Commissions
// router.post('/create-new-commission', FUNC.validateApi(validRules.addCommission), async (req, res) => {
router.post('/create-new-commission', commissionAddValidator, async (req, res) => {
    let { airline, trip_type, code_type, cabin_class, orgin, destination, commission, commissionmode, rbd, sale_start_date, sale_end_date, travel_start_date, travel_end_date, supplier, } = req.body;
        
    let rbdArr = [];
    if(rbd && rbd.length > 0){
        rbd.map(function(ele) {
            rbdArr.push({text:ele})
        })
    }
    let orginArr = [];
    if(orgin && orgin.length > 0){
        orgin.map(function(ele) {
            orginArr.push({text:ele})
        })
    }
    let destinationArr = [];
    if(destination && destination.length > 0){
        destination.map(function(ele) {
            destinationArr.push({text:ele})
        })
    }
    
    let rbdCommission = {
        "rbd":rbdArr,
        "commissionmode":commissionmode,
        "commission":commission
    
    }
    
    orgin = (!orginArr.length) ? '[{"text":"ALL"}]' : JSON.stringify(orginArr);
    destination = (!destinationArr.length) ? '[{"text":"ALL"}]' : JSON.stringify(destinationArr);
    rbd = (!rbdArr.length) ? '[{"text":"ALL"}]' : JSON.stringify(rbdArr);
    formObj = {};
    formObj.airline = airline;
    formObj.rbd_commission = JSON.stringify(rbdCommission);
    formObj.trip_type = trip_type;
    formObj.code_type = code_type;
    formObj.commission = commission;
    formObj.cabin_class = cabin_class;
    formObj.orgin = orgin;
    formObj.rbd = rbd;
    formObj.destination = destination;
    formObj.sale_start_date = sale_start_date;
    formObj.sale_end_date = sale_end_date;
    formObj.travel_start_date = travel_start_date;
    formObj.travel_end_date = travel_end_date;
    formObj.supplier = JSON.stringify(supplier)
    formObj.created = moment().format("YYYY-MM-DD HH:mm:ss")
    
    try {
      const result = await Commissions.create(formObj);
      if (result) {
        return makeResponse(res, true, 200, 'success', 'Airline Deals. Tour Code / Deal Code', 'Commission Aadded Successfully.', result)
      } else {
        return makeResponse(res, true, 200, 'success', 'Airline Deals. Tour Code / Deal Code', 'Commission Not Aadded.', result)
      }
    } catch (error) {
      console.log(error)
      return makeResponse(res, false, 200, 'success', 'Airline Deals. Tour Code / Deal Code', 'Oops! Something went wrong while processing your request.', error)
    }
});

//READ SPECIFIC Commissions
router.get('/fetch-commission/:commission_id', commissionFetchByIDValidator, async (req, res) => {
    const {commission_id} = req.params;
    if(!commission_id){
        return makeResponse(res, true, 200, 'success', 'Airline Deals. Tour Code / Deal Code', 'Commission ID required.')
    }
    try {
        const result = await Commissions.findOne({where: { commission_id, is_deleted: false }});
        if (result) {
            return makeResponse(res, true, 200, 'success', 'Airline Deals. Tour Code / Deal Code', 'Commission Fetched Successfully.', result)
          } else {
            return makeResponse(res, false, 200, 'success', 'Airline Deals. Tour Code / Deal Code', 'No Commission Found.')
          }
    } catch (error) {
        return makeResponse(res, false, 200, 'success', 'Airline Deals. Tour Code / Deal Code', 'Oops! Something went wrong while processing your request.', error)
    }
});

//READ ALL commissionsS
router.post('/fetch-all-commissions', async (req, res) => {
    let { limit, page } = req.body;
    limit = (!limit) ? parseInt(config.pageLimit) : parseInt(limit)
    page = (!page) ? parseInt(0) : parseInt(page)
    let offset = limit * page;
    try {
      let result = await Commissions.findAndCountAll({
        where: { is_deleted: false },
        offset: offset,
        limit: limit,
        order:[["commission_id","DESC"]]
      })
      let dataArr = [];
      if (result.count > 0 && result.rows.length > 0) {
        result.rows.map(row => {
          dataArr.push(row);
        });
        result = {
          data: dataArr,
          total: result.count,
          page: page
        }
        return makeResponse(res, true, 200, 'success', 'Airline Deals', 'Commissions fetched successfully.', result)
      } else {
        return makeResponse(res, false, 200, 'danger', 'Airline Deals', 'Commissions not found.')
      }
    } catch (error) {
      console.log(error)
      return makeResponse(res, false, 200, 'success', 'Airline Deals. Tour Code / Deal Code', 'Oops! Something went wrong while processing your request.', error)
    }
});

//UPDATE EXISTING Commissions
// router.post('/update-commission/', FUNC.validateApi(validRules.editCommission), async (req, res) => {
router.post('/update-commission/:commission_id', commissionAddValidator, async (req, res) => {
    const {commission_id} = req.body;
    if(!commission_id){
        return makeResponse(res, true, 200, 'success', 'Airline Deals. Tour Code / Deal Code', 'Commission ID required.')
    }
    let { airline, trip_type, code_type, cabin_class, supplier, orgin, rbd, destination, commission, commissionmode, sale_start_date, sale_end_date, travel_start_date, travel_end_date } = req.body;
        
    let rbdArr = [];
    let orginArr = [];    
    let destinationArr = [];

    if(rbd && rbd.length > 0){
        rbdArr = rbd.map( el => { return { text: el } });
    }
    if(orgin && orgin.length > 0){
        orginArr = orgin.map( el => { return { text: el } });
    }
    if(destination && destination.length > 0) {
        destinationArr = destination.map( el => { return { text: el } });
    }
    
    let rbdCommission = {
        "rbd":rbdArr,
        "commissionmode":commissionmode,
        "commission":commission
    }
    
    orgin = (!orginArr.length) ? '[{"text":"ALL"}]' : JSON.stringify(orginArr);;
    destination = (!destinationArr.length) ? '[{"text":"ALL"}]' : JSON.stringify(destinationArr);
    rbd = (!rbdArr.length) ? '[{"text":"ALL"}]' : JSON.stringify(rbdArr);
    formObj = {};
    formObj.airline = airline;
    formObj.rbd_commission = JSON.stringify(rbdCommission);
    formObj.trip_type = trip_type;
    formObj.code_type = code_type;
    formObj.commission = commission;
    formObj.cabin_class = cabin_class;
    formObj.orgin = orgin;
    formObj.rbd = rbd;
    formObj.destination = destination;
    formObj.sale_start_date = sale_start_date;
    formObj.sale_end_date = sale_end_date;
    formObj.travel_start_date = travel_start_date;
    formObj.travel_end_date = travel_end_date;
    formObj.supplier = JSON.stringify(supplier);
    
    try {
        const result = await Commissions.update(formObj, { where: { commission_id } });
        if (result) {
            return makeResponse(res, true, 200, 'success', 'Airline Deals. Tour Code / Deal Code', 'Commission Updated Successfully.', result)
        } else {
            return makeResponse(res, true, 200, 'success', 'Airline Deals. Tour Code / Deal Code', 'Commission Not Updated.', result)
        }
    } catch (error) {
        return makeResponse(res, false, 200, 'success', 'Airline Deals. Tour Code / Deal Code', 'Oops! Something went wrong while processing your request.', error)
    }
});

//DELETE SPECIFIC Commissions
router.post('/remove-commission/', commissionDeleteByIDValidator, async (req, res) => {
    const { commission_id } = req.body;
    if (!commission_id) {
      return makeResponse(res, true, 200, 'success', 'Airline Deals. Tour Code / Deal Code', 'Provide Commission ID.')
    }
    try {
      const result = await Commissions.findOne({ where: { commission_id, is_deleted: false } });
      if (result) {
        const deleteCommission = await Commissions.update({ is_deleted: true }, { where: { commission_id } });
        if (deleteCommission) {
          return makeResponse(res, true, 200, 'success', 'Airline Deals. Tour Code / Deal Code', 'Commission Deleted Successfully.', deleteCommission)
        } else {
          return makeResponse(res, true, 200, 'success', 'Airline Deals. Tour Code / Deal Code', 'Commission Not Deleted.', deleteCommission)
        }
      } else {
        return makeResponse(res, false, 200, 'success', 'Airline Deals. Tour Code / Deal Code', 'No Commission Found.')
      }
    } catch (error) {
      return makeResponse(res, false, 200, 'success', 'Airline Deals. Tour Code / Deal Code', 'Oops! Something went wrong while processing your request.', error)
    }
});

//DELETE ALL commissionsS
router.post('/remove-all-commissions', async (req, res) => {
    try {
      const deleteCommission = await Commissions.update({ is_deleted: true }, { where: {} });
      if (deleteCommission) {
        return makeResponse(res, true, 200, 'success', 'Airline Deals. Tour Code / Deal Code', 'All Commissions Deleted Successfully.', deleteCommission)
      } else {
        return makeResponse(res, true, 200, 'success', 'Airline Deals. Tour Code / Deal Code', 'Commissions Not Deleted.', deleteCommission)
      }
    } catch (error) {
      console.log(error)
      return makeResponse(res, false, 200, 'success', 'Airline Deals. Tour Code / Deal Code', 'Oops! Something went wrong while processing your request.', error)
    }
});

module.exports = router;
