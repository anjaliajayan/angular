const express = require('express');
const router = express.Router();
const { CorporateApprovalSummary, db } = require('../../../config/db');


//CREATE NEW CORPORATE APPROVAL SUMMARY
router.post('/create-corpApproval-Summary', (req, res) => {
    // console.log(req.body);
    // db.sync().then(() => {  })
    CorporateApprovalSummary.create(req.body
        //, {where: { organisation_id: req.query.organisation_id }}
    )
        .then((CorporateApprovalSummary) => {
            res.json({
                type: 'data',
                status: 200,
                msg: 'Corporate Approval Summary Saved Successfully.',
                CorporateApprovalSummary: CorporateApprovalSummary
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

//READ SPECIFIC CORPORATE APPROVAL SUMMARY
router.get('/fetch-corpApproval-summary', (req, res) => {
    // console.log(req.body);
    CorporateApprovalSummary.findOne({
        where: { request_id: req.query.request_id }
    })
        .then((CorporateApprovalSummary) => {
            res.json({
                type: 'data',
                status: 200,
                msg: 'User Fetched Successfully.',
                CorporateApprovalSummary: CorporateApprovalSummary
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
router.get('/fetch-all-corpApproval-summary', (req, res) => {
    // console.log(req.body);
    CorporateApprovalSummary.findAll(req.body, {
        where: {}
    })
        .then((CorporateApprovalSummary) => {
            res.json({
                type: 'data',
                status: 200,
                msg: 'Corporate Approval Summary Fetched Successfully.',
                CorporateApprovalSummary: CorporateApprovalSummary
            });
        }).catch((error) => {
            res.status(500).json({
                type: 'error',
                status: 400,
                msg: 'Oops! Something went wrong while processing your request.',
            });
        });
});

//UPDATE EXISTING CORPORATE APPROVAL SUMMARY
router.put('/update-corpApproval-summary', (req, res) => {
    // console.log(req.body);
    CorporateApprovalSummary.update(req.body, {
        where: { request_id: req.body.request_id }
    })
        .then((CorporateApprovalSummary) => {
            res.json({
                type: 'data',
                status: 200,
                msg: 'Corporate Approval Summary Updated Successfully.',
                CorporateApprovalSummary: CorporateApprovalSummary
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


//DELETE SPECIFIC CORPORATE APPROVAL SUMMARY
router.delete('/remove-corpApproval-summary', (req, res) => {
    // console.log(req.body);
    CorporateApprovalSummary.destroy({
        where: { request_id: req.query.request_id }
    })
        .then((CorporateApprovalSummary) => {
            res.json({
                type: 'data',
                status: 200,
                msg: 'corpApproval Summary Deleted Successfully.',
                CorporateApprovalSummary: CorporateApprovalSummary
            });
        }).catch((error) => {
            res.status(500).json({
                type: 'error',
                status: 400,
                msg: 'Oops! Something went wrong while processing your request.',
            });
        });
});

//DELETE ALL CORPORATE APPROVAL SUMMARY 
router.delete('/remove-all-corpApproval-summary', (req, res) => {
    // console.log(req.body);
    CorporateApprovalSummary.destroy({
        where: {},
        truncate: true
    })
        .then((CorporateApprovalSummary) => {
            res.json({
                type: 'data',
                status: 200,
                msg: 'All corpApproval Summary Deleted Successfully.',
                CorporateApprovalSummary: CorporateApprovalSummary
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
