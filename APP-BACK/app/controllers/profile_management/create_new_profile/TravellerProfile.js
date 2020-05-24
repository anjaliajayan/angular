const express = require('express');
const router = express.Router();
const {Op,Traveller, organisationBranchModel} = require('./../../../../config/db');
const config = require('./../../../../config/config');
let {makeResponse, dateFormat} = require("../../../helpers/utils");

router.post('/create-new-traveller-profile', (req, res) => { 
    
    formObj = req.body
    if(formObj.airline_details && formObj.airline_details.length > 0){
        formObj.airline_details = JSON.stringify(formObj.airline_details)
    }
    if(formObj.corporate_profileid && formObj.corporate_profileid.length > 0){
        formObj.corporate_profileid = JSON.stringify(formObj.corporate_profileid)
    }
    if(formObj.airlinePreferences && formObj.airlinePreferences.length > 0){
        formObj.airlinePreferences = JSON.stringify(formObj.airlinePreferences)
    }
    if(formObj.corporate_supplierid && formObj.corporate_supplierid.length > 0){
        formObj.corporate_supplierid = JSON.stringify(formObj.corporate_supplierid)
    }
    formObj.created = new Date()
    Traveller.create(formObj)
    .then((traveller) => {
        res.json({
            type: 'data',
            status: 200,
            msg: 'Profile Saved Successfully.',
            traveller: traveller
        });
    }).catch((error) => {
        res.json({
            type: 'error',
            status: 400,
            msg: 'Oops! Something went wrong while processing your request.',
        });
    });
});

router.post('/search-traveller', async (req, res) => {
    let { limit, page } = req.body;
    limit = (!limit) ? parseInt(config.pageLimit) : parseInt(limit)
    page = (!page) ? parseInt(0) : parseInt(page)
    let offset = limit * page;
    let params = req.body
    let query = { status: 0 };

    if (params.keywords) {
      query = { 
          [Op.or]: [
              { first_name: { [Op.like]: '%' + params.keywords.trim() + '%' } }, 
              { last_name: { [Op.like]: '%' + params.keywords.trim() + '%' } },
              { email_address1: { [Op.like]: '%' + params.keywords.trim() + '%' } },
              { email_address2: { [Op.like]: '%' + params.keywords.trim() + '%' } },
              { mobile_number: { [Op.like]: '%' + params.keywords.trim() + '%' } },
              { emergency_contact: { [Op.like]: '%' + params.keywords.trim() + '%' } },
              { airline_details: { [Op.like]: '%' + params.keywords.trim() + '%' } },
              { national_id: { [Op.like]: '%' + params.keywords.trim() + '%' } },
              { passport: { [Op.like]: '%' + params.keywords.trim() + '%' } },
              { driving_licence: { [Op.like]: '%' + params.keywords.trim() + '%' } },
              { id: params.keywords.trim()},
        ], ...query }
    }
    try {
      let result = await Traveller.findAndCountAll({
        where: query,
        order: [["id", "DESC"]],
        offset: offset,
        limit: limit,
      })
      let dataArr = [];
      if(result.count > 0){
          result.rows.map(row => {
              if(row.airline_details){
                  row.airline_details = JSON.parse(row.airline_details )
              }
              if(row.corporate_profileid){
                  row.corporate_profileid = JSON.parse(row.corporate_profileid )
              }
              if(row.corporate_supplierid){
                  row.corporate_supplierid = JSON.parse(row.corporate_supplierid )
              }
              if(row.airlinePreferences){
                  row.airlinePreferences = JSON.parse(row.airlinePreferences )
              }
              dataArr.push(row);
          });
          result = {
            data: dataArr,
            total: result.count,
            page: page
          }
        return res.json({
            type: 'data',
            status: 200,
            msg: 'Traveller Profile fetched successfully.',
            traveller: result
        });
      }else{
        return res.json({
            type: 'data',
            status: 200,
            msg: 'Traveller Profile not found.',
            traveller: ""
        });
      }
    } catch (error) {
        console.log(error)
        return res.json({
            type: 'data',
            status: 400,
            msg: 'Oops! Something went wrong while processing your request.',
            error
        });
    }
  });

  router.get('/company-details', async (req, res) => {
    let orgId = req.user.organisation_id
    console.log(orgId)
    query = { status : 0 }

    if(orgId){
        query = { organisation_id : orgId }
    }else{
        return
    }
    
    try {
      let result = await organisationBranchModel.findAll({
        where: query,
        attributes: [["id", "name"]],
      })
      if(result){
        return res.json({
            type: 'data',
            status: 200,
            msg: 'Company branch fetched successfully.',
            company: result
        });
      }else{
        return res.json({
            type: 'data',
            status: 200,
            msg: 'Company branch not found.',
            company: ""
        });
      }
    } catch (error) {
        console.log(error)
        return res.json({
            type: 'data',
            status: 400,
            msg: 'Oops! Something went wrong while processing your request.',
            error
        });
    }
  });
  
router.post('/update-new-traveller-profile', (req, res) => { 
    formObj = req.body
    if(!formObj.id){
        return res.json({
            type: 'data',
            status: 200,
            msg: 'Profile ID is required.'
        });
    }
    if(formObj.airline_details && formObj.airline_details.length > 0){
        formObj.airline_details = JSON.stringify(formObj.airline_details)
    }
    if(formObj.corporate_profileid && formObj.corporate_profileid.length > 0){
        formObj.corporate_profileid = JSON.stringify(formObj.corporate_profileid)
    }
    if(formObj.airlinePreferences && formObj.airlinePreferences.length > 0){
        formObj.airlinePreferences = JSON.stringify(formObj.airlinePreferences)
    }
    if(formObj.corporate_supplierid && formObj.corporate_supplierid.length > 0){
        formObj.corporate_supplierid = JSON.stringify(formObj.corporate_supplierid)
    }
    Traveller.update(formObj, {
        where: { id: formObj.id }
    })
    .then((traveller) => {
        res.json({
            type: 'data',
            status: 200,
            msg: 'Profile Updated Successfully.',
            traveller: traveller
        });
    }).catch((error) => {
        res.json({
            type: 'error',
            status: 400,
            msg: 'Oops! Something went wrong while processing your request.',
            error
        });
    });
});

router.get('/fetch-all-traveller-profile', async (req, res) => { 
    // console.log(req.body); 
    let { limit, page } = req.body;
    limit = (!limit) ? parseInt(config.pageLimit) : parseInt(limit)
    page = (!page) ? parseInt(0) : parseInt(page)
    let offset = limit * page;
    let query = { status: 0 };

    try {
      let result = await Traveller.findAndCountAll({
        where: query,
        order: [["id", "DESC"]],
        offset: offset,
        limit: limit,
      })
      let dataArr = [];
      if(result.count > 0){
          result.rows.map(row => {
              if(row.airline_details){
                  row.airline_details = JSON.parse(row.airline_details )
              }
              if(row.corporate_profileid){
                  row.corporate_profileid = JSON.parse(row.corporate_profileid )
              }
              if(row.corporate_supplierid){
                  row.corporate_supplierid = JSON.parse(row.corporate_supplierid )
              }
              if(row.airlinePreferences){
                  row.airlinePreferences = JSON.parse(row.airlinePreferences )
              }
              dataArr.push(row);
          });
          result = {
            data: dataArr,
            total: result.count,
            page: page
          }
        return res.json({
            type: 'data',
            status: 200,
            msg: 'Traveller Profile fetched successfully.',
            traveller: result
        });
      }else{
        return res.json({
            type: 'data',
            status: 200,
            msg: 'Traveller Profile not found.',
            traveller: ""
        });
      }
    } catch (error) {
        console.log(error)
        return res.json({
            type: 'data',
            status: 400,
            msg: 'Oops! Something went wrong while processing your request.',
            error
        });
    }
});

router.get('/fetch-new-traveller-profile/:id', (req, res) => {
    if(!req.params.id){
        return res.json({
                    type: 'error',
                    status: 400,
                    msg: 'Traveller Profile ID is required',
                });
    }
    Traveller.findOne({
        where: { id: req.params.id, status: 0 }
    })
    .then((traveller) => {
        res.json({
            type: 'data',
            status: 200,
            msg: 'Profile Fetched Successfully.',
            traveller: traveller
        });
    }).catch((error) => {
        res.json({
            type: 'error',
            status: 400,
            msg: 'Oops! Something went wrong while processing your request.',
        });
    });
});

router.get('/fetch-associated-traveller/:keywords', (req, res) => {
    const keywords = req.params.keywords
    if(!keywords){
        return res.json({
                    type: 'error',
                    status: 400,
                    msg: '',
                });
    }
    let query = { status : 0 }
    query = { 
            [Op.or]: [
                { first_name: { [Op.like]: '%' + keywords + '%' } }, 
                { last_name: { [Op.like]: '%' + keywords + '%' } },
            ], ...query }
    
    Traveller.findAll({
        where: query,
        attributes:['id', 'first_name', 'last_name'],
        order:[["first_name", "ASC"]]
    })
    .then((travellers) => {
        let travellerArray = []
        if(travellers && travellers.length > 0){
            travellers.forEach(traveller => {
                travellerArray.push({
                    "id":traveller.id,
                    "name":traveller.first_name + " " + traveller.last_name
                })
            });
        }
        res.json({
            type: 'data',
            status: 200,
            msg: 'Profile Fetched Successfully.',
            travellers: travellerArray
        });
    }).catch((error) => {
        console.log(error)
        res.json({
            type: 'error',
            status: 400,
            msg: 'Oops! Something went wrong while processing your request.',
        });
    });
});

router.post('/remove-traveller-profile', (req, res) => { 
    console.log(req.body);
    if(!req.body.id) {
        return res.json({
            type: 'error',
            status: 200,
            msg: 'Profile ID required.',
        });
    }
    Traveller.update( {status: 1}, {
        where: { id: req.body.id }
    }) 
    .then((traveller) => {
        res.json({
            type: 'data',
            status: 200,
            msg: 'Profile Deleted Successfully.',
            traveller: traveller
        });
    }).catch((error) => {
        res.json({
            type: 'error',
            status: 400,
            msg: 'Oops! Something went wrong while processing your request.',
        });
    });
});

router.get('/fetch-associated-traveller/:keywords', (req, res) => {
    let query = { status : 0 }
    query = { 
            [Op.or]: [
                { first_name: { [Op.like]: '%' + keywords + '%' } }, 
                { last_name: { [Op.like]: '%' + keywords + '%' } },
            ], ...query }
    
    Traveller.findAll({
        where: query,
        attributes:['id', 'first_name', 'last_name'],
        order:[["first_name", "ASC"]]
    })
    .then((travellers) => {
        let travellerArray = []
        if(travellers && travellers.length > 0){
            travellers.forEach(traveller => {
                travellerArray.push({
                    "id":traveller.id,
                    "name":traveller.first_name + " " + traveller.last_name
                })
            });
        }
        res.json({
            type: 'data',
            status: 200,
            msg: 'Profile Fetched Successfully.',
            travellers: travellerArray
        });
    }).catch((error) => {
        console.log(error)
        res.json({
            type: 'error',
            status: 400,
            msg: 'Oops! Something went wrong while processing your request.',
        });
    });
});

router.delete('/remove-all-traveller-profile', (req, res) => { 
    // console.log(req.body); 
    Traveller.destroy({
        where: {},
        truncate: true
    })
    .then((traveller) => {
        res.json({
            type: 'data',
            status: 200,
            msg: 'All Profiles Deleted Successfully.',
            traveller: traveller
        });
    }).catch((error) => {
        res.json({
            type: 'error',
            status: 400,
            msg: 'Oops! Something went wrong while processing your request.',
        });
    });
});

module.exports = router;
