const express = require('express');
const router = express.Router();
const {AgencyProfile, CompanyProfile, GroupProfile, Traveller, db} = require('./../../../config/db');

router.get('/retrieve-traveller-profile', (req, res) => { 
    
});

router.get('/retrieve-company-profile', (req, res) => { 
    
});

router.get('/retrieve-group-profile', (req, res) => { 
    
});

router.get('/retrieve-agency-profile', (req, res) => { 
    
});

router.get('/search-profile', (req, res) => {
    
});

router.post('/retrive-all-profiles-data', (req, res) => {
    let { 
        traveller,
        company,
        group,
        agency,
        recordLocator,
        firstName,
        lastName,
        companyName,
        nationality,
        passportNo,
        telephone,
        profileStatus,
        officeID
     } = req.body;

     let options = { };

    // if(traveller !== "") options.traveller = traveller
    // if(company !== "") options.company = company
    // if(group !== "") options.group = group
    // if(agency !== "") options.agency = agency
    //if(recordLocator !== "") options.recordLocator = recordLocator
    if(firstName !== "") options.first_name = firstName
    if(lastName !== "") options.last_name = lastName
    if(companyName !== "") options.company_name = companyName
    if(nationality !== "") options.nationality = nationality
    //if(passportNo !== "") options.passportNo = passportNo
    //if(telephoneNo !== "") options.telephoneNo = telephoneNo
    if(profileStatus !== "") options.customer_status = profileStatus
    if(officeID !== "") options.organisation_id = officeID

    // console.log(options);

    if(traveller) {
    Traveller.findOne({
        where: options
    })
    .then((traveller) => {
        res.json({
            type: 'data',
            status: 200,
            msg: 'Profile Fetched Successfully.',
            profile: traveller
        });
    }).catch((error) => {
        res.json({
            type: 'error',
            status: 400,
            msg: 'Oops! Something went wrong while processing your request.',
        });
    });
    } else if (group) {
    GroupProfile.findOne({
        where: options
    })
    .then((GroupProfile) => {
        res.json({
            type: 'data',
            status: 200,
            msg: 'GROUP Profile Updated Successfully.',
            profile: GroupProfile
        });
    }).catch((error) => {
        res.json({
            type: 'error',
            status: 400,
            msg: 'Oops! Something went wrong while processing your request.',
            error
        });
    });
    } else if(agency) {
    AgencyProfile.findOne({
        where: options
    })
        .then((AgencyProfile) => {
            res.json({
                type: 'data',
                status: 200,
                msg: 'Profile Fetched Successfully.',
                profile: AgencyProfile
            });
        }).catch((error) => {
            res.status(500).json({
                type: 'error',
                status: 400,
                msg: 'Oops! Something went wrong while processing your request.',
            });
        });
    } else if(company) {
    CompanyProfile.findOne({
        where: options
    })
    .then((CompanyProfile) => {
        res.json({
            type: 'data',
            status: 200,
            msg: 'Profile Fetched Successfully.',
            profile: CompanyProfile
        });
    }).catch((error) => {
        res.json({
            type: 'error',
            status: 400,
            msg: 'Oops! Something went wrong while processing your request.',
        });
    });
    } else {
    res.json({
        type: 'info',
        status: 200,
        msg: 'Oops! You forgot to choose the type of Profile you want to retrieve.',
    });
    }
});

module.exports = router;