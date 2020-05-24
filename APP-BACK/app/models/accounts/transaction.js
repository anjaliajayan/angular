var moment = require('moment');

module.exports = (sequelize, type) => {
    var transaction = sequelize.define('transactions', {
        transaction_id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        users_id: type.INTEGER,
        organisation_id: type.INTEGER,
        transaction_type: {
            type: type.ENUM,
            values: ['credit', 'debit']
        },
        payment_type: {
            type: type.ENUM,
            values: ['deposit', 'credit']
        },
        amount: type.STRING,
        currency_id: type.INTEGER,
        transaction_comments: type.STRING,
        status: type.INTEGER,
        created: type.DATE,
        before_debit: type.STRING,
        trip_id: type.STRING,
        payment_gateway_id: type.INTEGER,
        tax_no: type.STRING,
        tax_email: type.STRING,
    }, {
            freezeTableName: true,
            // subQuery: false,
            timestamps: false,
            // underscored: true,
        });
    transaction.removeAttribute('id');
    return transaction;
};
