const express = require('express');
const router = express.Router();
const config = require('../../config/config');
const { db, PMS, Sequelize } = require('../../config/db.js');
const Op = Sequelize.Op;
let { makeResponse, getOrgDetails } = require("../helpers/utils");

router.post('/pos-list', async (req, res) => {
  const orgDetails = getOrgDetails(req);
  // fetch users from organisation's child pos also
  const parent_ids = await PMS.findAll({where: {parent_id:orgDetails.org_id}, attributes:["organisation_id"]})
  let p_ids = []
  parent_ids.forEach(id => {
      p_ids.push(id.organisation_id)
  })
  p_ids.push(orgDetails.org_id)

  let { limit, page, corporate_type, nameAndOfficeId } = req.body;
  limit = (!limit) ? parseInt(config.pageLimit) : parseInt(limit)
  page = (!page) ? parseInt(0) : parseInt(page)
  let offset = limit * page;

  let query = { status: 1 };

  if(orgDetails.org_id != orgDetails.parent_id){
    // query = { organisation_id: { [Op.in]:p_ids }, ...query}
    query = { organisation_id: orgDetails.org_id , ...query}
  }

  if (corporate_type && corporate_type != 'all') {
    query = { corporate_type: corporate_type, ...query }
  }
  if (nameAndOfficeId) {
    query = { [Op.or]: [{ agent_code: { [Op.like]: '%' + nameAndOfficeId + '%' } }, { name: { [Op.like]: '%' + nameAndOfficeId + '%' } }], ...query }
  }
  try {
    let result = await PMS.findAndCountAll({
      where: query,
      order: [["organisation_id", "DESC"]],
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
        return makeResponse(res, true, 200, 'success', 'POS', 'POS fetched successfully.', result)
    }else{
      return makeResponse(res, false, 200, 'danger', 'POS', 'POS not found.')
    }
  } catch (error) {
      console.log(error)
      return makeResponse(res, false, 200, 'danger', 'POS', 'Oops! Something went wrong while processing your request.', error)
  }
});

router.get('/pos-view/:id', async (req, res) => {
  let { id } =  req.params;
  id = parseInt(id);
  if(!id || !Number.isInteger(id)){
    return makeResponse(res, false, 200, 'danger', 'POS', 'POS ID is required and should be an integer.')
  }
  try {
    const result = await PMS.findOne({ where: {organisation_id: id } });
    if(result){
        return makeResponse(res, true, 200, 'success', 'POS', 'POS fetched successfully.', result)
    }else{
      return makeResponse(res, false, 200, 'danger', 'POS', 'POS not found.')
    }
  } catch (error) {
    return makeResponse(res, false, 200, 'danger', 'POS', 'Oops! Something went wrong while processing your request.', error)
  }

});

//DELETE SPECIFIC POS
router.post('/pos-delete/', async (req, res) => {
  let { id } = req.body;
  id = parseInt(id);
  if(!id || !Number.isInteger(id)){
    return makeResponse(res, false, 200, 'danger', 'POS', 'POS ID is required and should be an integer.')
  }
  try {
    const result = await PMS.findOne({ where: {organisation_id: id } });    
    if(!result){
      return makeResponse(res, false, 200, 'danger', 'POS.', 'POS not found.')
    }
    if(result.status == 1){
      return makeResponse(res, false, 200, 'danger', 'POS.', 'POS is already deleted.')
    }
    const countRow = await PMS.update({ status: 0 }, { where: { organisation_id: id } });
    if(!countRow){
      return makeResponse(res, false, 200, 'danger', 'POS.', 'POS not deleted.')
    }
    return makeResponse(res, true, 200, 'success', 'POS.', 'POS deleted successfully.', countRow)
  } catch (error) {
    console.log(error)
    return makeResponse(res, false, 200, 'danger', 'POS.', 'Oops! Something went wrong while processing your request.', error)
  }
  const [affectedRows, countRow] = await PMS.update({
    status: 1
  }, {
    where: { organisation_id: id },
    returning: true, // needed for affectedRows to be populated
    plain: true // makes sure that the returned instances are just plain objects
  });
  if (countRow > 0) {
    return res.json({
      type: 'data',
      status: 200,
      msg: 'POS Deleted Successfully.',
      data: {}
    });
  } else {
    return res.json({
      type: 'error',
      status: 400,
      msg: 'Oops! Something went wrong while processing your request.',
    });
  }
});


router.get('/fetch-all-point-sale', async (req, res) => {
  try {
    const result = await PMS.findAll({ where: { is_active:1, status:1 } });
    return res.json({
      type: 'data',
      status: 200,
      msg: 'POS Fetched Successfully.',
      POS: result
    });

  } catch (error) {
    return res.json({
      type: 'error',
      status: 400,
      msg: 'Oops! Something went wrong while processing your request.',
    });
  }

})

module.exports = router;