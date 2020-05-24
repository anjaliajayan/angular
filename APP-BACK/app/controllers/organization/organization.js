const express = require('express');
const router = express.Router();
const { organisationHModel, organisationBranchModel, sequelizeOrganisation, organizationMpModel, Suppliers, organizationVModel, organsationModel_AJ, OrganisationModel } = require('../../../config/db');
const axios = require('axios');
const parser = require('fast-xml-parser');
const upload = require('../../helpers/fileUpload');
var GetOrganization = require('../../xmls/GetOrganization');
const config = require('../../../config/config');
var UpdateOrganization = require('../../xmls/updateOrganization');
let objOrganization = {}
let payloadObj = {}
let upObjOrganization = {}
let { getOrgDetails, makeResponse } = require("../../helpers/utils");

//CREATE NEW Organization
router.post('/create-organization', (req, res) => {
    // console.log("CHECK THIS REQUEST BODY")
    // console.log(req.body);
    let requestBody = req.body;
    //take from req.body and bind it to the 
    var url = 'http://merchandising.tpconnects.com/CommissionConnect/services/CommissionConnect/';
    // var args = {
    //     name: 'zebasAgent',
    //     email: 'zs@gmail.com',
    //     currency: 'AED',
    //     timezone: '',
    //     roundOff: '0'
    // };
    objOrganization.activeSuppliers = ""
    objOrganization.address1 = ""
    objOrganization.address2 = ""
    objOrganization.agent = ""
    objOrganization.apiKey = ""
    objOrganization.associatedCategory = ""
    objOrganization.associatedOffice = ""
    objOrganization.associatedSalesPerson = ""
    objOrganization.bookingsMonth = ""
    objOrganization.businessId = ""
    objOrganization.cid = ""
    objOrganization.cityId = ""
    objOrganization.contact = ""
    objOrganization.contactCountryId = ""
    objOrganization.countryId = "23"
    objOrganization.created = ""
    //objOrganization.currency= ""
    //objOrganization.email= ""
    objOrganization.identificationId = ""
    objOrganization.imageEmail = ""
    objOrganization.imageInvoice = ""
    objOrganization.imageWebsite = ""
    objOrganization.isShareable = ""
    objOrganization.isSupervision = ""
    objOrganization.memberNumber = ""
    objOrganization.memberOf = ""
    //objOrganization.name= ""
    objOrganization.organisationId = ""
    objOrganization.parentId = ""
    objOrganization.revenueMonth = ""
    objOrganization.roundOff = "0"
    objOrganization.schema = ""
    objOrganization.secretKey = ""
    objOrganization.stateProvince = ""
    objOrganization.status = ""
    objOrganization.termsConditions = ""
    objOrganization.timezone = "Asia/Dubai"
    objOrganization.zip = ""
    objOrganization.email = requestBody.email;
    objOrganization.currency = "AED";
    objOrganization.name = requestBody.name;
    let result = getOrgDetails(req);
    if (!result.auth) {
        return res.status(500).json(result);
    }
    let xml = GetOrganization(result.agent, result.api_key, result.secret_key, objOrganization);
    // console.log("REQUEST")
    // console.log(xml);
    let headersRQ = {
        //headers: { 'Content-Type': 'text/xml' }
        headers: {
            'Content-Type': 'text/plain',
            'SOAPAction': 'SaveOrganisation'
        }
    };
    axios.post(url, xml, headersRQ)
        .then((resp) => {
            //// console.log("THIS IS THE RESPONSE", resp.data);
            let xml = resp.data;
            // console.log("RESPONSE")
            // console.log(xml);
            if (parser.validate(resp.data) === true) {
                let jsonObj = parser.parse(resp.data);
                //jsonObj = snakeCaseKeys(jsonObj)
                var data = jsonObj
                if (parser.validate(resp.data) === true) {
                    let jsonObj = parser.parse(resp.data, config.pkgConfigs.x2joptions);
                    // console.log("THIS IS THE JSON")
                    // console.log(jsonObj);
                    //jsonObj = snakeCaseKeys( jsonObj )
                    // try {
                    //var organization_data = jsonObj['envelope']['body']['SaveOrganisationResponse'];
                    //// console.log("ORGANIZATION DATA")
                    //// console.log(organization_data);
                    //return (organization_data)
                    // } catch (error) {
                    //     return (error)
                    // }
                    var orgResSuccessChk = jsonObj['Envelope']['Body']['SaveOrganisationResponse']['OrganisationResult']['TransactionLog']['status'];
                    let orgResObj = jsonObj['Envelope']['Body']['SaveOrganisationResponse']['OrganisationResult']['Organisation'];
                    let payload = {};
                    payload.organisation_id = orgResObj.organisationId;
                    payload.agent = orgResObj.agent;
                    payload.api_key = orgResObj.apiKey;
                    payload.parent_id = orgResObj.parentId;
                    payload.secret_key = orgResObj.secretKey;
                    payload.status = orgResObj.status;
                    // // console.log("****************************************************")
                    // // console.log(payload);
                    organisationHModel.create(payload)
                        .then((organisationHModel) => {
                            res.json({
                                type: 'data',
                                status: 200,
                                msg: 'Organization Saved Successfully.',
                                organisationHModel: organisationHModel,
                                json: jsonObj
                            });
                        }).catch((error) => {
                            res.status(500).json({
                                type: 'error',
                                status: 400,
                                msg: 'Oops! Something went wrong while processing your request.',
                                json: jsonObj
                            });
                        });
                    return jsonObj;
                }
                //// console.log(JSON.stringify(data));
            } else {
                // console.log("Error in response from organization creation XML")
            }
        })
        .catch((error) => {
            // console.log('erer ', error)
            return reject(error)
        });

    //make payload ask praveen
    //const orgTable = OrganisationModel.create(payload);
    // console.log("THIS SHOULD BE LAST")
    // console.log(payloadObj);
    // organisationHModel.create(req.body)
    //     .then((organisationHModel) => {
    //         res.json({
    //             type: 'data',
    //             status: 200,
    //             msg: 'Organization Saved Successfully.',
    //             organisationHModel: organisationHModel
    //         });
    //     }).catch((error) => {
    //         res.status(500).json({
    //             type: 'error',
    //             status: 400,
    //             msg: 'Oops! Something went wrong while processing your request.',
    //         });
    //     });
});

//CREATE NEW ORGANIZATION HIERARCHY
router.post('/create-organization-hierarchy', (req, res) => {
    // console.log(req.body);
    organizationMpModel.create(req.body)
        .then((organizationMpModel) => {
            res.json({
                type: 'data',
                status: 200,
                msg: 'Organization H table Saved Successfully.',
                organizationMpModel: organizationMpModel
            });
        }).catch((error) => {
            res.json({
                type: 'error',
                status: 400,
                msg: 'Oops! Something went wrong while processing your request.'
                ,
            });
        })
})

//READ SPECIFIC Organization
router.get('/fetch-organization', (req, res) => {
    // console.log(req.body);
    organisationHModel.findOne({
        where: { organisation_id: req.query.organisation_id }
    })
        .then((organisationHModel) => {
            res.json({
                type: 'data',
                status: 200,
                msg: 'Organization Fetched Successfully.',
                organisationHModel: organisationHModel
            });
        }).catch((error) => {
            res.status(500).json({
                type: 'error',
                status: 400,
                msg: 'Oops! Something went wrong while processing your request.',
            });
        });
});

router.get('/fetch-organization-details', (req, res) => {
    organisationHModel.findOne({
        where: { hierarchy_id: req.query.hierarchy_id }
    })
        .then((organisationHModel) => {
            res.json({
                type: 'data',
                status: 200,
                msg: 'Organization Fetched Successfully.',
                data: organisationHModel
            });
        }).catch((error) => {
            res.status(500).json({
                type: 'error',
                status: 400,
                msg: 'Oops! Something went wrong while processing your request.',
            });
        });
})

//UPDATE THE EXISTING Organization Heierarchy table
router.post('/update-organization-heirarchy', (req, res) => {
    
    // console.log("THIS IS UPDATE ORG HEIRARCHY");
    // console.log(req.body);
    let hierarchy = {};
    hierarchy = req.body
    // console.log(hierarchy)
    hierarchy.map(async (ele) => {
        let checkExist = await organizationMpModel.findOne({ where: { hierarchy_id: ele.hierarchy_id }, raw: true });
        // console.log("--checkExist", checkExist)
        if (checkExist) {
            await organizationMpModel.update(ele, {
                where: { hierarchy_id: ele.hierarchy_id }
            });
        }
        else {
            await organizationMpModel.create(ele);
            // console.log("***this should give me a name")
            // console.log(ele.POSName);
            // console.log(ele.hierarchy_id);
            var nodeId = ele.hierarchy_id;
            //*****************************************CREATE ORGANIZATION START*******************************************/
            var url = 'http://merchandising.tpconnects.com/CommissionConnect/services/CommissionConnect/';
            objOrganization.countryId = "23";
            objOrganization.roundOff = "0";
            objOrganization.timezone = "Asia/Dubai";
            objOrganization.email = "company@gmail.com";
            objOrganization.currency = "AED";
            objOrganization.name = ele.POSName;
            let result = getOrgDetails(req);
            if (!result.auth) {
                return res.status(500).json(result);
            }
            let xml = GetOrganization(result.agent, result.api_key, result.secret_key, objOrganization);
            let headersRQ = {
                headers: {
                    'Content-Type': 'text/plain',
                    'SOAPAction': 'SaveOrganisation'
                }
            };
            // console.log("REQUEST");
            // console.log(xml);
            axios.post(url, xml, headersRQ)
                .then((resp) => {
                    let xml = resp.data;
                    // // console.log("RESPONSE")
                    // // console.log(xml);
                    if (parser.validate(resp.data) === true) {
                        let jsonObj = parser.parse(resp.data);
                        var data = jsonObj
                        if (parser.validate(resp.data) === true) {
                            let jsonObj = parser.parse(resp.data, config.pkgConfigs.x2joptions);
                            // // console.log("THIS IS THE JSON")
                            // // console.log(jsonObj);
                            var orgResSuccessChk = jsonObj['Envelope']['Body']['SaveOrganisationResponse']['OrganisationResult']['TransactionLog']['status'];
                            let orgResObj = jsonObj['Envelope']['Body']['SaveOrganisationResponse']['OrganisationResult']['Organisation'];
                            let payload = {};
                            payload.organisation_id = orgResObj.organisationId;
                            payload.agent = orgResObj.agent;
                            payload.api_key = orgResObj.apiKey;
                            payload.parent_id = orgResObj.parentId;
                            payload.secret_key = orgResObj.secretKey;
                            payload.status = orgResObj.status;
                            payload.name = objOrganization.name;
                            payload.is_active = "1";
                            payload.hierarchy_id = nodeId;
                            // // console.log("****************************************************")
                            // // console.log(objOrganization.name);
                            // // console.log(payload);
                            organisationHModel.create(payload)
                                .then((organisationHModel) => {
                                    // console.log(organisationHModel)
                                })
                        }
                    } else {
                        // console.log("Error in response from organization creation XML")
                    }
                })
                .catch((error) => {
                    // console.log('error ', error)
                    return reject(error)
                });
            //*****************************************CREATE ORGANIZATION STOP*******************************************/
        }
    }
    )
    res.json({
        type: 'data',
        status: 200,
        msg: 'Organization H Table Updated Successfully.',
        organizationMpModel: organizationMpModel
    });
});

//READ ALL MENU PERMISSIONS FROM SETTINGS
router.get('/fetch-all-Hierarchy', (req, res) => {
    // console.log(req.query);

    organizationMpModel.findAll({
        where: {
            id: 1
        },
        include: [{
            model: organsationModel_AJ,
            required: false,
        }, {
            model: organizationMpModel,
            include: [{
                model: organsationModel_AJ,
                required: false,
            }, {
                model: organizationMpModel,
                include: [{
                    model: organsationModel_AJ,
                    required: false,
                }, {
                    model: organizationMpModel,
                    include: [{
                        model: organsationModel_AJ,
                        required: false,
                    }, {
                        model: organizationMpModel,
                        include: [{
                            model: organsationModel_AJ,
                            required: false,
                        }, {
                            model: organizationMpModel,
                            // include: [{
                            //     model: organizationMpModel,
                            // }]
                        }]
                    }]
                }]
            }]
        }]
    })
        .then((organizationMpModel) => {
            // return res.json(organizationMpModel)
            res.json({
                type: 'data',
                status: 200,
                msg: 'Hierarchy Fetched Successfully.',
                organizationMpModel: organizationMpModel
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




/**
 * @swagger
 *
 * /api/fetch-all-organization:
 *   get:
 *    tags:
 *      - Organizations
 *    summary: Fetch all organizations
 *    description: Fetch all organizations
 *    consumes:
 *       - application/json
 *    produces:
 *      - application/json
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
router.get('/fetch-all-organization', (req, res) => {
    organisationHModel.findAll({
        // include: [{ model: organisationBranchModel, as: 'branches' }],
        where: {is_active: true, status:1 /*parent_id:req.user.organisation_id*/},
        order:[["name","ASC"]]
        /*,attributes:['is_active','name']*/
    }).then((Organization) => {
        // // console.log('╔══════════════════════════════════════════════════════════════════╗')
        // // console.log('║ controllers/organization/organization.js::fetch-all-organization ║')
        // // console.log('╚══════════════════════════════════════════════════════════════════╝')
        res.json({
            type: 'data',
            status: 200,
            msg: 'Organization Fetched Successfully.',
            Organization: Organization
        });
    }).catch((error) => {
        res.status(500).json({
            type: 'error',
            status: 400,
            msg: 'Oops! Something went wrong while processing your request.' + error
        });
    });
});


/**
 * @swagger
 *
 * /api/organization/branches/{id}:
 *   get:
 *     tags:
 *      - Organizations
 *     summary: Fetch Branch by ID
 *     description: Fetch Branch by ID
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: id
 *         description: Organisation ID
 *         in: path
 *         required: true
 *         type: integer
 *         schema:
 *         properties:
 *           id:
 *             type: integer
 *     responses:
 *       200:
 *         description: Return object
 *       400:
 *        description: Bad Request
 *       401:
 *         description: Not Authrized
 *       403:
 *         description: You do not have necessary permissions for the resource or JWT Expired
 *       500:
 *         description: Something went wrong
 */
router.get('/organization/branches/:organisation_id', async (req, res) => {
    let { organisation_id } = req.params
    organisation_id = parseInt(organisation_id);
    if (!organisation_id || !Number.isInteger(organisation_id)) {
        return makeResponse(res, false, 200, 'danger', 'Organization Branches', 'Organization ID required.')
    }
    try {
        let result = await organisationBranchModel.findAndCountAll({
            where: [{status: 1 }, { organisation_id: organisation_id }],
            order: [ ["name", "ASC"] ]
        })
        let dataArr = [];
        if (result.count > 0) {
            result.rows.map(row => {
                dataArr.push(row);
            });
            result = {
                data: dataArr,
                total: result.count
            }
            return makeResponse(res, true, 200, 'success', 'Organization Branches', 'Organization Branches fetched successfully.', result)
        } else {
            return makeResponse(res, true, 200, 'success', 'Organization Branches', 'No Organization Found.')
        }
    } catch (error) {
        console.log(error)
        return makeResponse(res, false, 200, 'danger', 'Organization Branches', 'Oops! Something went wrong while processing your request.', error)
    }
});

//UPDATE EXISTING Organization
router.post('/update-organization', (req, res) => {
    // console.log("UPDATED RESULTS FOR ORGANIZATION", req.body);
    var updateData = req.body;
    upObjOrganization.countryId = updateData.country_id;
    upObjOrganization.roundOff = updateData.roundOff;
    upObjOrganization.timezone = "Asia/Dubai";
    upObjOrganization.email = updateData.email;
    upObjOrganization.currency = updateData.currency_id;
    upObjOrganization.name = updateData.name;
    upObjOrganization.organisation_id = updateData.organisation_id;
    upObjOrganization.parent_id = updateData.parent_id;
    upObjOrganization.activeSuppliers = "";
    upObjOrganization.address1 = "";
    upObjOrganization.address2 = "";
    upObjOrganization.agent = "";
    upObjOrganization.apiKey = "";
    upObjOrganization.associatedCategory = "";
    upObjOrganization.associatedOffice = "";
    upObjOrganization.associatedSalesPerson = "";
    upObjOrganization.bookingsMonth = "";
    upObjOrganization.businessId = "";
    upObjOrganization.cid = "";
    upObjOrganization.cityId = "";
    upObjOrganization.contact = "";
    upObjOrganization.contactCountryId = "";
    //upObjOrganization.countryId = "23"
    upObjOrganization.created = "";
    //upObjOrganization.currency= ""
    //upObjOrganization.email= ""
    upObjOrganization.identificationId = "";
    upObjOrganization.imageEmail = "";
    upObjOrganization.imageInvoice = "";
    upObjOrganization.imageWebsite = "";
    upObjOrganization.isShareable = "";
    upObjOrganization.isSupervision = "";
    upObjOrganization.memberNumber = "";
    upObjOrganization.memberOf = "";
    //upObjOrganization.name= ""
    upObjOrganization.organisationId = "";
    upObjOrganization.parentId = "";
    upObjOrganization.revenueMonth = "";
    //upObjOrganization.roundOff = "0"
    upObjOrganization.schema = "";
    upObjOrganization.secretKey = "";
    upObjOrganization.stateProvince = "";
    upObjOrganization.status = "1";
    upObjOrganization.termsConditions = "";
    //upObjOrganization.timezone = "Asia/Dubai"
    upObjOrganization.zip = "";
    //upObjOrganization.email = requestBody.email;
    //upObjOrganization.currency = "AED";
    //upObjOrganization.name = requestBody.name;
    // console.log("***********************************************")
    // console.log(upObjOrganization);
    var url = 'http://merchandising.tpconnects.com/CommissionConnect/services/CommissionConnect/';
    let xml = UpdateOrganization(req.body, upObjOrganization);
    let headersRQ = {
        headers: {
            'Content-Type': 'text/plain',
            'SOAPAction': 'SaveOrganisation'
        }
    };
    // console.log("REQUEST");
    // console.log(xml);
    axios.post(url, xml, headersRQ)
        .then((resp) => {
            let xml = resp.data;
            // console.log("I AM INSIDE RESPONSE **********************************************");
            // console.log("RESPONSE");
            // console.log(xml);
            if (parser.validate(resp.data) === true) {
                let jsonObj = parser.parse(resp.data);
                var data = jsonObj;
                if (parser.validate(resp.data) === true) {
                    let jsonObj = parser.parse(resp.data, config.pkgConfigs.x2joptions);
                    // console.log("THIS IS THE JSON");
                    // console.log(jsonObj);
                    var orgResSuccessChk = jsonObj['Envelope']['Body']['SaveOrganisationResponse']['OrganisationResult']['TransactionLog']['status'];
                    let orgResObj = jsonObj['Envelope']['Body']['SaveOrganisationResponse']['OrganisationResult']['Organisation'];
                    let payload = {};
                    payload.organisation_id = orgResObj.organisationId;
                    payload.agent = orgResObj.agent;
                    payload.api_key = orgResObj.apiKey;
                    payload.parent_id = orgResObj.parentId;
                    payload.secret_key = orgResObj.secretKey;
                    payload.status = orgResObj.status;
                    payload.name = upObjOrganization.name;
                    payload.is_active = "1";
                    payload.hierarchy_id = "complete";
                    // console.log("****************************************************")
                    // console.log(objOrganization.name);
                    // console.log(payload);
                    //UPLOAD
                    organisationHModel.update(payload, {
                        where: { organisation_id: payload.organisation_id }
                    })
                        .then((organisationHModel) => {
                            // console.log(organisationHModel)
                        })
                }
            } else {
                // console.log("Error in response from organization creation XML")
            }
        })
        .catch((error) => {
            // console.log('error ', error)
            return reject(error)
        });
    return res;
    // organisationHModel.update(req.body, {
    //     where: { organisation_id: req.query.organisation_id }
    // })
    //     .then((organisationHModel) => {
    //         res.json({
    //             type: 'data',
    //             status: 200,
    //             msg: 'Organization Updated Successfully.',
    //             organisationHModel: organisationHModel
    //         });
    //     }).catch((error) => {
    //         res.status(500).json({
    //             type: 'error',
    //             status: 400,
    //             msg: 'Oops! Something went wrong while processing your request.',
    //             error
    //         });
    //     });
});

//DELETE SPECIFIC Organization
router.delete('/remove-organization', (req, res) => {
    // console.log(req.body);
    organisationHModel.destroy({
        where: { organisation_id: req.query.organisation_id }
    })
        .then((organisationHModel) => {
            res.json({
                type: 'data',
                status: 200,
                msg: 'Organization Deleted Successfully.',
                organisationHModel: organisationHModel
            });
        }).catch((error) => {
            res.status(500).json({
                type: 'error',
                status: 400,
                msg: 'Oops! Something went wrong while processing your request.',
            });
        });
});

//DELETE ALL Organization 
router.delete('/remove-all-organization', (req, res) => {
    // console.log(req.body);
    organisationHModel.destroy({
        where: {},
        truncate: true
    })
        .then((organisationHModel) => {
            res.json({
                type: 'data',
                status: 200,
                msg: 'All Organization Deleted Successfully.',
                organisationHModel: organisationHModel
            });
        }).catch((error) => {
            res.status(500).json({
                type: 'error',
                status: 400,
                msg: 'Oops! Something went wrong while processing your request.',
            });
        });
});

//THIS HAS TO BE WRITTEN ACCORDINGLY
router.post('/upload', upload.array('image', 1), (req, res) => {
    res.send({ image: req.file });
});

router.get('/fetch_supplier_pos', (req, res) => {
    // console.log(req.body);
    Suppliers.findAll({
        where: {
            is_active: "1"
        },
    })
        .then((Suppliers) => {
            res.json({
                type: 'data',
                status: 200,
                msg: 'Supplier Fetched Successfully.',
                Suppliers: Suppliers
            });
        }).catch((error) => {
            res.status(500).json({
                type: 'error',
                status: 400,
                msg: 'Oops! Something went wrong while processing your request.',
            });
        });
})

router.get('/update_supplier_pos', (req, res) => {
    // console.log("THIS IS UPDATE ORG Supplier");
    let supplier = {};
    supplier = req.body
    // console.log(supplier)
    supplier.map(async (ele) => {
        let checkExist = await supplier.findOne({ where: { organisation_id: ele.organisation_id }, raw: true });
        // console.log("--checkExist", checkExist)
        if (checkExist) {
            await supplier.update(ele, {
                where: { organisation_id: ele.organisation_id }
            });
        }
        else {
            await supplier.create(ele);
        }
    })
})

router.post('/organization_vat', (req, res) => {
    // console.log("THIS IS UPDATE ORG VAT");
    let organizationVModel = {};
    organizationVModel = req.body
    // console.log(organizationVModel)
    organizationVModel.map(async (ele) => {
        let checkExist = await organizationVModel.findOne({ where: { organisation_id: ele.organisation_id }, raw: true });
        // console.log("--checkExist", checkExist)
        if (checkExist) {
            await organizationVModel.update(ele, {
                where: { organisation_id: ele.organisation_id }
            });
        }
        else {
            await organizationVModel.create(ele);
        }
    })
});

router.get('/fetch_organization_vat', (req, res) => {
    // console.log(req.body);
    organizationVModel.findAll({
        where: {
            organisation_id: req.body.organisation_id
        }
    })
        .then((organizationVModel) => {
            res.json({
                type: 'data',
                status: 200,
                msg: 'organization vat is fetched successfully.',
                organizationVModel: organizationVModel
            });
        }).catch((error) => {
            res.status(500).json({
                type: 'error',
                status: 400,
                msg: 'Oops! Something went wrong',
                error: error
            })
        })
})

router.put('update_organization_vat', (req, res) => {
    // console.log(req.body);
    organizationVModel.update({
        where: {
            organization_id: req.body.organization_id
        }
    })
        .then((organizationVModel) => {
            res.json({
                type: 'data',
                status: 200,
                msg: 'organization vat is updated successfully. ',
                organizationVModel: organizationVModel
            });
        }).catch((error) => {
            res.json({
                type: 'error',
                status: 400,
                msg: 'Oops! Something went wrong',
                error: error
            })
        })
})

router.post("/check-unique-orgName/:name", async (req, res) => {
    const { name } = req.params;
    // console.log(name);
    const user = await OrganisationModel.findOne({ where: { 'name': name } });
    if (!user) {
        return res.json({
            type: 'data',
            status: 200,
            msg: 'Organisation Name does not exists.'
        });
    }
    return res.json({
        type: 'error',
        status: 400,
        msg: 'Organisation Name already exists.'
    });
})

module.exports = router;
