module.exports = (sequelize, type) => {
    let approvalTemplate = sequelize.define("audit_trials", {
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

        object: type.TEXT,
        description: type.TEXT,
        
        user_id: type.STRING,
        created: type.DATE,
    }, {
        freezeTableName: true,
        timestamps: false
    });
    return approvalTemplate;
}
