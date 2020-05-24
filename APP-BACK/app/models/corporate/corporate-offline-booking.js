var moment = require('moment');

module.exports = (sequelize, type) => {
    var corporateOfflineBooking = sequelize.define('corporate_offline_booking', {
        offline_id: {
            type: type.INTEGER,
            primaryKey: true
        },
        user_id: type.INTEGER,
        first_name: type.STRING,
        employee_number: type.STRING,
        last_name: type.STRING,
        nationality: type.STRING,
        company: type.STRING,
        department: type.STRING,
        additional_explanation: type.STRING,
        travel_desk: type.STRING,
        itinerary_details: type.STRING,
        title: type.STRING,
        mail_send: type.INTEGER,
    }, {
            freezeTableName: true,
            // subQuery: false,
            timestamps: false,
            // underscored: true,
        });
    corporateOfflineBooking.removeAttribute('id');
    return corporateOfflineBooking;
};
