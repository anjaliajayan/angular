module.exports = (sequelize, type) => {
    let country = sequelize.define("country", {
        country_id: {
            type: type.INTEGER,
            primaryKey: true
        },
        code: type.STRING,
        code3: type.STRING,
        name: type.STRING,
        name_ar: type.STRING,
        currency_id: type.STRING,
        timezone_id: type.STRING,
        latitude: type.STRING,
        longitude: type.STRING,
        status: type.INTEGER
    }, {
        freezeTableName: true,
        timestamps: false
    });
    country.removeAttribute('id');
    return country;
}
