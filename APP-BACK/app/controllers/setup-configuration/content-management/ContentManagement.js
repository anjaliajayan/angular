const express = require('express');
const router = express.Router();
const { Contents, db } = require('../../../../config/db');


//CREATE NEW ContentsMng
router.post('/create-new-supplier', (req, res) => {
    // console.log(req.body);
    // db.sync().then(() => {  })
    Contents.create(req.body
        //, {where: { content_id: req.query.content_id }}
    )
        .then((contentsMng) => {
            res.json({
                type: 'data',
                status: 200,
                msg: 'Content Created Successfully.',
                contentsMng
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

//READ SPECIFIC ContentsMng
router.get('/fetch-supplier', (req, res) => {
    // console.log(req.body);
    Contents.findOne({
        where: { content_id: req.query.content_id }
    })
        .then((contentsMng) => {
            res.json({
                type: 'data',
                status: 200,
                msg: 'Content Fetched Successfully.',
                contentsMng
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

//READ ALL ContentsMng
router.get('/fetch-all-content', (req, res) => {
    // console.log(req.body);
    Contents.findAll({
        where: {}
    })
        .then((contentsMng) => {
            res.json({
                type: 'data',
                status: 200,
                msg: 'Content Fetched Successfully.',
                contentsMng
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

//UPDATE EXISTING ContentsMng
//already written in Supplier.js
/*
router.put('/update-supplier', (req, res) => {
    // console.log(req.body);
    Contents.update(req.body, {
        where: { content_id: req.body.content_id }
    })
        .then((contentsMng) => {
            res.json({
                type: 'data',
                status: 200,
                msg: 'Content Updated Successfully.',
                contentsMng
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
*/

//DELETE SPECIFIC ContentsMng
router.delete('/remove-supplier', (req, res) => {
    // console.log(req.body);
    Contents.destroy({
        where: { content_id: req.query.content_id }
    })
        .then((contentsMng) => {
            res.json({
                type: 'data',
                status: 200,
                msg: 'Content Deleted Successfully.',
                contentsMng
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

//DELETE ALL ContentsMng
router.delete('/remove-all-content', (req, res) => {
    // console.log(req.body);
    Contents.destroy({
        where: {},
        truncate: true
    })
        .then((contentsMng) => {
            res.json({
                type: 'data',
                status: 200,
                msg: 'All Content Deleted Successfully.',
                contentsMng
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
