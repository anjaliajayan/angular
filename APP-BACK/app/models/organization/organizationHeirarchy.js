var moment = require('moment');

module.exports = (sequilize, type) => {
    var orgHeirarchyModel = sequilize.define('organisation_hierarchy', {
        hierarchy_id: type.STRING,
        parent_id: type.STRING,
        POSName: type.STRING,
        role_name: type.STRING
    }, {
            freezeTableName: true,
            // subQuery: false,
            timestamps: false,
            // underscored: true,
        });
    // orgHeirarchyModel.removeAttribute('id');
    return orgHeirarchyModel;
}