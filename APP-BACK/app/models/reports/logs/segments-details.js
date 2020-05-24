var moment = require('moment');

module.exports = (sequilize, type) => {
    var segmentDetailsModel = sequilize.define('segment_details', {
        segment_id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        trip_id: type.INTEGER,
        segment_key: type.STRING,
        segment_departure_airport_code: type.STRING,
        segment_departure_airport_name: type.STRING,
        segment_departure_terminal: type.STRING,
        segment_departure_date: type.DATE,
        segment_departure_time: type.TIME,
        segment_arrival_airport_code: type.STRING,
        segment_arrival_airport_name: type.STRING,
        segment_arrival_terminal: type.STRING,
        segment_arrival_date: type.DATE,
        segment_arrival_time :type.TIME,
        segment_flight_duration: type.STRING,
        segment_aircraft_code: type.STRING,
        equipment_name: type.STRING,
        segment_airline_id: type.STRING,
        segment_operating_airline_id: type.STRING,
        segment_operating_airline_name: type.STRING,
        segment_operating_flight_number: type.STRING,
        segment_marketing_airline_id: type.STRING,
        segment_marketing_airline_name: type.STRING,
        segment_marketing_flight_number: type.STRING,
        segment_seatingClass: type.STRING,
        segment_seatingClassCode: type.STRING,
        segment_flight_number: type.STRING,
        segment_freequentflair_number: type.STRING
    }, {
            freezeTableName: true,
            // subQuery: false,
            timestamps: false,
            // underscored: true,
        });
    segmentDetailsModel.removeAttribute('id');
    return segmentDetailsModel;
}