var moment = require('moment');

module.exports = (sequelize, type) => {
    let companyProfileModel = sequelize.define('company_profile', {
        company_profile_id: type.INTEGER,
        organisation_id: type.INTEGER,
        group_name: type.STRING,
        group_description: type.STRING,
        group_index: type.STRING,
        languages: type.STRING,
        number: type.TEXT,
        email: type.TEXT,
        address: type.TEXT,
        special_needs: type.TEXT,
        miscellaneous_ticketing: type.TEXT,
        tour_code: type.TEXT,
        ticketing_arrangement: type.TEXT,
        validating_carrier: type.TEXT,
        original_issue: type.TEXT,
        shadow_destination: type.STRING,
        keywords: type.TEXT,
        default_home_airport: type.STRING,
        default_arrival_ariport: type.STRING,
        dep_contact_name: type.STRING,
        agent_contact_name: type.STRING,
        delivery_method: type.STRING,
        policy_override_authorization: type.BOOLEAN,
        prepaid_ticket_authorization: type.BOOLEAN,
        bank_accounts: type.TEXT,
        direct_debit_authorized: type.BOOLEAN,
        forms_of_payment: type.TEXT,
        fare_price_override: type.TEXT,
        endorsements: type.TEXT,
        discounts: type.INTEGER,
        commissions: type.TEXT,
        accounting: type.TEXT,
        remarks: type.TEXT,
        profile_notes: type.TEXT,
        priority_lines1: type.TEXT,
        priority_lines2: type.TEXT,
        follow_up: type.TEXT,
        created: {
            type: type.DATE,
            get() { return moment(this.getDataValue('created')).format('DD/MM/YYYY h:mm:ss'); },
        }
    }, {
            freezeTableName: true,
            // subQuery: false,
            timestamps: false,
            // underscored: true,
        });
    return companyProfileModel;
};
