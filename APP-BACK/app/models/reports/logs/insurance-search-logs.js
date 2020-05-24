var moment = require('moment');

module.exports = (sequilize, type) => {
    var insuranchSearchLogsModel = sequilize.define('insurance_search_logs', {
        insurance_search_logs_id: {
            type: type.INTEGER,
            primaryKey: true
        },
        user_id: type.INTEGER,
        agent_code: type.STRING,
        organisation_id: type.INTEGER,
        browserIp: type.STRING,
        browserAgent: type.STRING,
        startDate: type.DATE,
        endDate: type.DATE,
        birthDate: type.DATE,
        country: type.STRING,
        product: type.STRING,
        responseKey: type.STRING,
        plan: type.STRING,
        benefit: type.STRING,
        currency: type.STRING,
        created_at: type.DATE,
    }, {
            freezeTableName: true,
            // subQuery: false,
            timestamps: false,
            // underscored: true,
        });
    insuranchSearchLogsModel.removeAttribute('id');
    return insuranchSearchLogsModel;
}