
module.exports = (sequelize, type) => {
    var paymentGetway = sequelize.define('paymentgateway', {
        paymentgateway_id: {
            type: type.INTEGER,
            primary: true
        },
        order_transaction_id: type.STRING,
        order_details: type.TEXT,
        order_amount: type.FLOAT,
        is_success: type.INTEGER,
        order_date: type.DATE,
        order_type: type.STRING,
        process_status: type.STRING,
        process_details: type.TEXT,
        payfort_id: type.STRING,
        order_status: {
            type: type.ENUM,
            values: ['SUCCESS', 'FAILED']
        },
        booking_id: type.INTEGER,
        transaction_charge_amount: type.FLOAT,
        transaction_charge_currency: type.STRING,
        payment_status: type.STRING,
        payment_details: type.TEXT,
        currency_details: type.TEXT,
        order_currency: type.STRING,
        session_details: type.TEXT,
        log_details: type.TEXT,
    }, {
        freezeTableName: true,
        // subQuery: false,
        timestamps: false,
        // underscored: true,
    });
    paymentGetway.removeAttribute('id');
    return paymentGetway;
};
