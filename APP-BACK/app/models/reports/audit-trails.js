var moment = require('moment');

module.exports = (sequelize, type) => {
    var auditTrialModel = sequelize.define('audit_trials', {
        id: {
            type: type.INTEGER,
            primaryKey: true
        },
        platform: type.STRING,
        module: type.STRING,
        model: type.STRING,
        event: type.STRING,
        browser_ip: type.STRING,
        browser_agent: type.STRING,
        object: type.STRING,
        description: type.STRING,
        user_id: type.STRING,
        created_at: type.DATE,
    }, {
            freezeTableName: true,
            // subQuery: false,
            timestamps: false,
            // underscored: true,
        });
    auditTrialModel.removeAttribute('id');
    return auditTrialModel;
};
