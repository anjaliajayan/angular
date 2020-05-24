var moment = require('moment');

module.exports = (sequelize, type) => {
    var corporatePolicy = sequelize.define('corporate_policy', {
        policy_id: {
            type: type.INTEGER,
            primaryKey: true
        },
        policy_code: type.STRING,
        policy: type.STRING,
        status: type.INTEGER,
        creted: type.DATE,
    }, {
            freezeTableName: true,
            // subQuery: false,
            timestamps: false,
            // underscored: true,
        });
    corporatePolicy.removeAttribute('id');
    return corporatePolicy;
};
