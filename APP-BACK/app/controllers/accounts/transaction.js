const express = require('express');
const router = express.Router();
const { Transaction_M, db, Sequelize, OrganisationModel_M, Topup_M, Currency_M, OrganizationAccount_M, Users_M, Country_M, StaffProfile_M } = require('../../../config/db');
const Op = Sequelize.Op;
let moment = require('moment');
const axios = require('axios');
const config = require('./../../../config/config');
const helperFun = require("../../helpers/utils");
const {makeResponse, dateFormat, getCurrencyCodeByID, getOrgDetails} = require("../../helpers/utils");


router.post('/transaction-list', async (req, res) => {
  const orgDetails = getOrgDetails(req);
  // fetch users from organisation's child pos also
  const parent_ids = await OrganisationModel_M.findAll({where: {parent_id:orgDetails.org_id}, attributes:["organisation_id"]})
  let p_ids = []
  parent_ids.forEach(id => {
      p_ids.push(id.organisation_id)
  })
  p_ids.push(orgDetails.org_id)

  let { limit, page, end_date, organisation_id, payment_type, start_date, trip_id } = req.body;
  limit = (!limit) ? parseInt(config.pageLimit) : parseInt(limit)
  page = (!page) ? parseInt(0) : parseInt(page)
  let offset = limit * page;
  let query = {};

  if(orgDetails.org_id != orgDetails.parent_id){
    query = { organisation_id: { [Op.in]:p_ids }, ...query}
  }

  if (trip_id != undefined && trip_id != '') {
    query = { trip_id: { [Op.like]: '%' + trip_id + '%' }, ...query }
  }
  if (organisation_id != undefined && organisation_id != 'all') {
    query = { organisation_id: organisation_id, ...query }
  }
  if (payment_type != undefined && payment_type != 'all') {
    query = { payment_type: payment_type, trip_id: { [Op.ne]: '' }, ...query }
  }

  if(start_date){
    start_date = dateFormat(start_date)  //moment(start_date, "YYYY-MM-DD").format();
  }
  if(end_date){
    end_date = dateFormat(end_date)
  }
  if(start_date && end_date){
    query = { created: { [Op.between]: [start_date, end_date] }, ...query }
  }else if(start_date){
    query = { created: { [Op.gte]: start_date }, ...query }
  }else if(end_date){
    query = { created: { [Op.lte]: end_date }, ...query }
  }

  // if ((start_date != undefined && start_date != '') || (end_date != undefined && end_date != '')) {
  //   if (start_date != undefined && start_date != '' && end_date != undefined && end_date != '') {
  //     start_date = moment(start_date).startOf('day').format("YYYY-MM-DD HH:mm:ss");
  //     end_date = moment(end_date).endOf('day').format("YYYY-MM-DD HH:mm:ss");
  //     query = { created: { [Op.between]: [start_date, end_date] }, ...query }
  //   } else if (start_date != undefined && start_date != '') {
  //     start_date = moment(start_date).startOf('day').format("YYYY-MM-DD HH:mm:ss");
  //     query = { created: { [Op.gte]: start_date }, ...query }
  //   } else if (end_date != undefined && end_date != '') {
  //     end_date = moment(end_date).endOf('day').format("YYYY-MM-DD HH:mm:ss");
  //     query = { created: { [Op.lte]: end_date }, ...query }
  //   }
  // } else {
  //   start_date = moment().startOf('day').format("YYYY-MM-DD HH:mm:ss");
  //   end_date = moment().endOf('day').format("YYYY-MM-DD HH:mm:ss");

  //   query = { created: { [Op.between]: [start_date, end_date] }, ...query }
  // }
  // console.log("--query", query)
  try {
    let result = await Transaction_M.findAndCountAll({
      where: query,
      // attributes: [[Sequelize.fn('DISTINCT', Sequelize.col('transaction_id')), 'transaction_id'], `transactions.*`,],
      order: [ ['transaction_id', 'DESC'] ],
      include: [{
        model: OrganisationModel_M,
        attributes: ['name', 'agent_code'],
        required: false
      },
      {
        model: Currency_M,
        attributes: [['name', 'currency_name'] , ['code', 'currency_code']],
        where: { currency_id: Sequelize.col('transactions.currency_id') },
        required:false
      }  
      ],
      offset: offset,
      limit: limit
    })
    let dataArr = [];
    if (result.count > 0) {
      result.rows.map(row => {
        dataArr.push(row);
      });
      result = {
        data: dataArr,
        total: result.count,
        page: page
      }
      return makeResponse(res, true, 200, 'success', 'Transaction', 'Transaction fetched successfully.', result)
    } else {
      return makeResponse(res, true, 200, 'success', 'Transaction', 'No Transaction Foound.')
    }
  } catch (error) {
    return makeResponse(res, false, 200, 'danger', 'Transaction', 'Oops! Something went wrong while processing your request.', error)
  }
});

router.get('/tansaction-view/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const result = await Transaction_M.findOne({ where: { tansaction_id: id }, raw: true });
    return res.json({
      type: 'data',
      status: 200,
      msg: 'User Fetched Successfully.',
      data: result
    });

  } catch (error) {
    return res.json({
      type: 'error',
      status: 400,
      msg: 'Oops! Something went wrong while processing your request.',
    });
  }

});

router.post('/get-topup-list', async (req, res) => {
  let { limit, page } = req.body;
  limit = (!limit) ? parseInt(config.pageLimit) : parseInt(limit)
  page = (!page) ? parseInt(0) : parseInt(page)
  let offset = limit * page;

  try {
    let result = await Topup_M.findAndCountAll({
      order: [ ['topup_id', 'DESC'] ],
      offset: offset,
      limit: limit
    })
    let dataArr = [];
    if (result.count > 0) {
      result.rows.map(row => {
        dataArr.push(row);
      });
      result = {
        data: dataArr,
        total: result.count,
        page: page
      }
      return makeResponse(res, true, 200, 'success', 'Topup', 'Topup fetched successfully.', result)
    } else {
      return makeResponse(res, true, 200, 'success', 'Topup', 'No Topup Foound.')
    }
  } catch (error) {
    return makeResponse(res, false, 200, 'danger', 'Topup', 'Oops! Something went wrong while processing your request.', error)
  }
});

router.get('/get-topup-view/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const result = await Topup_M.findOne({ where: { topup_id: id }, raw: true });
    return res.json({
      type: 'data',
      status: 200,
      msg: 'Topup Fetched Successfully.',
      data: result
    });

  } catch (error) {
    return res.json({
      type: 'error',
      status: 400,
      msg: 'Oops! Something went wrong while processing your request.',
    });
  }

});


router.post('/update-topup-request', FUNC.validateApi(validRules.updateTopup), async (req, res) => {
  // console.log("--req.body", req.body)
  let { topup_id, bank_charge_currency, bank_charge, topup_status, organisation_id, payment_amount } = req.body;
  // get organization currency code
  try {
    let organization = await OrganisationModel_M.findOne({
      where: { organisation_id },
      attributes: ['organisation_id'],
      include: [{
        model: Currency_M,
        attributes: ['code']
      }],
      raw: true
    });
    let org_currency_code = organization['currency.code'];
    // get conversion charges // confirm with team
    let convRates = await axios.post('http://prd.tpconnects.com/currencyCronjob/currencyconversion/getRates', { bank_charge_currency, org_currency_code });
    if (convRates.statusText == 'OK') {
      let responseArray = [];
      convRates.data.map(elem => {
        if (bank_charge_currency == elem['code']) {
          responseArray[bank_charge_currency] = elem['rate'];
        }
        if (org_currency_code == elem['code']) {
          responseArray[org_currency_code] = elem['rate'];
        }
      })
      bank_charge = (responseArray[org_currency_code] / responseArray[bank_charge_currency]);
    }
    let totalAmount = payment_amount * bank_charge;
    let createdDate = moment().format("YYYY-MM-DD HH:mm:ss");
    let currentUserId = req.user.users_id;
    let transactionObj = { amount: totalAmount, transaction_comments: 'Admin Topup Approval', payment_type: 'deposit', transaction_type: 'credit', users_id: currentUserId, organisation_id: organisation_id, created: createdDate }
    // save in transaction table
    await Transaction_M.create(transactionObj);
    await Topup_M.update({ topup_status }, { where: { topup_id } });

    // update in orgAcc
    await OrganizationAccount_M.increment(['available_deposit'], { by: totalAmount, where: { organisation_id } });

    return res.json({
      type: 'data',
      status: 200,
      msg: 'Topup requst updated Successfully.',
      data: {}
    });

  } catch (error) {
    // console.log("---error", error)
    return res.json({
      type: 'error',
      status: 400,
      msg: 'Oops! Something went wrong while processing your request.',
    });
  }


});

router.post('/get-floating-deposit-list', async (req, res) => {
  let { limit, page } = req.body;
  limit = (!limit) ? parseInt(config.pageLimit) : parseInt(limit)
  page = (!page) ? parseInt(0) : parseInt(page)
  let offset = limit * page;
  let user_id = req.user.users_id;
  try {
    let result = await Topup_M.findAndCountAll({
      where: { user_id },
      // include: [{
      //   model: Users_M,
      //   attributes: ['username'],
      //   required: false
      // }],
      order: [['topup_id', 'DESC']],
      offset: offset,
      limit: limit,
      raw: true
    })
    let dataArr = [];
    if (result.count > 0) {
      result.rows.map(row => {
        dataArr.push(row);
      });
      result = {
        data: dataArr,
        total: result.count,
        page: page
      }
      return makeResponse(res, true, 200, 'success', 'Floating Deposit', 'Floating Deposit fetched successfully.', result)
    } else {
      return makeResponse(res, true, 200, 'success', 'Floating Deposit', 'No Floating Deposit Foound.')
    }
  } catch (error) {
    return makeResponse(res, false, 200, 'danger', 'Floating Deposit', 'Oops! Something went wrong while processing your request.', error)
  }
});

router.get("/get-organization-banking-details", async (req, res) => {
  // $apiUrl = Configure:: read('TopupConnectAPI');
  try {
    let bankData = await axios({
      method: 'post',
      url: 'https://merchandising.tpconnects.com/supplierconnect',
      data: {
        'SECRET-KEY': '11ce6082-988a-11e7-abc4-cec278b6b50a',
        'do_action': 'getBankData',
      },
      headers: {
        'SECRET-KEY': '11ce6082-988a-11e7-abc4-cec278b6b50a',
        'agent-KEY': 'TPC',
        'apiKey-KEY': '5ec8b2955d618a38232bd168870eca60',
        'API-ACCESS-KEY': '16a280839b07332c19a1cd8a8f3ede12'
      },
    });
    // console.log("---bankData", bankData)
    return res.json({
      type: 'data',
      status: 200,
      msg: 'Bank data fetched successfully.',
      data: bankData
    });
  } catch (error) {
    // console.log("---error", error)
    return res.json({
      type: 'error',
      status: 400,
      msg: 'Oops! Something went wrong while processing your request.',
    });
  }

})

router.post("/add-floating-deposit", FUNC.validateApi(validRules.addFloatingDeposit), async (req, res) => {
  let {
    supplier_data,
    agency_iata_num,
    agency_name,
    agency_country,
    agency_currency,
    topup_type,
    topup_subtype,
    topup_purpose,
    request_no,
    request_initiator,
    bank_name,
    bank_account_no,
    payment_date,
    payment_currency,
    payment_amount,
    payment_type,
    attachment,
    topup_status,
    bank_charge,
    bank_charge_currency } = req.body;

  let supplierExp = supplier_data.split("||"); //first id , then name and third currency
  if (supplierExp[0] == undefined || supplierExp[1] == undefined || supplierExp[2] == undefined || supplierExp[0] == '' || supplierExp[1] == "" || supplierExp[2] == "") {
    return res.json({
      type: 'error',
      status: 400,
      msg: 'Oops! Something went wrong while processing your request.',
    });
  }
  if (topup_subtype == 'Credit Card') {
    if (payment_currency != supplierExp[2]) {
      return res.json({
        type: 'error',
        status: 400,
        msg: 'Oops! Payment Currency must match with Supplier currency chosen.',
      });
    }
  }


  let form = {};
  let createdDate = moment().format("YYYY-MM-DD HH:mm:ss");
  let user_id = req.user.users_id;
  let organisation_id = req.user.organisation_id;
  let email = req.user.email;

  let supplierId = supplierExp[0];
  let supplierCode = supplierExp[1];
  let currencyCode = supplierExp[2];

  form.user_id = user_id;
  form.organization_id = organisation_id;
  form.agency_iata_num = agency_iata_num;
  form.agency_name = agency_name;
  form.agency_country = agency_country;
  form.agency_currency = agency_currency;
  form.topup_type = topup_type;
  form.topup_subtype = topup_subtype;
  form.topup_purpose = topup_purpose;
  // form.document_ref_no = document_ref_no;
  form.request_no = request_no;
  form.request_initiator = request_initiator;
  form.bank_name = bank_name;
  form.bank_account_no = bank_account_no;
  form.payment_date = payment_date;
  form.payment_currency = payment_currency;
  form.payment_amount = payment_amount;
  form.payment_type = payment_type;
  // form.attachment = attachment;
  form.topup_status = topup_status;
  form.bank_charge = bank_charge;
  form.bank_charge_currency = bank_charge_currency;
  form.created_date = createdDate;
  form.supplier_details = JSON.stringify({ 'supplier-key': supplierId, 'supplier-name': supplierCode });


  try {
    // saving data in topup table
    let topUpCreated = await Topup_M.create(form);
    // console.log("---topUpCreated", topUpCreated);
    let topup_id = topUpCreated.topup_id;

    // upload image after
    let imageName = '';
    if (attachment != undefined && attachment != '') {
      // imageName = await helperFun.uploadImageS3FromBase64(attachment, 'add');
      imageName = await helperFun.uploadImgOnAWS(attachment);
    }  
    // currency conversion
    let convRates = await axios.post('http://prd.tpconnects.com/currencyCronjob/currencyconversion/getRates', { payment_currency, currencyCode });
    if (convRates.statusText == 'OK') {
      let totalAmount = payment_amount * convRates['value'];
      payment_amount = parseFloat(Math.round(totalAmount * 100) / 100).toFixed(2);
    }

    let apiKey = '5ec8b2955d618a38232bd168870eca60';
    let secretKey = '11ce6082-988a-11e7-abc4-cec278b6b50a';
    let supplierId = 1;
    let agent = 'agent';
    let apiAccessKey = "16a280839b07332c19a1cd8a8f3ede12";

    //Data for Smartconnect
    arrData = [];
    arrData['do_action'] = 'RequestTopup';
    arrData['agent'] = agent;
    arrData['API-ACCESS-KEY'] = apiKey;
    arrData['SECRET-KEY'] = secretKey;
    arrData['SUPPLIER-ID'] = supplierId;
    arrData['shortcode'] = supplierCode;
    arrData['amount'] = payment_amount;
    arrData['currencyCode'] = currencyCode;
    arrData['organisation_id'] = organisation_id;
    arrData['email'] = email;
    arrData['reference_number'] = request_no;
    arrData['topup_type'] = topup_subtype;
    arrData['topup_purpose'] = topup_purpose;
    arrData['attachment'] = imageName;
    arrData['created_date'] = moment().format("YYYY-MM-DD HH:mm:ss");
    arrData['topupId'] = topup_id;
    arrData['topupData'] = topUpCreated;
    arrData['topupStatus'] = 0;
    arrData['transaction_comments'] = "Admin Topup Approval Request - ORGID -" + organisation_id + " Domain - " + 'AdminDomain';

    // merchandising demo server
    // let javaApi = await axios({
    //   method: 'post',
    //   url: 'https://merchandising.tpconnects.com/supplierconnect',
    //   data: arrData,
    //   headers: {
    //     'SECRET-KEY': secretKey,
    //     'agent-KEY': agent,
    //     'apiKey-KEY': apiKey,
    //     'API-ACCESS-KEY': apiAccessKey,
    //     'SUPPLIER-ID': supplierId
    //   }
    // });
    // // console.log("--FloatingDepositLog-sending FD request to smartconnect without CC", javaApi)
    // If api resonse got then update according-----------------------
    // ===============================================================

    // if (isset($result) && !empty($result)) {
    //   $resultJsondecode = json_decode($result);
    //   $status = $resultJsondecode -> status;
    //   if (!empty($resultJsondecode -> response_message)) {
    //     $msg = $resultJsondecode -> response_message;
    //     $msg = strtolower($msg);
    //   }
    //   if ($status != "success") {
    //     await Topup_M.update({ topup_status: 3 }, { where: { topup_id } });
    //   }
    // } else {
          //here wer are usering await Topup_M.update({ topup_status: 2, attachment: imageName }, { where: { topup_id } });  that is usign down  //its in else condition update after get res from  merchandising api
    // }
    await Topup_M.update({ topup_status: 2, attachment: imageName }, { where: { topup_id } }); 

    return res.json({
      type: 'data',
      status: 200,
      msg: 'Floating deposited Successfully.',
      data: {}
    });


  } catch (error) {
    // console.log("----error", error)
    return res.json({
      type: 'error',
      status: 400,
      msg: 'Oops! Something went wrong while processing your request.',
    });
  }
})

router.post('/make-agent-transaction', async (req, res) => {
  // console.log("--req.body", req.body)
  let { selectType, organisation_id, trip_id, payment_type, currency_id, transaction_type, amount, available_deposit, transaction_comments } = req.body;
  let user_id = req.user.users_id;
  let formData = {};
  formData.organisation_id = organisation_id;
  formData.users_id = user_id;
  formData.payment_type = payment_type;
  formData.transaction_type = transaction_type;
  formData.amount = amount;
  formData.available_deposit = available_deposit;
  formData.transaction_comments = transaction_comments;
  formData.created = moment().format("YYYY-MM-DD HH:mm:ss");

  if (selectType == 2 && trip_id) {
    let checkTrip = await Transaction_M.findOne({ where: { trip_id }, include: [{ model: OrganisationModel_M, attributes: ['currency_id'], required: true }], order: [['transaction_id', 'ASC']], raw: true })
    if (!checkTrip) {
      return res.json({
        type: 'error',
        status: 400,
        msg: 'Oops! no transaction found on this trip id.',
      });
    }
    formData.trip_id = trip_id;
    formData.currency_id = checkTrip['organisation.currency_id'];
  } else {
    formData.currency_id = currency_id;
  }

  try {
    // save data in transaction
    // console.log("---formData", formData)
    const Transation = await Transaction_M.create(formData);

    if (payment_type == "deposit") {
      if (transaction_type == 'credit') {
        await OrganizationAccount_M.increment(['available_deposit'], { by: amount, where: { organisation_id } });
        await OrganisationModel_M.increment(['credit_limit'], { by: amount, where: { organisation_id } });
      } else {
        await OrganizationAccount_M.decrement(['available_deposit'], { by: amount, where: { organisation_id } });
        await OrganisationModel_M.decrement(['credit_limit'], { by: amount, where: { organisation_id } });
      }
    } else {
      if (transaction_type == 'credit') {
        await OrganizationAccount_M.increment(['usable_credit'], { by: amount, where: { organisation_id } });
      } else {
        await OrganizationAccount_M.decrement(['usable_credit'], { by: amount, where: { organisation_id } });
      }
    }
    return res.json({
      type: 'data',
      status: 200,
      msg: 'Agent transaction saved successfully.',
      data: Transation
    });
  } catch (error) {
    // console.log("---error", error)
    return res.json({
      type: 'error',
      status: 400,
      msg: 'Oops! Something went wrong while processing your request.',
    });
  }
});

router.post('/make-corporate-transaction', async (req, res) => {
  // console.log("--req.body", req.body)
  let { organisation_id, staff_id, payment_type, currency_id, transaction_type, amount, available_deposit, transaction_comments } = req.body;
  let formData = {};
  formData.currency_id = currency_id;
  formData.organisation_id = organisation_id;
  if (staff_id != undefined) {
    formData.users_id = staff_id;
  }
  formData.payment_type = payment_type;
  formData.transaction_type = transaction_type;
  formData.amount = amount;
  formData.available_deposit = available_deposit;
  formData.transaction_comments = transaction_comments;

  try {
    // await StaffProfile_M.findOne({ where: { users_id: staff_id }, attributes: ['staff_id', 'user_balance'], raw: true })
    // console.log("---formData", formData)
    // save transaction
    await Transaction_M.create(formData);

    if (payment_type == "deposit") {
      if (staff_id == undefined) {
        if (transaction_type == 'credit') {
          await OrganizationAccount_M.increment(['available_deposit'], { by: amount, where: { organisation_id } });
          await OrganisationModel_M.increment(['credit_limit'], { by: amount, where: { organisation_id } });
        } else {
          await OrganizationAccount_M.decrement(['available_deposit'], { by: amount, where: { organisation_id } });
          await OrganisationModel_M.decrement(['credit_limit'], { by: amount, where: { organisation_id } });
        }
      } else {
        if (transaction_type == 'credit') {
          await StaffProfile_M.increment(['user_balance'], { by: amount, where: { staff_id } });
        } else {
          await StaffProfile_M.decrement(['user_balance'], { by: amount, where: { staff_id } });
        }
      }
    }

    return res.json({
      type: 'data',
      status: 200,
      msg: 'Topup requst updated Successfully.',
      data: {}
    });

  } catch (error) {
    // console.log("---error", error)
    return res.json({
      type: 'error',
      status: 400,
      msg: 'Oops! Something went wrong while processing your request.',
    });
  }

});

router.get('/get-self-organisation-account', async (req, res) => {
  try {
    let organisation_id = req.user.organisation_id;
    const result = await OrganisationModel_M.findOne({
      where: { organisation_id },
      include: [
        {
          model: OrganizationAccount_M,
          required: true
        },
        {
          model: Country_M,
          attributes: ['code', 'name'],
          required: true
        },
        {
          model: Currency_M,
          attributes: ['code', 'name', 'symbol', 'rate'],
          required: true
        }],
      attributes: ['organisation_id', 'name']
    });
    return res.json({
      type: 'data',
      status: 200,
      msg: 'Organisation data fetched successfully.',
      data: result
    });

  } catch (error) {
    // console.log("---error-----", error)
    return res.json({
      type: 'error',
      status: 400,
      msg: 'Oops! Something went wrong while processing your request.',
    });
  }

});

router.post('/export-transaction', async (req, res) => {

  const orgDetails = getOrgDetails(req);
  // fetch users from organisation's child pos also
  const parent_ids = await OrganisationModel_M.findAll({where: {parent_id:orgDetails.org_id}, attributes:["organisation_id"]})
  let p_ids = []
  parent_ids.forEach(id => {
      p_ids.push(id.organisation_id)
  })
  p_ids.push(orgDetails.org_id)

  let { end_date,
    organisation_id,
    payment_type,
    start_date,
    trip_id } = req.body;

  let query = {};

  if(orgDetails.org_id != orgDetails.parent_id){
    query = { organisation_id: { [Op.in]:p_ids }, ...query}
  }

  if (trip_id != undefined && trip_id != '') {
    query = { trip_id: { [Op.like]: '%' + trip_id + '%' }, ...query }
  }
  if (organisation_id != undefined && organisation_id != '' && organisation_id != 'all' ) {
    query = { organisation_id: organisation_id, ...query }
  }
  if (payment_type != undefined && payment_type != '' && payment_type != 'all') {
    query = { payment_type: payment_type, trip_id: { [Op.ne]: '' }, ...query }
  }
  if ((start_date != undefined && start_date != '') || (end_date != undefined && end_date != '')) {
    if (start_date != undefined && start_date != '' && end_date != undefined && end_date != '') {
      start_date = moment(start_date).startOf('day').format("YYYY-MM-DD HH:mm:ss");
      end_date = moment(end_date).endOf('day').format("YYYY-MM-DD HH:mm:ss");
      query = { created: { [Op.between]: [start_date, end_date] }, ...query }
    } else if (start_date != undefined && start_date != '') {
      start_date = moment(start_date).startOf('day').format("YYYY-MM-DD HH:mm:ss");
      query = { created: { [Op.gte]: start_date }, ...query }
    } else if (end_date != undefined && end_date != '') {
      end_date = moment(end_date).endOf('day').format("YYYY-MM-DD HH:mm:ss");
      query = { created: { [Op.lte]: end_date }, ...query }
    }
  } else {
    start_date = moment().startOf('day').format("YYYY-MM-DD HH:mm:ss");
    end_date = moment().endOf('day').format("YYYY-MM-DD HH:mm:ss");

    // query = { created: { [Op.between]: [start_date, end_date] }, ...query }
  }
  Transaction_M.findAll({
    where: query,
    attributes: [[Sequelize.fn('DISTINCT', Sequelize.col('transaction_id')), 'transaction_id'], `transactions.*`,],
    order: [['transaction_id', 'DESC']],
    include: [{
      model: OrganisationModel_M,
      attributes: ['name', 'agent_code'],
      required: false
    }],
    limit: 1000,
    raw: true
  })
    .then((result) => {
      let resultArr = [];
      result.map(async (ele, ind) => {
        let currency = await getCurrencyCodeByID(ele.currency_id)
        if(!currency){
          currency.code = "GBP"
        }
        console.log(ele)
        resultArr.push({
          "Agent": ele['organisation.name'],
          "Trip ID": ele.trip_id,
          "Date": moment(ele.created).format("DD MMM, YYYY"),
          "Comments": ele.transaction_comments,
          "Account Type": ele.payment_type,
          "Amount": ele.amount,
          "Currency": currency.code,
          "Cr/Dr": ele.payment_type
        })
      })

      return res.json({
        type: 'data',
        status: 200,
        msg: 'Transaction exported successfully.',
        data: resultArr
      });
    }).catch((error) => {
      return res.json({
        type: 'error',
        status: 400,
        msg: 'Oops! Something went wrong while processing your request.',
      });
    });


});

module.exports = router;
