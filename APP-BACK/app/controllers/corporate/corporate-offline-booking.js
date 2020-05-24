const express = require('express');
const router = express.Router();
const { CorporateOfflineBooking, db } = require('../../../config/db');


//CREATE NEW CORPORATE OFFLINE BOOKING
router.post('/create-corpOffline-booking', (req, res) => {
    // console.log(req.body);
    // db.sync().then(() => {  })
    CorporateOfflineBooking.create(req.body
        //, {where: { organisation_id: req.query.organisation_id }}
    )
        .then((CorporateOfflineBooking) => {
            res.json({
                type: 'data',
                status: 200,
                msg: 'Corporate Approval Summary Saved Successfully.',
                CorporateOfflineBooking: CorporateOfflineBooking
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

//READ SPECIFIC CORPORATE OFFLINE BOOKING
router.get('/fetch-corpOffline-booking', (req, res) => {
    // console.log(req.body);
    CorporateOfflineBooking.findOne({
        where: { offline_id: req.query.offline_id }
    })
        .then((CorporateOfflineBooking) => {
            res.json({
                type: 'data',
                status: 200,
                msg: 'User Fetched Successfully.',
                CorporateOfflineBooking: CorporateOfflineBooking
            });
        }).catch((error) => {
            res.status(500).json({
                type: 'error',
                status: 400,
                msg: 'Oops! Something went wrong while processing your request.',
            });
        });
});

//READ ALL OFFLINE BOOKING
router.get('/fetch-all-corpOffline-booking', (req, res) => {
    // console.log(req.body);
    CorporateOfflineBooking.findAll(req.body, {
        where: {}
    })
        .then((CorporateOfflineBooking) => {
            res.json({
                type: 'data',
                status: 200,
                msg: 'Corporate Approval Summary Fetched Successfully.',
                CorporateOfflineBooking: CorporateOfflineBooking
            });
        }).catch((error) => {
            res.status(500).json({
                type: 'error',
                status: 400,
                msg: 'Oops! Something went wrong while processing your request.',
            });
        });
});

//UPDATE EXISTING CORPORATE OFFLINE BOOKING
router.put('/update-corpOffline-booking', (req, res) => {
    // console.log(req.body);
    CorporateOfflineBooking.update(req.body, {
        where: { offline_id: req.body.offline_id }
    })
        .then((CorporateOfflineBooking) => {
            res.json({
                type: 'data',
                status: 200,
                msg: 'Corporate Approval Summary Updated Successfully.',
                CorporateOfflineBooking: CorporateOfflineBooking
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


//DELETE SPECIFIC CORPORATE OFFLINE BOOKING
router.delete('/remove-corpOffline-booking', (req, res) => {
    // console.log(req.body);
    CorporateOfflineBooking.destroy({
        where: { offline_id: req.query.offline_id }
    })
        .then((CorporateOfflineBooking) => {
            res.json({
                type: 'data',
                status: 200,
                msg: 'corpApproval Summary Deleted Successfully.',
                CorporateOfflineBooking: CorporateOfflineBooking
            });
        }).catch((error) => {
            res.status(500).json({
                type: 'error',
                status: 400,
                msg: 'Oops! Something went wrong while processing your request.',
            });
        });
});

//DELETE ALL CORPORATE OFFLINE BOOKING 
router.delete('/remove-all-corpOffline-booking', (req, res) => {
    // console.log(req.body);
    CorporateOfflineBooking.destroy({
        where: {},
        truncate: true
    })
        .then((CorporateOfflineBooking) => {
            res.json({
                type: 'data',
                status: 200,
                msg: 'All corpApproval Summary Deleted Successfully.',
                CorporateOfflineBooking: CorporateOfflineBooking
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
