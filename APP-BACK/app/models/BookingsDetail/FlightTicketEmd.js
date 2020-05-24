var moment = require('moment');

module.exports = (sequelize, type) => {
    let flightTicketsEmdModel = sequelize.define('flight_ticket_emd', {
        emd_id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        booking_flight_id: type.INTEGER,
        ticket_id: type.STRING,
        ticket_number: type.STRING,
        emd_number: type.STRING,
        reason_for_issuance_subcode: type.STRING,
        remarks: type.STRING,
        amount: type.STRING,
        code: type.STRING,
        created_at: type.DATE
    }, {
            freezeTableName: true,
            // subQuery: false,
            timestamps: false,
            // underscored: true,

        });
    return flightTicketsEmdModel;
}