const express = require('express');
const router = express.Router();
const { CorporateBusinessUnit, db } = require('../../../config/db');


//CREATE NEW CORPORATE BUSINESS UNIT
router.post('/create-corpBusiness_unit', (req, res) => {
    // console.log(req.body);
    // db.sync().then(() => {  })
    CorporateBusinessUnit.create(req.body
        //, {where: { organisation_id: req.query.organisation_id }}
    )
        .then((CorporateBusinessUnit) => {
            res.json({
                type: 'data',
                status: 200,
                msg: 'Corporate Business Unit Saved Successfully.',
                CorporateBusinessUnit: CorporateBusinessUnit
            });
        }).catch((error) => {
            res.status(500).json({
                type: 'error',
                status: 400,
                msg: 'Oops! Something went wrong while processing your request.'
                ,
            });
        });

});

//READ SPECIFIC CORPORATE BUSINESS UNIT
router.get('/fetch-corpBusiness_unit', (req, res) => {
    // console.log(req.body);
    CorporateBusinessUnit.findOne({
        where: { unit_id: req.query.unit_id }
    })
        .then((CorporateBusinessUnit) => {
            res.json({
                type: 'data',
                status: 200,
                msg: 'Corporate Business Unit Fetched Successfully.',
                CorporateBusinessUnit: CorporateBusinessUnit
            });
        }).catch((error) => {
            res.status(500).json({
                type: 'error',
                status: 400,
                msg: 'Oops! Something went wrong while processing your request.',
            });
        });
});

//READ ALL USERS
router.get('/fetch-all-corpBusiness_unit', (req, res) => {
    // console.log(req.body);
    CorporateBusinessUnit.findAll(req.body, {
        where: {}
    })
        .then((CorporateBusinessUnit) => {
            res.json({
                type: 'data',
                status: 200,
                msg: 'Corporate Business Unit Fetched Successfully.',
                CorporateBusinessUnit: CorporateBusinessUnit
            });
        }).catch((error) => {
            res.status(500).json({
                type: 'error',
                status: 400,
                msg: 'Oops! Something went wrong while processing your request.',
            });
        });
});

//UPDATE EXISTING CORPORATE BUSINESS UNIT
router.put('/update-corpBusiness_unit', (req, res) => {
    // console.log(req.body);
    CorporateBusinessUnit.update(req.body, {
        where: { unit_id: req.body.unit_id }
    })
        .then((CorporateBusinessUnit) => {
            res.json({
                type: 'data',
                status: 200,
                msg: 'Corporate Business Unit Updated Successfully.',
                CorporateBusinessUnit: CorporateBusinessUnit
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


//DELETE SPECIFIC CORPORATE BUSINESS UNIT
router.delete('/remove-corpBusiness_unit', (req, res) => {
    // console.log(req.body);
    CorporateBusinessUnit.destroy({
        where: { unit_id: req.query.unit_id }
    })
        .then((CorporateBusinessUnit) => {
            res.json({
                type: 'data',
                status: 200,
                msg: 'Corporate Business Unit Successfully.',
                CorporateBusinessUnit: CorporateBusinessUnit
            });
        }).catch((error) => {
            res.status(500).json({
                type: 'error',
                status: 400,
                msg: 'Oops! Something went wrong while processing your request.',
            });
        });
});

//DELETE ALL CORPORATE BUSINESS UNIT 
router.delete('/remove-all-corpBusiness_unit', (req, res) => {
    // console.log(req.body);
    CorporateBusinessUnit.destroy({
        where: {},
        truncate: true
    })
        .then((CorporateBusinessUnit) => {
            res.json({
                type: 'data',
                status: 200,
                msg: 'All Corporate Business Unit Deleted Successfully.',
                CorporateBusinessUnit: CorporateBusinessUnit
            });
        }).catch((error) => {
            res.status(500).json({
                type: 'error',
                status: 400,
                msg: 'Oops! Something went wrong while processing your request.',
            });
        });
});

module.exports = router;
