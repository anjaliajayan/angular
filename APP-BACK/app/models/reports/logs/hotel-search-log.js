var moment = require('moment');

module.exports = (sequilize, type) => {
    var hotelSearchLogModel = sequilize.define('hotels_search_logs', {
        hotels_search_logs_id: {
            type: type.INTEGER,
            primaryKey: true
        },
        user_id: type.INTEGER,
        agent_code: type.STRING,
        organisation_id: type.INTEGER,
        browserIp: type.STRING,
        browserAgent: type.STRING,
        check_in: type.DATE,
        check_out: type.DATE,
        no_of_rooms: type.INTEGER,
        children_per_room: type.INTEGER,
        adults_per_room: type.INTEGER,
        extra_bed: type.INTEGER,
        nationality: type.STRING,
        resident: type.STRING,
        currency: type.STRING,
        city: type.STRING,
        city_code: type.INTEGER,
        location: type.STRING,
        ca: type.STRING,
        hotel_info: type.STRING,
        src: type.STRING,
        responseKey: type.STRING,
        driversAge: type.INTEGER,
        created_at: type.DATE,
        gotResult: {
            type: type.ENUM,
            values: ['yes', 'no']
        },
    }, {
            freezeTableName: true,
            // subQuery: false,
            timestamps: false,
            // underscored: true,
        });
    hotelSearchLogModel.removeAttribute('id');
    return hotelSearchLogModel;
}