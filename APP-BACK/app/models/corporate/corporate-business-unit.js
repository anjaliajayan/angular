var moment = require('moment');

module.exports = (sequelize, type) => {
    var corporateBusinessUnit = sequelize.define('corporate_business_unit', {
        unit_id: {
            type: type.INTEGER,
            primaryKey: true
        },
        company_code: type.STRING,
        company_name: type.STRING,
        business_unit: type.STRING,
        dk_number: type.STRING,
        organisation_id: type.INTEGER,
        is_active: type.INTEGER,
    }, {
            freezeTableName: true,
            // subQuery: false,
            timestamps: false,
            // underscored: true,
        });
    corporateBusinessUnit.removeAttribute('id');
    return corporateBusinessUnit;
};
