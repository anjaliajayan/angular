var moment = require('moment');

module.exports = (sequelize, type) => {
    var organisationAccountsModel = sequelize.define('organisation_accounts', {
        accounts_id: {
            type: type.INTEGER,
            primaryKey: true
        },
        organisation_id: type.INTEGER,
        available_deposit: type.STRING,
        total_credit_limit: type.STRING,
        usable_credit: type.STRING,
        due_credit: type.STRING,
        status: type.INTEGER,
        created: type.DATE,
    }, {
            freezeTableName: true,
            // subQuery: false,
            timestamps: false,
            // underscored: true,
        });
    organisationAccountsModel.removeAttribute('id');
    return organisationAccountsModel;
};
