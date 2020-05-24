const express = require('express');
const router = express.Router();
const { Templates, db } = require('../../../../config/db');


//CREATE NEW EmailsTmp
router.post('/create-new-email-template', (req, res) => {
    // console.log(req.body);
    // db.sync().then(() => {  })
    Templates.create(req.body
        //, {where: { template_id: req.query.template_id }}
    )
        .then((email) => {
            res.json({
                type: 'data',
                status: 200,
                msg: 'Template Created Successfully.',
                email
            });
        }).catch((error) => {
            res.status(500).json({
                type: 'error',
                status: 400,
                msg: 'Oops! Something went wrong while processing your request.',
                error
            });
        });

});

//READ SPECIFIC EmailsTmp
router.get('/fetch-email-template/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const data = await Templates.findOne({ where: { email_template_id: id } })
        return res.json({ type: 'data', data: data });
    } catch (err) {
        return res.json({ type: 'error', msg: 'No result found!' });
    }
});

//READ ALL EmailsTmp
router.get('/fetch-all-email-template', (req, res) => {
    // console.log(req.body);
    Templates.findAll({
        where: {}
    })
        .then((email) => {
            res.json({
                type: 'data',
                status: 200,
                msg: 'Template Fetched Successfully.',
                email
            });
        }).catch((error) => {
            res.status(500).json({
                type: 'error',
                status: 400,
                msg: 'Oops! Something went wrong while processing your request.',
                error
            });
        });
});

//UPDATE EXISTING EmailsTmp
router.post('/update-email-template', FUNC.validateApi(validRules.updateTemplate),  async (req, res) => {
    try {
        const { email_template_id, email_template_name, email_template_description } = req.body;
        if(email_template_name == undefined || email_template_description == undefined || email_template_name == '' || email_template_description == ''){
            return res.json({ type: 'error', msg: 'Oops! Please enter valid data.', });
        }
        let formData = {};
        formData.email_template_name = email_template_name;
        formData.email_template_description = email_template_description;
        await Templates.update(formData,{where: { email_template_id }})
        return res.json({ type: 'data', data:  {}, msg: 'Template updated successfully' });
    } catch (err) {
        // console.log("--err",err)
        return res.json({ type: 'error', msg: 'Oops! Something went wrong while processing your request.', });
    }
});


//DELETE SPECIFIC EmailsTmp
router.delete('/remove-email-template', (req, res) => {
    // console.log(req.body);
    Templates.destroy({
        where: { template_id: req.query.template_id }
    })
        .then((email) => {
            res.json({
                type: 'data',
                status: 200,
                msg: 'Template Deleted Successfully.',
                email
            });
        }).catch((error) => {
            res.status(500).json({
                type: 'error',
                status: 400,
                msg: 'Oops! Something went wrong while processing your request.',
                error
            });
        });
});

//DELETE ALL EmailsTmp
router.delete('/remove-all-email-template', (req, res) => {
    Templates.destroy({
        where: {},
        truncate: true
    })
        .then((email) => {
            res.json({
                type: 'data',
                status: 200,
                msg: 'All Template Deleted Successfully.',
                email
            });
        }).catch((error) => {
            res.status(500).json({
                type: 'error',
                status: 400,
                msg: 'Oops! Something went wrong while processing your request.',
                error
            });
        });
});

module.exports = router;
