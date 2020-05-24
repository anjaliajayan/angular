const express = require('express');
const router = express.Router();
const axios = require('axios');
const parser = require('fast-xml-parser');
var moment = require('moment');
const _ = require('lodash');
// var snakeCaseKeys = require('snakecase-keys')
var snakeCaseKeys = require('../../../helpers/utils').camelToSnake;
const { getOrgDetails } = require('../../../helpers/utils')

const { Op, Sale, sequelizeOrganisation } = require('../../../../config/db');

var GenericMethods = require('./../../../helpers/ModelsGenericMethods');
var saleService = new GenericMethods(Sale)

var createSaleXML = require('./../../../xmls/GetSaleId');
var createDeleteSaleXML = require('./../../../xmls/DeleteSale');

const config = require('./../../../../config/config');

const { saleAddValidator, saleFetchByIDValidator, saleFetchByNameValidator, dynamicReportValidator } = require('../../../validations/sale.validate')
const { makeResponse } = require("./../../../helpers/utils");
const convertObj2Array = obj => (Array.isArray(obj) ? obj : [obj]);

const getOrganisationNames = async organisation_id => {
  try {
    oidArr = organisation_id.split(',');
    const res = await sequelizeOrganisation.findAll({
      attributes: ['name'],
      order:[['name', 'ASC']],
      where: {
        organisation_id: { [Op.in]: oidArr }
      }
    })
    return Array.prototype.map.call(res, function(item) { return item.name; }).join(", ");
  } catch (error) {
    console.log(error)
  }
  
}

//READ ALL CommissionsS
router.post('/fetch-all-sales', async (req, res) => {
  let { limit, page, is_active } = req.body;
  limit = (!limit) ? parseInt(config.pageLimit) : parseInt(limit)
  page = (!page) ? parseInt(0) : parseInt(page)
  let offset = limit * page;
  let whereQuery = {status:0}
  if(typeof is_active !== "undefined"){
    whereQuery = { is_active: is_active, ...whereQuery  }
  }
  try {
    const Sales = await Sale.findAndCountAll({ 
      where: whereQuery,
      order: [["sale_id", "DESC"]],
      offset: offset,
      limit: limit
    })
    if (Sales.count > 0) {
      var salesArr = [];
      var orgIndex = 0
      Sales.rows.forEach(async (sale, index) => {
        if (sale.organisation_id) {
          var org = await getOrganisationNames(sale.organisation_id)
          if (org) {
            sale.dataValues.organisation = org;
            salesArr.push(sale);
          } else {
            salesArr.push(sale);
          }
        }else{
          orgIndex++
        }
        const result = {
          data: salesArr,
          total: Sales.count,
          page: page,
        }
        if ((Sales.rows.length - 1) == (index + orgIndex)) {
          return makeResponse(res, true, 200, 'success', 'Mark Up Configurations', 'Sales Fetched Successfully.', result)
        }
      });
    } else {
      return makeResponse(res, false, 200, 'success', 'Mark Up Configurations', 'No Sales Found.')
    }
  } catch (error) {    
    console.log(error)
    return makeResponse(res, false, 200, 'success', 'Mark Up Configurations', 'Oops! Something went wrong while processing your request.', error)
  }
});

router.post('/add-sale', saleAddValidator, async (req, res) => {
  var params = req.body;
  params.created = moment().format();
  var user = req.user;
  params.users_id = user.users_id;
  params.status = 0;
  if(params.mode == "Add"){
    delete params.sale_id
  }
  if (params.start_date && params.start_date != '') {
    params.start_date = moment(params.start_date).format('YYYY-MM-DD')
  }
  if (params.end_date && params.end_date != '') {
    params.end_date = moment(params.end_date).format('YYYY-MM-DD')
  }
  try {
    params.organisation_id = getOrganisationIds(params.organisation_id)
    var dataParams = await createSaleJavaAPI(params, req);
    
    dataParams.preference = params.preference;
    dataParams.organisation_id = dataParams.organization_id;

    var Sale;
    if (params.sale_id && params.sale_id != null) {
      Sale = await saleService.updateByID(dataParams.sale_id, dataParams)
    } else {
      Sale = await saleService.add(dataParams)
    }
    return makeResponse(res, true, 200, 'success', 'Add Sale', 'Sale Added/Updated Successfully.', Sale)
  } catch (error) {
    return makeResponse(res, false, 200, 'danger', 'Add Sale', 'Oops! Something went wrong while processing your request.', error)
  }
})

router.get('/fetch-sale/:sale_id', saleFetchByIDValidator, async (req, res) => {
  var sale_id = req.params.sale_id;
  try {
    let getSale = await Sale.findOne({where:  {sale_id: sale_id}})          
    if (!_.isEmpty(getSale)) {
      getSale = convertObj2Array(getSale)
      let salesArr = [];
      getSale.forEach(async (sale, index) => {
        if (sale.organisation_id) {
          var org = await getOrganisationNames(sale.organisation_id)
          if (org) {
            sale.dataValues.organisation = org;
            salesArr.push(sale);
          } else {
            salesArr.push(sale);
          }
        }
        if ((getSale.length - 1) == index) {
          return makeResponse(res, true, 200, 'success', 'Mark Up Configurations', 'Sales Fetched Successfully.', salesArr)
        }
      }); 
    } else {
      return makeResponse(res, false, 200, 'success', 'Mark Up Configurations', 'No Sales Found.')
    }    
  } catch (error) {
    return makeResponse(res, false, 200, 'danger', 'Mark Up Configurations', 'Oops! Something went wrong while processing your request.', error)   
  }

})

router.get('/find-sale/', async (req, res) => {
  var params = req.query;
  try {
    var Sales = await saleService.find(params)
    res.json({
      type: 'data',
      status: 200,
      msg: 'Sales Fetched Successfully.',
      Sales: Sales
    });
  } catch (error) {
    res.json({
      type: 'error',
      status: 400,
      msg: 'Oops! Something went wrong while processing your request.',
      error: error
    });
  }

})

router.post('/delete-sale/:sale_id', saleFetchByIDValidator, async (req, res) => {
  var sale_id = req.params.sale_id;
  try {
    // var deleteSaleJavaResponse = await deleteSaleJava(id)
    // var Sale = await saleService.updateByID(deleteSaleJavaResponse.sale_id, {
    let result =  await Sale.findOne( {
      where: { sale_id: sale_id },
      raw: true,
    });
    if (result) {
      const deleteSale = await Sale.update({status: 1},{
        where: {sale_id: sale_id },
        raw: true,
      });
      if(deleteSale){
        return makeResponse(res, true, 200, 'success', 'Mark Up Configurations', 'Sales Deleted Successfully.')
      }else{
        return makeResponse(res, false, 200, 'success', 'Mark Up Configurations', 'Sales Not Deleted.')
      }
    } else {
      return makeResponse(res, false, 200, 'success', 'Mark Up Configurations', 'No Sales Found.')
    }    
  } catch (error) {
    return makeResponse(res, false, 200, 'success', 'Mark Up Configurations', 'Oops! Something went wrong while processing your request.')   
  }
})

router.post('/dynamic-report-data', dynamicReportValidator, async (req, res) => {

  var organisationIds = req.body.organisation_ids;
  var start_date = req.body.start_date;
  var end_date = req.body.end_date;
  if (!organisationIds || !start_date || !end_date)
    return res.json({
      type: 'error',
      status: 403,
      msg: 'Oops! Parameters Missing.'
    });
    if(organisationIds){
      organisationIds = new Set(organisationIds)
    }
    organisationIds = [...organisationIds]
    if(start_date){
      start_date = moment(new Date(start_date)).format("YYYY-MM-DD");
    }
    if(end_date){
      end_date = moment(new Date(end_date)).format("YYYY-MM-DD");
    }
  var sql = "SELECT p.name AS Agency, o.`name` AS 'Sub agency', bookings.`trip_id` AS Trip_Id ,bookings.`payment_type` AS 'Payment type', IFNULL(o.corporate_type, 'Agent') AS `Type`,DATE(bookings.created) AS  'Booking date', YEAR(bookings.created) AS `Year`,MONTH(bookings.created) AS `Month`,MONTHNAME(bookings.created) AS `Month name`,  IFNULL(bookings.booking_status, 'Sent') AS `Status`, bookings_flight.`airline_pnr_no` AS 'Pnr No', IFNULL(fte.`ticket_number`,'') AS 'Ticket No',IFNULL(fte.`emd_number`,'')  AS 'Emd No' FROM bookings  INNER JOIN bookings_flight  ON bookings.`booking_id` = bookings_flight.`booking_id` INNER JOIN organisation o ON o.agent_code = bookings.`agent_code` LEFT JOIN organisation p ON o.organisation_id = p.`organisation_id` LEFT  JOIN flight_ticket_emd fte ON fte.`booking_flight_id` = bookings_flight.`booking_id` INNER JOIN trip_details td ON td.`trip_booking_id` = bookings_flight.`booking_id` ";
  sql = sql + " WHERE "
  if(organisationIds.length > 0){
    sql = sql + ' o.parent_id IN ("' + organisationIds.toString() + '") AND '
  }
  sql = sql + " DATE(bookings.`created`) BETWEEN '" + start_date + "' AND '" + end_date + "' ORDER BY `year`";
  // // console.log('Qeury is ',sql)
  try {
    var output = await saleService.customQuery(sql);
    res.json({
      type: 'result',
      status: 200,
      msg: 'Date fetched Successfull.',
      Output: output
    });

  } catch (error) {
    return res.json({
      type: 'error',
      status: 403,
      msg: 'Oops! Something went wrong while processing your request.',
    });
  }

})

// Search sale by name
router.post('/search-sales', saleFetchByNameValidator, async (req, res) => {  
  let { limit, page, name } = req.body;
  limit = (!limit) ? parseInt(config.pageLimit) : parseInt(limit)
  page = (!page) ? parseInt(0) : parseInt(page)
  let offset = limit * page;
  if(!name){
    return makeResponse(res, false, 200, 'danger', 'Mark Up Configurations', 'Name is required.')
  }
  try {
    const Sales = await Sale.findAndCountAll({ 
      where: { name: { [Op.like]: "%" + name.trim() + "%" }, status: 0 },
      order: [["sale_id", "DESC"]],
      offset: offset,
      limit: limit
    }) 
    if (Sales.count > 0 && Sales.rows.length > 0) {
      var salesArr = [];
      var orgIndex = 0
      Sales.rows.forEach(async (sale, index) => {
        if (sale.organisation_id) {
          var org = await getOrganisationNames(sale.organisation_id)
          if (org) {
            sale.dataValues.organisation = org;
            salesArr.push(sale);
          } else {
            salesArr.push(sale);
          }
        }else{
          orgIndex++
        }
        const result = {
          data: salesArr,
          total: Sales.count,
          page: page,
        }
        if ((Sales.rows.length - 1) == (index + orgIndex)) {
          return makeResponse(res, true, 200, 'success', 'Mark Up Configurations', 'Sales Fetched Successfully.', result)
        }
      });
    } else {
      return makeResponse(res, false, 200, 'success', 'Mark Up Configurations', 'No Sales Found.')
    }
  } catch (error) {    
    return makeResponse(res, false, 200, 'success', 'Mark Up Configurations', 'Oops! Something went wrong while processing your request.', error)
  }    
});

module.exports = router;

var createSaleJavaAPI = async function (params, req) {
  // // console.log('Params ', params)
  var promise = new Promise(function (resolve, reject) {
    try {
      let result = getOrgDetails(req);
      if (!result.auth) {
        return res.status(200).json(result);
      }
      let url = config.api.getsaleIdURL;
      let xml = createSaleXML(result.agent, result.api_key, result.secret_key, params);
      let headersRQ = {
        headers: {
          'Content-Type': 'text/xml',
          'SOAPAction': 'SaveSales'
        }
      };
      // // console.log('xml is ', xml)
      axios.post(url, xml, headersRQ)
        .then((resp) => {

          if (parser.validate(resp.data) === true) {
            let jsonObj = parser.parse(resp.data, config.pkgConfigs.x2joptions);
            jsonObj = snakeCaseKeys(jsonObj, 20)
            // console.log('jsonObj ', jsonObj)

            try {
              var sale_data = jsonObj['envelope']['body']['save_sales_response']['sales_result']['sale'];
              return resolve(sale_data)
            } catch (error) {
              return reject(error)
            }

          }

          return resolve(resp.data)
        })
        .catch((error) => {
          // console.log('erer ', error)
          return reject(error)
        });
    } catch (error) {
      return reject(error)
    }
  })

  return promise;
}

var getSalefromXmlJSON = function (json) {

  return json['envelope']['body']['save_sales_response']['sales_result']['sale']

}

var getOrganisationIds = function (arr) {
  // // console.log('ogs ', arr);
  try {
    return arr.join(',')
  } catch (error) {
    return '';
  }

}

var deleteSaleJava = function (id) {
  var promise = new Promise(function (resolve, reject) {
    try {
      let url = config.api.getsaleIdURL;
      let xml = createDeleteSaleXML(id);
      let headersRQ = {
        headers: {
          'Content-Type': 'text/xml',
          'SOAPAction': 'RemoveSales'
        }
      };
      // // console.log('xml is ', xml)
      axios.post(url, xml, headersRQ)
        .then((resp) => {
          if (parser.validate(resp.data) === true) {
            let jsonObj = parser.parse(resp.data, config.pkgConfigs.x2joptions);
            jsonObj = snakeCaseKeys(jsonObj, 20)
            // // console.log('response is  )
            try {
              var sale_data = jsonObj['envelope']['body']['remove_sales_response']['sales_result']['sale'];
              return resolve(sale_data)
            } catch (error) {
              return reject(error)
            }

          }

          return resolve(resp.data)
        })
        .catch((error) => {
          // console.log('erer ', error)
          return reject(error)
        });
    } catch (error) {
      // console.log('er er ', error)
      return reject(error)
    }
  })

  return promise;
}