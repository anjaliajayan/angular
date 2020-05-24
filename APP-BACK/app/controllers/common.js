const express = require('express');
const axios = require('axios');
const fs = require('fs');
const router = express.Router();
const path = require('path');
const NodeCache = require("node-cache");
// const { Curl } = require('node-libcurl');

const cache = new NodeCache({ stdTTL: 0, checkperiod: 0 });
const countryJSON = path.join(__dirname, '../../data/countries.min.json');
const airlinesJSON = path.join(__dirname, '../../data/airlines.json');
const { roleModel_AJ, CityModel_AJ, TimeZoneModel_AJ, AuditTrail, Airport, sequelizeOrganisation, ApprovalTemplateModel, CorporateBusinessUnit, SettingModel, RficDetailModel, Suppliers, Sequelize, sequelizeCurrency, Country_M, Sale, Markups, PMS, Users, Tourcodes, Commissions, OrganizationAccount, AirlineRoutes } = require('../../config/db');
const Op = Sequelize.Op;
const helperFun = require('../helpers/utils');
const { makeResponse, getOrgDetails } = require('../helpers/utils');

// router.get('/test123', function (req, res) {

//     const curl = new Curl()
//     const url = 'https://merchandising.tpconnects.com/supplierconnect'
//     const data = {
//         //Data to send, inputName : value
//         'SECRET-KEY': '11ce6082-988a-11e7-abc4-cec278b6b50a',
//         'do_action': 'getFLoatingDepositData',
//         'agent-KEY': 'TPC',
//         'SUPPLIER-ID': '66',
//         'apiKey-KEY': '5ec8b2955d618a38232bd168870eca60',
//         'API-ACCESS-KEY': '16a280839b07332c19a1cd8a8f3ede12',
//     }

//     curl.setOpt(Curl.option.URL, url)
//     curl.setOpt(Curl.option.POSTFIELDS, JSON.stringify(data))
//     // curl.setOpt(Curl.option.POSTFIELDS, JSON.stringify([
//     //     { name: 'SECRET-KEY', contents: '11ce6082-988a-11e7-abc4-cec278b6b50a' },
//     //     { name: 'do_action', contents: 'getFLoatingDepositData' },
//     //     { name: 'SECRET-KEY', contents: '11ce6082-988a-11e7-abc4-cec278b6b50a' },
//     //     { name: 'agent-KEY', contents: 'TPC' },
//     //     { name: 'apiKey-KEY', contents: '5ec8b2955d618a38232bd168870eca60' },
//     //     { name: 'API-ACCESS-KEY', contents: '16a280839b07332c19a1cd8a8f3ede12' }
//     // ]));

//     curl.setOpt(Curl.option.SSL_VERIFYHOST, false)
//     curl.setOpt(Curl.option.SSL_VERIFYPEER, false)
//     curl.setOpt(Curl.option.HTTPHEADER, [
//         { name: 'SECRET-KEY', contents: '11ce6082-988a-11e7-abc4-cec278b6b50a' },
//         { name: 'do_action', contents: 'getFLoatingDepositData' },
//         { name: 'SECRET-KEY', contents: '11ce6082-988a-11e7-abc4-cec278b6b50a' },
//         { name: 'agent-KEY', contents: 'TPC' },
//         { name: 'SUPPLIER-ID', contents: 66 },
//         { name: 'apiKey-KEY', contents: '5ec8b2955d618a38232bd168870eca60' },
//         { name: 'API-ACCESS-KEY', contents: '16a280839b07332c19a1cd8a8f3ede12' }
//     ])
//     curl.setOpt(Curl.option.VERBOSE, true)

//     curl.on('end', (statusCode, body) => {
//         // console.log('Body received from httpbin:', statusCode)
//         // console.log(body)

//         curl.close()
//     })

//     curl.on('error', curl.close.bind(curl))

//     curl.perform()


// })

// Get country list
router.get('/get-country-list', (req, res) => {
    cache.get("countries", (err, countries) => {
        if (!err) {
            if (countries == undefined) {
                let data = fs.readFileSync(countryJSON);
                let countryData = JSON.parse(data);
                cache.set("countries", countryData, (err, success) => {
                    if (!err && success) {
                        return res.json({ type: 'data', countryData });
                    }
                });
            } else {
                return res.json({ type: 'data', countries, cached: true });
            }
        } else {
            return res.json({ type: 'error', msg: error });
        }
    });
});

//From Data Base Z
router.get('/get-country-list-db', async (req, res) => {
    try {
        const result = await Country_M.findAll({order:[["name", "ASC"]]});
        return res.json({ type: 'data', data: result })
    } catch (error) {
        return res.json({ type: 'Error', msg: 'No results Found' })
    }
});

// Get Timezones
router.get("/get-timezones", async (req, res) => {
    const timeZones = await TimeZoneModel_AJ.findAll({ where: { status: 1 }, order:[["timezone_value", "ASC"]] });
    if (timeZones) {
        return res.json({ type: 'data', timeZones });
    }
    return res.json({ type: 'error', msg: 'No result found!' });
})

// Get Cities
router.get("/get-city-list", async (req, res) => {
    const cities = await CityModel_AJ.findAll({ where: { status: 1 } });
    if (cities) {
        return res.json({ type: 'data', cities });
    }
    return res.json({ type: 'error', msg: 'No result found!' });
})

// Get Country
router.get("/get-country", async (req, res) => {
    CityModel_AJ.findAll(
        { group: ["country_id"],
          order: [["country", "ASC"]]
         }
    ).then((countries) => {
        return res.json({
            type: 'data', countries
        });
    })
        .catch((error) => {
            return res.status(500).json({
                type: 'error',
                status: 400,
                msg: 'Oops! Something went wrong while processing your request.', error,
            });
        });
})

// Get City by Country
router.get("/get-country-city/:country_id", async (req, res) => {
    CityModel_AJ.findAll(
        { where: { country_id: req.params.country_id } }
    ).then((cities) => {
        return res.json({
            type: 'data', cities
        });
    })
        .catch((error) => {
            return res.status(500).json({
                type: 'error',
                status: 400,
                msg: 'Oops! Something went wrong while processing your request.',
            });
        });
})

// Get Organization list
router.get("/get-organization-list", async (req, res) => {
    const listData = await sequelizeOrganisation.findAll({ where: { status: 0, }, attributes: ['organisation_id', 'name', 'agent_code'], order: [['name', 'ASC']] });
    if (listData) {
        return res.json({ type: 'data', listData });
    }
    return res.json({ type: 'error', msg: 'No result found!' });
})

// Get Organization list
router.get("/get-agents-list", async (req, res) => {
    let organisation_id = req.user.organisation_id;
    const listData = await sequelizeOrganisation.findAll({ where: { status: 1, corporate_type: { [Op.ne]: 'Corporate' }, is_active: 1, [Op.or]: [{ organisation_id: organisation_id }, { parent_id: organisation_id }] }, attributes: ['organisation_id', 'name'], order: [['name', 'ASC']] });
    if (listData) {
        return res.json({ type: 'data', listData });
    }
    return res.json({ type: 'error', msg: 'No result found!' });
})

// Get Organization child list
router.get("/get-orgranisation-child-list", async (req, res) => {
    const orgDetails = getOrgDetails(req)

    // let organisation_id = req.user.organisation_id;
    let organisation_id = orgDetails.org_id;
    const listData = await sequelizeOrganisation.findAll({
        where: { status: 1, is_active: 1, parent_id: organisation_id},
        attributes: ['organisation_id', 'name'],
        order: [['name', 'ASC']]
    });
    if (listData) {
        return res.json({ type: 'data', listData });
    }
    return res.json({ type: 'error', msg: 'No result found!' });
})

// Get Organization child list
router.get("/get-orgranisation-by-id/:id", async (req, res) => {
    const orgDetails = getOrgDetails(req)
    const { id } = req.params;

    // let organisation_id = req.user.organisation_id;
    let organisation_id = orgDetails.org_id;
    const listData = await sequelizeOrganisation.findOne({
        where: { organisation_id: id, status: 1, is_active: 1},
        // attributes: ['organisation_id', 'name'],
        order: [['name', 'ASC']]
    });
    if (listData) {
        return res.json({ type: 'data', listData });
    }
    return res.json({ type: 'error', msg: 'No result found!' });
})

// Get Organization hierarchy list
router.get("/get-organization-hierarchy/:id", async (req, res) => {
    const { id } = req.params;
    const listData = await ApprovalTemplateModel.findAll({ where: { 'organisation_id': id, 'status': 1 }, attributes: ['approval_id', 'template_name'] });
    const listDataCorpBusiness = await CorporateBusinessUnit.findAll({ where: { 'organisation_id': id, 'is_active': 1 }, order: [['unit_id', 'DESC']] });


    if (listData || listDataCorpB) {
        return res.json({ type: 'data', listData, listDataCorpBusiness });
    }
    return res.json({ type: 'error', msg: 'No result found!' });
})

// Get Organization hierarchy template by approval list
router.get("/get-organization-hierarchy-by-approval/:id", async (req, res) => {
    const { id } = req.params;
    const listData = await ApprovalTemplateModel.findOne({ where: { 'approval_id': 36, 'status': 1 }, attributes: ['approval_id', 'template_value'] });
    if (listData) {
        return res.json({ type: 'data', listData });
    }
    return res.json({ type: 'error', msg: 'No result found!' });
})
// get corporate business unit
router.get("/get-corporate-business-unit", async (req, res) => {
    const listData = await CorporateBusinessUnit.findAll({ where: { is_active: 1 }, attributes: [''], order: [['unit_id', 'DESC']] });
    if (listData) {
        return res.json({ type: 'data', listData });
    }
    return res.json({ type: 'error', msg: 'No result found!' });
})

// Get complete seetings
router.post("/get-settings", async (req, res) => {
    const { name } = req.body;
    const listData = await SettingModel.findAll({ where: { name: name } });
    if (listData) {
        return res.json({ type: 'data', listData });
    }
    return res.json({ type: 'error', msg: 'No result found!' });
})


router.get("/get-rfic-list", async (req, res) => {
    const listData = await RficDetailModel.findAll({ where: { group: 'Meals Preference' } });
    if (listData) {
        return res.json({ type: 'data', listData });
    }
    return res.json({ type: 'error', msg: 'No result found!' });
})


// Get airlines list
router.get('/get-airlines-list', (req, res) => {
    cache.get("airlines", (err, airlines) => {
        if (!err) {
            if (airlines == undefined) {
                let data = fs.readFileSync(airlinesJSON);
                airlines = JSON.parse(data);
                airlines.sort((a, b) => (a.name > b.name) ? 1 : -1)
                cache.set("airlines", airlines, (err, success) => {
                    if (!err && success) {
                        return res.json({ type: 'data', airlines, cached: false });
                    }
                });
            } else {
                return res.json({ type: 'data', airlines, cached: true });
            }
        } else {
            return res.json({ type: 'error', msg: error });
        }
    });
});


// get-supplier-list
router.get("/get-supplier-list", async (req, res) => {
    try {
        const listData = await Suppliers.findAll({ where: { is_flight: 1,is_insurance: 1 ,is_active: 1, supplier_id: { [Op.ne]: 1 } }, attributes: ['supplier_code', 'name'], order: [['name', 'ASC']] });

        return res.json({ type: 'data', listData });
    } catch (err) {
        return res.json({ type: 'error', msg: 'No result found!' });
    }
})

router.get("/get-all-suppliers", async (req, res) => {
    try {
        const result = await Suppliers.findAll({
            where: { is_active: 1, name: { [Op.ne]: '' }, supplier_id: { [Op.ne]: 1 } },
            attributes: ['supplier_code', 'name', 'is_hotel', 'is_flight', 'is_holidays', 'is_activities', 'is_car', 'is_transfers', 'is_cruises', 'is_visa', 'is_insurance'],
            order: [['name', 'ASC']] });
        if (result) {
            result.map(e => {
                e.is_hotel ? e.dataValues.product = "hotel" :  e.is_flight ? e.dataValues.product = "flight" :  e.is_holidays ? e.dataValues.product = "holidays" :  e.is_activities ? e.dataValues.product = "activities" :  e.is_car ? e.dataValues.product = "car" :  e.is_transfers ? e.dataValues.product = "transfers" :  e.is_insurance ? e.dataValues.product = "insurance"  : e.dataValues.product = ""
            })
            return makeResponse(res, true, 200, 'success', 'Supplier Data', 'Suppliers Fetched Successfully.', result)
        } else {
            return makeResponse(res, true, 200, 'success', 'Supplier Data', 'Supplier Not Fetched.')
        }
    } catch (error) {
        console.log("common::get-all-suppliers - Error");
        console.log(error);
        return makeResponse(res, false, 200, 'success', 'Supplier Data', 'Oops! Something went wrong while processing your request.', error)
    }
})


// get-self agent-list
router.get("/get-self-agent-list", async (req, res) => {
    try {
        let organisation_id = req.user.organisation_id;
        let admin = req.user.admin;
        let query
        if (admin) {
            query = {
                status: 0
            }
        } else {
            query = {
                status: 0,
                [Op.or]: [{
                    organisation_id: organisation_id
                },
                {
                    parent_id: organisation_id
                }
                ]
            }
        }
        const listData = await sequelizeOrganisation.findAll({
            where: query,
            attributes: ['agent_code', 'organisation_id', 'name'],
            order: [['name', 'ASC']]
        });
        return res.json({ type: 'data', listData });
    } catch (err) {
        return res.json({ type: 'error', msg: 'No result found!' });
    }
})

// Get currency list
router.get('/get-currency-list', (req, res) => {
    cache.get("currencies", async (err, currencies) => {
        if (!err) {
            if (currencies == undefined) {
                let currencyData = await sequelizeCurrency.findAll({ attributes: ['code', 'name', 'currency_id'], raw: true });
                currencyData.sort((a, b) => (a.name > b.name) ? 1 : -1)
                cache.set("currencies", currencyData, (err, success) => {
                    if (!err && success) {
                        return res.json({ type: 'data', currencies: currencyData });
                    }
                });
            } else {
                return res.json({ type: 'data', currencies, cached: true });
            }
        } else {
            return res.json({ type: 'error', msg: error });
        }
    });
});

// Get COmplete seetings
router.get("/get-active-products", async (req, res) => {
    const { name } = req.body;
    let Data = await SettingModel.findOne({ where: { name: 'ActiveProducts' } });
    if (Data) {
        // // console.log('d ', )
        return res.json({ type: 'data', Data: JSON.parse(Data.dataValues.value) });
    }
    return res.json({ type: 'error', msg: 'No result found!' });
})

router.get('/get-airports', async (req, res) => {
    const data = await Airport.findAll({})
    if (data) {
        return res.json({ type: 'data', Data: data });
    }
    return res.json({ type: 'error', msg: 'No result found!' });
})

router.get('/get-audit-trails', async (req, res) => {
    var params = req.query;
    let whereQeury = {};

    if (params.platform)
        whereQeury.platform = params.platform;
    if (params.module)
        whereQeury.module = params.module;
    if (params.event)
        whereQeury.event = params.event;
    if (params.start_date && params.end_date)
        whereQeury.created_at = {
            [Op.gte]: params.start_date,
            [Op.lte]: params.end_date
        }
    const data = await AuditTrail.findAll({ where: whereQeury })
    if (data) {
        return res.json({ type: 'data', Data: data });
    }
    return res.json({ type: 'error', msg: 'No result found!' });
})

// get supplier deposit list from JAVA spi , get url from setting and set parmas
router.get("/get-floating-supplier-list", async (req, res) => {
    // console.log("---get-floating-suppl")
    // let getSupplier = await axios({
    //     method: 'post',
    //     url: 'https://merchandising.tpconnects.com/supplierconnect',
    //     data: {
    //         "SECRET-KEY": '11ce6082-988a-11e7-abc4-cec278b6b50a',
    //         "do_action": 'getFLoatingDepositData'
    //     },
    //     headers: {
    //         'SECRET-KEY': '11ce6082-988a-11e7-abc4-cec278b6b50a',
    //         'agent-KEY': 'TPC',
    //         'apiKey-KEY': '5ec8b2955d618a38232bd168870eca60',
    //         'API-ACCESS-KEY': '16a280839b07332c19a1cd8a8f3ede12',
    //         'SUPPLIER-ID': '12',
    //     },
    //     // rejectUnauthorized: false
    // });
    let FloatingDeposit = [
        //66:
        {
            currency: 'AED',
            credit_limit: '455200.20',
            short_code: 'TPM',
            supplier: 'TPConnects',
        },
        //65:
        {
            currency: 'AED',
            credit_limit: '533532.30',
            short_code: 'TUN',
            supplier: 'TPConnects',
        },
        //75:
        {
            currency: 'GBP',
            credit_limit: '3993362.15',
            short_code: 'TPM',
            supplier: 'TPConnects',
        }]

    // console.log("---FloatingDeposit", FloatingDeposit)
    //if (getSupplier.statusText == 'OK') {
    const listData = FloatingDeposit;// getSupplier.data;
    if (listData) {
        return res.json({ type: 'data', listData });
    }
    return res.json({ type: 'error', msg: 'No result found!' });
    //}

})

// get-self corporate-list
router.get("/get-child-corporate-list", async (req, res) => {
    try {
        let organisation_id = req.user.organisation_id;
        const listData = await sequelizeOrganisation.findAll({ where: { corporate_type: 'Corporate', parent_id: organisation_id }, attributes: ['agent_code', 'organisation_id', 'name'], order: [['name', 'ASC']] });
        return res.json({ type: 'data', listData });
    } catch (err) {
        return res.json({ type: 'error', msg: 'No result found!' });
    }
})

// get-self agent-list
router.get("/get-child-agents-list", async (req, res) => {
    try {
        let organisation_id = req.user.organisation_id;
        const listData = await sequelizeOrganisation.findAll({
            where: {
                status: 0,
                parent_id: organisation_id
            },
            attributes: ['agent_code', 'organisation_id', 'name'],
            order: [
                ['name', 'ASC']
            ]
        });
        return res.json({ type: 'data', listData });
    } catch (err) {
        return res.json({ type: 'error', msg: 'No result found!' });
    }
})

// get-staff list
router.get("/get-staff-profile-list/:organisation_id", async (req, res) => {
    let { organisation_id } = req.params;
    try {
        const listData = await StaffProfile.findAll({
            where: { '$user.corporate$': 1, '$user.status$': 1, '$user.organisation_id$': organisation_id },
            include: [{
                model: Users,
                attributes: ['users_id', 'username', 'organisation_id', 'first_name', 'last_name'],
                required: true
            }],
            attributes: ['employee_id'],
            order: [['users_id', 'DESC']],
            limit: 1,
            raw: true
        });
        return res.json({ type: 'data', listData });
    } catch (err) {
        // console.log("---err", err)
        return res.json({ type: 'error', msg: 'No result found!' });
    }
})

router.get("/get-transaction-detail-by-agent/:organisation_id", async (req, res) => {
    let { organisation_id, staff_id } = req.params;
    if (!organisation_id) {
        organisation_id = req.user.organisation_id;
    }
    try {
        if (staff_id != undefined) {

        }
        const listData = await sequelizeOrganisation.findOne({
            where: { organisation_id },
            include: [{
                model: OrganizationAccount,
                attributes: ['accounts_id', 'available_deposit', 'total_credit_limit', 'usable_credit', 'due_credit'],
                required: true
            },
            {
                model: sequelizeCurrency,
                attributes: ['code', 'name', 'symbol', 'rate'],
                required: true
            }],
            raw: true
        });
        // console.log("--listData", listData)
        listData.currency = listData['currency.code']
        listData.available_deposit = listData['organisation_account.available_deposit']


        return res.json({ type: 'data', listData });
    } catch (error) {
        return res.json({ type: 'error', msg: 'No result found!' });
    }
})
// get-airports-list by cache
router.get('/get-airports-cache', async (req, res) => {
    let { limit, page } = req.body;
    if (!limit) {
        limit = parseInt(limit = 1000)
    }
    if (!page) {
        page = parseInt(page = 0)
    }
    let offset = limit * page;
    try {
        const airportsData = await Airport.findAll({ attributes: ['AirportID', 'AirportCode', 'AirportName'], offset: offset, limit: limit, raw: true })
        if (airportsData) {
            return makeResponse(res, true, 200, 'success', 'Fetch Airport', 'Airport Fetched Successfully.', airportsData)
        } else {
            return makeResponse(res, true, 200, 'success', 'Fetch Airport', 'No Airport Foound.')
        }
    } catch (error) {
        return makeResponse(res, false, 200, 'danger', 'Fetch Airport', 'Oops! Something went wrong while processing your request.', error)
    }
    // cache.get("airports", async (err, airports) => {
    //     if (!err) {
    //         if (airports == undefined) {
    //             let airportsData = await Airport.findAll({ attributes: ['AirportID', 'AirportCode'], raw: true })
    //             cache.set("airports", airportsData, (err, success) => {
    //                 if (!err && success) {
    //                     return res.json({ type: 'data', airports: airportsData });
    //                 }
    //             });
    //         } else {
    //             return res.json({ type: 'data', airports, cached: true });
    //         }
    //     } else {
    //         return res.json({ type: 'error', msg: error });
    //     }
    // });
})

// get-airports-list by AirportCode
router.get('/get-airports-cache/:AirportCode', async (req, res) => {
    const { AirportCode } = req.params;
    if (!AirportCode) {
        return makeResponse(res, true, 200, 'success', 'Fetch Airport', 'Give Airport Code.')
    }
    try {
        let airportsData = await Airport.findAll({ attributes: ['AirportID', 'AirportCode', 'AirportName'], where: { AirportCode: { [Op.like]: AirportCode + '%' } }, raw: true })
        if (airportsData) {
            return makeResponse(res, true, 200, 'success', 'Fetch Airport', 'Airport Fetched Successfully.', airportsData)
        } else {
            return makeResponse(res, true, 200, 'success', 'Fetch Airport', 'No Airport Foound.')
        }
    } catch (error) {
        return makeResponse(res, false, 200, 'danger', 'Fetch Airport', 'Oops! Something went wrong while processing your request.', error)
    }
})

router.post('/upload-image-aws', async (req, res) => {

    // return res.json({
    //     "type": "data",
    //     "image": "\"0717329b6acc2288822faa62584169e3\""
    // });
    let imageB64 = req.body.b64;
    if (!imageB64) {
        return res.status(401).json({ type: 'error', msg: 'Base 64 not provided' });
    }
    try {
        let imageName = await helperFun.uploadImgOnAWS(imageB64);
        return res.json({ type: 'data', image: imageName });
    } catch (error) {
        // console.log('er ', error)
        return res.status(500).json({ type: 'error', msg: 'Error uploading file...!!!', error: error });
    }
})

router.post('/upload-pdf-aws', async (req, res) => {
    // return res.json({"type":"data","pdf":"\"345136b7536adc48a3a15f91b6ece7af\""})
    let imageB64 = req.body.b64;
    try {
        let imageName = await helperFun.uploadPdfOnAWS(imageB64);
        return res.json({ type: 'data', pdf: imageName });
    } catch (error) {
        return res.status(500).json({ type: 'error', msg: 'Error uploading file...!!!', error: error });
    }
})

router.get('/get-roles', async (req, res) => {
    let user_id = req.user.users_id;
    try {
        let roles = await roleModel_AJ.findAll({ where: { created_by: user_id } });
        return res.json({ type: 'data', roles });
    } catch (error) {
        return res.json({ type: 'error', msg: 'No result found!' });
    }

})

router.post('/toggle-status', async (req, res) => {
    var {
        id,
        status,
        table
    } = req.body
    if (id && table) {
        var tableID, tableStatus, tableName

        switch (table) {
            case "sale":
                tableID = "sale_id"
                tableStatus = "is_active"
                tableName = Sale
                break;
            case "markup":
                tableID = "markup_id"
                tableStatus = "is_active"
                tableName = Markups
                break;
            case "organisation":
                tableID = "organisation_id"
                tableStatus = "is_active"
                tableName = PMS
                break;
            case "users":
                tableID = "users_id"
                tableStatus = "is_active"
                tableName = Users
                break;
            case "commissions":
                tableID = "commission_id"
                tableStatus = "is_active"
                tableName = Commissions
                break;
            case "tourcodes":
                tableID = "tourcode_id"
                tableStatus = "is_active"
                tableName = Tourcodes
                break;
            case "roles":
                tableID = "role_id"
                tableStatus = "is_active"
                tableName = roleModel_AJ
                break;
            case "routes":
                tableID = "routes_id"
                tableStatus = "is_active"
                tableName = AirlineRoutes
                break;
        }
    }

    try {
        whereQeury = {
            [tableID]: id
        }
        // first check if this record is exists
        await tableName.findOne({
            where: whereQeury
        }).then((findResult) => {
            if (findResult[tableID]) {
                // now update here
                if (table == "tourcodes" || table == "roles") {
                    status = status ? false : true
                } else {
                    status = status ? 0 : 1
                }
                var result = tableName.update({
                    [tableStatus]: status
                }, {
                    where: whereQeury
                }).then((data) => {
                    res.json({
                        type: 'data',
                        status: 200,
                        msg: 'Status update successfully.',
                        data: {
                            [tableStatus]: status
                        }
                    });
                })
            }
        })
    } catch (error) {
        // console.log('Status error', error)
        res.json({
            type: 'error',
            status: 400,
            msg: 'Oops! Something went wrong while processing your request.',
            error: error
        });
    }
})

module.exports = router;
