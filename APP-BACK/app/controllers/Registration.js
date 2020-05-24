const express = require('express');
const router = express.Router();
const { db, RegistrationModel } = require('../../config/db.js');
const config = require('../../config/config');
let { makeResponse } = require("../helpers/utils");

router.get('/registration-list', async (req, res) => {
  let { limit, page } = req.body;
  limit = (!limit) ? parseInt(config.pageLimit) : parseInt(limit)
  page = (!page) ? parseInt(0) : parseInt(page)
  let offset = limit * page;
  try {
    let result = await RegistrationModel.findAndCountAll({
      where: { is_delete: 0 },
      order: [["registration_id", "DESC"]],
      offset: offset,
      limit: limit,
    })
    let dataArr = [];
    if(result.count > 0){
        result.rows.map(row => {
            dataArr.push(row);
        });
        result = {
          data: dataArr,
          total: result.count,
          page: page
        }
        return makeResponse(res, true, 200, 'success', 'Registration.', 'Registration fetched successfully.', result)
    }else{
      return makeResponse(res, false, 200, 'danger', 'Registration.', 'Registration not found.')
    }
  } catch (error) {
      console.log(error)
      return makeResponse(res, false, 200, 'danger', 'Registration.', 'Oops! Something went wrong while processing your request.', error)
  }
});

router.get('/registration-view/:id', async (req, res) => {
  let { id } =  req.params;
  id = parseInt(id);
  if(!id || !Number.isInteger(id)){
    return makeResponse(res, false, 200, 'danger', 'Registration', 'Registration ID is required and should be an integer.')
  }
  try {
    const result = await RegistrationModel.findOne({ where: {registration_id: id } });
    if(result){
        return makeResponse(res, true, 200, 'success', 'Registration.', 'Registration fetched successfully.', result)
    }else{
      return makeResponse(res, false, 200, 'danger', 'Registration.', 'Registration not found.')
    }
  } catch (error) {
    return makeResponse(res, false, 200, 'danger', 'Registration.', 'Oops! Something went wrong while processing your request.', error)
  }

});

//DELETE SPECIFIC USER
router.post('/registration-delete/', async (req, res) => {
  let { id } = req.body;
  id = parseInt(id);
  if(!id || !Number.isInteger(id)){
    return makeResponse(res, false, 200, 'danger', 'Registration', 'Registration ID is required and should be an integer.')
  }
  try {
    const result = await RegistrationModel.findOne({ where: {registration_id: id } });    
    if(!result){
      return makeResponse(res, false, 200, 'danger', 'Registration.', 'Registration not found.')
    }
    if(result.is_delete == 1){
      return makeResponse(res, false, 200, 'danger', 'Registration.', 'Registration is already deleted.')
    }
    const countRow = await RegistrationModel.update({ is_delete: 1 }, { where: { registration_id: id } });
    if(!countRow){
      return makeResponse(res, false, 200, 'danger', 'Registration.', 'Registration not deleted.')
    }
    return makeResponse(res, true, 200, 'success', 'Registration.', 'Registration deleted successfully.', countRow)
  } catch (error) {
    return makeResponse(res, false, 200, 'danger', 'Registration.', 'Oops! Something went wrong while processing your request.', error)
  }
});

module.exports = router;