module.exports = (sequelize, type) => {
    let setting = sequelize.define("settings", {
        settings_id: {
            type: type.INTEGER,
            primaryKey: true
        },
        name: type.STRING,
        value: type.INTEGER,
        status: type.STRING
    }, {
            freezeTableName: true,
            timestamps: false,
            underscored: false,
        });
    return setting;
}
