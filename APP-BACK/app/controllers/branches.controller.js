const express = require('express')
const router = express.Router()
const moment = require('moment')
const config = require('../../config/config');
const { organisationBranchModel, Sequelize } = require('../../config/db')
let { makeResponse } = require("../helpers/utils");
const { posBranchAddValidator } = require('../validations/pos.validate')
const Op = Sequelize.Op;

/**
 * @swagger
 *
 * /api/branches/create:
 *   post:
 *    tags:
 *      - Organization Branches
 *    summary: Create new Organisation Branch
 *    description: Create new Organisation Branch
 *    consumes:
 *       - application/json
 *    produces:
 *      - application/json
 *    required:
 *      - organisation_id
 *    parameters:
 *      - in: body
 *        name: body
 *        description: Create new Organisation Branch
 *        required: true
 *        schema:
 *         properties:
 *           organisation_id:
 *              type: integer
 *           name:
 *              type: string
 *           address_1:
 *              type: string
 *           address_2:
 *              type: string
 *           status:
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
// Create new branch
router.post('/create', posBranchAddValidator, async (req, res) => {
    const { organisation_id, name, email, branch_code, address_1, address_2 } = req.body
    if(!organisation_id){
        return makeResponse(res, false, 200, 'success', 'Organisation Branches', 'Organisation ID is required.')
    }
    try {
        // check if Branch exists by email/agent_code/name
        let query = []
        if (email) {
            query.push({
            email: email,
            })
        }
        if (branch_code) {
            query.push({
            branch_code: branch_code,})
        }
        if (name) {
            query.push({
            name: name,})
        }
        let branchExists = await organisationBranchModel.findOne({
                                 where: { [Op.or]: query }, raw: true });
        if (branchExists) {
            return makeResponse(res, false, 200, 'danger', 'Organisation Branches', 'Branch Name, Email and Brach Code should be unique.')
        }
        formObj = {}
        formObj.organisation_id = organisation_id
        formObj.name = name
        formObj.email = email
        formObj.branch_code = branch_code
        formObj.address_1 = address_1
        formObj.address_2 = address_2
        formObj.created_at = new Date
        formObj.status = 1
        const result = await organisationBranchModel.create(formObj)
        if(!result){
            return makeResponse(res, false, 200, 'danger', 'Organisation Branches', 'Branch not created.')
        }
        return makeResponse(res, true, 200, 'success', 'Organisation Branches', 'Branch created successfully.', result)
    } catch (error) {
        return makeResponse(res, false, 200, 'danger', 'Organisation Branches', 'Oops! Something went wrong while processing your request.', error)
    }
})

/**
 * @swagger
 *
 * /api/branches/update:
 *   post:
 *    tags:
 *      - Organization Branches
 *    summary: Update Organisation Branch
 *    description: Update Organisation Branch
 *    consumes:
 *       - application/json
 *    produces:
 *      - application/json
 *    required:
 *      - id
 *    parameters:
 *      - in: body
 *        name: body
 *        description: Update Organisation Branch
 *        required: true
 *        schema:
 *         properties:
 *           organisation_id:
 *              type: integer
 *           name:
 *              type: string
 *           address_1:
 *              type: string
 *           address_2:
 *              type: string
 *           status:
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
router.post('/update', posBranchAddValidator, async (req, res) => {
    const { id, organisation_id, name, email, branch_code, address_1, address_2, status } = req.body
    if(!id){
        return makeResponse(res, true, 200, 'success', 'Organisation Branches', 'Branch ID is required.')
    }
    try {
        // check if Branch exists by email/agent_code/name
        let query = []
        if (email) {
            query.push({
            email: email,
            })
        }
        if (branch_code) {
            query.push({
            branch_code: branch_code,})
        }
        if (name) {
            query.push({
            name: name,})
        }

        let branchExists = await organisationBranchModel.findOne({
                                 where: { [Op.or]: query, id: { [Op.ne]: id } }, raw: true });
        if (branchExists) {
            return makeResponse(res, false, 200, 'danger', 'Organisation Branches', 'Branch Name, Email and Brach Code should be unique.')
        }
        formObj = {}
        formObj.organisation_id = organisation_id
        formObj.name = name
        formObj.email = email
        formObj.branch_code = branch_code
        formObj.address_1 = address_1
        formObj.address_2 = address_2
        formObj.created_at = new Date

        const result = await organisationBranchModel.update(formObj, {where: { id }})
        if(!result){
            return makeResponse(res, false, 200, 'danger', 'Organisation Branches', 'Branch not updated.')
        }
        return makeResponse(res, true, 200, 'success', 'Organisation Branches', 'Branch updated successfully.', result)
    } catch (error) {
        return makeResponse(res, false, 200, 'danger', 'Organisation Branches', 'Oops! Something went wrong while processing your request.', error)
    }
})

/**
 * @ swagger
 *
 * /api/branches:
 *   post:
 *     tags:
  *      - Organization Branches
 *     summary: Fetch all Organisation Branch
 *     description: Fetch all Organisation Branch
 *     produces:
 *       - appl ication/json
 *     parameters:
 *       - name: id
 *         description: Fetch all Organisation Branch
 *         in: body
 *         required: false
 *         type: string
 *         schema:
 *         properties:
 *           organisation_id:
 *              type: integer
 *           name:
 *              type: string
 *           address_1:
 *              type: string
 *           address_2:
 *              type: string
 *           status:
 *              type: integer
 *           limit:
 *              type: integer
 *           page:
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
// fetch all branch
router.post('/branches', async (req, res) => {
    let { limit, page } = req.body;
    limit = (!limit) ? parseInt(config.pageLimit) : parseInt(limit)
    page = (!page) ? parseInt(0) : parseInt(page)
    let offset = limit * page;
    const { organisation_id, name, email, branch_code, address_1, address_2, status } = req.body
    where = { status: 1 }
    if(organisation_id){
        where = {organisation_id: organisation_id, ...where}
    }
    if (name) {
        where = { name: { [Op.like]: '%' + name + '%' }, ...where }
    }
    if (email) {
        where = { email: { [Op.like]: '%' + email + '%' }, ...where }
    }
    if (branch_code) {
        where = { branch_code: { [Op.like]: '%' + branch_code + '%' }, ...where }
    }
    if (address_1) {
        where = { address_1: { [Op.like]: '%' + address_1 + '%' }, ...where }
    }
    if (address_2) {
        where = { address_2: { [Op.like]: '%' + address_2 + '%' }, ...where }
    }
    if(status){
        where = {status: status, ...where}
    }
    try {
        let result = await organisationBranchModel.findAndCountAll({
            where: where,
            order: [["name", "ASC"]],
            offset: offset,
            limit: limit,
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
            return makeResponse(res, true, 200, 'success', 'Organisation Branches', 'Branches fetched successfully.', result)
        }else{
            return makeResponse(res, false, 200, 'danger', 'Organisation Branches', 'Branch not found.')
        }
    } catch (error) {
        console.log("branches::branches - Error");
        console.log(error);
        return makeResponse(res, false, 200, 'danger', 'Organisation Branches', 'Oops! Something went wrong while processing your request.', error)
    }
})

/**
 * @swagger
 *
 * /api/branches/get/{id}:
 *   get:
 *     tags:
  *      - Organization Branches
 *     summary: Fetch Branch by ID
 *     description: Fetch Branch by ID
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: id
 *         description: Provide Branch ID
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
router.get('/get/:id', async (req, res) => {
    const { id } = req.params
    if(!id) {
        return makeResponse(res, true, 200, 'success', 'Organisation Branches', 'Branch ID is required.')
    }
    try {
        let result = await organisationBranchModel.findOne({ where: {id} })
        if(result){
            return makeResponse(res, true, 200, 'success', 'Organisation Branches', 'Branch fetched successfully.', result)
        }else{
            return makeResponse(res, false, 200, 'danger', 'Organisation Branches', 'Branch not found.')
        }
    } catch (error) {
        console.log("branches::get - Error");
        console.log(error);
        return makeResponse(res, false, 200, 'danger', 'Organisation Branches', 'Oops! Something went wrong while processing your request.', error)
    }
})


/**
 * @swagger
 *
 * /api/branches/organisation/{id}:
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
router.get('/organisation/:organisation_id', async (req, res) => {
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

/**
 * @swagger
 *
 * /api/branches/delete/{id}:
 *   delete:
 *     tags:
  *      - Organization Branches
 *     summary: Delete Branch
 *     description: Delete Branch
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: id
 *         description: Provide Branch ID
 *         in: path
 *         required: true
 *         type: integer
 *         schema:
 *         properties:
 *           id:
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
// delete branch by id
router.post('/delete', async (req, res) => {
    const { id } = req.body
    if(!id){
        return makeResponse(res, true, 200, 'success', 'Organisation Branches', 'Branch ID is required.')
    }
    try {
        let result = await organisationBranchModel.update( {status: 0}, { where: {id} })
        if(result){
            return makeResponse(res, true, 200, 'success', 'Organisation Branches', 'Branch deleted successfully.', result)
        }else{
            return makeResponse(res, false, 200, 'danger', 'Organisation Branches', 'Branch not deleted.')
        }
    } catch (error) {
        console.log("branches::delete - Error");
        console.log(error);
        return makeResponse(res, false, 200, 'danger', 'Organisation Branches', 'Oops! Something went wrong while processing your request.', error)
    }
})


module.exports = router