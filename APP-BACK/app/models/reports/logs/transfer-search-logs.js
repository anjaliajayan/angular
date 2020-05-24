var moment = require('moment');

module.exports = (sequilize, type) => {
    var transferSearchLogModel = sequilize.define('transfers_search_logs', {
        transfers_search_logs_id: {
            type: type.INTEGER,
            primaryKey: true
        },
        user_id: type.INTEGER,
        agent_code: type.STRING,
        organisation_id: type.INTEGER,
        browserIp: type.STRING,
        browserAgent: type.STRING,
        startDate: type.DATE,
        startTime: type.DATE,
        endDate: type.DATE,
        endTime: type.DATE,
        tripType: type.STRING,
        pickUp: type.STRING,
        dropOff: type.STRING,
        pickUpLocation: type.STRING,
        dropOffLocation: type.STRING,
        adultCount: type.INTEGER,
        childCount: type.INTEGER,
        childAges: type.INTEGER,
        country: type.STRING,
        regionID: type.STRING,
        currency: type.STRING,
        responseKey: type.STRING,
        created_at: type.DATE,
    }, {
            freezeTableName: true,
            // subQuery: false,
            timestamps: false,
            // underscored: true,
        });
    transferSearchLogModel.removeAttribute('id');
    return transferSearchLogModel;
}