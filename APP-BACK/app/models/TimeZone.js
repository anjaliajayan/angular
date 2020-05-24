module.exports = (sequelize, type) => {
    let timezone = sequelize.define("timezone", {
        timezone_id: {
            type: type.INTEGER,
            primaryKey: true
        },
        optgroup: type.INTEGER,
        timezone_code: type.STRING,
        timezone_value: type.STRING,
        title: type.STRING,
        country_id: type.INTEGER,
        city_id: type.INTEGER,
        status: type.INTEGER
    }, {
        freezeTableName: true,
        timestamps: false
    });
    timezone.removeAttribute('id');
    return timezone;
}
