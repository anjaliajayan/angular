const express = require('express');
const router = express.Router();
const _ = require('lodash');
const { Suppliers, Suppliers_M, Currency, Suppliers_Z, flightBookingsModel_Z, Currency_M, Currency_Z, Country_Z, Sequelize, FlightBookings_M } = require('../../../../config/db');
const config = require('./../../../../config/config');
let moment = require('moment');
const Op = Sequelize.Op;
let saveSupplierXml = require("./../../../xmls/UpdateSupplier");
let axios = require('axios');
const parser = require('fast-xml-parser');
var snakeCaseKeys = require("./../../../helpers/utils").camelToSnake;
const { makeResponse, getOrgDetails } = require("./../../../helpers/utils");

//CREATE NEW Suppliers
router.post('/create-new-supplier', FUNC.validateApi(validRules.addSupplier), async (req, res) => {
  // console.log("--req.body-addSupplier", req.body);
  let {
    name,
    supplier_code
  } = req.body;

  formObj = {};
  formObj.name = name;
  formObj.supplier_code = supplier_code;
  formObj.created = moment().format("YYYY-MM-DD HH:mm:ss")

  // console.log("--formObj", formObj)
  try {
    await Suppliers.create(formObj);
    return res.json({
      type: 'data',
      status: 200,
      msg: 'Supplier Created Successfully.'
    });
  } catch (error) {
    // console.log("--error", error)
    return res.status(500).json({
      type: 'error',
      status: 400,
      msg: 'Oops! Something went wrong while processing your request.'
    });
  }
});
  
//fetch ALL Suppliers with supplier id
router.get('/fetch-supplier/:supplier_id', async (req, res) => {
  let {
    supplier_id
} = req.params;

try {
    //country name ; currency name ; notification balance (ask agnel AGAIN)
    await Suppliers_Z.findOne({
        where: {
            supplier_id
        },
        raw: true
    }).then(async (result) => {
        const country = await Country_Z.findOne({ where: { country_id: result.country_id }, raw: true })
        const currency = await Currency_Z.findOne({ where: { currency_id: result.currency_id }, raw: true })
        res.json({
            type: 'data',
            status: 200,
            msg: 'Data Fetched Successfully.',
            result: result,
            country: country,
            currency: currency
        });
    })
} catch (error) {
    return res.status(500).json({
        type: 'error',
        status: 400,
        msg: 'Oops! Something went wrong while processing your request.',
    });
}
  });

//READ ALL Suppliers
router.post('/read-all-supplier', async (req, res) => {
  let {limit,page} = req.body;
  limit = (!limit) ? parseInt(config.pageLimit) : parseInt(limit)
  page = (!page) ? parseInt(0) : parseInt(page)
  let offset = limit * page;  
  try {
    const result = await Suppliers_Z.findAndCountAll({
      attributes: { include: [ [Sequelize.fn("COUNT", Sequelize.col("bookings_flight.booking_flight_id")), "bookingCount"] ] },
      include: [{ model: flightBookingsModel_Z, attributes: [] }, {model: Currency_Z} ],
      group: ['supplier_id'],
      order: [['name', 'ASC']],
      offset: offset,
      limit: limit
    })  
    let dataArr = [];
      if (result.count.length > 0) {
        result.rows.map(row => {
          dataArr.push(row);
        });
        return res.json({
          status: true,
          code: 200,
          type: 'success',
          title: "Fetch Suppliers",
          message: 'Suppliers Fetched Successfully.',
          result: dataArr,
          totalResult: result.count.length,
          page: page
        });
      } else {
        return res.json({
          status: false,
          code: 200,
          type: 'success',
          title: "Fetch Suppliers",
          message: 'No Fetched Found.',
          totalResult: result.count.length,
          result: dataArr,
          page: page
        });
      }
    } catch (error) {
      return makeResponse(res, false, 200, 'success', 'Fetch Suppliers', 'Oops! Something went wrong while processing your request.', error)
    }
});

//fetch ALL Suppliers for dropdwns
router.get('/fetch-all-supplier', async (req, res) => {
  try {
    const Supplier = await Suppliers.findAll()
    if (Supplier.length > 0) {
      return makeResponse(res, true, 200, 'success', 'Fetch Suppliers', 'Suppliers Fetched Successfully.', Supplier)
    } else {
      return makeResponse(res, true, 200, 'success', 'Fetch Suppliers', 'No Suppliers Found.')
    }

  } catch (error) {
    return makeResponse(res, false, 200, 'success', 'Fetch Suppliers', 'Oops! Something went wrong while processing your request.', error)
  }  
});


router.post('/update-supplier/:supplier_id', FUNC.validateApi(validRules.editSupplier), async (req, res) => {
  // console.log("--req.body-addSupplier", req.body);
  // console.log("--req.params", req.params);
  let formObj = req.body;
  let url = 'http://merchandising.tpconnects.com/TpConnectsLatestV7/services/SupplierConnect/';
  let result = getOrgDetails(req);
  if (!result.auth) {
    return res.status(500).json(result);
  }
  let xml = saveSupplierXml(result.agent, result.api_key, result.secret_key, formObj);
  let headersRQ = {
      headers: {
          'Content-Type': 'text/xml',
          'SOAPAction': 'SaveSuppliers'
      }
  };
  // console.log("REQ XML", xml);
  const supplierUpdate = await Suppliers.update(req.body, { where: { supplier_id: req.body.supplier_id } });
  if (supplierUpdate) {
      res.json({ type: "data", msg: "Supplier Table updated successfully" })
  } else {
      res.json({ type: "error", msg: "Error in updating supplier data" })
  }
  axios.post(url, xml, headersRQ)
      .then((resp) => {
          // console.log("RES XML", resp.data)
          if (parser.validate(resp.data) === true) {
              let jsonObj = parser.parse(resp.data, config.pkgConfigs.x2joptions);
              jsonObj = snakeCaseKeys(jsonObj, 20)
              try {
                  var supData = jsonObj['envelope']['body']['save_suppliers_response']['suppliers_result'];
                  return (supData)
              } catch (error) {
                  // console.log(error)
                  return (error)
              }
          }
          return (resp.data)
      })
      .catch((error) => {
          // console.log('erer ', error)
          return (error)
      });
});

//UPDATE EXISTING Suppliers
// router.put('/update-supplier/:supplier_id', FUNC.validateApi(validRules.editSupplier), async (req, res) => {
//   // console.log("--req.body-addSupplier", req.body);
//   // console.log("--req.params", req.params);
//   let {
//     supplier_id
//   } = req.params;
//   let {
//     name,
//     supplier_code
//   } = req.body;

//   formObj = {};
//   formObj.name = name;
//   formObj.supplier_code = supplier_code;

//   try {
//     await Suppliers.update(formObj, {
//       where: {
//         supplier_id
//       }
//     });
//     return res.json({
//       type: 'data',
//       status: 200,
//       msg: 'Suppliers Updated Successfully.'
//     });
//   } catch (error) {
//     return res.status(500).json({
//       type: 'error',
//       status: 400,
//       msg: 'Oops! Something went wrong while processing your request.'
//     });
//   }
// });

//DELETE SPECIFIC Suppliers
router.delete('/remove-supplier/:supplier_id', async (req, res) => {
  const {
    supplier_id
  } = req.params;
  try {
    await Suppliers.update({
      is_active: false
    }, {
      where: {
        supplier_id
      }
    });
    return res.json({
      type: 'data',
      status: 200,
      msg: 'Suppliers Deleted Successfully.'
    });
  } catch (error) {
    return res.status(500).json({
      type: 'error',
      status: 400,
      msg: 'Oops! Something went wrong while processing your request.',
    });
  }
});

module.exports = router;
