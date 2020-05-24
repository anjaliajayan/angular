module.exports = (sequelize, type) => {
    let approvalTemplate = sequelize.define("approval_templates", {
        approval_id: {
            type: type.INTEGER,
            primaryKey: true
        },
        organisation_id: type.INTEGER,
        users_id: type.INTEGER,
        template_name: type.STRING,
        template_value: type.STRING,
        approval_managers: type.STRING,
        status: type.INTEGER,
        is_active: type.INTEGER,
        created: type.DATE,
    }, {
        freezeTableName: true,
        timestamps: false
    });
    return approvalTemplate;
}
