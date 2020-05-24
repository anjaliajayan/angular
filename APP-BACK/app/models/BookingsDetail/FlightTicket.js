var moment = require('moment');

module.exports = (sequelize, type) => {
    let flightTicketsModel = sequelize.define('flight_tickets', {
        ticket_id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        ticket_booking_id: type.INTEGER,
        ticket_pax_ref_key: type.STRING,
        ticket_number: type.STRING,
        ticket_status: {
            type: type.ENUM,
            values: ['Open', 'Void', 'Progress', 'Cancel', 'Refund', 'Exchange']
        },
        BaseFare: type.STRING,
        Tax: type.STRING,
        Total: type.STRING,
        Commission: type.STRING,
        bookings_flight_id: type.INTEGER,
        created_at: type.DATE
    }, {
            freezeTableName: true,
            // subQuery: false,
            timestamps: false,
            underscored: false,
        });
    return flightTicketsModel;
};