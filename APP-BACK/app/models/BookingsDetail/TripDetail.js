var moment = require('moment');

module.exports = (sequelize, type) => {
    let TripDetailModel = sequelize.define('trip_details', {
        trip_id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        trip_booking_id: type.INTEGER,
        trip_details: type.TEXT,
        trip_departure_airport_code: type.STRING,
        trip_departure_airport_name: type.STRING,
        trip_departure_date: type.DATE,
        trip_departure_time: type.DATE,
        trip_arrival_airport_code: type.STRING,
        trip_arrival_airport_name: type.STRING,
        trip_arrival_date: type.DATE,
        trip_arrival_time: type.DATE,
        trip_flight_duration: type.STRING,
        bookings_flight_id: type.INTEGER,
    }, {
            freezeTableName: true,
            // subQuery: false,
            timestamps: false,
            // underscored: true,
        });
    return TripDetailModel;
}