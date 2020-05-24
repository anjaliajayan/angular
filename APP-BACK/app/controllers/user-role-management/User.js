const express = require('express');
const router = express.Router();
const { QueryTypes } = require('sequelize');
// const Sequelize = require('sequelize');
const { Users, db, Sequelize, OrganisationModel, OrganisationModel_M, Bookings, FlightSearchLog, HotelSearchLog, CarSearchLog, InsuranceSearchLog, TransferSearchLog, ActivitiesSearchLog, SettingModel } = require('../../../config/db');
const config = require('./../../../config/config');
let { HashPassword, makeResponse } = require('./../../helpers/utils');
const userDao = require('../../dao/user.dao.js');
const redisHelper = new (require('../../helpers/redis.helper'))();
let AWS = require('aws-sdk');
let moment = require('moment');
let {getOrgDetails} = require('../../helpers/utils');
const Op = Sequelize.Op;

const { targetValidator, validateDeleteUser, validateUser } = require('../../validations/user.validate');


/**
 * @swagger
 *
 * /api/logedin-user-info:
 *   get:
 *     tags:
 *        -  User
 *     description: get logged in user profile
 *     produces:
 *       - application/json
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
router.get("/logedin-user-info", async (req, res) => {
    let userData = await Users.findOne({ where: { username: req.user.users_id }, raw: true });
    if (userData) {
        return res.json({
            type: 'data',
            status: 200,
            msg: 'Loged in user details.',
            data: userData
        });
    }
    return res.json({
        type: 'error',
        status: 400,
        msg: 'Username not logedin.',
    });

})



/**
 * @swagger
 *
 * /api/update-logedin-user:
 *   post:
 *     tags:
 *        -  User
 *     description: upldate logged in user profile
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: email
 *         description: upldate logged in user profile
 *         in: body
 *         required: true
 *         type: string
 *         schema:
 *         properties:
 *           salute:
 *              type: string
 *           first_name:
 *              type: string
 *           last_name:
 *              type: string
 *           password:
 *              type: string
 *           password_confirmation:
 *              type: string
 *           old_password:
 *              type: string
 *           initial:
 *              type: string
 *           mobile:
 *              type: string
 *           address_1:
 *              type: string
 *           address_2:
 *              type: string
 *           country_id:
 *              type: integer
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
router.post("/update-logedin-user", FUNC.validateApi(validRules.updateLoginUser), async (req, res) => {
    let { salute, first_name, last_name, password, password_confirmation, old_password, initial, mobile, address_1, address_2, country_id } = req.body;
    let formData = {};
    formData.salute = salute;
    formData.first_name = first_name;
    formData.last_name = last_name;
    formData.initial = initial;
    formData.mobile = mobile;
    formData.address_1 = address_1;
    formData.address_2 = address_2;
    formData.country_id = country_id;

    if (old_password && password && password_confirmation) {
        if (password_confirmation !== password) {
            return res.json({
                type: 'error',
                status: 400,
                msg: 'Password not matched.'
            });
        }

        let passHash = HashPassword(password, config.api.pwdHashSalt);
        if (passHash !== password) {
            return res.json({
                type: 'error',
                status: 400,
                msg: 'Current password not matched.'
            });
        }
        formData.password = passHash;
    }
    // console.log("---formData", formData)
    Users.update(formData, { where: { users_id: req.user.users_id } })
        .then((result) => {
            return res.json({
                type: 'data',
                status: 200,
                msg: 'Your profile updated Successfully.',
            });
        }).catch((error) => {
            // console.log("--error", error)
            return res.json({
                type: 'error',
                status: 400,
                msg: 'Oops! Something went wrong while processing your request.'
                ,
            });
        });

})


/**
 * @swagger
 *
 * /api/match-old-password:
 *   post:
 *     tags:
 *        -  User
 *     description: compare password
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: email
 *         description: compare password
 *         in: body
 *         required: true
 *         type: string
 *         schema:
 *         properties:
 *           password:
 *              type: string
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
router.post("/match-old-password", (req, res) => {
    const { password } = req.body;
    let userData = req.user;
    let passHash = HashPassword(password, config.api.pwdHashSalt);
    if (passHash === userData.password) {
        return res.json({
            type: 'data',
            status: 200,
            msg: 'Password matched successfully.'
        });
    }
    return res.json({
        type: 'error',
        status: 400,
        msg: 'Password not matched successfully.'
        ,
    });

})


/**
 * @swagger
 *
 * /api/check-unique-email/{email}:
 *   post:
 *     tags:
 *        -  User
 *     description: check unique email
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: email
 *         description: provider email
 *         in: path
 *         required: true
 *         type: string
 *         schema:
 *         properties:
 *           email:
 *              type: string
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
router.post("/check-unique-email/:email", async (req, res) => {
    const { email } = req.params;
    const user = await Users.findOne({ where: { 'email': email } });
    if (!user) {
        return res.json({
            type: 'data',
            status: 200,
            msg: 'Email not exists.'
        });
    }
    return res.json({
        type: 'error',
        status: 400,
        msg: 'Email address already exists.'
    });
})


/**
 * @swagger
 *
 * /api/check-unique-userName/{username}:
 *   post:
 *     tags:
 *        -  User
 *     description: check unique username
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: uername
 *         description: provider username
 *         in: path
 *         required: true
 *         type: string
 *         schema:
 *         properties:
 *           username:
 *              type: string
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
router.post("/check-unique-userName/:username", async (req, res) => {
    const { username } = req.params;
    // console.log(username);
    const user = await Users.findOne({ where: { 'username': username } });
    if (!user) {
        return res.json({
            type: 'data',
            status: 200,
            msg: 'Username not exists.'
        });
    }
    return res.json({
        type: 'error',
        status: 400,
        msg: 'Username address already exists.'
    });
})



/**
 * @swagger
 *
 * /api/create-new-user:
 *   post:
 *    tags:
 *      - User
 *    summary: Create new user
 *    description: Create new user
 *    consumes:
 *       - application/json
 *    produces:
 *      - application/json
 *    required:
 *      - user_id
 *      - targets
 *    parameters:
 *      - in: body
 *        name: body
 *        description: Create new user
 *        required: true
 *        schema:
 *         properties:
 *           salute:
 *              type: string
 *           first_name:
 *              type: string
 *           last_name:
 *              type: string
 *           sex:
 *              type: string
 *           password:
 *              type: string
 *           password_confirmation:
 *              type: string
 *           initial:
 *              type: string
 *           mobile:
 *              type: string
 *           email:
 *              type: string
 *           username:
 *              type: string
 *           address_1:
 *              type: string
 *           address_2:
 *              type: string
 *           country_id:
 *              type: string
 *           selected_permissions:
 *              type: string
 *           skills:
 *              type: string
 *           organisation_id:
 *              type: string
 *           is_active:
 *              type: string
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
router.post('/create-new-user', validateUser, async (req, res) => {
    // // console.log("--req.body", req.body)

    const orgDetails = getOrgDetails(req);

    let { salute, first_name, last_name, sex, password, password_confirmation, initial, mobile, email, username, address_1, address_2, country_id, selected_permissions, skills, organisation_id, branch_id, is_active, role_id } = req.body;
    let formData = {};
    formData.salute = salute;
    formData.first_name = first_name;
    formData.last_name = last_name;
    formData.sex = sex;
    formData.initial = initial;
    formData.mobile = mobile;
    formData.email = email;
    formData.username = username;
    formData.address_1 = address_1;
    formData.address_2 = address_2;
    formData.country_id = country_id;
    // formData.menu_permission = JSON.stringify(selected_permissions);
    formData.target_amount = JSON.stringify(skills);
    formData.organisation_id = organisation_id;
    formData.branch_id = branch_id;
    formData.is_active = is_active;
    formData.created = new Date;
    // custom
    formData.is_validated = 1;
    formData.status = 1;
    formData.group_id = 1;
    formData.role_id = role_id;

    // if (password !== password_confirmation) {
    //     return res.json({
    //         type: 'error',
    //         status: 400,
    //         msg: 'Confirm password not matched to password.',
    //     });
    // }



    let usernameExists = await Users.findOne({ where: { username: formData.username }, raw: true });
    if (usernameExists) {
        return res.json({
            type: 'error',
            status: 400,
            msg: 'Username already exisits.',
        });
    }


    let emailExists = await Users.findOne({ where: { email: formData.email }, raw: true });
    if (emailExists) {
        return res.json({
            type: 'error',
            status: 400,
            msg: 'Email address already exisits.',
        });
    }

    // get agent code
    // let agentData = await OrganisationModel.findOne({ attributes: ['agent_code', 'parent_id'], where: { organisation_id: formData.organisation_id }, raw: true });
    let agentData = await OrganisationModel_M.findOne({ attributes: ['agent_code', 'parent_id'], where: { organisation_id: formData.organisation_id }, raw: true });
    if (!agentData) {
        return res.json({
            type: 'error',
            status: 400,
            msg: 'Oops! Something went wrong while processing your request.'
        });
    }
    // if (req.user.organisation_id == formData.organisation_id) {
    if (orgDetails.organisation_id == formData.organisation_id) {
        formData.admin = 1;
        formData.agent = 0;
        formData.agent_code = agentData.agent_code;
    } else {
        formData.admin = 0;
        formData.agent = 1;
        // formData.agent_code = Number(agentData.parent_id + formData.organisation_id);
        formData.agent_code = agentData.agent_code ? agentData.agent_code : String (String(formData.organisation_id).padStart(13, '0')) ;
    }

    let passHash = HashPassword(password, config.api.pwdHashSalt);
    formData.password = passHash;
    try {
        const rolePermissions = await db.query(`SELECT * FROM roles where role_id = ${formData.role_id}`, { type: QueryTypes.SELECT });
        formData.menu_permission = rolePermissions[0].permissions

        const user = await Users.create(formData);

        return res.json({
            type: 'data',
            status: 200,
            msg: 'User created Successfully.',
            data: {
                id: user.users_id,
                name: user.first_name + ' ' + user.last_name,
                email: user.email,
                username: user.username,
                menu_permission: []
            }
        });
    } catch (error) {
        // console.log("--error", error)
        return res.json({
            type: 'error',
            status: 400,
            msg: 'Oops! Something went wrong while processing your request.'
            ,
        });
    }

});


/**
 * @swagger
 *
 * /api/create-admin-user:
 *   post:
 *    tags:
 *      - User
 *    summary: Create admin user
 *    description: Create admin user
 *    consumes:
 *       - application/json
 *    produces:
 *      - application/json
 *    required:
 *      - user_id
 *      - targets
 *    parameters:
 *      - in: body
 *        name: body
 *        description: Create admin user
 *        required: true
 *        schema:
 *         properties:
 *           salute:
 *              type: string
 *           first_name:
 *              type: string
 *           last_name:
 *              type: string
 *           gender:
 *              type: string
 *           password:
 *              type: string
 *           password_confirmation:
 *              type: string
 *           organisation_id:
 *              type: integer
 *           initial:
 *              type: string
 *           mobile:
 *              type: string
 *           email:
 *              type: string
 *           username:
 *              type: string
 *           address_1:
 *              type: string
 *           address_2 :
 *              type: string
 *           country_id:
 *              type: integer
 *           selected_permissions:
 *              type: string
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
router.post('/create-admin-user', async (req, res) => {
    let { salute, first_name, last_name, gender, password, organisation_id, password_confirmation, initial, mobile, email, username, address_1, address_2, country_id, selected_permissions } = req.body;
    let formData = {};
    formData.admin = 1;
    formData.salute = salute;
    formData.first_name = first_name;
    formData.last_name = last_name;
    formData.sex = gender;
    formData.initial = initial;
    formData.mobile = mobile;
    formData.email = email;
    formData.username = username;
    formData.address_1 = address_1;
    formData.address_2 = address_2;
    formData.country_id = country_id;
    formData.menu_permission = JSON.stringify(selected_permissions);
    formData.organisation_id = organisation_id;
    formData.is_active = true;
    formData.created = new Date;
    // custom
    formData.is_validated = 1;
    formData.status = 0;
    formData.group_id = 1;

    if (password !== password_confirmation) {
        return res.json({
            type: 'error',
            status: 400,
            msg: 'Confirm password not matched to password.',
        });
    }

    let usernameExists = await Users.findOne({ where: { username: formData.username }, raw: true });
    if (usernameExists) {
        return res.json({
            type: 'error',
            status: 400,
            msg: 'Username already exisits.',
        });
    }
    let emailExists = await Users.findOne({ where: { email: formData.email }, raw: true });
    if (emailExists) {
        return res.json({
            type: 'error',
            status: 400,
            msg: 'Email address already exisits.',
        });
    }

    // get agent code
    whereOrg = {}
    if (formData.organisation_id) {
        whereOrg = formData.organisation_id
    }
    let agentData = await OrganisationModel_M.findOne({ attributes: ['agent_code', 'parent_id'], where: whereOrg, raw: true });
    if (!agentData) {
        return res.json({
            type: 'error',
            status: 400,
            msg: 'Oops! Something went wrong while processing your request.'
        });
    }
    if (req.user.organisation_id == formData.organisation_id) {
        formData.agent_code = agentData.agent_code;
    } else {
        formData.agent_code = Number(agentData.parent_id + formData.organisation_id);
    }

    let passHash = HashPassword(password, config.api.pwdHashSalt);
    formData.password = passHash;

    try {
        await Users.create(formData);
        return res.json({
            type: 'data',
            status: 200,
            msg: 'User created Successfully.',
        });
    } catch (error) {
        // console.log("--error", error)
        return res.json({
            type: 'error',
            status: 400,
            msg: 'Oops! Something went wrong while processing your request.'
            ,
        });
    }

});




/**
 * @swagger
 *
 * /api/create-corporate-user:
 *   post:
 *    tags:
 *      - User
 *    summary: Create corporate user
 *    description: Create corporate user
 *    consumes:
 *       - application/json
 *    produces:
 *      - application/json
 *    required:
 *      - user_id
 *      - targets
 *    parameters:
 *      - in: body
 *        name: body
 *        description: Create corporate user
 *        required: true
 *        schema:
 *         properties:
 *           slaute:
 *              type: string
 *           first_name:
 *              type: string
 *           last_name:
 *              type: string
 *           mobile:
 *              type: string
 *           email:
 *              type: string
 *           username:
 *              type: string
 *           address_1:
 *              type: string
 *           address_2:
 *              type: string
 *           country_id:
 *              type: integer
 *           organisation_id:
 *              type: integer
 *           is_active:
 *              type: string
 *           dob:
 *              type: string
 *              format: date
 *           cost_center:
 *              type: string
 *           passport_country_id:
 *              type: integer
 *           corporate_id:
 *              type: string
 *           corporate_hierarchy:
 *              type: string
 *           employee_id:
 *              type: integer
 *           company_name:
 *              type: string
 *           business_unit:
 *              type: string
 *           company_code:
 *              type: string
 *           uploadPhoto:
 *              type: string
 *           travel_arranger:
 *              type: string
 *           passport_number:
 *              type: string
 *           issue_date:
 *              type: string
 *              format: date
 *           expiry_date:
 *              type: string
 *              format: date
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
router.post('/create-corporate-user', async (req, res) => {
    let formData = {};
    formData.salute = req.body.salute;
    formData.first_name = req.body.first_name;
    formData.last_name = req.body.last_name;
    formData.mobile = req.body.mobile;
    formData.email = req.body.email;
    formData.username = req.body.username;
    formData.address_1 = req.body.address_1;
    formData.address_2 = req.body.address_2;
    formData.country_id = req.body.country_id;
    formData.organisation_id = req.body.organisation_id;
    formData.is_active = req.body.is_active;

    formData.dob = req.body.dob;
    formData.cost_center = req.body.is_active;
    formData.passport_country_id = req.body.passport_country_id;
    formData.corporate_id = req.body.corporate_id;
    formData.corporate_hierarchy = req.body.corporate_hierarchy;
    formData.employee_id = req.body.employee_id;
    formData.company_name = req.body.company_name;
    formData.business_unit = req.body.business_unit;
    formData.company_code = req.body.company_code;
    formData.bussiness_unit = req.body.bussiness_unit;
    formData.uploadPhoto = req.body.uploadPhoto;
    formData.travel_arranger = req.body.travel_arranger;
    formData.passport_number = req.body.passport_number;
    formData.issue_date = req.body.issue_date;
    formData.expiry_date = req.body.expiry_date;

    // custom
    formData.is_validated = 1;
    formData.status = 0;
    formData.group_id = 1;
    formData.readonly = 0;
    formData.corporate = 1;

    roles = [];
    roles['search'] = 1;
    roles['book'] = 1;
    roles['ticket'] = 1;
    roles['corporate'] = 1;

    // const params = {
    //     Bucket: 'bucket',
    //     Key: 'key',
    //     Body: stream
    //    };
    //    s3.upload(params, function(err, data) {
    //     // console.log(err, data);
    //    });

    buf = new Buffer.alloc(2, req.body.profile_image.replace(/^data:image\/\w+;base64,/, ""), 'base64')
    var data = {
        Key: "idhere",
        Body: buf,
        ContentEncoding: 'base64',
        ContentType: 'image/jpeg'
    };
    s3Bucket.putObject(data, function (err, data) {
        if (err) {
            // console.log(err);
            // console.log('Error uploading data: ', data);
        } else {
            // console.log('succesfully uploading data: ', data);
            // console.log('succesfully uploaded the image!');
        }
    });



    // get agent code
    let agentData = await OrganisationModel.findOne({ attributes: ['agent_code', 'parent_id'], where: { organisation_id: formData.organisation_id } });
    if (!agentData) {
        return res.json({
            type: 'error',
            status: 400,
            msg: 'Oops! Something went wrong while processing your request.'
        });
    }
    formData.admin = 0;
    formData.agent = 0;
    formData.agent_code = agentData.parent_id + "" + formData.organisation_id;


    let passHash = HashPassword(req.body.password, config.api.pwdHashSalt);
    formData.password = passHash;

    // console.log("hitting-api-formData", formData);
    Users.create(formData
        //, {where: { organisation_id: req.query.organisation_id }}
    )
        .then((Users) => {
            return res.json({
                type: 'data',
                status: 200,
                msg: 'User Saved Successfully.',
            });
        }).catch((error) => {
            // console.log("--error", error)
            return res.json({
                type: 'error',
                status: 400,
                msg: 'Oops! Something went wrong while processing your request.'
                ,
            });
        });

});

/**
 * @swagger
 *
 * /api/remove-user/{id}:
 *   delete:
 *     tags:
 *        -  User
 *     description: Delete specific user
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: id
 *         description: user id
 *         in: path
 *         required: true
 *         type: integer
 *         schema:
 *         properties:
 *           uuid:
 *              type: integer
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
router.get('/fetch-new-user/:id', async (req, res) => {
    const { id } = req.params;
    if(!id){
        return res.json({
            type: 'error',
            status: 400,
            msg: 'User ID is required',
        });
    }
    try {
        // const result = await Users.findOne({ where: { users_id: id, status: 0 }, raw: true });
        const result = await Users.findOne({ where: { users_id: id }, raw: true });
        let { password, ...user } = result;
        // get user agent
        try {
            // let orgName = await OrganisationModel.findOne({ where: { organisation_id: user.organisation_id }, attributes: ['name'], raw: true });
            let orgName = await OrganisationModel_M.findOne({ where: { organisation_id: user.organisation_id }, attributes: ['name'], raw: true });
            if (orgName) {
                user.orgName = orgName.name;
            }
            return res.json({
                type: 'data',
                status: 200,
                msg: 'User Fetched Successfully.',
                data: user
            });
        } catch (error) {
            console.log(error)
            return res.json({
                type: 'error',
                status: 400,
                msg: 'Oops! Something went wrong while processing your request.',
            });
        }
    } catch (error) {
        return res.json({
            type: 'error',
            status: 400,
            msg: 'Oops! Something went wrong while processing your request.' + error,
        });
    }

});


/**
 * @swagger
 *
 * /api/fetch-all-users:
 *   post:
 *     tags:
 *        -  User
 *     description: get all users
 *     produces:
 *       - appl ication/json
 *     parameters:
 *       - name: id
 *         description: 
 *         in: body
 *         required: true
 *         type: string
 *         schema:
 *         properties:
 *           limit:
 *              type: integer
 *           page:
 *              type: integer
 *           roleType:
 *              type: string
 *           organisation_id:
 *              type: integer
 *           usernameAndAgentCode:
 *              type: string
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
router.post('/fetch-all-users', async (req, res) => {
    const orgDetails = getOrgDetails(req);
    // fetch users from organisation's child pos also
    const parent_ids = await OrganisationModel_M.findAll({where: {parent_id:orgDetails.org_id}, attributes:["organisation_id"]})
    let p_ids = []
    parent_ids.forEach(id => {
        p_ids.push(id.organisation_id)
    })
    p_ids.push(orgDetails.org_id)

    let { limit, page, organisation_id, usernameAndAgentCode } = req.body;
    
    limit = (!limit) ? parseInt(config.pageLimit) : parseInt(limit)
    page = (!page) ? parseInt(0) : parseInt(page)
    let offset = limit * page;

    let query = { status: 1, users_id:{[Op.ne]:orgDetails.user_users_id} };

    if(orgDetails.org_id != orgDetails.parent_id){
        //query = { organisation_id: { [Op.in]:p_ids }, ...query}
        query = { organisation_id: orgDetails.org_id , ...query}
    } 

    if (organisation_id && organisation_id != 'all') {
        query = { organisation_id: organisation_id, ...query }
    }
    if (usernameAndAgentCode) {
        query = { [Op.or]: [{ agent_code: { [Op.like]: '%' + usernameAndAgentCode + '%' } }, { email: { [Op.like]: '%' + usernameAndAgentCode + '%' } }, { first_name: { [Op.like]: '%' + usernameAndAgentCode + '%' } }, { username: { [Op.like]: '%' + usernameAndAgentCode + '%' } }], ...query }
    }
    try {
        let result = await Users.findAndCountAll({
          where: query,
          order: [["users_id", "DESC"]],
          offset: offset,
          limit: limit,
          include: [{
            model: OrganisationModel_M,
            attributes: ['name'],
          }]
        })
        let dataArr = [];
        if(result.count > 0){
            result.rows.map(row => {
                dataArr.push(row);
            });
            result = {
              data: dataArr,
              total: result.count,
              page: page
            }
            return makeResponse(res, true, 200, 'success', 'Users.', 'Users fetched successfully.', result)
        }else{
          return makeResponse(res, false, 200, 'danger', 'Users.', 'Users not found.')
        }
      } catch (error) {
          console.log(error)
          return makeResponse(res, false, 200, 'danger', 'Users.', 'Oops! Something went wrong while processing your request.', error)
      }
});


/**
 * @swagger
 *
 * /api/update-user:
 *   put:
 *     tags:
 *        -  User
 *     description: update user profile
 *     produces:
 *       - appl ication/json
 *     parameters:
 *       - name: id
 *         description: 
 *         in: body
 *         required: true
 *         type: string
 *         schema:
 *         properties:
 *           id:
 *              type: integer
 *           salute:
 *              type: string
 *           first_name:
 *              type: string
 *           last_name:
 *              type: string
 *           sex:
 *              type: string
 *           password:
 *              type: string
 *           password_confirm:
 *              type: string
 *           initial:
 *              type: string
 *           mobile:
 *              type: string
 *           address_1:
 *              type: string
 *           address_2:
 *              type: string
 *           country_id:
 *              type: integer
 *           selected_permissions:
 *              type: string
 *           skills:
 *              type: string
 *           is_active:
 *              type: string
 *           organisation_id:
 *              type: integer
 *           role_id:
 *              type: integer
 *           branch_id:
 *              type: integer
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
// router.put('/update-user', FUNC.validateApi(validRules.editBusinessUser), async (req, res) => {
 router.put('/update-user', validateUser, async (req, res) => {
    // console.log("--req.body", req.body)
    let { id, salute, first_name, last_name, sex, password, password_confirmation, initial, mobile, address_1, address_2, country_id, selected_permissions, skills, is_active, organisation_id, role_id, branch_id } = req.body;
    let formData = {};
    formData.salute = salute;
    formData.first_name = first_name;
    formData.last_name = last_name;
    formData.sex = sex;
    formData.initial = initial;
    formData.mobile = mobile;
    formData.address_1 = address_1;
    formData.address_2 = address_2;
    formData.country_id = country_id;
    formData.is_active = is_active;
    // formData.menu_permission = JSON.stringify(selected_permissions);
    formData.target_amount = JSON.stringify(skills);
    formData.modified = new Date;
    formData.organisation_id = organisation_id;
    formData.role_id = role_id;
    formData.branch_id = branch_id;

    // if (password != undefined && password != '' && password_confirmation != undefined && password_confirmation != '') {
    //     let passHash = HashPassword(password, config.api.pwdHashSalt);
    //     formData.password = passHash;
    // }
    if (password != undefined && password != '') {
        let passHash = HashPassword(password, config.api.pwdHashSalt);
        formData.password = passHash;
    }

    try {

        const rolePermissions = await db.query(`SELECT * FROM roles where role_id = ${formData.role_id}`, { type: QueryTypes.SELECT });
        formData.menu_permission = rolePermissions[0].permissions

        await Users.update(formData, {
            where: { users_id: id }
        });
        return res.json({
            type: 'data',
            status: 200,
            msg: 'User Updated Successfully.',
            data: {}
        });
    } catch (error) {
        // console.log("--error", error)
        return res.json({
            type: 'error',
            status: 400,
            msg: 'Oops! Something went wrong while processing your request.',
            error
        });
    }

});


/**
 * @swagger
 *
 * /api/remove-user/{id}:
 *   delete:
 *     tags:
 *        -  User
 *     description: Delete specific user
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: id
 *         description: user id
 *         in: path
 *         required: true
 *         type: integer
 *         schema:
 *         properties:
 *           uuid:
 *              type: integer
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
router.delete('/remove-user/:id', validateDeleteUser, async (req, res) => {
    let { id } = req.params;
    const [affectedRows, countRow] = await Users.update({
        status: 0
    }, {
        where: { users_id: id },
        returning: true, // needed for affectedRows to be populated
        plain: true // makes sure that the returned instances are just plain objects
    });
    if (countRow > 0) {
        return res.json({
            type: 'data',
            status: 200,
            msg: 'User Deleted Successfully.',
            Users: Users
        });
    } else {
        return res.json({
            type: 'error',
            status: 400,
            msg: 'Oops! Something went wrong while processing your request.',
        });
    }
});

/**
 * @swagger
 *
 * /api/remove-all-user:
 *   delete:
 *    tags:
 *      - User
 *    summary: remove all user
 *    description: remove all user
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
router.delete('/remove-all-user', async (req, res) => {
    // Users.destroy({
    //     where: {},
    //     truncate: true
    // })
    //     .then((Users) => {
    //         return res.json({
    //             type: 'data',
    //             status: 200,
    //             msg: 'All Users Deleted Successfully.',
    //             Users: Users
    //         });
    //     }).catch((error) => {
    //         return res.json({
    //             type: 'error',
    //             status: 400,
    //             msg: 'Oops! Something went wrong while processing your request.',
    //         });
    //     });

    const [countRow] = await Users.update({
        status: 0
    }, {
        where: {},
        returning: true, // needed for affectedRows to be populated
        plain: true // makes sure that the returned instances are just plain objects
    });
    if (countRow > 0) {
        return res.json({
            type: 'data',
            status: 200,
            msg: 'User Deleted Successfully.',
            Users: Users
        });
    } else {
        return res.json({
            type: 'error',
            status: 400,
            msg: 'Oops! Something went wrong while processing your request.',
        });
    }
});


/**
 * @swagger
 *
 * /api/get-role-permissions/{id}:
 *   delete:
 *     tags:
 *        -  User
 *     description: get user permissions
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: id
 *         description: id of user
 *         in: path
 *         required: true
 *         type: integer
 *         schema:
 *         properties:
 *           uuid:
 *              type: integer
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
router.delete('/get-role-permissions/:id', validateDeleteUser, async (req, res) => {
    let { id } = req.params;
    let { organisation_id } = req.user;
    const checkAdminOrAgent = await SettingModel.findOne({ where: { name: "ParentOrgnisation" }, raw: true });
    // check if parent id equal to current organization id then use - if match then admin role else agent roles
    let permissionsName = "AgentRolePermissions";
    if (checkAdminOrAgent.value == id) {
        permissionsName = "RolePermissions";
    }
    try {
        const listData = await SettingModel.findOne({ where: { name: permissionsName }, raw: true });
        return res.json({
            type: 'data',
            status: 200,
            msg: 'Role and permissions.',
            data: listData.value
        });
    } catch (err) {
        return res.json({ type: 'error', msg: 'Oops! Something went wrong while processing your request.', });
    }

});


/**
 * @swagger
 *
 * /api/get-user-bookings:
 *   post:
 *    tags:
 *      - User
 *    summary: get user bookings data
 *    description: get user bookings data and show chars and report
 *    consumes:
 *       - application/json
 *    produces:
 *      - application/json
 *    required:
 *      - user_id
 *      - targets
 *    parameters:
 *      - in: body
 *        name: body
 *        description: get user bookings data and show chars and report
 *        required: true
 *        schema:
 *          properties:
 *            filterDays:
 *              type: string
 *            product_id:
 *              type: integer
 *            users_id:
 *              type: integer
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
router.post("/get-user-bookings", async (req, res) => {
    // console.log("--body", req.body);
    const { filterDays, product_id, users_id } = req.body;

    let hotel_count = 0;
    let flight_count = 0;
    let activities_count = 0;
    let car_count = 0;
    let transfers_count = 0;
    let insurance_count = 0;
    let visa_count = 0;
    let cruise_count = 0;

    let start_date = moment().format("YYYY-MM-DD HH:mm:ss");
    let end_date = moment().format("YYYY-MM-DD HH:mm:ss");
    let query = { agent_code: users_id, status: 1 };

    if (filterDays != 1) {
        start_date = moment().subtract(filterDays, 'days').format("YYYY-MM-DD HH:mm:ss");
    }
    query = { created: { [Op.between]: [start_date, end_date] }, ...query }

    // console.log("--query", query)
    let result = [];
    let getBookings = await Bookings.findAndCountAll({
        attributes:
            ['has_hotel', 'status', 'has_flight', 'has_activities', 'has_car', 'has_transfers', 'has_insurance'],
        where: query,
        order: [['booking_id', 'DESC']],
        raw: true
    });

    if (product_id == '') {
        getBookings.rows.forEach(element => {
            if (element.has_hotel == 1 && element.status != "Cancelled") {
                hotel_count++;
            }
            if (element.has_flight == 1) {
                flight_count++;
            }
            if (element.has_activities == 1) {
                activities_count++;
            }
            if (element.has_car == 1 && element.status != "Cancelled") {
                car_count++;
            }
            if (element.has_transfers == 1 && element.status != "Cancelled") {
                transfers_count++;
            }
            if (element.has_insurance == 1 && element.status != "Cancelled") {
                insurance_count++;
            }
        });

        result = [
            { y: hotel_count, label: "Hotels" },
            { y: flight_count, label: "Flights" },
            { y: activities_count, label: "Activities" },
            { y: car_count, label: "Cars" },
            { y: transfers_count, label: "Transfers" },
            { y: insurance_count, label: "Insurance" },
            { y: visa_count, label: "Visa" },
            { y: cruise_count, label: "Cruise" }
        ]
    } else {
        let hotel_count_search = 0;
        let flight_count_search = 0;
        let activities_count_search = 0;
        let car_count_search = 0;
        let transfers_count_search = 0;
        let insurance_count_search = 0;
        let visa_count_search = 0;
        let cruise_count_search = 0;

        if (product_id == 'Flights') {
            flight_count_search = await FlightSearchLog.count({ where: { agent_code: users_id, created_at: { [Op.between]: [start_date, end_date] } }, order: [['flights_search_logs_id', 'DESC']], raw: true });
        }
        if (product_id == 'Hotels') {
            hotel_count_search = await HotelSearchLog.count({ where: { agent_code: users_id, created_at: { [Op.between]: [start_date, end_date] } }, order: [['hotels_search_logs_id', 'DESC']], raw: true });
        }
        if (product_id == 'Cars') {
            car_count_search = await CarSearchLog.count({ where: { agent_code: users_id, created_at: { [Op.between]: [start_date, end_date] } }, order: [['car_search_logs_id', 'DESC']], raw: true });
        }
        if (product_id == 'Insurances') {
            insurance_count_search = await InsuranceSearchLog.count({ where: { agent_code: users_id, created_at: { [Op.between]: [start_date, end_date] } }, order: [['insurance_search_logs_id', 'DESC']], raw: true });
        }
        if (product_id == 'Transfers') {
            transfers_count_search = await TransferSearchLog.count({ where: { agent_code: users_id, created_at: { [Op.between]: [start_date, end_date] } }, order: [['transfers_search_logs_id', 'DESC']], raw: true });
        }
        if (product_id == 'Activities') {
            activities_count_search = await ActivitiesSearchLog.count({ where: { agent_code: users_id, created_at: { [Op.between]: [start_date, end_date] } }, order: [['activities_search_logs_id', 'DESC']], raw: true });
        }
        getBookings.rows.forEach(element => {
            if (product_id == 'Flights') {
                flight_count++;
            } else if (product_id == 'Hotels') {
                hotel_count++;
            } else if (product_id == 'Cars') {
                car_count++;
            } else if (product_id == 'Insurances') {
                insurance_count++;
            } else if (product_id == 'Transfers') {
                transfers_count++;
            } else if (product_id == 'Activities') {
                activities_count++;
            }
        });

        if (product_id == 'Flights') {
            result = { y: 2, label: "Flights", ...result }
            result = { y: 4, label: "Search", ...result }
        } else if (product_id == 'Hotels') {
            result = { y: hotel_count, label: "Hotels", ...result }
            result = { y: hotel_count_search, label: "Search", ...result }
        } else if (product_id == 'Cars') {
            result = { y: car_count, label: "Cars", ...result }
            result = { y: car_count_search, label: "Search", ...result }
        } else if (product_id == 'Insurances') {
            result = { y: insurance_count, label: "Insurances", ...result }
            result = { y: insurance_count_search, label: "Search", ...result }
        } else if (product_id == 'Transfers') {
            result = { y: transfers_count, label: "Transfers", ...result }
            result = { y: transfers_count_search, label: "Search", ...result }
        } else if (product_id == 'Activities') {
            result = { y: activities_count, label: "Activities", ...result }
            result = { y: activities_count_search, label: "Search", ...result }
        }
    }
    // console.log("---result", result)
    return res.json({
        type: 'data',
        status: 200,
        msg: 'Bookings.',
        data: result
    });
})




/**
 * @swagger
 *
 * /api/export-users:
 *   post:
 *    tags:
 *      - User
 *    summary: get list of users
 *    description: get list of users
 *    consumes:
 *       - application/json
 *    produces:
 *      - application/json
 *    required:
 *      - user_id
 *      - targets
 *    parameters:
 *      - in: body
 *        name: body
 *        description: get list of users
 *        required: true
 *        schema:
 *          properties:
 *            limit:
 *              type: integer
 *            page:
 *              type: integer
 *            organisation_id:
 *              type: integer
 *            usernameAndAgentCode:
 *              type: string
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
router.post('/export-users', (req, res) => {
    // console.log("--req.body", req.body)
    let { limit, page, organisation_id, usernameAndAgentCode } = req.body;
    let query = { status: 1 }; //, corporate: 1

    if (organisation_id && organisation_id != 'all') {
        query = { organisation_id: organisation_id, ...query }
    }
    if (usernameAndAgentCode) {
        query = { [Op.or]: [{ agent_code: { [Op.like]: '%' + usernameAndAgentCode + '%' } }, { email: { [Op.like]: '%' + usernameAndAgentCode + '%' } }, { first_name: { [Op.like]: '%' + usernameAndAgentCode + '%' } }, { username: { [Op.like]: '%' + usernameAndAgentCode + '%' } }], ...query }
    }
    // console.log("--query", query)

    let usersArr = [];
    Users.findAndCountAll({
        where: query,
        limit: config.exportLimit,
        order: [['created', 'DESC']]
    })
        .then((users) => {
            let resultArr = [];
            users.rows.map((ele, ind) => {
                let roleName = "";
                if (ele.admin) {
                    roleName = 'Admin';
                } else if (ele.agent) {
                    roleName = 'Agent';
                } else if (ele.corporate) {
                    roleName = 'Corporate';
                }
                resultArr.push({
                    "User Type": roleName,
                    "Name": `${ele.first_name} ${ele.last_name}`,
                    "Username": ele.username,
                    "Date&Time Created": moment(ele.created).format("YYYY-MM-DD HH:mm:ss"),
                    "Email": ele.email,
                    "Agent Code": ele.agent_code,
                    "Status": (ele.is_active) ? 'Active' : 'Inactive'
                })
            })

            return res.json({
                type: 'data',
                status: 200,
                msg: 'Users Fetched Successfully.',
                data: resultArr
            });
        }).catch((error) => {
            // console.log("----error", error);
            return res.json({
                type: 'error',
                status: 400,
                msg: 'Oops! Something went wrong while processing your request.',
            });
        });
});

/**
 * @swagger
 *
 * /api/users/permission:
 *   post:
 *    tags:
 *      - User
 *    summary: Save given user permissions
 *    description: Save given user permissions
 *    consumes:
 *       - application/json
 *    produces:
 *      - application/json
 *    required:
 *      - user_id
 *      - targets
 *    parameters:
 *      - in: body
 *        name: body
 *        description: Save given user permissions
 *        required: true
 *        schema:
 *          properties:
 *            data:
 *              type: object
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
router.post('/users/permission', async (req, res) => {

    try {
        const { permissions, user_id } = req.body.data;
        await Users.update({ menu_permission: JSON.stringify(permissions) }, { where: { users_id: user_id } });

        return makeResponse(res, true, 200, 'data', 'success', 'User permissions saved succesfully', JSON.stringify(permissions));
    }
    catch (err) {
        console.log('Error:', err);
        return makeResponse(res, false, 500, 'error', 'danger', 'INTERNAL SERVER ERROR', err);
    };

});


/**
 * @swagger
 *
 * /api/users/permissions:
 *   get:
 *    tags:
 *      - Authentication
 *    summary: Get logged in user permissions
 *    description: Get logged in user permissions from redis cache
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
router.get('/users/permissions', async (req, res) => {
    try {

        const user_id = req.user.users_id;
        // const getPermissions = await redisHelper.get(`user_permissions_${user_id}`);
        // console.log('getPermissions', getPermissions);
        const getPermissions = []
        return makeResponse(res, true, 200, 'data', 'success', 'Your request was succesfull.', getPermissions);
    }
    catch (err) {
        // console.log('Error:', err);
        return makeResponse(res, false, 500, 'error', 'danger', 'INTERNAL SERVER ERROR', err);
    };

});



/**
 * @swagger
 *
 * /api/users/target:
 *   post:
 *    tags:
 *      - User
 *    summary: Save given user targets
 *    description: Save given user targets
 *    consumes:
 *       - application/json
 *    produces:
 *      - application/json
 *    required:
 *      - user_id
 *      - targets
 *    parameters:
 *      - in: body
 *        name: body
 *        description: Save given user targets
 *        required: true
 *        schema:
 *          properties:
 *            user_id:
 *              type: integer
 *            targets:
 *              type: object
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
router.post('/users/target', targetValidator, async (req, res) => {

    try {

        const data = {
            user_id: req.body.user_id,
            targets: JSON.stringify(req.body.targets),
        }

        const targets = await userDao.saveTargets(data);
        if (!targets)
            return makeResponse(res, false, 400, 'danger', 'BAD REQUEST', 'Targets was not saved successfully');
        else
            return makeResponse(res, true, 200, 'success', 'Request was successful', 'Targets save successfully');
    }
    catch (err) {
        console.log('Error:', err);
        return makeResponse(res, false, 400, 'error', 'INTERNAL SERVER ERROR', 'INTERNAL SERVER ERROR');
    };

});



module.exports = router;
