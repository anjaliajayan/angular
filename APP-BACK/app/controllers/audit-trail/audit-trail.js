const express = require('express');
const router = express.Router();
const { AuditTrail, db } = require('../../../config/db');

//READ ALL SEARCH LOGS
let AuditLog = {
    createAuditLog(auditObj) {
        //// console.log(req.body);
        // console.log("YOU SHALL NOT PASS")
        // AuditTrail.create(auditObj
        //     //, {where: { organisation_id: req.query.organisation_id }}
        // )
        //     .then((auditObj) => {
        //         // console.log(auditObj);
        //         // console.log("I CAME HERE AS WELL ")
        //     }).catch((error) => {
        //         // console.log(error);
        //     });
    },
    fetchAuditLog() {
        // console.log('hello');
    }
}

module.exports = AuditLog;
