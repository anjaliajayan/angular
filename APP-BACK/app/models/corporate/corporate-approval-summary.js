var moment = require('moment');

module.exports = (sequelize, type) => {
    var corporateApprovalSummaryModel = sequelize.define('corporate_approval_summary', {
        request_id: {
            type: type.INTEGER,
            primaryKey: true
        },
        users_id: type.INTEGER,
        approval_result: type.STRING,
        created: type.DATE,
        arrival: type.STRING,
        destination: type.STRING,
        start_date: type.STRING,
        end_date: type.STRING,
        requested_user_id: type.STRING,
        status: {
            type: type.ENUM,
            values: ['Pending', 'Approve', 'Decline', 'Hold', 'Ticketed']
        },
        edit_user: type.STRING,
        edit_date: type.DATE,
        has_flight: type.INTEGER,
        has_hotel: type.INTEGER,
        has_cruises: type.INTEGER,
        has_transfer: type.INTEGER,
        has_holiday: type.INTEGER,
        has_activity: type.INTEGER,
        has_insurance: type.INTEGER,
        has_car: type.INTEGER,
        mailbody: type.STRING,
        traveller_type: type.STRING,
        family_details: type.STRING,
        request_viewed: type.INTEGER,
        booking_id: type.INTEGER,
        echotoken: type.STRING,
        policy: type.STRING,
        purpose_of_visit: type.STRING,
        in_policy: type.STRING,
        low_fare: type.STRING,
        user_request_mail: type.INTEGER,
        group_users: type.STRING,
    }, {
            freezeTableName: true,
            // subQuery: false,
            timestamps: false,
            // underscored: true,
        });
    corporateApprovalSummaryModel.removeAttribute('id');
    return corporateApprovalSummaryModel;
};
