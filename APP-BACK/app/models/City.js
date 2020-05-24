module.exports = (sequelize, type) => {
    let city = sequelize.define("city", {
        city_id: {
            type: type.INTEGER,
            primaryKey: true
        },
        name: type.STRING,
        country: type.STRING,
        code: type.STRING,

        country_id: type.INTEGER,
        country_code: type.STRING,
        status: type.INTEGER
    }, {
        freezeTableName: true,
        timestamps: false
    });
    city.removeAttribute('id');
    return city;
}
