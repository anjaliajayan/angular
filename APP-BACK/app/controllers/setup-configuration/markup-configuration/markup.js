const express = require('express');
const router = express.Router();
var moment = require('moment');
const axios = require('axios');
const parser = require('fast-xml-parser');
// var snakeCaseKeys = require('snakecase-keys')
var snakeCaseKeys = require('../../../helpers/utils').camelToSnake;

const { getOrgDetails } = require('../../../helpers/utils');

const { Op, Suppliers, Sale,OrganisationModel, Users, Markups, db } = require('../../../../config/db');
const {  flightMarkup, carMarkup, activityMarkup, cruiseMarkup, hotelMarkup, insuranceMarkup, transferMarkup } = require('../../../../config/db');
var GenericMethods = require('./../../../helpers/ModelsGenericMethods');
const config = require('./../../../../config/config');

var supplierService = new GenericMethods( Suppliers )
var saleService = new GenericMethods( Sale )

var markupService = new GenericMethods( Markups );
var carMarkupService = new GenericMethods( carMarkup );
var activityMarkupService = new GenericMethods( activityMarkup );
var cruiseMarkupService = new GenericMethods( cruiseMarkup );
var hotelMarkupService = new GenericMethods( hotelMarkup );
var insuranceMarkupService = new GenericMethods( insuranceMarkup );
var transferMarkupService = new GenericMethods( transferMarkup );
var flightMarkupService = new GenericMethods( flightMarkup )

var createMarkupXML = require('./../../../xmls/SaveMarkup');
var createDeleteMarkupXML = require('./../../../xmls/DeleteMarkup');
const { markupFetchByIDValidator, markupFetchByTitleValidator, markupAddValidator } = require('../../../validations/markup.validate')
const { makeResponse } = require("./../../../helpers/utils");


//READ ALL CommissionsS
router.post('/fetch-all-markups',  async (req, res) => {
    let { limit, page, title } = req.body;
    limit = (!limit) ? parseInt(config.pageLimit) : parseInt(limit)
    page = (!page) ? parseInt(0) : parseInt(page)
    let offset = limit * page;
    where = {}
    if(title){
        where = { status: 0, title:{ [Op.like]: "%" + title.trim()+"%" } }
    }else{
        where = { status: 0 }
    }
    try {
        let result = await Markups.findAndCountAll({
          where: where,
          order: [["markup_id", "DESC"]],
          offset: offset,
          limit: limit,
          include: [
              { model: carMarkup, },
              { model: activityMarkup, },
              { model: cruiseMarkup, },
              { model: hotelMarkup, },
              { model: insuranceMarkup, },
              { model: transferMarkup, },
              { model: flightMarkup, },
            // { model: OrganisationModel, attributes:[ 'name'] },
              { model: Sale, attributes: ['is_stop_sale', 'is_free_sale', 'start_date', 'end_date', 'name'] }
          ]
        })
        let dataArr = [];
        if (result.count > 0) {
          result.rows.map(row => {
            dataArr.push(row);
          });
          result = {
            data: dataArr,
            total: result.count,
            page: page
          }
          return makeResponse(res, true, 200, 'success', 'Mark Up Configurations', 'Mark Up fetched successfully.', result)
        } else {
          return makeResponse(res, false, 200, 'danger', 'Mark Up Configurations', 'Mark Up not found.')
        }
    } catch (error) {
        return makeResponse(res, false, 200, 'success', 'Mark Up Configurations', 'Oops! Something went wrong while processing your request.', error)
    }
});

router.post('/add-markup', markupAddValidator, async (req, res) => {
    var user = req.user;
    var params = req.body;
    var markup = params.markup;
    var editions = params.editions;
    markup.organisation_id = user.organisation_id;
    markup.is_active = markup.is_active;
    markup.created_by = user.users_id;
    markup.created = moment().format();
    if(markup.mode == "Add"){
        delete markup.markup_id
    }
try {
    var supplierObject, saleObject;
    supplierObject = await supplierService.findById( markup.supplier_id )
    saleObject = await saleService .findById( markup.sale_id );
    if(saleObject.is_flight){
        if(editions.flights.markup == "" || editions.flights.markup == null){
            return makeResponse(res, false, 200, 'success', 'Mark Up Configurations', 'Flight Markup required.')
        }
        if(editions.flights.calculation_basis == "" || editions.flights.calculation_basis == null){
            return makeResponse(res, false, 200, 'success', 'Mark Up Configurations', 'Flight Calculation Basis is required.')
        }else{
            if(editions.flights.calculation_basis == "by_airline" && (editions.flights.marketing_carriers == "" || editions.flights.marketing_carriers == null) ){
                return makeResponse(res, false, 200, 'success', 'Mark Up Configurations', 'Flight Marketing Carriers is required.')
            }
        }
        if(editions.flights.calculation_type == "" || editions.flights.calculation_type == null){
            return makeResponse(res, false, 200, 'success', 'Mark Up Configurations', 'Flight Calculation Type is required.')
        }
        if(editions.flights.markup_mode == "" || editions.flights.markup_mode == null){
            return makeResponse(res, false, 200, 'success', 'Mark Up Configurations', 'Flight Markup Mode is required.')
        }
        if(editions.flights.pax_types == "" || editions.flights.pax_types == null){
            return makeResponse(res, false, 200, 'success', 'Mark Up Configurations', 'Flight PAX Types is required.')
        }
    }

    var responseJava = await java_SaveMarkupCall( req, markup, editions, supplierObject, saleObject )
    var modelPromiseArr =[]
    responseJava.is_active = markup.is_active;
    responseJava.status = 0;

    // modelPromiseArr.push( markupService.updateOrAdd( {markup_id: responseJava.markup_id}, responseJava ) )
    const markupResult = await markupService.updateOrAdd( {markup_id: responseJava.markup_id}, responseJava )
    
    if( supplierObject.is_car && saleObject.is_car ){
        // console.log("responseJava.markup_car", responseJava.markup_car)
        var addObject = responseJava.markup_car;
        addObject.markup_id = responseJava.markup_id;
        addObject.markup = addObject.markup_amount;
        // modelPromiseArr.push( carMarkupService.updateOrAdd( {markup_id: addObject.markup_id}, addObject ) )
        await carMarkupService.updateOrAdd( {markup_id: addObject.markup_id}, addObject )
    }
    if( supplierObject.is_hotel && saleObject.is_hotel ){
        var addObject = responseJava.markup_hotel;
        addObject.markup_id = responseJava.markup_id;
        addObject.markup = addObject.markup_amount;
        // modelPromiseArr.push( hotelMarkupService.updateOrAdd( {markup_id: addObject.markup_id}, addObject ) )
        await hotelMarkupService.updateOrAdd( {markup_id: addObject.markup_id}, addObject )
    }
    if( supplierObject.is_flight && saleObject.is_flight ){
        var addObject =responseJava.markup_flight;
        addObject.markup_id = responseJava.markup_id;
        addObject.markup = addObject.markup_amount;
        addObject.pax_types = addObject.pax_type;
        // modelPromiseArr.push( flightMarkupService.updateOrAdd( {markup_id: addObject.markup_id}, addObject ) )
        await flightMarkupService.updateOrAdd( {markup_id: addObject.markup_id}, addObject );
    }
    if( supplierObject.is_activities && saleObject.is_activities ){
        var addObject = responseJava.markup_activities;
        addObject.markup_id = responseJava.markup_id;
        addObject.markup = addObject.markup_amount;
        addObject.markup_activitie_id = addObject.markup_activities_id;

        // modelPromiseArr.push( activityMarkupService.updateOrAdd( {markup_id: addObject.markup_id}, addObject ) )
        await activityMarkupService.updateOrAdd( {markup_id: addObject.markup_id}, addObject )
    }
    if( supplierObject.is_transfers && saleObject.is_transfers ){
        var addObject = responseJava.markup_transfer;
        addObject.markup_id = responseJava.markup_id;
        addObject.markup = addObject.markup_amount;
        // modelPromiseArr.push( transferMarkupService.updateOrAdd( {markup_id: addObject.markup_id}, addObject ) )
        await transferMarkupService.updateOrAdd( {markup_id: addObject.markup_id}, addObject )
    }
    if( supplierObject.is_cruises && saleObject.is_cruises ){
        var addObject = responseJava.markup_cruise;
        addObject.markup_id = responseJava.markup_id;
        addObject.markup = addObject.markup_amount;
        // modelPromiseArr.push( cruiseMarkupService.updateOrAdd( {markup_id: addObject.markup_id}, addObject ) )
        await cruiseMarkupService.updateOrAdd( {markup_id: addObject.markup_id}, addObject )
    }
    if( supplierObject.is_insurance && saleObject.is_insurance ){
        var addObject = responseJava.markup_insurance;
        addObject.markup_id = responseJava.markup_id;
        addObject.markup = addObject.markup_amount;
        // modelPromiseArr.push( insuranceMarkupService.updateOrAdd( {markup_id: addObject.markup_id}, addObject ) )
        await insuranceMarkupService.updateOrAdd( {markup_id: addObject.markup_id}, addObject )
    }
    if (markupResult) {
      let addMsg
      (markup.mode == "Add" ) ? addMsg = "Added"  : (markup.mode == "Update") ? addMsg = "Updated" : addMsg = "Added"
      return makeResponse(res, true, 200, 'success', 'Mark Up Configurations', `Markup ${addMsg} Successfully.`, markupResult)
    } else {
      return makeResponse(res, true, 200, 'success', 'Mark Up Configurations', 'Markup Not Aadded.')
    }
    } catch (error) {
        // console.log(error)
      return makeResponse(res, false, 200, 'success', 'Mark Up Configurations', 'Oops! Something went wrong while processing your request.', error)
    }
});

router.get('/fetch-markup/:markup_id', markupFetchByIDValidator, async (req, res) => {
    const markup_id = req.params.markup_id;
    try {
        let result =  await Markups.findOne( {
          where: {
              markup_id: markup_id
            },
            include: [
                { model: carMarkup, },
                { model: activityMarkup, },
                { model: cruiseMarkup, },
                { model: hotelMarkup, },
                { model: insuranceMarkup, },
                { model: transferMarkup, },
                { model: flightMarkup, },
                { model: Sale, attributes:[ 'is_stop_sale', 'is_free_sale', 'start_date', 'end_date', 'name'] }
            ],
            raw: true,
        });
        if (result) {          
          return makeResponse(res, true, 200, 'success', 'Mark Up Configurations', 'Markup Fetched Successfully.', result)
        } else {
          return makeResponse(res, false, 200, 'success', 'Mark Up Configurations', 'No Markup Found.')
        }    
      } catch (error) {
        return makeResponse(res, false, 200, 'success', 'Mark Up Configurations', 'Oops! Something went wrong while processing your request.')   
      }
})

router.post('/delete-markup/:markup_id', markupFetchByIDValidator, async (req, res) => {
    const markup_id = req.params.markup_id;
    try {
        // var deleteSaleJavaResponse = await deleteSaleJava(id)
        // var Sale = await saleService.updateByID(deleteSaleJavaResponse.sale_id, {
        let result =  await Markups.findOne( {
          where: {
              markup_id: markup_id
            },
            include: [
              // {
              //    model: carMarkup,
              //    attributes: ['markup_car_id']
              // },{
              //     model: activityMarkup,
              //     attributes: ['markup_activitie_id']
              // },{
              //     model: cruiseMarkup,
              //     attributes: ['markup_cruise_id']
              // },{
              //     model: hotelMarkup,
              //     attributes: ['markup_hotel_id']
              // },{
              //     model: insuranceMarkup,
              //     attributes: ['markup_insurance_id']
              // },{
              //     model: transferMarkup,
              //     attributes: ['markup_transfer_id']
              // },{
              //     model: flightMarkup,
              //     attributes: ['markup_flight_id']
              // },
              {
                model: Sale,
                // attributes:[ 'is_stop_sale', 'is_free_sale', 'start_date', 'end_date', 'name']
              }
            ],
            raw: true,
        });
        if (result) {
          const deleteMarkup = await Markups.update({status: 1},{
            where: {markup_id: markup_id },
            raw: true,
          });
          if(deleteMarkup){
            return makeResponse(res, true, 200, 'success', 'Mark Up Configurations', 'Markup Deleted Successfully.')
          }else{
            return makeResponse(res, false, 200, 'success', 'Mark Up Configurations', 'Markup Not Deleted.')
          }
        } else {
          return makeResponse(res, false, 200, 'success', 'Mark Up Configurations', 'No Markup Found.')
        }    
      } catch (error) {
        return makeResponse(res, false, 200, 'success', 'Mark Up Configurations', 'Oops! Something went wrong while processing your request.')   
      }
})

// Search markup by title
router.post('/search-markups/', markupFetchByTitleValidator, async (req, res) => {
    let { limit, page, title } = req.body;
    limit = (!limit) ? parseInt(config.pageLimit) : parseInt(limit)
    page = (!page) ? parseInt(0) : parseInt(page)
    let offset = limit * page;
    if(!title){
        return makeResponse(res, false, 200, 'danger', 'Mark Up Configurations', 'Title is required.')
    }
    try {
        let result = await Markups.findAndCountAll({ 
            where: { status: 0, title:{ [Op.like]: "%" + title.trim()+"%" } },
            order: [["markup_id", "DESC"]],
            offset: offset,
            limit: limit,
            include: [
                { model: carMarkup, },
                { model: activityMarkup, },
                { model: cruiseMarkup, },
                { model: hotelMarkup, },
                { model: insuranceMarkup, },
                { model: transferMarkup, },
                { model: flightMarkup, },
                // { model: OrganisationModel, attributes:[ 'name'] },
                { model: Sale, attributes:[ 'is_stop_sale', 'is_free_sale', 'start_date', 'end_date', 'name'] }
            ]
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
          return makeResponse(res, true, 200, 'success', 'Mark Up Configurations', 'Mark Up fetched successfully.', result)
        } else {
          return makeResponse(res, false, 200, 'danger', 'Mark Up Configurations', 'Mark Up not found.')
        }
    } catch (error) {
        console.log(error)
        return makeResponse(res, false, 200, 'success', 'Mark Up Configurations', 'Oops! Something went wrong while processing your request.', error)
    }
});

module.exports = router;


var java_SaveMarkupCall = async function(req, markup, editions, supplierObject, saleObject  ){

    return new Promise(function(resolve, reject){
        let url = config.api.getsaleIdURL;
        let result = getOrgDetails(req);
        if (!result.auth) {
            return res.status(500).json(result);
        }
        var xml = createMarkupXML( result.agent, result.api_key, result.secret_key, markup, editions, supplierObject, saleObject )
        let headersRQ = {
            headers: {
                'Content-Type': 'text/xml',
                'SOAPAction': 'SaveMarkup'
            }
        };

        axios.post(url, xml, headersRQ)
            .then((resp) => {
                
                if(parser.validate(resp.data) === true){
                    // // console.log('  df ', resp.data)
                    let jsonObj = parser.parse(resp.data, config.pkgConfigs.x2joptions);
                    jsonObj = snakeCaseKeys( jsonObj, 20 )
                    try {
                        var markup_data = jsonObj['envelope']['body']['save_markup_response']['markup_result']['markup'];
                        // // console.log('java respose ', markup_data)

                        return resolve( markup_data )                    
                    } catch (error) {
                        return reject( error )
                    }
                                        
                }
                reject(new Error('unknown error'))
                // return re( resp.data )
            })
            .catch((error) => {
                // console.log('erer ', error)
                return reject( error )
            }); 

        // return resolve ( xml )
    })

}


var deleteMarkupJava = function( markupDetail ){
    let result = getOrgDetails(req);
    if (!result.auth) {
        return res.status(500).json(result);
    }
    var markup_id = markupDetail.dataValues.markup_id;
    //var supplierObject = markupDetail.sale.dataValues;
    var promise = new Promise(function(resolve, reject){
        try {
            let url = config.api.getsaleIdURL;
            let xml = createDeleteMarkupXML(result.agent, result.api_key, result.secret_key, markup_id);
            let headersRQ = {
                headers: {
                    'Content-Type': 'text/xml',
                    'SOAPAction': 'RemoveMarkup'
                }
            };
            // // console.log('xml is ', xml)
            // return resolve(xml)
            axios.post(url, xml, headersRQ)
            .then((resp) => {
                // // console.log('sdf ', resp.data)
                if(parser.validate(resp.data) === true){
                    let jsonObj = parser.parse(resp.data, config.pkgConfigs.x2joptions);
                    jsonObj = snakeCaseKeys( jsonObj, 20 )
                    try {
                        var sale_data = jsonObj['envelope']['body']['remove_markup_response']['markup_result']['markup'];
                        return resolve( sale_data )                    
                    } catch (error) {
                        return reject( error )
                    }
                                        
                }

                return resolve( resp.data )
            })
            .catch((error) => {
                // console.log('erer ', error)
                return reject( error )
            }); 
        } catch (error) {
            // console.log('er er ', error)
            return reject(error)
        }
    })
    
    return promise;
}
