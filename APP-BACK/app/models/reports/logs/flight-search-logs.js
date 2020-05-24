var moment = require('moment');

module.exports = (sequilize, type) => {
    var flightSearchLogModel = sequilize.define('flights_search_logs', {
        flights_search_logs_id: {
            type: type.INTEGER,
            primaryKey: true
        },
        user_id: type.INTEGER,
        agent_code: type.STRING,
        organisation_id: type.INTEGER,
        browserIp: type.STRING,
        browserAgent: type.STRING,
        stream: type.STRING,
        responseKey: type.STRING,
        created_at: type.DATE,
        platform: type.STRING,
        echo_token: type.STRING,
        gotResult: {
            type: type.ENUM,
            values: ['yes', 'no']
        },
        username: type.STRING,
        updateFrom: {
            type: type.ENUM,
            values: ['search', 'book', 'ticket']
        },
        low_price: type.STRING,
        location: type.STRING,
    }, {
            freezeTableName: true,
            // subQuery: false,
            timestamps: false,
            // underscored: true,
        });
    flightSearchLogModel.removeAttribute('id');
    return flightSearchLogModel;
}