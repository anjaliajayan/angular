const express = require('express');
const router = express.Router();
const { Tourcodes } = require('../../../../config/db');
const config = require('./../../../../config/config') 
let moment = require('moment');
const { tourcodeFetchByIDValidator, tourcodeDeleteByIDValidator, tourcodeAddValidator } = require('../../../validations/tourcode.validate')
const { makeResponse } = require("./../../../helpers/utils");

//CREATE NEW Tourcodes
// router.post('/create-new-tourcode', FUNC.validateApi(validRules.addTourCode), async (req, res) => {
router.post('/create-new-tourcode', tourcodeAddValidator, async (req, res) => {
    let { airline, trip_type, code_type, cabin_class, tourcode_name, apply_type, supplier, orgin, rbd, destination, tourcode, airline_commission, shared_commission, tour_commission, sale_start_date, sale_end_date, travel_start_date, travel_end_date } = req.body;
    
    let rbdArr = [];
    if(rbd.length > 0){
        rbd.map(function(ele) {
            rbdArr.push({text:ele})
        })
    }
    let orginArr = [];
    if(orgin.length > 0){
        orgin.map(function(ele) {
            orginArr.push({text:ele})
        })
    }
    let destinationArr = [];
    if(destination.length > 0){
        destination.map(function(ele) {
            destinationArr.push({text:ele})
        })
    }

    let rbdCommission = {
        "rbd":rbdArr,
        "commissionmode":tour_commission,
        "commission":airline_commission,
        "sharedcommission":shared_commission
    }
    
    orgin = (!orginArr.length) ? '[{"text":"ALL"}]' : JSON.stringify(orginArr);
    destination = (!destinationArr.length) ? '[{"text":"ALL"}]' : JSON.stringify(destinationArr);
    rbd = (!rbdArr.length) ? '[{"text":"ALL"}]' : JSON.stringify(rbdArr);
    formObj = {};
    formObj.airline = airline;
    formObj.rbd_commission = JSON.stringify(rbdCommission);
    formObj.trip_type = trip_type;
    formObj.code_type = code_type;
    formObj.tourcode = tourcode;
    formObj.cabin_class = cabin_class;
    formObj.tourcode_name = tourcode_name;
    formObj.apply_type = apply_type;
    formObj.orgin = orgin;
    formObj.rbd = rbd;
    formObj.destination = destination;
    formObj.sale_start_date = sale_start_date;
    formObj.sale_end_date = sale_end_date;
    formObj.travel_start_date = travel_start_date;
    formObj.travel_end_date = travel_end_date;
    formObj.supplier = JSON.stringify(supplier)
    formObj.created = moment().format("YYYY-MM-DD HH:mm:ss")
    if(formObj.mode == "Add"){
        delete formObj.tourcode_id
    }
    try {
      const result = await Tourcodes.create(formObj);
      if (result) {
        return makeResponse(res, true, 200, 'success', 'Airline Deals. Tour Code / Deal Code', 'Tour Code / Deal Code Aadded Successfully.', result)
      } else {
        return makeResponse(res, true, 200, 'success', 'Airline Deals. Tour Code / Deal Code', 'Tour Code / Deal Code Not Aadded.', result)
      }
    } catch (error) {
      console.log(error)
      return makeResponse(res, false, 200, 'success', 'Airline Deals. Tour Code / Deal Code', 'Oops! Something went wrong while processing your request.', error)
    }
});

//READ SPECIFIC Tourcodes
router.get('/fetch-tourcode/:tourcode_id', tourcodeFetchByIDValidator, async (req, res) => {
    const {tourcode_id} = req.params;
    if(!tourcode_id){
        return makeResponse(res, true, 200, 'success', 'Airline Deals. Tour Code / Deal Code', 'Tour Code / Deal Code ID required.')
    }
    try {
      const result = await Tourcodes.findOne({ where: { tourcode_id, is_deleted: false } });
      if (result) {
        return makeResponse(res, true, 200, 'success', 'Airline Deals. Tour Code / Deal Code', 'Tour Code / Deal Code Fetched Successfully.', result)
      } else {
        return makeResponse(res, false, 200, 'success', 'Airline Deals. Tour Code / Deal Code', 'No Tour Code / Deal Code Found.')
      }
    } catch (error) {
      return makeResponse(res, false, 200, 'success', 'Airline Deals. Tour Code / Deal Code', 'Oops! Something went wrong while processing your request.', error)
    }
});

//READ ALL TourcodesS
router.post('/fetch-all-tourcodes', async (req, res) => {
    let { limit, page } = req.body;
    limit = (!limit) ? parseInt(config.pageLimit) : parseInt(limit)
    page = (!page) ? parseInt(0) : parseInt(page)
    let offset = limit * page;
    try {
        let result = await Tourcodes.findAndCountAll({
            where: {is_deleted: false},
            offset: offset,
            limit: limit,
            order:[["tourcode_id","DESC"]]
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
          return makeResponse(res, true, 200, 'success', 'Airline Deals', 'Tour Code fetched successfully.', result)
        } else {
          return makeResponse(res, false, 200, 'danger', 'Airline Deals', 'Tour Code not found.')
        }
    } catch (error) {
        return makeResponse(res, false, 200, 'success', 'Airline Deals', 'Oops! Something went wrong while processing your request.', error)
    }
});

//UPDATE EXISTING Tourcodes
// router.put('/update-tourcode/:tourcode_id', FUNC.validateApi(validRules.editTourCode), async (req, res) => {
router.post('/update-tourcode/:tourcode_id', tourcodeAddValidator, async (req, res) => {
    const {tourcode_id} = req.body;
    if(!tourcode_id){
        return makeResponse(res, true, 200, 'success', 'Airline Deals. Tour Code / Deal Code', 'Provide Tour Code / Deal Code ID.')
    }
    let { airline, trip_type, code_type, cabin_class, tourcode_name, apply_type, supplier, orgin, rbd, destination, tourcode, airline_commission, shared_commission, tour_commission, sale_start_date, sale_end_date, travel_start_date, travel_end_date } = req.body;
    
    let rbdArr = [];
    let orginArr = [];    
    let destinationArr = [];

    if(rbd.length > 0){
        rbdArr = rbd.map( el => { return { text: el } });
    }
    if(orgin.length > 0){
        orginArr = orgin.map( el => { return { text: el } });
    }
    if(destination.length > 0) {
        destinationArr = destination.map( el => { return { text: el } });
    }
    
    let rbdCommission = {
        "rbd":rbdArr,
        "commissionmode":tour_commission,
        "commission":airline_commission,
        "sharedcommission":shared_commission
    }
    
    orgin = (!orginArr.length) ? '[{"text":"ALL"}]' : JSON.stringify(orginArr);;
    destination = (!destinationArr.length) ? '[{"text":"ALL"}]' : JSON.stringify(destinationArr);
    rbd = (!rbdArr.length) ? '[{"text":"ALL"}]' : JSON.stringify(rbdArr);
    formObj = {};
    formObj.airline = airline;
    formObj.rbd_commission = JSON.stringify(rbdCommission);
    formObj.trip_type = trip_type;
    formObj.code_type = code_type;
    formObj.tourcode = tourcode;
    formObj.cabin_class = cabin_class;
    formObj.tourcode_name = tourcode_name;
    formObj.apply_type = apply_type;
    formObj.orgin = orgin;
    formObj.rbd = rbd;
    formObj.destination = destination;
    formObj.sale_start_date = sale_start_date;
    formObj.sale_end_date = sale_end_date;
    formObj.travel_start_date = travel_start_date;
    formObj.travel_end_date = travel_end_date;
    formObj.supplier = JSON.stringify(supplier)
    try {
        const result = await Tourcodes.update(formObj, { where: { tourcode_id } });
        if (result) {
            return makeResponse(res, true, 200, 'success', 'Airline Deals. Tour Code / Deal Code', 'Tour Code / Deal Code Updated Successfully.', result)
        } else {
            return makeResponse(res, true, 200, 'success', 'Airline Deals. Tour Code / Deal Code', 'Tour Code / Deal Code Not Updated.', result)
        }
    } catch (error) {
        console.log(error)
        return makeResponse(res, false, 200, 'success', 'Airline Deals. Tour Code / Deal Code', 'Oops! Something went wrong while processing your request.', error)
    }
});

//DELETE SPECIFIC Tourcodes
router.post('/remove-tourcode/', tourcodeDeleteByIDValidator, async (req, res) => {
    const {tourcode_id} = req.body;
    if(!tourcode_id){
        return makeResponse(res, true, 200, 'success', 'Airline Deals. Tour Code / Deal Code', 'Provide Tourcode.')
    }
    try {
      const result = await Tourcodes.findOne({ where: { tourcode_id, is_deleted: false } });
      if (result) {
        const deleteTourcode =  await Tourcodes.update( { is_deleted: true },  { where: { tourcode_id }} );
        if(deleteTourcode){
            return makeResponse(res, true, 200, 'success', 'Airline Deals. Tour Code / Deal Code', 'Tour Code / Deal Code Deleted Successfully.', deleteTourcode)
        }else{
            return makeResponse(res, true, 200, 'success', 'Airline Deals. Tour Code / Deal Code', 'Tour Code / Deal Code Not Deleted.', deleteTourcode)
        }
      } else {
        return makeResponse(res, false, 200, 'success', 'Airline Deals. Tour Code / Deal Code', 'No Tour Code / Deal Code Found.')
      }
    } catch (error) {
      return makeResponse(res, false, 200, 'success', 'Airline Deals. Tour Code / Deal Code', 'Oops! Something went wrong while processing your request.', error)
    }
});

//DELETE ALL TourcodesS
router.post('/remove-all-tourcodes', async (req, res) => {
    try {
      const deleteTourcode = await Tourcodes.update({ is_deleted: true }, { where: {} });
      if (deleteTourcode) {
        return makeResponse(res, true, 200, 'success', 'Airline Deals. Tour Code / Deal Code', 'All Tour Code / Deal Code Deleted Successfully.', deleteTourcode)
      } else {
        return makeResponse(res, true, 200, 'success', 'Airline Deals. Tour Code / Deal Code', 'Tour Code / Deal Code Not Deleted.', deleteTourcode)
      }
    } catch (error) {
      console.log(error)
      return makeResponse(res, false, 200, 'success', 'Airline Deals. Tour Code / Deal Code', 'Oops! Something went wrong while processing your request.', error)
    }
});

module.exports = router;
