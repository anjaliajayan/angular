const express = require('express');
const router = express.Router();
const { CurrencyConvert, db,Op } = require('../../../../config/db');
const config = require('./../../../../config/config');


router.post('/create-new-currency', FUNC.validateApi(validRules.addCurrency), async (req, res) => {
    // console.log("--req.body-create-new-Currency",req.body);
    let {from,to,value } = req.body;
    let formData = {};
    let currency = from+to;
    formData.organisation_id = req.user.organisation_id;
    formData.currency = JSON.stringify({ [currency.toUpperCase()] : { from: from, to: to, value: value} })
    formData.status = 0
    formData.created = new Date
    formData.is_active = 1
    try {
      await CurrencyConvert.findOne({
        where: {
          currency: {
            [Op.like]: "%" + (from + to).toUpperCase().trim() + "%"
          },
          status:0
        }
      }).then(data => {
        if (data && data.converter_id) {
          return res.json({
            type: 'data',
            status: 200,
            msg: 'Record already exists.'
          });
        } else {
          CurrencyConvert.create(formData);
          return res.json({
            type: 'data',
            status: 200,
            msg: 'Record added Successfully.'
          });
        }
      })
    }
        catch (error) {
        // console.log("--error",error)
        return res.status(500).json({
            type: 'error',
            status: 400,
            msg: 'Oops! Something went wrong while processing your request.'
            ,
        });
    }
});

//READ SPECIFIC Currency
router.get('/fetch-currency/:converter_id', async (req, res) => {
    const {converter_id} = req.params;
    try {
        let result = await CurrencyConvert.findOne({where: { converter_id }});
        
        return res.json({
            type: 'data',
            status: 200,
            msg: 'Recrod Fetched Successfully.',
            data: result
        });
    } catch (error) {
        return res.status(500).json({
            type: 'error',
            status: 400,
            msg: 'Oops! Something went wrong while processing your request.',
        });
    }
});

//READ ALL Currency
router.post('/fetch-all-currency', (req, res) => {
    let { limit, page } = req.body;
    limit = (limit != undefined && limit > 0) ? parseInt(limit) : parseInt(config.pageLimit);
    page = parseInt(page);
    let offset = limit * page;
    let dataArr = [];

    CurrencyConvert.findAndCountAll({
        where: {status: 0},
        offset: offset,
        limit: limit,
        raw: true
    })
        .then((result) => {
            result.rows.map(row => {
                dataArr.push(row);
            });
            return res.json({
                type: 'data',
                status: 200,
                msg: 'Record Fetched Successfully.',
                data: dataArr,
                totalResult: result.count,
                page: page
            });
        }).catch((error) => {
            console.log("--error",error)
            return res.status(500).json({
                type: 'error',
                status: 400,
                msg: 'Oops! Something went wrong while processing your request.', error,
            });
        });
});

//Search Currency
router.post('/search-currency', (req, res) => {
    let { limit, page, keywords } = req.body;
    limit = (limit != undefined && limit > 0) ? parseInt(limit) : parseInt(config.pageLimit);
    page = page?parseInt(page):0;
    let offset = limit * page;
    let dataArr = [];

    if(!keywords){
        return res.json({
            type: 'data',
            status: 200,
            msg: 'Keyword is required.',
            data: [],
            totalResult: 0,
            page: 0
        });
    }

    CurrencyConvert.findAndCountAll({
        where: {status: 0, currency: {[Op.like]: "%"+(keywords).toUpperCase()+"%" }},
        offset: offset,
        limit: limit,
        raw: true
    })
        .then((result) => {
            result.rows.map(row => {
                dataArr.push(row);
            });
            return res.json({
                type: 'data',
                status: 200,
                msg: 'Record Searched Successfully.',
                data: dataArr,
                totalResult: result.count,
                page: page
            });
        }).catch((error) => {
            // console.log("--error",error)
            return res.status(500).json({
                type: 'error',
                status: 400,
                msg: 'Oops! Something went wrong while processing your request.', error,
            });
        });
});

//UPDATE EXISTING Currency
router.put('/update-currency/:converter_id', FUNC.validateApi(validRules.updateCurrency), async (req, res) => {
    let {from,to,value} = req.body;
    let  {converter_id } =  req.params;
    let formData = {};

    let currency = from+to;
    formData.organisation_id = req.user.organisation_id;
    formData.currency = JSON.stringify({ [currency.toUpperCase()] : { from: from, to: to, value: value} })

    try {
        await CurrencyConvert.findOne({
            where: {
                currency: {
                    [Op.like]: "%"+(from+to).toUpperCase()+"%"                    
                },
                converter_id: {
                    [Op.ne]: converter_id
                }
            }
        }).then(data => {
            if(data && data.converter_id){
                return res.json({
                    type: 'data',
                    status: 200,
                    msg: 'Record already exists.'
                });
            }else{
                CurrencyConvert.update(formData, { where : { converter_id } });
                return res.json({
                    type: 'data',
                    status: 200,
                    msg: 'Record Updated Successfully.'
                });
            }
        })
    }
    catch (error) {
        // console.log("--error",error)
        return res.status(500).json({
            type: 'error',
            status: 400,
            msg: 'Oops! Something went wrong while processing your request.'
        });
    }
});

//DELETE SPECIFIC Currency
router.post('/remove-currency/:converter_id', async (req, res) => {
    const {converter_id} = req.params;
    try {
        await CurrencyConvert.update(
            { status: 1 },
            { where: { converter_id }}
        );
        return res.json({
            type: 'data',
            status: 200,
            msg: 'Currency Deleted Successfully.'
        });
        
    } catch (error) {
        // console.log("--error",error)
        return res.status(500).json({
                type: 'error',
                status: 400,
                msg: 'Oops! Something went wrong while processing your request.',
            });
    }
});

module.exports = router;
