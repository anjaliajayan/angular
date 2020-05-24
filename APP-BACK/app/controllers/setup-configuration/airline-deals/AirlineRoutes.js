const express = require('express');
const router = express.Router();
const { AirlineRoutes } = require('../../../../config/db');
var config = require('../../../../config/config');
let moment = require('moment');
const { routesAddValidator, routesFetchByIDValidator, routesDeleteByIDValidator } = require('../../../validations/airlineroutes.validate')
const { makeResponse } = require("./../../../helpers/utils");

//CREATE NEW Routes
// commissionAddValidator,
router.post('/create-new-routes', routesAddValidator, async (req, res) => {
    let { organisation_id, supplier, origin, destination, trip_type, routes } = req.body;

    let originArr = [];
    if(origin && origin.length > 0){
        origin.map(function(ele) {
            originArr.push({text:ele})
        })
    }
    let destinationArr = [];
    if(destination && destination.length > 0){
        destination.map(function(ele) {
            destinationArr.push({text:ele})
        })
    }

    origin = (!originArr.length) ? '[{"text":"ALL"}]' : JSON.stringify(originArr);
    destination = (!destinationArr.length) ? '[{"text":"ALL"}]' : JSON.stringify(destinationArr);
    formObj = {};
    formObj.organisation_id = organisation_id;
    formObj.supplier = JSON.stringify(supplier)
    formObj.origin = origin;
    formObj.destination = destination;
    formObj.trip_type = trip_type;    
    formObj.routes = JSON.stringify(routes);
    formObj.created = moment().format("YYYY-MM-DD HH:mm:ss")
    formObj.created_by = req.user.users_id;

    try {
      const result = await AirlineRoutes.create(formObj);
      if (result) {
        return makeResponse(res, true, 200, 'success', 'Airline Deals.', 'Airline Routes Aadded Successfully.', result)
      } else {
        return makeResponse(res, true, 200, 'success', 'Airline Deals.', 'Airline Routes Not Aadded.', result)
      }
    } catch (error) {
      console.log(error)
      return makeResponse(res, false, 200, 'success', 'Airline Deals.', 'Oops! Something went wrong while processing your request.', error)
    }
});

//UPDATE EXISTING Airline Routes
router.post('/update-routes/', routesAddValidator, async (req, res) => {
    const {routes_id} = req.body;
    if(!routes_id){
        return makeResponse(res, true, 200, 'success', 'Airline Deals.', 'Airline Routes ID required.')
    }
    const resultAR = await AirlineRoutes.findOne({where: { routes_id }});
    if (!resultAR) {
        return makeResponse(res, false, 200, 'success', 'Airline Deals.', 'No Airline Routes Found.')
    }
    let { organisation_id, supplier, origin, destination, trip_type, routes } = req.body;

    let originArr = [];
    if(origin && origin.length > 0){
        origin.map(function(ele) {
            originArr.push({text:ele})
        })
    }
    let destinationArr = [];
    if(destination && destination.length > 0){
        destination.map(function(ele) {
            destinationArr.push({text:ele})
        })
    }

    origin = (!originArr.length) ? '[{"text":"ALL"}]' : JSON.stringify(originArr);
    destination = (!destinationArr.length) ? '[{"text":"ALL"}]' : JSON.stringify(destinationArr);
    formObj = {};
    formObj.organisation_id = organisation_id;
    formObj.supplier = JSON.stringify(supplier)
    formObj.origin = origin;
    formObj.destination = destination;
    formObj.trip_type = trip_type;    
    formObj.routes = JSON.stringify(routes);
    
    try {
        const result = await AirlineRoutes.update(formObj, { where: { routes_id } });
        if (result) {
            return makeResponse(res, true, 200, 'success', 'Airline Deals.', 'Airline Routes Updated Successfully.', result)
        } else {
            return makeResponse(res, true, 200, 'success', 'Airline Deals.', 'Airline Routes Not Updated.', result)
        }
    } catch (error) {
        return makeResponse(res, false, 200, 'success', 'Airline Deals.', 'Oops! Something went wrong while processing your request.', error)
    }
});

//READ SPECIFIC Airline Routes
router.get('/fetch-routes/:routes_id', routesFetchByIDValidator, async (req, res) => {
    const {routes_id} = req.params;
    if(!routes_id){
        return makeResponse(res, true, 200, 'success', 'Airline Deals.', 'Airline Routes ID required.')
    }
    try {
        const result = await AirlineRoutes.findOne({where: { routes_id, is_deleted: false }});
        if (result) {
            return makeResponse(res, true, 200, 'success', 'Airline Deals.', 'Airline Routes Fetched Successfully.', result)
          } else {
            return makeResponse(res, false, 200, 'success', 'Airline Deals.', 'No Airline Routes Found.')
          }
    } catch (error) {
        return makeResponse(res, false, 200, 'success', 'Airline Deals.', 'Oops! Something went wrong while processing your request.', error)
    }
});

//READ ALL Airline Routes
router.post('/fetch-all-routes', async (req, res) => {
    let { limit, page } = req.body;
    limit = (!limit) ? parseInt(config.pageLimit) : parseInt(limit)
    page = (!page) ? parseInt(0) : parseInt(page)
    let offset = limit * page;
    try {
      let result = await AirlineRoutes.findAndCountAll({
        where: { is_deleted: false },
        offset: offset,
        limit: limit,
        order:[["routes_id","DESC"]]
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
        return makeResponse(res, true, 200, 'success', 'Airline Deals', 'Airline Routes fetched successfully.', result)
      } else {
        return makeResponse(res, false, 200, 'danger', 'Airline Deals', 'Airline Routes not found.')
      }
    } catch (error) {
      return makeResponse(res, false, 200, 'success', 'Airline Deals.', 'Oops! Something went wrong while processing your request.', error)
    }
});

//DELETE SPECIFIC Airline Routes
router.post('/remove-routes/', routesDeleteByIDValidator, async (req, res) => {
    const { routes_id } = req.body;
    if (!routes_id) {
      return makeResponse(res, true, 200, 'success', 'Airline Deals.', 'Airline Routes ID required.')
    }
    try {
      const result = await AirlineRoutes.findOne({ where: { routes_id } });
      if (!result) {
        return makeResponse(res, false, 200, 'success', 'Airline Deals.', 'No Airline Routes Found.')
      }
      const deleteRoutes = await AirlineRoutes.update({ is_deleted: true }, { where: { routes_id } });
      if (deleteRoutes) {
        return makeResponse(res, true, 200, 'success', 'Airline Deals.', 'Airline Routes Deleted Successfully.', deleteRoutes)
      } else {
        return makeResponse(res, true, 200, 'success', 'Airline Deals.', 'Airline Routes Not Deleted.', deleteRoutes)
      }
    } catch (error) {
      return makeResponse(res, false, 200, 'success', 'Airline Deals.', 'Oops! Something went wrong while processing your request.', error)
    }
});

//DELETE ALL routes
router.post('/remove-all-routes', async (req, res) => {
    try {
      const deleteRoutes = await AirlineRoutes.update({ is_deleted: true }, { where: {} });
      if (deleteRoutes) {
        return makeResponse(res, true, 200, 'success', 'Airline Deals.', 'All Airline Routes Deleted Successfully.', deleteRoutes)
      } else {
        return makeResponse(res, true, 200, 'success', 'Airline Deals.', 'Airline Routes Not Deleted.', deleteRoutes)
      }
    } catch (error) {
      console.log(error)
      return makeResponse(res, false, 200, 'success', 'Airline Deals.', 'Oops! Something went wrong while processing your request.', error)
    }
});

module.exports = router;
