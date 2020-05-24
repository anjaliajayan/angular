const express = require('express');
const router = express.Router();``
const { ActivitiesSearchLog, CarSearchLog,User_B, sequelizeOrganisation_B ,FlightSearchLog, HotelSearchLog, InsuranceSearchLog, TransferSearchLog, AuditTrail, SegmentDetails, db, Op } = require('../../../config/db');
const config = require('./../../../config/config')
const {makeResponse, dateFormat} = require('../../helpers/utils');

//READ ALL SEARCH LOGS

router.post('/fetch-all-Activities-Search-Log', async (req, res) => {
    let { limit, page } = req.body;
    limit = (!limit) ? parseInt(config.pageLimit) : parseInt(limit)
    page = (!page) ? parseInt(0) : parseInt(page)
    let offset = limit * page;

    let { a_startDate, h_endDate, organisation_id } = req.body
    let start_date = end_date = ""

    if (a_startDate && a_startDate != '')
        start_date = dateFormat(a_startDate)
    if (a_endDate && a_endDate != '')
        end_date = dateFormat(a_endDate)

    let whereQuery = {};
    if(start_date && end_date){
        whereQuery.created_at = {
            [Op.gte]: start_date,
            [Op.lte]: end_date
        }
    }
    if(organisation_id){
        whereQuery.organisation_id = organisation_id;
    }
    try {
        const result = await ActivitiesSearchLog.findAndCountAll({
            where: whereQuery,
            limit: limit,
            offset: offset,
            include:[{
                model: sequelizeOrganisation_B,
                attributes: ['name'],
                required:false
            },{
                model: User_B,
                attributes: ['username'],
                required:false
            }]
        })
        let dataArr = [];
        if(result.count > 0){
            result.rows.map(row => {
                dataArr.push(row);
            });
            return res.json({
                status: true,
                code: 200,
                type: 'success',
                title: "Activities Search Logs",
                message: 'Activities Search Logs Fetched Successfully.',
                result: dataArr,
                totalResult: result.count,
                page: page
            });
        }else{
            return res.json({
                status: false,
                code: 200,
                type: 'success',
                title: "Activities Search Logs",
                message: 'No Activities Search Log Found.',
                result: dataArr,
                totalResult: result.count,
                page: page
            });
        }
    } catch (error) {
        console.log(error)
        return makeResponse(res, false, 200, 'success', 'Activities Search Logs.', 'Oops! Something went wrong while processing your request.', error)
    }
});

router.post('/fetch-all-Car-Search-Log', async (req, res) => {
    let { limit, page } = req.body;
    limit = (!limit) ? parseInt(config.pageLimit) : parseInt(limit)
    page = (!page) ? parseInt(0) : parseInt(page)
    let offset = limit * page;

    let { c_startDate, c_endDate, organisation_id } = req.body
    let start_date = end_date = ""
    
    if (c_startDate && c_startDate != '')
        start_date = dateFormat(c_startDate)
    if (c_endDate && c_endDate != '')
        end_date = dateFormat(c_endDate)

    let whereQuery = {};
    if(start_date && end_date){
        whereQuery.created_at = {
            [Op.gte]: start_date,
            [Op.lte]: end_date
        }
    }
    if(organisation_id){
        whereQuery.organisation_id = organisation_id;
    }
    try {
        const result = await CarSearchLog.findAndCountAll({
            where: whereQuery,
            offset: offset,
            limit: limit,
            include:[{
                model: sequelizeOrganisation_B,
                attributes: ['name'],
                required:false
            },{
                model: User_B,
                attributes: ['username'],
                required:false
            }]
        })
        let dataArr = [];
        if(result.count > 0){
            result.rows.map(row => {
                dataArr.push(row);
            });
            return res.json({
                status: true,
                code: 200,
                type: 'success',
                title: "Car Search Logs",
                message: 'Car Search Logs Fetched Successfully.',
                result: dataArr,
                totalResult: result.count,
                page: page
            });
        }else{
            return res.json({
                status: false,
                code: 200,
                type: 'success',
                title: "Car Search Logs",
                message: 'No Car Search Log Found.',
                result: dataArr,
                totalResult: result.count,
                page: page
            });
        }
    } catch (error) {
        console.log(error)
        return makeResponse(res, false, 200, 'success', 'Car Search Logs.', 'Oops! Something went wrong while processing your request.', error)
    }
});

router.get('/fetch-all-Flight-Search-Log_old', (req, res) => {
    // console.log(req.body);
    
    FlightSearchLog.findAll(req.body, {
        where: {
            //TEST WITH INPUT FIELDS
        }
    })
        .then((FlightSearchLog) => {
            // FlightSearchLog = groupByDate( FlightSearchLog )
            res.json({
                type: 'data',
                status: 200,
                msg: 'Flight Search Logs Fetched Successfully.',
                FlightSearchLog: FlightSearchLog
            });
        }).catch((error) => {
            // console.log('eee ', error)
            res.status(500).json({
                type: 'error',
                status: 400,
                msg: 'Oops! Something went wrong while processing your request.',
            });
        });
});
// Don't use this api. same is used below (fetch-all-Flight-Search-Logs).
router.post('/fetch-all-Flight-Search-Logsssss', (req, res) => {
    // // console.log(req.body);
    let end_date = new Date();
    let start_date =new Date( new Date().setMonth( end_date.getMonth() -2 ) );
    
    var params = req.body;
    if(params.start_date)
        start_date = params.start_date
    if(params.end_date)
        end_date = params.end_date
    
    let whereQuery = {}
    
    whereQuery.created_at = {
        [Op.gte] : start_date,
        [Op.lte] : end_date
    }
    if( params.agent_code )
        whereQuery.agent_code = params.agent_code;

    FlightSearchLog.findAll({        
        where: whereQuery
    })
        .then((FlightSearchLog) => {
            // FlightSearchLog = groupByDate( FlightSearchLog )
            
            FlightSearchLog.forEach(function (element) {                
                element.dataValues.stream = JSON.parse(element.dataValues.stream)
              });

            res.json({
                type: 'data',
                status: 200,
                msg: 'Flight Search Logs Fetched Successfully.',
                FlightSearchLog: FlightSearchLog
            });
        }).catch((error) => {
            // console.log('eee ', error)
            res.status(500).json({
                type: 'error',
                status: 400,
                msg: 'Oops! Something went wrong while processing your request.',
            });
        });
});

router.post('/fetch-all-Hotel-Search-Log', async (req, res) => {
    let { limit, page } = req.body;
    limit = (!limit) ? parseInt(config.pageLimit) : parseInt(limit)
    page = (!page) ? parseInt(0) : parseInt(page)
    let offset = limit * page;

    let { h_startDate, h_endDate, organisation_id } = req.body
    let start_date = end_date = ""

    if (h_startDate && h_startDate != '')
        start_date = dateFormat(h_startDate)
    if (h_endDate && h_endDate != '')
        end_date = dateFormat(h_endDate)

    let whereQuery = {};
    if(start_date && end_date){
        whereQuery.created_at = {
            [Op.gte]: start_date,
            [Op.lte]: end_date
        }
    }
    if(organisation_id){
        whereQuery.organisation_id = organisation_id;
    }
    try {
        const result = await HotelSearchLog.findAndCountAll({
            where: whereQuery,
            offset: offset,
            limit: limit,
            include:[{
                model: sequelizeOrganisation_B,
                attributes: ['name'],
                required:false
            },{
                model: User_B,
                attributes: ['username'],
                required:false
            }]
        })
        
        let dataArr = [];
        if(result.count > 0){
            result.rows.map(row => {
                dataArr.push(row);
            });
            return res.json({
                status: true,
                code: 200,
                type: 'success',
                title: "Hotel Search Logs",
                message: 'Hotel Search Logs Fetched Successfully.',
                result: dataArr,
                totalResult: result.count,
                page: page
            });
        }else{
            return res.json({
                status: false,
                code: 200,
                type: 'success',
                title: "Hotel Search Logs",
                message: 'No Hotel Search Log Found.',
                result: dataArr,
                totalResult: result.count,
                page: page
            });
        }
    } catch (error) {
        console.log(error)
        return makeResponse(res, false, 200, 'success', 'Hotel Search Logs.', 'Oops! Something went wrong while processing your request.', error)
    }
});

router.post('/fetch-all-Insurance-Search-Log', async (req, res) => {
    let { limit, page } = req.body;
    limit = (!limit) ? parseInt(config.pageLimit) : parseInt(limit)
    page = (!page) ? parseInt(0) : parseInt(page)
    let offset = limit * page;

    let { i_startDate, i_endDate, organisation_id } = req.body
    let start_date = end_date = ""

    if (i_startDate && i_startDate != '')
        start_date = dateFormat(i_startDate)
    if (i_endDate && i_endDate != '')
        end_date = dateFormat(i_endDate)

    let whereQuery = {};
    if(start_date && end_date){
        whereQuery.created_at = {
            [Op.gte]: start_date,
            [Op.lte]: end_date
        }
    }
    if(organisation_id){
        whereQuery.organisation_id = organisation_id;
    }
    try {
        const result = await InsuranceSearchLog.findAndCountAll({
            where: whereQuery,
            offset: offset,
            limit: limit,
            include:[{
                model: sequelizeOrganisation_B,
                attributes: ['name'],
                required:false
            },{
                model: User_B,
                attributes: ['username'],
                required:false
            }]
        })
        let dataArr = [];
        if(result.count > 0){
            result.rows.map(row => {
                dataArr.push(row);
            });
            return res.json({
                status: true,
                code: 200,
                type: 'success',
                title: "Insurance Search Logs",
                message: 'Insurance Search Logs Fetched Successfully.',
                result: dataArr,
                totalResult: result.count,
                page: page
            });
        }else{
            return res.json({
                status: false,
                code: 200,
                type: 'success',
                title: "Insurance Search Logs",
                message: 'No Insurance Search Log Found.',
                result: dataArr,
                totalResult: result.count,
                page: page
            });
        }
    } catch (error) {
        console.log(error)
        return makeResponse(res, false, 200, 'success', 'Insurance Search Logs.', 'Oops! Something went wrong while processing your request.', error)
    }
});

router.post('/fetch-all-Transfer-Search-Log', async(req, res) => {
    let { limit, page } = req.body;
    limit = (!limit) ? parseInt(config.pageLimit) : parseInt(limit)
    page = (!page) ? parseInt(0) : parseInt(page)
    let offset = limit * page;

    let { t_startDate, t_endDate, organisation_id } = req.body
    let start_date = end_date = ""

    if (t_startDate && t_startDate != '')
        start_date = dateFormat(t_startDate)
    if (t_endDate && t_endDate != '')
        end_date = dateFormat(t_endDate)

    let whereQuery = {};
    if(start_date && end_date){
        whereQuery.created_at = {
            [Op.gte]: start_date,
            [Op.lte]: end_date
        }
    }
    if(organisation_id){
        whereQuery.organisation_id = organisation_id;
    }
    try {
        const result = await TransferSearchLog.findAndCountAll({
            where: whereQuery,
            offset: offset,
            limit: limit,
            include:[{
                model: sequelizeOrganisation_B,
                attributes: ['name'],
                required:false
            },{
                model: User_B,
                attributes: ['username'],
                required:false
            }]
        })
        let dataArr = [];
        if(result.count > 0){
            result.rows.map(row => {
                dataArr.push(row);
            });
            return res.json({
                status: true,
                code: 200,
                type: 'success',
                title: "Transfer Search Logs",
                message: 'Transfer Search Logs Fetched Successfully.',
                result: dataArr,
                totalResult: result.count,
                page: page
            });
        }else{
            return res.json({
                status: false,
                code: 200,
                type: 'success',
                title: "Transfer Search Logs",
                message: 'No Transfer Search Log Found.',
                result: dataArr,
                totalResult: result.count,
                page: page
            });
        }
    } catch (error) {
        console.log(error)
        return makeResponse(res, false, 200, 'success', 'Transfer Search Logs.', 'Oops! Something went wrong while processing your request.', error)
    }
});

router.get('/fetch-all-segment-details', (req, res) => {
    // console.log(req.body);
    SegmentDetails.findAll(req.body, {
        where: {
            //TEST WITH INPUT FIELDS
        }
    })
        .then((segment) => {
            res.json({
                type: 'data',
                status: 200,
                msg: 'Segments Details Fetched Successfully.',
                segmentDetails: segment
            });
        }).catch((error) => {
            res.status(500).json({
                type: 'error',
                status: 400,
                msg: 'Oops! Something went wrong while processing your request.',
            });
        });
});

router.post('/fetch-all-Audit-Trail', async (req, res) => {
    let { limit, page } = req.body;
    limit = (!limit) ? parseInt(config.pageLimit) : parseInt(limit)
    page = (!page) ? parseInt(0) : parseInt(page)
    let offset = limit * page;

    let { start_date, end_date, platform, module, event } = req.body

    if (start_date && start_date != '')
        start_date = dateFormat(start_date)
    if (end_date && end_date != '')
        end_date = dateFormat(end_date)

    let whereQuery = {};
    if(start_date && end_date){
        whereQuery.created_at = {
            [Op.gte]: start_date,
            [Op.lte]: end_date
        }
    }
    if(platform){
        whereQuery.platform = platform;
    }
    if(module){
        whereQuery.module = module;
    }
    if(event){
        whereQuery.event = event;
    }
    try {
        const result = await AuditTrail.findAndCountAll({
            where: whereQuery,
            offset: offset,
            limit: limit
        })
        let dataArr = [];
        if(result.count > 0){
            result.rows.map(row => {
                dataArr.push(row);
            });
            return res.json({
                status: true,
                code: 200,
                type: 'success',
                title: "Audit Trail Logs",
                message: 'Audit Trail Logs Fetched Successfully.',
                result: dataArr,
                totalResult: result.count,
                page: page
            });
        }else{
            return res.json({
                status: false,
                code: 200,
                type: 'success',
                title: "Audit Trail Logs",
                message: 'No Audit Trail Log Found.',
                result: dataArr,
                totalResult: result.count,
                page: page
            });
        }
    } catch (error) {
        console.log(error)
        return makeResponse(res, false, 200, 'success', 'Audit Trail Logs.', 'Oops! Something went wrong while processing your request.', error)
    }
});

router.get('/Flight-Search-Log/count', (req, res) => {
    // var currentMonth = new Date().getMonth();
    // if( req.query.month )
    //     currentMonth = req.query.month;
    const currentYear = new Date().getFullYear();
    // const searchFrom = new Date(currentYear, 0 , 1);
    // const searchTo = new Date(currentYear+1, 0, 1);
    const currentMonth = new Date().getMonth();
    const searchFrom = new Date(currentYear-1, currentMonth , 2);
    const searchTo = new Date(currentYear, currentMonth, 2)
    

    // FlightSearchLog.findAll({
    //     where: {
    //         updateFrom : 'search'
    //     },
        
    // })

    FlightSearchLog.findAll({
        where: {
            created_at: {
              [Op.gt]: searchFrom,
              [Op.lte]: searchTo
            },
            updateFrom : 'search'
        },
        attributes: ['platform', 
            [db.fn('count', db.col('flights_search_logs_id')), 'count']
        ], 
        group: ['platform'],
        // order: [['created_at', 'DESC']]
    })
        .then((FlightSearchLog) => {
            // FlightSearchLog = FlightSearchLog
            res.json({
                type: 'data',
                status: 200,
                msg: 'Flight Search Logs Fetched Successfully.',
                FlightSearchLog: FlightSearchLog
            });
        }).catch((error) => {
            res.status(500).json({
                type: 'error',
                status: 400,
                msg: 'Oops! Something went wrong while processing your request.',
            });
        });
});

router.get('/Flight-Search-Log/monthlwise', (req, res) => {
    // var currentMonth = new Date().getMonth();
    // if( req.query.month )
    //     currentMonth = req.query.month;
    const currentYear = new Date().getFullYear();
    // const searchFrom = new Date(currentYear, 0 , 1);
    // const searchTo = new Date(currentYear+1, 0, 1);
    const currentMonth = new Date().getMonth();
    const searchFrom = new Date(currentYear-1, currentMonth , 2);
    const searchTo = new Date(currentYear, currentMonth, 2)

    FlightSearchLog.findAll({
        where: {
            created_at: {
              [Op.gt]: searchFrom,
              [Op.lte]: searchTo
            },
            // updateFrom : 'search'
        },
        attributes: [
            'updateFrom',
            [db.fn('count', db.col('updateFrom')), 'count'],
            [db.fn('month', db.col('created_at')), 'month']
        ], 
        group: ['month', 'updateFrom'],
        // order: [['created_at', 'DESC']]
    })
        .then((FlightSearchLog) => {
            FlightSearchLog = combineLogsByPlatoform( FlightSearchLog )
            res.json({
                type: 'data',
                status: 200,
                msg: 'Flight Search Logs Fetched Successfully.',
                FlightSearchLog: FlightSearchLog
            });
        }).catch((error) => {
            // console.log(error)
            res.status(500).json({
                type: 'error',
                status: 400,
                msg: 'Oops! Something went wrong while processing your request.',
            });
        });
});

// Search flight log - update - belal
router.post('/fetch-all-Flight-Search-Log', async (req, res) => {
  let { limit, page } = req.body;
  limit = (!limit) ? parseInt(config.pageLimit) : parseInt(limit)
  page = (!page) ? parseInt(0) : parseInt(page)
  let offset = limit * page;

  let { f_startDate, f_endDate, organisation_id } = req.body
  let start_date = end_date = ""
    if (f_startDate && f_startDate != '')
        start_date = dateFormat(f_startDate)
    if (f_endDate && f_endDate != '')
        end_date = dateFormat(f_endDate)
    
    let whereQuery = {};
    if(start_date && end_date){
        whereQuery.created_at = {
            [Op.gte]: start_date,
            [Op.lte]: end_date
        }
    }
    if(organisation_id){
        whereQuery.organisation_id = organisation_id;
    }
    console.log(whereQuery)
    try {
        const result = await FlightSearchLog.findAndCountAll({
            where: whereQuery,
            offset: offset,
            limit: limit,
            include:[{
                model: sequelizeOrganisation_B,
                attributes: ['name'],
                required:false
            },{
                model: User_B,
                attributes: ['username'],
                required:false
            }]
        })
        let dataArr = [];
        if(result.count > 0){
            result.rows.map(row => {
                dataArr.push(row);
            });
            if(dataArr.length > 0){
                dataArr.forEach(element => {
                    element.stream = JSON.parse(element.stream)
                })
            }
            return res.json({
                status: true,
                code: 200,
                type: 'success',
                title: "Flight Search Logs",
                message: 'Flight Search Logs Fetched Successfully.',
                result: dataArr,
                totalResult: result.count,
                page: page
            });
        }else{
            return res.json({
                status: false,
                code: 200,
                type: 'success',
                title: "Flight Search Logs",
                message: 'No Flight Search Log Found.',
                result: dataArr,
                totalResult: result.count,
                page: page
            });
        }
    } catch (error) {
        console.log(error)
        return makeResponse(res, false, 200, 'success', 'Flight Search Logs.', 'Oops! Something went wrong while processing your request.', error)
    }
});


module.exports = router;

var combineLogsByPlatoform = function( rows ){
 
    
    var tmp = { book:[], ticket:[], search: [] };

    rows.forEach(element => {
        element = element.dataValues;
        if( element.month ){

            if( element.updateFrom == 'search' )
                tmp.search.push( element )
            if( element.updateFrom == 'book' )
                tmp.book.push( element )
            if( element.updateFrom == 'ticket' )
                tmp.ticket.push( element )
        }
    });
    return tmp;
}