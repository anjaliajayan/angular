const express = require('express');
const router = express.Router();
const { OrganizationAccount, db } = require('../../../config/db');

var availablity_deposit_balance;

//CREATE NEW ORGANIZATION ACCOUNTS
router.post('/create-organization-accounts', (req, res) => {
    // console.log(req.body);
    // db.sync().then(() => {  })
    OrganizationAccount.create(req.body
        //, {where: { organisation_id: req.query.organisation_id }}
    )
        .then((OrganizationAccount) => {
            res.json({
                type: 'data',
                status: 200,
                msg: 'Organization accounts Saved Successfully.',
                OrganizationAccount: OrganizationAccount
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

//READ SPECIFIC ORGANIZATION ACCOUNTS
router.get('/fetch-organization-accounts', (req, res) => {
    // console.log(req.body);
    OrganizationAccount.findOne({
        where: { accounts_id: req.query.accounts_id }
    })
        .then((OrganizationAccount) => {
            res.json({
                type: 'data',
                status: 200,
                msg: 'User Fetched Successfully.',
                OrganizationAccount: OrganizationAccount
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
router.get('/fetch-all-organization-accounts', (req, res) => {
    OrganizationAccount.findAll(req.body, {
        where: {}
    })
        .then((OrganizationAccount) => {
            res.json({
                type: 'data',
                status: 200,
                msg: 'Organization accounts Fetched Successfully.',
                OrganizationAccount: OrganizationAccount
            });
        }).catch((error) => {
            res.status(500).json({
                type: 'error',
                status: 400,
                msg: 'Oops! Something went wrong while processing your request.',
            });
        });
});

//UPDATE EXISTING ORGANIZATION ACCOUNTS
router.put('/update-organization-accounts', (req, res) => {
    // console.log(req.body);
    OrganizationAccount.update(req.body, {
        where: { accounts_id: req.body.accounts_id }
    })
        .then((OrganizationAccount) => {
            res.json({
                type: 'data',
                status: 200,
                msg: 'Organization accounts Updated Successfully.',
                OrganizationAccount: OrganizationAccount
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


//DELETE SPECIFIC ORGANIZATION ACCOUNTS
router.delete('/remove-organization-accounts', (req, res) => {
    // console.log(req.body);
    OrganizationAccount.destroy({
        where: { accounts_id: req.query.accounts_id }
    })
        .then((OrganizationAccount) => {
            res.json({
                type: 'data',
                status: 200,
                msg: 'Organization accounts Deleted Successfully.',
                OrganizationAccount: OrganizationAccount
            });
        }).catch((error) => {
            res.status(500).json({
                type: 'error',
                status: 400,
                msg: 'Oops! Something went wrong while processing your request.',
            });
        });
});

//DELETE ALL ORGANIZATION ACCOUNTS 
router.delete('/remove-all-organization-accounts', (req, res) => {
    // console.log(req.body);
    OrganizationAccount.destroy({
        where: {},
        truncate: true
    })
        .then((OrganizationAccount) => {
            res.json({
                type: 'data',
                status: 200,
                msg: 'All Organization accounts Deleted Successfully.',
                OrganizationAccount: OrganizationAccount
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
