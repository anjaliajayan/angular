const express = require('express');
const router = express.Router();
const { CorporatePolicy, db } = require('../../../config/db');


//CREATE NEW CORPORATE POLICY
router.post('/create-corporate-policy', (req, res) => {
    // db.sync().then(() => {  })
    CorporatePolicy.create(req.body
        //, {where: { organisation_id: req.query.organisation_id }}
    )
        .then((CorporatePolicy) => {
            res.json({
                type: 'data',
                status: 200,
                msg: 'Corporate Policy Saved Successfully.',
                CorporatePolicy: CorporatePolicy
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

//READ SPECIFIC CORPORATE POLICY
router.get('/fetch-corporate-policy', (req, res) => {
    CorporatePolicy.findOne({
        where: { policy_id: req.query.policy_id }
    })
        .then((CorporatePolicy) => {
            res.json({
                type: 'data',
                status: 200,
                msg: 'Corporate Policy Fetched Successfully.',
                CorporatePolicy: CorporatePolicy
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
router.get('/fetch-all-corporate-policy', (req, res) => {
    CorporatePolicy.findAll(req.body, {
        where: {}
    })
        .then((CorporatePolicy) => {
            res.json({
                type: 'data',
                status: 200,
                msg: 'Corporate Policy Fetched Successfully.',
                CorporatePolicy: CorporatePolicy
            });
        }).catch((error) => {
            res.status(500).json({
                type: 'error',
                status: 400,
                msg: 'Oops! Something went wrong while processing your request.',
            });
        });
});

//UPDATE EXISTING CORPORATE POLICY
router.put('/update-corporate-policy', (req, res) => {
    CorporatePolicy.update(req.body, {
        where: { policy_id: req.body.policy_id }
    })
        .then((CorporatePolicy) => {
            res.json({
                type: 'data',
                status: 200,
                msg: 'Corporate Policy Updated Successfully.',
                CorporatePolicy: CorporatePolicy
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


//DELETE SPECIFIC CORPORATE POLICY
router.delete('/remove-corporate-policy', (req, res) => {
    CorporatePolicy.destroy({
        where: { policy_id: req.query.policy_id }
    })
        .then((CorporatePolicy) => {
            res.json({
                type: 'data',
                status: 200,
                msg: 'Corporate Policy Deleted Successfully.',
                CorporatePolicy: CorporatePolicy
            });
        }).catch((error) => {
            res.status(500).json({
                type: 'error',
                status: 400,
                msg: 'Oops! Something went wrong while processing your request.',
            });
        });
});

//DELETE ALL CORPORATE POLICY 
router.delete('/remove-all-corporate-policy', (req, res) => {
    // console.log(req.body);
    CorporatePolicy.destroy({
        where: {},
        truncate: true
    })
        .then((CorporatePolicy) => {
            res.json({
                type: 'data',
                status: 200,
                msg: 'All Corporate Policy Deleted Successfully.',
                CorporatePolicy: CorporatePolicy
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
