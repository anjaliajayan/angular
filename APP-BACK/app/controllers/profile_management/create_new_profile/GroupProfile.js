const express = require('express');
const router = express.Router();

const { GroupProfile, db } = require('./../../../../config/db');

//CREATE NEW GROUP PROFILE
router.post('/create-new-group-profile', (req, res) => {
    // console.log(req.body.data);
    // db.sync().then(() => { })
    GroupProfile.create(req.body)
        .then((GroupProfile) => {
            res.json({
                type: 'data',
                status: 200,
                msg: 'Group Profile Saved Successfully.',
                GroupProfile: GroupProfile
            });
        }).catch((error) => {
            res.status(500).json({
                type: 'error',
                status: 400,
                msg: 'Oops! Something went wrong while processing your request.',
            });
        });


});

//READ SPECIFIC GROUP PROFILE
router.get('/fetch-new-group-profile', (req, res) => {
    // console.log(req.body);
    GroupProfile.findOne({
        where: { group_profile_id: req.query.group_profile_id }
    })
        .then((GroupProfile) => {
            res.json({
                type: 'data',
                status: 200,
                msg: 'Profile Fetched Successfully.',
                GroupProfile: GroupProfile
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
router.get('/fetch-all-group-profile', (req, res) => {
    // console.log(req.body);
    GroupProfile.findAll(req.body, {
        where: {}
    })
        .then((GroupProfile) => {
            res.json({
                type: 'data',
                status: 200,
                msg: 'GROUP Profiles Fetched Successfully.',
                GroupProfile: GroupProfile
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
router.put('/update-new-group-profile', (req, res) => {
    // console.log(req.body);
    GroupProfile.update(req.body, {
        where: { group_profile_id: req.body.group_profile_id }
    })
        .then((GroupProfile) => {
            res.json({
                type: 'data',
                status: 200,
                msg: 'GROUP Profile Updated Successfully.',
                GroupProfile: GroupProfile
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
router.delete('/remove-group-profile', (req, res) => {
    // console.log(req.body);
    GroupProfile.destroy({
        where: { group_profile_id: req.query.group_profile_id }
    })
        .then((GroupProfile) => {
            res.json({
                type: 'data',
                status: 200,
                msg: 'Profile Deleted Successfully.',
                GroupProfile: GroupProfile
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
router.delete('/remove-all-group-profile', (req, res) => {
    // console.log(req.body);
    GroupProfile.destroy({
        where: {},
        truncate: true
    })
        .then((GroupProfile) => {
            res.json({
                type: 'data',
                status: 200,
                msg: 'GROUP Profile Deleted Successfully.',
                GroupProfile: GroupProfile
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