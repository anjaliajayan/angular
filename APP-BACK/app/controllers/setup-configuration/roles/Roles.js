const express = require("express");
const router = express.Router();
const { roleModel_AJ } = require("../../../../config/db");
const utilsHelper = require('../../../helpers/utils');
/**
 * @request : GET
 * @param : null
 * @return : obj result
 */


/**
 * @swagger
 *
 * /api/roles/list:
 *   get:
 *    tags:
 *      - Roles
 *    summary: list all roles
 *    description: list all roles
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
router.get("/list", async (req, res) => {
    try {
        let result = await roleModel_AJ.findAll({ order: [['name']], where: { status:0 }  });
        return res.json({
            type: 'data',
            status: 200,
            msg: 'Roles Fetched Successfully.',
            data: result
        });
    } catch (error) {
        return res.status(500).json({
            type: 'error',
            status: 400,
            msg: 'Oops! Something went wrong while processing your request.',
        });
    }
});

/**
 * @swagger
 *
 * /api/roles/add:
 *   post:
 *    tags:
 *      - Roles
 *    summary: create new role
 *    description: create new role
 *    consumes:
 *       - application/json
 *    produces:
 *      - application/json
 *    parameters:
 *      - in: body
 *        name: body
 *        description: create new role
 *        required: true
 *        schema:
 *          properties:
 *            name:
 *              type: string
 *            code:
 *              type: string
 *            permissions:
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
router.post("/add", async (req, res) => {

    try {

        const formData = {
            name: req.body.name,
            code: req.body.code,
            permissions: JSON.stringify(req.body.permissions),
            created_by: req.user.users_id,
        };

        await roleModel_AJ.create(formData);
        return utilsHelper.makeResponse(res, true, 200, 'success', 'Request was not successful', 'Role saved successfully');

    } catch (error) {
        return utilsHelper.makeResponse(res, false, 400, 'error', 'Request was not successful', error);
    }
});




/**
 * @swagger
 *
 * /api/roles/get/{role_id}:
 *   get:
 *     tags:
 *        - Roles
 *     description: Delete specific user
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: role_id
 *         description: role id
 *         in: path
 *         required: true
 *         type: integer
 *         schema:
 *         properties:
 *           role_id:
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
router.get("/get/:role_id", async (req, res) => {
    const { role_id } = req.params;
    console.log(role_id);
    try {
        const result = await roleModel_AJ.findOne({ where: { role_id }, raw: true });
       
        return res.json({
            type: 'data',
            status: 200,
            msg: 'Role Fetched Successfully.',
            data: result
        });
    } catch (error) {
        return res.status(500).json({
            type: 'error',
            status: 400,
            msg: 'Oops! Something went wrong while processing your request.',
        });
    }
})


/**
 * @swagger
 *
 * /api/roles/update/{role_id}:
 *   put:
 *     tags:
 *        - Roles
 *     description: Update specific user
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: role_id
 *         description: role id
 *         in: path
 *         required: true
 *         type: integer
 *         schema:
 *         properties:
 *           role_id:
 *              type: integer
 *       - name: body
 *         description: body
 *         in: body
 *         required: true
 *         type: integer
 *         schema:
 *         properties:
 *           name:
 *              type: string
 *           code:
 *              type: string
 *           permissions:
 *              type: object
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
router.put("/update/:role_id", FUNC.validateApi(validRules.addRole), async (req, res) => {
    const { role_id } = req.params;
    let { name, code, permissions } = req.body;

    let formData = {};
    formData.name = name;
    formData.code = code;
    formData.permissions = JSON.stringify(permissions);

    try {
        const result = await roleModel_AJ.update(formData, { where: { role_id } });
        return res.json({
            type: 'data',
            status: 200,
            msg: 'Role & permissions updated Successfully.',
            data: result
        });
    } catch (error) {
        return res.status(500).json({
            type: 'error',
            status: 400,
            msg: 'Oops! Something went wrong while processing your request.',
        });
    }
})




/**
 * @swagger
 *
 * /api/roles/delete/{role_id}:
 *   post:
 *     tags:
 *        - Roles
 *     description: Delete specific user
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: role_id
 *         description: role id
 *         in: path
 *         required: true
 *         type: integer
 *         schema:
 *         properties:
 *           role_id:
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
router.post("/delete/:role_id", async (req, res) => {
    const { role_id } = req.params;
    try {
        await roleModel_AJ.update({ status: 1 }, { where: { role_id } });
        return res.json({
            type: 'data',
            status: 200,
            msg: 'Role updated Successfully.'
        });
    } catch (error) {
        return res.status(500).json({
            type: 'error',
            status: 400,
            msg: 'Oops! Something went wrong while processing your request.',
        });
    }
})

module.exports = router;


