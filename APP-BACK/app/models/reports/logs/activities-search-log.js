var moment = require('moment');

module.exports = (sequelize, type) => {
    var activitiesSearchLogModel = sequelize.define('activities_search_logs', {
        activities_search_logs_id:{ 
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
        trip: type.STRING,
        adultCount: type.INTEGER,
        childCount: type.INTEGER,
        childAges: type.INTEGER,
        country: type.STRING,
        currency: type.STRING,
        responseKey: type.TEXT,
        created_at: type.DATE
    }, {
            freezeTableName: true,
            // subQuery: false,
            timestamps: false,
            // underscored: true,
        });
    activitiesSearchLogModel.removeAttribute('id');
    return activitiesSearchLogModel;
}