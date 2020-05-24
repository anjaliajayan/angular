var moment = require('moment');

module.exports = (sequilize, type) => {
    var organizationVatModel = sequilize.define('organisation_vat', {
        vat_no: {
            type: type.INTEGER,
            primaryKey: true
        },
        organisation_id: type.INTEGER,
        users_id: type.INTEGER,
        vat_detail: type.STRING,
        created: type.DATE,
        last_updated: type.DATE,
        status: type.INTEGER,
        is_active: type.INTEGER
    }, {
            freezeTableName: true,
            // subQuery: false,
            timestamps: false,
            // underscored: true,
        });
    return organizationVatModel;
}