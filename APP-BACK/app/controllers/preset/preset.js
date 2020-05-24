const express = require('express');
const router = express.Router();
const { Preset, db } = require('../../../config/db');


//CREATE NEW PRESET
router.post('/create-preset', (req, res) => {
    // console.log(req.body);
    // db.sync().then(() => {  })
    Preset.create(req.body
        //, {where: { organisation_id: req.query.organisation_id }}
    )
        .then((Preset) => {
            res.json({
                type: 'data',
                status: 200,
                msg: 'Preset Saved Successfully.',
                Preset: Preset
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

//READ SPECIFIC PRESET
router.get('/fetch-preset', (req, res) => {
    // console.log(req.body);
    Preset.findOne({
        where: { package_id: req.query.package_id }
    })
        .then((Preset) => {
            res.json({
                type: 'data',
                status: 200,
                msg: 'Preset Fetched Successfully.',
                Preset: Preset
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
router.get('/fetch-all-preset', (req, res) => {
    // console.log(req.body);
    Preset.findAll(req.body, {
        where: {}
    })
        .then((Preset) => {
            res.json({
                type: 'data',
                status: 200,
                msg: 'Preset Fetched Successfully.',
                Preset: Preset
            });
        }).catch((error) => {
            res.status(500).json({
                type: 'error',
                status: 400,
                msg: 'Oops! Something went wrong while processing your request.',
            });
        });
});

//UPDATE EXISTING PRESET
router.put('/update-preset', (req, res) => {
    // console.log(req.body);
    Preset.update(req.body, {
        where: { package_id: req.body.package_id }
    })
        .then((Preset) => {
            res.json({
                type: 'data',
                status: 200,
                msg: 'Preset Updated Successfully.',
                Preset: Preset
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


//DELETE SPECIFIC PRESET
router.delete('/remove-preset', (req, res) => {
    // console.log(req.body);
    Preset.destroy({
        where: { package_id: req.query.package_id }
    })
        .then((Preset) => {
            res.json({
                type: 'data',
                status: 200,
                msg: 'Preset Deleted Successfully.',
                Preset: Preset
            });
        }).catch((error) => {
            res.status(500).json({
                type: 'error',
                status: 400,
                msg: 'Oops! Something went wrong while processing your request.',
            });
        });
});

//DELETE ALL PRESET 
router.delete('/remove-all-preset', (req, res) => {
    // console.log(req.body);
    Preset.destroy({
        where: {},
        truncate: true
    })
        .then((Preset) => {
            res.json({
                type: 'data',
                status: 200,
                msg: 'All Preset Deleted Successfully.',
                Preset: Preset
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
