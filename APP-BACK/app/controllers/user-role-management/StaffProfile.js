const express = require('express');
const router = express.Router();
const { staffProfileModel, db } = require('../../../config/db');


//CREATE NEW STAFF PROFILE
router.post('/create-new-staff-profile', (req, res) => {
    // console.log(req.body);
    // db.sync().then(() => {  })
    staffProfileModel.create(req.body
        //, {where: { organisation_id: req.query.organisation_id }}
    )
        .then((staffProfileModel) => {
            res.json({
                type: 'data',
                status: 200,
                msg: 'staff profile Saved Successfully.',
                staffProfileModel: staffProfileModel
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

//READ SPECIFIC SAFF PROFILE
router.get('/fetch-new-staff-profile', (req, res) => {
    // console.log(req.body);
    staffProfileModel.findOne({
        where: { staff_id: req.query.staff_id }
    })
        .then((staffProfileModel) => {
            res.json({
                type: 'data',
                status: 200,
                msg: 'staff profile Fetched Successfully.',
                staffProfileModel: staffProfileModel
            });
        }).catch((error) => {
            res.status(500).json({
                type: 'error',
                status: 400,
                msg: 'Oops! Something went wrong while processing your request.',
            });
        });
});

//READ ALL STAFF PROFILES
router.get('/fetch-all-staff-profile', (req, res) => {
    // console.log(req.body);
    staffProfileModel.findAll(req.body, {
        where: {}
    })
        .then((staffProfileModel) => {
            res.json({
                type: 'data',
                status: 200,
                msg: 'staff Profile Fetched Successfully.',
                staffProfileModel: staffProfileModel
            });
        }).catch((error) => {
            res.status(500).json({
                type: 'error',
                status: 400,
                msg: 'Oops! Something went wrong while processing your request.',
            });
        });
});

//UPDATE EXISTING STAFF PROFILE
router.put('/update-new-staff-profile', (req, res) => {
    // console.log(req.body);
    staffProfileModel.update(req.body, {
        where: { staff_id: req.body.staff_id }
    })
        .then((staffProfileModel) => {
            res.json({
                type: 'data',
                status: 200,
                msg: 'staff profile Updated Successfully.',
                staffProfileModel: staffProfileModel
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


//DELETE SPECIFIC STAFF PROFILE
router.delete('/remove-staff-profile', (req, res) => {
    // console.log(req.body);
    staffProfileModel.destroy({
        where: { staff_id: req.query.staff_id }
    })
        .then((staffProfileModel) => {
            res.json({
                type: 'data',
                status: 200,
                msg: 'staff profile Deleted Successfully.',
                staffProfileModel: staffProfileModel
            });
        }).catch((error) => {
            res.status(500).json({
                type: 'error',
                status: 400,
                msg: 'Oops! Something went wrong while processing your request.',
            });
        });
});

//DELETE ALL STAFF PROFILES
router.delete('/remove-all-staff-profile', (req, res) => {
    // console.log(req.body);
    staffProfileModel.destroy({
        where: {},
        truncate: true
    })
        .then((staffProfileModel) => {
            res.json({
                type: 'data',
                status: 200,
                msg: 'All staff profile Deleted Successfully.',
                staffProfileModel: staffProfileModel
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
