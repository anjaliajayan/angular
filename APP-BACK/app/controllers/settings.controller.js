const express = require('express');
const router = express.Router();
const _ = require('lodash');

const { SettingModel, Sequelize } = require('../../config/db');
let { makeResponse } = require("../helpers/utils");

// fetch settings
router.get('/fetch-settings', async(req, res) => {
    try {
        const result = await SettingModel.findAll()
        if(result.length > 0)    {
            const multiTextArray = ['WSDLDevelopment', 'WSDLLive', 'ContactUs', 'PhoneNumber', 'DomainName', 'ActiveProducts', 'RolePermissions', 'AgentRolePermissions', 'AWSConnect', 'MultiCurrency', 'InsuranceSuppliers', 'MultiPayment', 'EmailCredentials', 'AgentMultiPayment', 'PushNotification', 'DisplayField', 'B2CActiveProducts', 'CorporateActiveProducts', 'EmailConfig']
            result.map(element => {
                const multiTextElement = multiTextArray.find(e => e == element.name);
                if(multiTextElement){
                    element.value = JSON.parse(element.value)
                }
            })
            return makeResponse(res, true, 200, 'success', 'Settings', 'Fetch Settings.', result)
        }else{
            return makeResponse(res, false, 200, 'danger', 'Settings', 'No Settings Found.', result)
        }
    } catch (error) {
        return makeResponse(res, false, 200, 'danger', 'Settings', 'Oops! Something went wrong while processing your request.', error)
    }
});

// update settings
router.post('/update-settings', async(req, res) => {
    const {settings_id, name, value, status} = req.body
    if(!settings_id || !Number.isInteger(settings_id)){
        return makeResponse(res, false, 200, 'danger', 'Settings', 'Settings ID is required and should be an integer.')
    }
    try {
        const setting = await SettingModel.findOne({where: { settings_id: settings_id }})
        if(!setting){
            return makeResponse(res, false, 200, 'danger', 'Settings', 'No Settings Found.')
        }
        let settingsObj = {name, value, status}
        if(_.isObject(settingsObj.value)){
            settingsObj.value = JSON.stringify(settingsObj.value)
        }
        const result = await SettingModel.update(settingsObj,{ where: { settings_id }})
        if(result) {
            return makeResponse(res, true, 200, 'success', 'Settings', 'Settings updated successfully.', result)
        }else{
            return makeResponse(res, false, 200, 'danger', 'Settings', 'Settings not updated.', result)
        }
    } catch (error) {
        console.log(error)
        return makeResponse(res, false, 200, 'danger', 'Settings', 'Oops! Something went wrong while processing your request.', error)
    }
});

module.exports = router