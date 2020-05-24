var moment = require('moment');

module.exports = (sequelize, type) => {
    let PassengerDetailModel = sequelize.define('passenger_details', {
        pax_id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        pax_booking_id: type.INTEGER,
        pax_ref_key: type.INTEGER,
        pax_title: type.STRING,
        pax_first_name: type.STRING,
        pax_middle_name: type.STRING,
        pax_last_name: type.STRING,
        pax_dob: type.DATE,
        pax_gender: {
            type: type.ENUM,
            values: ['m','f'],
            defaultValue: 'm'
        },
        pax_resi_country: type.STRING,
        pax_mobile: type.STRING,
        pax_email: type.STRING,
        pax_ID_type: type.STRING,
        pax_passport_number: type.STRING,
        pax_passport_experiration: type.DATE,
        pax_passport_country: type.STRING,
        pax_type: type.STRING,
        pax_frequentFlyer: type.STRING,
        pax_frequentFlyerNumber: type.STRING,
        bookings_flight_id: type.STRING
    }, {
            freezeTableName: true,
            // subQuery: false,
            timestamps: false,
            // underscored: true,
        });
    return PassengerDetailModel;
}