const express = require('express');
const router = express.Router();
const { organsationHierarchyModel_AJ, organsationModelForHeirarchy_AJ, userModel_AJ, roleModel_AJ, Sequelize } = require('../../../config/db');
var hierarchyMethods = require('./../../helpers/hierarchyMethods');
const axios = require('axios');
const parser = require('fast-xml-parser');
// var moment = require('moment');
const validateInput = require('../../middlewares/validate');
const schema = require('../../validateSchema/index');
const config = require('../../../config/config');
var saveOrganisationXml = require("./../../xmls/updateOrganization");
var snakeCaseKeys = require("./../../helpers/utils").camelToSnake;
var jwt = require('jsonwebtoken');

const { getOrgDetails } = require('./../../helpers/utils')

// fetch chils of the Organisation
router.get('/fetch-childs', async (req, res) => {
    let organisation_id = req.user.organisation_id;
    
    try {
        let organisation = await hierarchyMethods.getOrganisationDetail(organisation_id);
        
        let childs = await hierarchyMethods.getChilds(organisation.hierarchy_id);
        
        return res.json({
            type: 'data',
            status: 200,
            msg: 'Hierarchy Fetched Successfully.',
            childs: childs,
            organisation: organisation
        });
    } catch (error) {
        // console.log('er ', error)
        return res.status(500).json({
            type: 'error',
            status: 400,
            msg: 'Oops! Something went wrong while processing your request.',
        });
    }
});

// fetch hierarchy of childs the Organisation
router.get('/fetch-childs-with-hierarchy', async (req, res) => {
    // // console.log('user is ', req.user)
    let organisation_id = req.user.organisation_id;
    try {
        let hierarchy = await hierarchyMethods.getChildsHierarchy(organisation_id);
        return res.json({
            type: 'data',
            status: 200,
            msg: 'Hierarchy Fetched Successfully.',
            hierarchy: hierarchy,
            organisation_id
        });
    } catch (error) {
        // console.log('err ', error)
        return res.status(500).json({
            type: 'error',
            status: 400,
            msg: 'Oops! Something went wrong while processing your request.',
        });
    }
});

router.get('/fetch-childs-users', async (req, res) => {
    let user_id = req.user.users_id;

    try {
        let childUsers = await hierarchyMethods.getChildUsers(user_id);
        return res.json({
            type: 'data',
            status: 200,
            msg: 'Hierarchy Fetched Successfully.',
            user_id: user_id,
            child_users: childUsers
        });
    } catch (error) {
        return res.status(500).json({
            type: 'error',
            status: 400,
            msg: 'Oops! Something went wrong while processing your request.',
        });
    }
})

// fetch hierarchy of the user
router.get('/fetch-parents', async (req, res) => {
    let organisation_id = req.user.organisation_id;
    try {
        let organisation = await hierarchyMethods.getOrganisationDetail(organisation_id);
        let parents = await hierarchyMethods.getParents(organisation.hierarchy_id);
        return res.json({
            type: 'data',
            status: 200,
            msg: 'Hierarchy Fetched Successfully.',
            parents: parents,
            organisation: organisation
        });
    } catch (error) {
        return res.status(500).json({
            type: 'error',
            status: 400,
            msg: 'Oops! Something went wrong while processing your request.',
        });
    }
});

// fetch hierarchy of the user
router.get('/fetch-parents-with-hierarchy', async (req, res) => {
    let organisation_id = req.user.organisation_id;
    let hierarchyType = '';
    if (req.query.hierarchyType)
        hierarchyType = req.query.hierarchyType;
    // organisation_id = 56484
    try {
        let hierarchy = await hierarchyMethods.getParentsHierarchy(organisation_id, hierarchyType); // pass optional second parameter 'toptobottom' to get top to bottom parent hierarchy
        return res.json({
            type: 'data',
            status: 200,
            msg: 'Hierarchy Fetched Successfully.',
            hierarchy: hierarchy,
            organisation_id
        });
    } catch (error) {
        return res.status(500).json({
            type: 'error',
            status: 400,
            msg: 'Oops! Something went wrong while processing your request.',
        });
    }
});

// Add/Update Point of sale
   router.post('/update-organization-heirarchy', validateInput(schema.orgSchema), async (req, res, next) => {

    try {
    let token = req.headers['authorization'];
    let params = req.body
    if( !token){
        return res.status(401).json({
            auth: false,
            msg: 'Authorized access.'
          }) 
          
    }else{

      jwt.verify(token, config.api.apiSecretKey, async(err, decoded) => {
        if (err) {return res.status(500).json({
          auth: false,
          msg: 'Failed to authenticate the provided token.'
        });
    }else{
    let organisation_id = req.user.organisation_id;
    let data = {
        hierarchy_id: params.hierarchy_id,
        hierarchy_parent: params.parent_id,
        role_id: params.role_id,
        name: params.name,
        organisation_id: (params.organisation_id!=undefined)?params.organisation_id:''
    }
    let checkExist;
    if (params.organisation_id != undefined && params.organisation_id != '') {
        checkExist = await organsationModelForHeirarchy_AJ.findOne({
            where: { organisation_id: params.organisation_id },
            raw: true,
            attributes: ['organisation_id', 'hierarchy_id', 'parent_id', 'secret_key', 'api_key','email', 'address_1', 'address_2', 'city_id', 'contact_country_id','name','created', 'status',  'active_suppliers',              'image_email',  'contact_country_id',  'image_invoice','terms_conditions', 'zip', 'state_province',   'business_id','currency_id'
        
        ]
        });
    }
    if (!checkExist) {
            data.created = new Date();
        data.parent_id = organisation_id;
        data.is_active = true;
        data.status = true;
        data.created_by = req.user.users_id;
        data.secret_key= decoded.user["organisation.secret_key"];
      data.api_key=  decoded.user["organisation.api_key"];
    }
    else {
        data.parent_id = checkExist.parent_id;
    }

        let responseJava =  !checkExist? await saveOrganisationJava(data,req): await saveOrganisationJava(checkExist, req);
        if (checkExist &&( !checkExist.agent_code || checkExist.agent_code == '')) {
            responseJava.agent_code = Number(responseJava.parent_id + responseJava.organisation_id);
        }else {
            responseJava.agent_code = Number(responseJava.parent_id + responseJava.organisation_id);
        }
        responseJava.name = data.name;
        responseJava.hierarchy_id = data.hierarchy_id;
        responseJava.hierarchy_parent = data.hierarchy_parent;
        responseJava.role_id = data.role_id;
        responseJava.status = false;
        let updateObject;
        if (checkExist) {
            updateObject = await organsationModelForHeirarchy_AJ.update(responseJava, { where: { organisation_id: data.organisation_id } });
        }
        else {
            const objList = Object.keys(params);
            for(const val of objList){
                responseJava[val] = params[val];
            }
            responseJava.is_active = true;
            updateObject = await organsationModelForHeirarchy_AJ.create(responseJava);
        }
        return res.json({
            type: 'data',
            status: 200,
            msg: 'Organization Updated Successfully.',
            data: updateObject,
            javaresponse: responseJava
        });
    }
    });
}
    } catch (error) {
        // console.log('TRY__CATCH__ERRR__update-organization-heirarchy', error);
        return res.json({
            type: 'error',
            status: 400,
            msg: 'Oops! Something went wrong while processing your request.update-organization-heirarchy',
        });
    }

});

router.get('/fetch-hierarchy-details', (req, res) => {
    organsationModelForHeirarchy_AJ.findOne({
        where: { hierarchy_id: req.query.hierarchy_id },
        include: [{
            model: userModel_AJ,
            as: 'admin',
            where: { admin: 1 },
            required: false
        }, {
            model: roleModel_AJ
        }]
    })
        .then((result) => {
            res.json({
                type: 'data',
                status: 200,
                msg: 'Hierarchy Detail Fetched Successfully.',
                data: result
            });
        }).catch((error) => {
            // console.log('er ', error)
            res.status(500).json({
                type: 'error',
                status: 400,
                msg: 'Oops! Something went wrong while processing your request.',
            });
        });
})

// Update organisation
router.post('/update-organisation/:id', async (req, res) => {
    let params = req.body;
    // console.log('Params ------update', params)
    params = {...params,secret_key : "bbae366e-743e-4f42-9a56-f9d08c4533d6",api_key :"f8a12f02daf8d877acbd5712493f8021"  }
    try {
        let responseJava = await saveOrganisationJava(params);
        let output = await organsationModelForHeirarchy_AJ.update(req.body, { where: { organisation_id: req.params.id } });
        return res.json({
            type: 'data',
            status: 200,
            msg: 'Organization Updated Successfully.',
            organisation: output
        });        
    } catch (error) {
        return res.json({
            type: 'error',
            status: 400,
            msg: 'Oops! Something went wrong while processing your request.',
        });
    }
})

router.get('/fetch-permissions', async (req, res) => {
    let organisation_id = req.user.organisation_id;
    try {
        let userData = await getCurrentUser(req.user.users_id);
        let orgPermissions = await hierarchyMethods.getPermissions(organisation_id);
        let userPermissions = JSON.parse(userData.menu_permission);

        return res.json({ orgPermissions, userPermissions })
    } catch (error) {
        // console.log('er ', error)
        return res.json(error)
    }
})

router.get('/fetch-permissions-by-org/:organisation_id', async (req, res) => {
    let { organisation_id } = req.params; //use this variable when selected agent have permissions
    let user_organisation_id = req.user.organisation_id;
    try {
        let userData = await getCurrentUser(req.user.users_id);
        let orgPermissions = await hierarchyMethods.getPermissions(organisation_id);//use here "organisation_id"
        
        let currUserOrgPermissions = await hierarchyMethods.getPermissions(user_organisation_id);
        let userPermissions = JSON.parse(userData.menu_permission);
        let prevRole = await userToOrg(currUserOrgPermissions, userPermissions);
        // let currentPerm = await userToOrg(prevRole, orgPermissions);

        return res.json({
            type: 'data',
            status: 200,
            msg: 'Get roles and permissions.',
            // data: currentPerm
            data: orgPermissions
        });
    } catch (error) {
        // console.log('er ', error)
        return res.status(500).json({
            type: 'error',
            status: 400,
            msg: 'Oops! Something went wrong while processing your request.',
        });
    }
})

router.get('/fetch-my-permissions', async (req, res) => {
    let organisation_id = req.user.organisation_id;
    try {
        let userData = await getCurrentUser(req.user.users_id);
        let orgPermissions = await hierarchyMethods.getPermissions(organisation_id);
        let userPermissions = JSON.parse(userData.menu_permission);
        // // console.log("--orgPermissions---",JSON.stringify(orgPermissions))
        // // console.log("--userPermissions---",JSON.stringify(userPermissions))
        let myRole = await userToOrg(userPermissions, orgPermissions);
        return res.json({
            type: 'data',
            status: 200,
            myRole
        })
    } catch (error) {
        return res.json(error)
    }
})

router.get('/fetch-admin-permissions/:organisation_id', async (req, res) => {
    let { organisation_id } = req.params;
    try {
        let userData = await getCurrentUser(req.user.users_id);
        let orgPermissions = await hierarchyMethods.getPermissions(organisation_id);
        let userPermissions = JSON.parse(userData.menu_permission);
        let myRole = await userToOrg(userPermissions, orgPermissions);
        // console.log("--myRole", myRole);
        return res.json({ myRole })
    } catch (error) {
        // console.log('er ', error)
        return res.json(error)
    }
})

module.exports = router;

let userToOrgOld = async function (currenOrg, matchOrg) {
    return new Promise((resolve, reject) => {
        try {
            let keys = Object.keys(currenOrg);
            let tmpPermissions = {};
            for (let ind = 0; ind < keys.length; ind++) {
                const _key = keys[ind];
                let obj = currenOrg[_key];
                if (obj.allowed && obj.allowed == '1') {
                    // match in other
                    if (matchOrg.hasOwnProperty(_key)) {
                        let chobj = matchOrg[_key];
                        if (chobj.allowed && chobj.allowed == '1') {
                            let tmpAccess = [];
                            for (let ind2 = 0; ind2 < obj.accessType.length; ind2++) {
                                const accType = obj.accessType[ind2];
                                // console.log("--chobj", chobj)
                                const chAccType = chobj.accessType[ind2];
                                if (accType.allowed && accType.allowed == 1) {

                                    if (chobj.accessType.map(el => el.name === accType.name)) {
                                        if (chAccType.allowed && chAccType.allowed == 1) {
                                            tmpAccess.push({
                                                allowed: 1,
                                                display: accType.display,
                                                name: accType.name,
                                                checked: false
                                            })
                                        }
                                    }
                                }
                            }
                            tmpPermissions[_key] = {
                                name: obj.name,
                                accessType: tmpAccess,
                                allowed: 1,
                                checked: false
                            }
                        }
                    }
                }
            }
            resolve(tmpPermissions);
        } catch (error) {
            reject(error)
        }
    })
}

let userToOrg = async function (currenOrg, matchOrg) {
    /*currenOrg = {
        "dashboard": {
            "display": "Dashboard",
            "allowed": 1,
            "accessType": [
                { "allowed": 1, "display": "Search", "name": "search" },
                { "allowed": 1, "display": "Booking Info", "name": "bookingInfo" },
                { "allowed": 1, "display": "Revenue", "name": "revenue" },
                { "allowed": 1, "display": "Margin", "name": "margin" }
            ]
        },
        "search": {
            "display": "Search",
            "allowed": 1,
            "accessType": [
                {
                    "allowed": 1,
                    "display": "Flights",
                    "name": "flight",
                    "accessType": [
                        { "allowed": 1, "display": "List", "name": "list" },
                        { "allowed": 1, "display": "Add", "name": "add" },
                        { "allowed": 1, "display": "Edit", "name": "edit" },
                        { "allowed": 1, "display": "Export", "name": "export" }
                    ]
                }]
        },
        "booking": {
            "display": "Book",
            "allowed": 1,
            "accessType": [
                { "allowed": 1, "display": "Export", "name": "export" },
                { "allowed": 1, "display": "View Deails", "name": "view" },
                { "allowed": 1, "display": "Cancel", "name": "cancel" },
                { "allowed": 1, "display": "Void", "name": "void" },
                { "allowed": 1, "display": "Amend", "name": "amend" },
                { "allowed": 1, "display": "Reshop", "name": "reshop" },
                { "allowed": 1, "display": "Re Issue", "name": "reissue" },
                { "allowed": 1, "display": "Book Ticket", "name": "issueTicket" },
                { "allowed": 1, "display": "Voucher", "name": "voucher" },
                { "allowed": 1, "display": "Print Invoice without price", "name": "printWithoutPrice" },
                { "allowed": 1, "display": "Print Invoice", "name": "printBill" },
            ]
        },
        "pos": {
            "display": "Point of Sale",
            "allowed": 1,
            "accessType": [
                { "allowed": 1, "display": "List", "name": "list" },
                { "allowed": 1, "display": "Add", "name": "add" },
                { "allowed": 1, "display": "Edit", "name": "edit" },
                { "allowed": 1, "display": "Export", "name": "export" },
                { "allowed": 1, "display": "Delete", "name": "delete" }
            ]
        },
        "user": {
            "display": "User Role Management",
            "allowed": 1,
            "accessType": [
                { "allowed": 1, "display": "List", "name": "list" },
                { "allowed": 1, "display": "Add", "name": "add" },
                { "allowed": 1, "display": "Edit", "name": "edit" },
                { "allowed": 1, "display": "Update self profile", "name": "updateProfile" },
                { "allowed": 1, "display": "Export", "name": "export" },
                { "allowed": 1, "display": "Delete", "name": "delete" }
            ]
        },
        "setting": {
            "display": "Setup & Configuration",
            "allowed": 1,
            "accessType": [
                {
                    "allowed": 1,
                    "display": "Markup Configuration",
                    "name": "markup",
                    "accessType": [
                        { "allowed": 1, "display": "List", "name": "list" },
                        { "allowed": 1, "display": "Add", "name": "add" },
                        { "allowed": 1, "display": "Edit", "name": "edit" },
                        { "allowed": 1, "display": "Delete", "name": "delete" }
                    ]
                },
                {
                    "allowed": 1,
                    "display": "Roles",
                    "name": "role",
                    "accessType": [
                        { "allowed": 1, "display": "List", "name": "list" },
                        { "allowed": 1, "display": "Add", "name": "add" },
                        { "allowed": 1, "display": "Edit", "name": "edit" },
                        { "allowed": 1, "display": "Delete", "name": "delete" }
                    ]
                },
                {
                    "display": "Tour Code",
                    "allowed": 1,
                    "name": "tourcode",
                    "accessType": [
                        { "allowed": 1, "display": "List", "name": "list" },
                        { "allowed": 1, "display": "Add", "name": "add" },
                        { "allowed": 1, "display": "Edit", "name": "edit" },
                        { "allowed": 1, "display": "Delete", "name": "delete" }
                    ]
                },
                {
                    "name": "commissions",
                    "display": "Comissions",
                    "allowed": 1,
                    "accessType": [
                        { "allowed": 1, "display": "List", "name": "list" },
                        { "allowed": 1, "display": "Add", "name": "add" },
                        { "allowed": 1, "display": "Edit", "name": "edit" },
                        { "allowed": 1, "display": "Delete", "name": "delete" }
                    ]
                },
                {
                    "allowed": 1,
                    "display": "Supplier",
                    "name": "supplier",
                    "accessType": [
                        { "allowed": 1, "display": "List", "name": "list" },
                        { "allowed": 1, "display": "Add", "name": "add" },
                        { "allowed": 1, "display": "Edit", "name": "edit" },
                        { "allowed": 1, "display": "Delete", "name": "delete" }
                    ]
                },
                {
                    "allowed": 1,
                    "display": "Currency Configuration",
                    "name": "currencyConfig",
                    "accessType": [
                        { "allowed": 1, "display": "List", "name": "list" },
                        { "allowed": 1, "display": "Add", "name": "add" },
                        { "allowed": 1, "display": "Edit", "name": "edit" },
                        { "allowed": 1, "display": "Delete", "name": "delete" }
                    ]
                },
                {
                    "allowed": 1,
                    "display": "Email Templates",
                    "name": "emailTemplate",
                    "accessType": [
                        { "allowed": 1, "display": "List", "name": "list" },
                        { "allowed": 1, "display": "Add", "name": "add" },
                        { "allowed": 1, "display": "Edit", "name": "edit" },
                        { "allowed": 1, "display": "Delete", "name": "delete" }
                    ]
                }
            ]
        },
        "account": {
            "display": "Accounts",
            "allowed": 1,
            "accessType": [
                {
                    "allowed": 1,
                    "display": "Transactions",
                    "name": "transaction",
                    "accessType": [
                        { "allowed": 1, "display": "List", "name": "list" },
                        { "allowed": 1, "display": "Add", "name": "add" },
                        { "allowed": 1, "display": "Edit", "name": "edit" },
                        { "allowed": 1, "display": "Delete", "name": "delete" }
                    ]
                },
                {
                    "allowed": 1,
                    "display": "Topup",
                    "name": "topup",
                    "accessType": [
                        { "allowed": 1, "display": "List", "name": "list" },
                        { "allowed": 0, "display": "Add", "name": "add" },
                        { "allowed": 0, "display": "Edit", "name": "edit" },
                        { "allowed": 1, "display": "Delete", "name": "delete" }
                    ]
                },
                {
                    "allowed": 1,
                    "display": "Floating Deposit",
                    "name": "floating",
                    "accessType": [
                        { "allowed": 1, "display": "List", "name": "list" },
                        { "allowed": 1, "display": "Add", "name": "add" },
                        { "allowed": 0, "display": "Edit", "name": "edit" },
                        { "allowed": 1, "display": "Delete", "name": "delete" }
                    ]
                }
            ]
        },
        "profile": {
            "display": "Profile Management",
            "allowed": 1,
            "accessType": [
                {
                    "allowed": 1,
                    "display": "Traveller Profile",
                    "name": "travellerProf",
                    "accessType": [
                        { "allowed": 1, "display": "List", "name": "list" },
                        { "allowed": 1, "display": "Add", "name": "add" },
                        { "allowed": 1, "display": "Edit", "name": "edit" },
                        { "allowed": 1, "display": "Delete", "name": "delete" }
                    ]
                },
                {
                    "allowed": 1,
                    "display": "Group Profile",
                    "name": "groupProf",
                    "accessType": [
                        { "allowed": 1, "display": "List", "name": "list" },
                        { "allowed": 1, "display": "Add", "name": "add" },
                        { "allowed": 1, "display": "Edit", "name": "edit" },
                        { "allowed": 1, "display": "Delete", "name": "delete" }
                    ]
                },
                {
                    "allowed": 1,
                    "display": "Agency Profile",
                    "name": "agencyProf",
                    "accessType": [
                        { "allowed": 1, "display": "List", "name": "list" },
                        { "allowed": 1, "display": "Add", "name": "add" },
                        { "allowed": 1, "display": "Edit", "name": "edit" },
                        { "allowed": 1, "display": "Delete", "name": "delete" }
                    ]
                },
                {
                    "allowed": 1,
                    "display": "Company Profile",
                    "name": "companyProf",
                    "accessType": [
                        { "allowed": 1, "display": "List", "name": "list" },
                        { "allowed": 1, "display": "Add", "name": "add" },
                        { "allowed": 1, "display": "Edit", "name": "edit" },
                        { "allowed": 1, "display": "Delete", "name": "delete" }
                    ]
                }
            ]
        },
        "reports": {
            "display": "Reports",
            "allowed": 1,
            "accessType": [
                {
                    "allowed": 1,
                    "display": "Booking",
                    "name": "bookingRep",
                    "accessType": [
                        { "allowed": 1, "display": "Export Reports", "name": "export" }
                    ]
                },
                {
                    "allowed": 1,
                    "display": "Segment",
                    "name": "segment",
                    "accessType": [
                        { "allowed": 1, "display": "Export Reports", "name": "export" }
                    ]
                },
                {
                    "allowed": 1,
                    "display": "MIS",
                    "name": "mis",
                    "accessType": [
                        { "allowed": 1, "display": "Export Reports", "name": "export" }
                    ]
                },
                {
                    "allowed": 1,
                    "display": "Search Log",
                    "name": "searchLog",
                    "accessType": [
                        { "allowed": 1, "display": "Export Reports", "name": "export" }
                    ]
                },
                {
                    "allowed": 1,
                    "display": "Audit Trail Log",
                    "name": "auditTrial",
                    "accessType": [
                        { "allowed": 1, "display": "Export Reports", "name": "export" }
                    ]
                },
                {
                    "allowed": 1,
                    "display": "Ticket",
                    "name": "ticket",
                    "accessType": [
                        { "allowed": 1, "display": "Export Reports", "name": "export" }
                    ]
                },
                {
                    "allowed": 1,
                    "display": "Dynamic Report",
                    "name": "dynamicReport",
                    "accessType": [
                        { "allowed": 1, "display": "Export Reports", "name": "export" }
                    ]
                }
            ]
        },
        "help": {
            "display": "Help",
            "allowed": 1,
            "accessType": [
                { }
            ]
        }
    };

    matchOrg = {
        "dashboard": {
            "display": "Dashboard",
            "allowed": 1,
            "accessType": [
                { "allowed": 1, "display": "Search", "name": "search" },
                { "allowed": 1, "display": "Booking Info", "name": "bookingInfo" },
                { "allowed": 1, "display": "Revenue", "name": "revenue" },
                { "allowed": 1, "display": "Margin", "name": "margin" }
            ]
        },
        "search": {
            "display": "Search",
            "allowed": 1,
            "accessType": [
                {
                    "allowed": 1,
                    "display": "Flights",
                    "name": "flight",
                    "accessType": [
                        { "allowed": 1, "display": "List", "name": "list" },
                        { "allowed": 1, "display": "Add", "name": "add" },
                        { "allowed": 1, "display": "Edit", "name": "edit" },
                        { "allowed": 1, "display": "Export", "name": "export" }
                    ]
                }]
        },
        "booking": {
            "display": "Book",
            "allowed": 1,
            "accessType": [
                { "allowed": 1, "display": "Export", "name": "export" },
                { "allowed": 1, "display": "View Deails", "name": "view" },
                { "allowed": 1, "display": "Cancel", "name": "cancel" },
                { "allowed": 1, "display": "Void", "name": "void" },
                { "allowed": 1, "display": "Amend", "name": "amend" },
                { "allowed": 1, "display": "Reshop", "name": "reshop" },
                { "allowed": 1, "display": "Re Issue", "name": "reissue" },
                { "allowed": 1, "display": "Book Ticket", "name": "issueTicket" },
                { "allowed": 1, "display": "Voucher", "name": "voucher" },
                { "allowed": 1, "display": "Print Invoice without price", "name": "printWithoutPrice" },
                { "allowed": 1, "display": "Print Invoice", "name": "printBill" },
            ]
        },
        "pos": {
            "display": "Point of Sale",
            "allowed": 1,
            "accessType": [
                { "allowed": 1, "display": "List", "name": "list" },
                { "allowed": 1, "display": "Add", "name": "add" },
                { "allowed": 1, "display": "Edit", "name": "edit" },
                { "allowed": 1, "display": "Export", "name": "export" },
                { "allowed": 1, "display": "Delete", "name": "delete" }
            ]
        },
        "user": {
            "display": "User Role Management",
            "allowed": 1,
            "accessType": [
                { "allowed": 1, "display": "List", "name": "list" },
                { "allowed": 1, "display": "Add", "name": "add" },
                { "allowed": 1, "display": "Edit", "name": "edit" },
                { "allowed": 1, "display": "Update self profile", "name": "updateProfile" },
                { "allowed": 1, "display": "Export", "name": "export" },
                { "allowed": 1, "display": "Delete", "name": "delete" }
            ]
        },
        "setting": {
            "display": "Setup & Configuration",
            "allowed": 1,
            "accessType": [
                {
                    "allowed": 1,
                    "display": "Markup Configuration",
                    "name": "markup",
                    "accessType": [
                        { "allowed": 1, "display": "List", "name": "list" },
                        { "allowed": 1, "display": "Add", "name": "add" },
                        { "allowed": 1, "display": "Edit", "name": "edit" },
                        { "allowed": 1, "display": "Delete", "name": "delete" }
                    ]
                },
                {
                    "allowed": 1,
                    "display": "Roles",
                    "name": "role",
                    "accessType": [
                        { "allowed": 1, "display": "List", "name": "list" },
                        { "allowed": 1, "display": "Add", "name": "add" },
                        { "allowed": 1, "display": "Edit", "name": "edit" },
                        { "allowed": 1, "display": "Delete", "name": "delete" }
                    ]
                },
                {
                    "display": "Tour Code",
                    "allowed": 1,
                    "name": "tourcode",
                    "accessType": [
                        { "allowed": 1, "display": "List", "name": "list" },
                        { "allowed": 1, "display": "Add", "name": "add" },
                        { "allowed": 1, "display": "Edit", "name": "edit" },
                        { "allowed": 1, "display": "Delete", "name": "delete" }
                    ]
                },
                {
                    "name": "commissions",
                    "display": "Comissions",
                    "allowed": 1,
                    "accessType": [
                        { "allowed": 1, "display": "List", "name": "list" },
                        { "allowed": 1, "display": "Add", "name": "add" },
                        { "allowed": 1, "display": "Edit", "name": "edit" },
                        { "allowed": 1, "display": "Delete", "name": "delete" }
                    ]
                },
                {
                    "allowed": 1,
                    "display": "Supplier",
                    "name": "supplier",
                    "accessType": [
                        { "allowed": 1, "display": "List", "name": "list" },
                        { "allowed": 1, "display": "Add", "name": "add" },
                        { "allowed": 1, "display": "Edit", "name": "edit" },
                        { "allowed": 1, "display": "Delete", "name": "delete" }
                    ]
                },
                {
                    "allowed": 1,
                    "display": "Currency Configuration",
                    "name": "currencyConfig",
                    "accessType": [
                        { "allowed": 1, "display": "List", "name": "list" },
                        { "allowed": 1, "display": "Add", "name": "add" },
                        { "allowed": 1, "display": "Edit", "name": "edit" },
                        { "allowed": 1, "display": "Delete", "name": "delete" }
                    ]
                },
                {
                    "allowed": 1,
                    "display": "Email Templates",
                    "name": "emailTemplate",
                    "accessType": [
                        { "allowed": 1, "display": "List", "name": "list" },
                        { "allowed": 1, "display": "Add", "name": "add" },
                        { "allowed": 1, "display": "Edit", "name": "edit" },
                        { "allowed": 1, "display": "Delete", "name": "delete" }
                    ]
                }
            ]
        },
        "account": {
            "display": "Accounts",
            "allowed": 1,
            "accessType": [
                {
                    "allowed": 1,
                    "display": "Transactions",
                    "name": "transaction",
                    "accessType": [
                        { "allowed": 1, "display": "List", "name": "list" },
                        { "allowed": 1, "display": "Add", "name": "add" },
                        { "allowed": 1, "display": "Edit", "name": "edit" },
                        { "allowed": 1, "display": "Delete", "name": "delete" }
                    ]
                },
                {
                    "allowed": 1,
                    "display": "Topup",
                    "name": "topup",
                    "accessType": [
                        { "allowed": 1, "display": "List", "name": "list" },
                        { "allowed": 0, "display": "Add", "name": "add" },
                        { "allowed": 0, "display": "Edit", "name": "edit" },
                        { "allowed": 1, "display": "Delete", "name": "delete" }
                    ]
                },
                {
                    "allowed": 1,
                    "display": "Floating Deposit",
                    "name": "floating",
                    "accessType": [
                        { "allowed": 1, "display": "List", "name": "list" },
                        { "allowed": 1, "display": "Add", "name": "add" },
                        { "allowed": 0, "display": "Edit", "name": "edit" },
                        { "allowed": 1, "display": "Delete", "name": "delete" }
                    ]
                }
            ]
        },
        "profile": {
            "display": "Profile Management",
            "allowed": 1,
            "accessType": [
                {
                    "allowed": 1,
                    "display": "Traveller Profile",
                    "name": "travellerProf",
                    "accessType": [
                        { "allowed": 1, "display": "List", "name": "list" },
                        { "allowed": 1, "display": "Add", "name": "add" },
                        { "allowed": 1, "display": "Edit", "name": "edit" },
                        { "allowed": 1, "display": "Delete", "name": "delete" }
                    ]
                },
                {
                    "allowed": 1,
                    "display": "Group Profile",
                    "name": "groupProf",
                    "accessType": [
                        { "allowed": 1, "display": "List", "name": "list" },
                        { "allowed": 1, "display": "Add", "name": "add" },
                        { "allowed": 1, "display": "Edit", "name": "edit" },
                        { "allowed": 1, "display": "Delete", "name": "delete" }
                    ]
                },
                {
                    "allowed": 1,
                    "display": "Agency Profile",
                    "name": "agencyProf",
                    "accessType": [
                        { "allowed": 1, "display": "List", "name": "list" },
                        { "allowed": 1, "display": "Add", "name": "add" },
                        { "allowed": 1, "display": "Edit", "name": "edit" },
                        { "allowed": 1, "display": "Delete", "name": "delete" }
                    ]
                },
                {
                    "allowed": 1,
                    "display": "Company Profile",
                    "name": "companyProf",
                    "accessType": [
                        { "allowed": 1, "display": "List", "name": "list" },
                        { "allowed": 1, "display": "Add", "name": "add" },
                        { "allowed": 1, "display": "Edit", "name": "edit" },
                        { "allowed": 1, "display": "Delete", "name": "delete" }
                    ]
                }
            ]
        },
        "reports": {
            "display": "Reports",
            "allowed": 1,
            "accessType": [
                {
                    "allowed": 1,
                    "display": "Booking",
                    "name": "bookingRep",
                    "accessType": [
                        { "allowed": 1, "display": "Export Reports", "name": "export" }
                    ]
                },
                {
                    "allowed": 1,
                    "display": "Segment",
                    "name": "segment",
                    "accessType": [
                        { "allowed": 1, "display": "Export Reports", "name": "export" }
                    ]
                },
                {
                    "allowed": 1,
                    "display": "MIS",
                    "name": "mis",
                    "accessType": [
                        { "allowed": 1, "display": "Export Reports", "name": "export" }
                    ]
                },
                {
                    "allowed": 1,
                    "display": "Search Log",
                    "name": "searchLog",
                    "accessType": [
                        { "allowed": 1, "display": "Export Reports", "name": "export" }
                    ]
                },
                {
                    "allowed": 1,
                    "display": "Audit Trail Log",
                    "name": "auditTrial",
                    "accessType": [
                        { "allowed": 1, "display": "Export Reports", "name": "export" }
                    ]
                },
                {
                    "allowed": 1,
                    "display": "Ticket",
                    "name": "ticket",
                    "accessType": [
                        { "allowed": 1, "display": "Export Reports", "name": "export" }
                    ]
                },
                {
                    "allowed": 1,
                    "display": "Dynamic Report",
                    "name": "dynamicReport",
                    "accessType": [
                        { "allowed": 1, "display": "Export Reports", "name": "export" }
                    ]
                }
            ]
        },
        "help": {
            "display": "Help",
            "allowed": 1,
            "accessType": [
                { }
            ]
        }
    };*/


    return new Promise((resolve, reject) => {
        try {
            let keys = Object.keys(currenOrg);
            let tmpPermissions = {};
            for (let ind = 0; ind < keys.length; ind++) {
                const _key = keys[ind];
                let obj = currenOrg[_key];

                // if (obj.allowed && obj.allowed == 1) {
                if (obj.checked && obj.allowed == 1) {
                    // match in other
                    if (matchOrg.hasOwnProperty(_key)) {
                        let chobj = matchOrg[_key];
                        if (chobj.allowed && chobj.allowed == '1') {
                            let tmpAccess = [];
                            for (let ind2 = 0; ind2 < obj.accessType.length; ind2++) {
                                const accType = obj.accessType[ind2];
                                const chAccType = chobj.accessType[ind2];
                                if (accType.allowed && accType.allowed == 1) {
                                    if (chobj.accessType.map(el => el.name === accType.name)) {
                                        if (chAccType.allowed && chAccType.allowed == 1) {
                                            // check if child have more permissions
                                            let inerTmpAccess = [];
                                            if (accType.accessType != undefined) {
                                                // // console.log("--chAccType",chAccType)
                                                for (let ind3 = 0; ind3 < accType.accessType.length; ind3++) {
                                                    if (accType.accessType[ind3].allowed && accType.accessType[ind3].allowed == 1) {
                                                        if (chAccType.accessType.map(el => el.name === accType.accessType[ind3].name)) {
                                                            // // console.log("--ind2",ind3)
                                                            // // console.log("--ind2",chAccType.accessType[ind3].name)
                                                            inerTmpAccess.push({
                                                                allowed: 1,
                                                                display: chAccType.accessType[ind3].display,
                                                                name: chAccType.accessType[ind3].name,
                                                                checked: false
                                                            })
                                                        }
                                                    }
                                                }
                                            }
                                            tmpAccess.push({
                                                allowed: 1,
                                                display: accType.display,
                                                name: accType.name,
                                                checked: false,
                                                accessType: inerTmpAccess,
                                            })
                                        }
                                    }
                                }
                            }
                            tmpPermissions[_key] = {
                                display: obj.display,
                                accessType: tmpAccess,
                                allowed: 1,
                                checked: false
                            }
                        }
                    }
                }
            }
            resolve(tmpPermissions);
        } catch (error) {
            reject(error)
        }
    })
}

let getCurrentUser = async function (userId) {
    let user = await userModel_AJ.findOne({ where: { users_id: userId }, attributes: ['menu_permission'], raw: true });
    return user;
}

let saveOrganisationJava = async function (params, req) {
    // // console.log('Params => ', params)
   // let xml = await saveOrganisationXml(params);
    return new Promise((resolve, reject) => {
        try {
            let url = config.api.getsaleIdURL;
            let result = getOrgDetails(req);
            if (!result.auth) {
                return res.status(500).json(result);
            }
            let xml = saveOrganisationXml(result.agent, result.api_key, result.secret_key, params);
            let headersRQ = {
                headers: {
                    'Content-Type': 'text/xml',
                    'SOAPAction': 'SaveOrganisation'
                }
            };
            // // console.log(xml)
            axios.post(url, xml, headersRQ)
                .then((resp) => {
                    if (parser.validate(resp.data) === true) {
                        let jsonObj = parser.parse(resp.data, config.pkgConfigs.x2joptions);
                        jsonObj = snakeCaseKeys(jsonObj, 20)
                        try {
                            var orgData = jsonObj['envelope']['body']['save_organisation_response']['organisation_result']['organisation'];
                            // console.log('dd ', orgData)
                            return resolve(orgData)
                        } catch (error) {
                            // console.log('______trycatch__inside___snakeCaseKeys___', error)
                            return reject(error)
                        }
                    }
                    return resolve(resp.data)
                })
                .catch((error) => {
                    // console.log('_____saveOrganisationJava___trycatch___inner___', error);
                    //// console.log('erer ', error)
                    return reject(error)
                });
        } catch (error) {
            // console.log('_____saveOrganisationJava___trycatch___outer___', error);
            return reject(error)
        }
    })
}


// let saveOrganisationJava = async function (params) {
//     // console.log('_________Params____saveOrganisationJava_____', params)
//     let xml = await saveOrganisationXml(params);
//     return new Promise((resolve, reject) => {
//         try {
//             let url = config.api.getsaleIdURL;
         
//             let headersRQ = {
//                 headers: {
//                     'Content-Type': 'text/xml',
//                     'SOAPAction': 'SaveOrganisation'
//                 }
//             };
//              // console.log('_________Params____saveOrganisationJava_____xml',xml)
//             axios.post(url, xml, headersRQ)
//                 .then((resp) => {
//                     // console.log('_______saveOrganisationJava__resp_', resp);
//                     if (parser.validate(resp.data) === true) {
//                         let jsonObj = parser.parse(resp.data, config.pkgConfigs.x2joptions);
//                         jsonObj = snakeCaseKeys(jsonObj, 20)
//                         try {
//                             var orgData = jsonObj['envelope']['body']['save_organisation_response']['organisation_result']['organisation'];
//                             // console.log('dd______ ', orgData)
//                             return resolve(orgData)
//                         } catch (error) {
//                             // console.log('______trycatch__inside___snakeCaseKeys___', error)
//                             return reject(error)
//                         }
//                     }

//                     return resolve(resp.data)
//                 })
//                 .catch((error) => {
//                     // console.log('_____saveOrganisationJava___trycatch___inner___', error);
//                     //// console.log('erer ', error)
//                     return reject(error)
//                 });
//         } catch (error) {
//             // console.log('_____saveOrganisationJava___trycatch___outer___', error);
//             return reject(error)
//         }
//     })

// }