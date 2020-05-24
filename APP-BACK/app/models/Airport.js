module.exports = (sequelize, type) => {
    let approvalTemplate = sequelize.define("airport", {
        AirportID: {
            type: type.INTEGER,
            primaryKey: true
        },
        AirportCode: type.STRING,
        AirportName: type.STRING,
        Latitude: type.STRING,
        Longitude: type.STRING,
        
        MainCityID: type.INTEGER,
        CountryCode: type.STRING,
        TimeStamp: type.DATE,
    }, {
        freezeTableName: true,
        timestamps: false
    });
    return approvalTemplate;
}
