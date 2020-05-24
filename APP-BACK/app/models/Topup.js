module.exports = (sequelize, type) => {
    var topupModel = sequelize.define('topups', {
        topup_id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        organization_id: type.STRING,
        agency_iata_num: type.STRING,
        agency_name: type.INTEGER,
        agency_country: type.STRING,
        agency_currency: type.STRING,
        topup_type: type.STRING,
        topup_subtype: type.STRING,
        topup_purpose: type.STRING,
        document_ref_no: type.STRING,
        pnr: type.STRING,
        request_no: type.STRING,
        request_initiator: type.STRING,
        bank_name: type.STRING,
        bank_account_no: type.STRING,
        payment_date: type.STRING,
        payment_currency: type.STRING,
        payment_amount: type.STRING,
        payment_type: type.STRING,
        attachment: type.TEXT,
        user_id: type.INTEGER,
        bank_charge: type.STRING,
        bank_charge_currency: type.STRING,
        payment_details: type.TEXT,
        currency_details: type.TEXT,
        supplier_details: type.TEXT,
        created_date: type.STRING,
        topup_status: type.STRING,
        status: type.INTEGER
    }, {
        freezeTableName: true,
        timestamps: false,
    }
    );
    topupModel.removeAttribute('id');
    return topupModel;
};
