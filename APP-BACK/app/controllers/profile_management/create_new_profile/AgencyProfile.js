const express = require('express');
const router = express.Router();
const { AgencyProfile, db } = require('./../../../../config/db');
const AuditLog = require("../../audit-trail/audit-trail");

//CREATE NEW GROUP PROFILE
router.post('/create-new-agency-profile', (req, res) => {
    // console.log(req.body);
    // db.sync().then(() => {  })
    AgencyProfile.create(req.body)
        .then((AgencyProfile) => {
            res.json({
                type: 'data',
                status: 200,
                msg: 'Agency Profile Saved Successfully.',
                AgencyProfile: AgencyProfile
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

//READ SPECIFIC GROUP PROFILE
router.get('/fetch-new-agency-profile', (req, res) => {
    // console.log(req.body);
    AgencyProfile.findOne({
        where: { agency_profile_id: req.query.agency_profile_id }
    })
        .then((AgencyProfile) => {
            res.json({
                type: 'data',
                status: 200,
                msg: 'Profile Fetched Successfully.',
                AgencyProfile: AgencyProfile
            });
        }).catch((error) => {
            res.status(500).json({
                type: 'error',
                status: 400,
                msg: 'Oops! Something went wrong while processing your request.',
            });
        });
});

//READ ALL GROUP PROFILE
router.get('/fetch-all-agency-profile', (req, res) => {
    // console.log(req.body);
    AgencyProfile.findAll(req.body, {
        where: {}
    })
        .then((AgencyProfile) => {
            res.json({
                type: 'data',
                status: 200,
                msg: 'Profiles Fetched Successfully.',
                AgencyProfile: AgencyProfile
            });
        }).catch((error) => {
            res.status(500).json({
                type: 'error',
                status: 400,
                msg: 'Oops! Something went wrong while processing your request.',
            });
        });
});

//UPDATE EXISTING GROUP PROFILE
router.put('/update-new-agency-profile', (req, res) => {
    // console.log(req.body);
    AgencyProfile.update(req.body, {
        where: { agency_profile_id: req.body.agency_profile_id }
    })
        .then((AgencyProfile) => {
            res.json({
                type: 'data',
                status: 200,
                msg: 'Profile Updated Successfully.',
                AgencyProfile
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


//DELETE SPECIFIC GROUP PROFILE
router.delete('/remove-agency-profile', (req, res) => {
    // console.log(req.body);
    AgencyProfile.destroy({
        where: { agency_profile_id: req.query.agency_profile_id }
    })
        .then((AgencyProfile) => {
            res.json({
                type: 'data',
                status: 200,
                msg: 'Profile Deleted Successfully.',
                AgencyProfile: AgencyProfile
            });
        }).catch((error) => {
            res.status(500).json({
                type: 'error',
                status: 400,
                msg: 'Oops! Something went wrong while processing your request.',
            });
        });
});

//DELETE ALL GROUP PROFILE
router.delete('/remove-all-agency-profile', (req, res) => {
    // console.log(req.body);
    AgencyProfile.destroy({
        where: {},
        truncate: true
    })
        .then((AgencyProfile) => {
            res.json({
                type: 'data',
                status: 200,
                msg: 'All Profiles Deleted Successfully.',
                AgencyProfile: AgencyProfile
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
