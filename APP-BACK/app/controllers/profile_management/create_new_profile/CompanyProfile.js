const express = require('express');
const router = express.Router();
// const  = require('./../../../../config/db');
const { CompanyProfile, db } = require('./../../../../config/db');

//CREATE NEW COMPANY PROFILE
router.post('/create-new-company-profile', (req, res) => {
    // console.log(req.body.data);
    // db.sync().then(() => {  })
    CompanyProfile.create(req.body)
        .then((CompanyProfile) => {
            res.json({
                type: 'data',
                status: 200,
                msg: 'Company Profile Saved Successfully.',
                CompanyProfile: CompanyProfile
            });
        }).catch((error) => {
            res.status(500).json({
                type: 'error',
                status: 400,
                msg: 'Oops! Something went wrong while processing your request.',
            });
        });


});

//READ SPECIFIC COMPANY PROFILE
router.get('/fetch-new-company-profile', (req, res) => {
    // console.log(req.body);
    CompanyProfile.findOne({
        where: { company_profile_id: req.query.company_profile_id }
    })
        .then((CompanyProfile) => {
            res.json({
                type: 'data',
                status: 200,
                msg: 'Profile Fetched Successfully.',
                CompanyProfile: CompanyProfile
            });
        }).catch((error) => {
            res.status(500).json({
                type: 'error',
                status: 400,
                msg: 'Oops! Something went wrong while processing your request.',
            });
        });
});

//READ ALL COMPANY PROFILE
router.get('/fetch-all-company-profile', (req, res) => {
    // console.log(req.body);
    CompanyProfile.findAll(req.body, {
        where: {}
    })
        .then((CompanyProfile) => {
            res.json({
                type: 'data',
                status: 200,
                msg: 'Company Profiles Fetched Successfully.',
                CompanyProfile: CompanyProfile
            });
        }).catch((error) => {
            res.status(500).json({
                type: 'error',
                status: 400,
                msg: 'Oops! Something went wrong while processing your request.',
            });
        });
});

//UPDATE EXISTING COMPANY PROFILE
router.put('/update-new-company-profile', (req, res) => {
    // console.log(req.body);
    CompanyProfile.update(req.body, {
        where: { company_profile_id: req.body.company_profile_id }
    })
        .then((CompanyProfile) => {
            res.json({
                type: 'data',
                status: 200,
                msg: 'Company Profile Updated Successfully.',
                CompanyProfile: CompanyProfile
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

//DELETE SPECIFIC COMPANY PROFILE
router.delete('/remove-company-profile', (req, res) => {
    // console.log(req.body);
    CompanyProfile.destroy({
        where: { company_profile_id: req.query.company_profile_id }
    })
        .then((CompanyProfile) => {
            res.json({
                type: 'data',
                status: 200,
                msg: 'Profile Deleted Successfully.',
                CompanyProfile: CompanyProfile
            });
        }).catch((error) => {
            res.status(500).json({
                type: 'error',
                status: 400,
                msg: 'Oops! Something went wrong while processing your request.',
            });
        });
});


//DELETE ALL COMPANY PROFILE
router.delete('/remove-all-company-profile', (req, res) => {
    // console.log(req.body);
    CompanyProfile.destroy({
        where: {},
        truncate: true
    })
        .then((CompanyProfile) => {
            res.json({
                type: 'data',
                status: 200,
                msg: 'Company Profile Deleted Successfully.',
                CompanyProfile: CompanyProfile
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