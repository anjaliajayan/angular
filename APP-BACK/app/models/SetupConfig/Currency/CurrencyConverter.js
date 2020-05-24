let moment = require("moment");


module.exports = (sequelize, type) => {
    let CurrencyConverter = sequelize.define("currency_converter", {
        converter_id: {
            type: type.INTEGER,
            primaryKey: true
        },
        organisation_id: type.INTEGER,
        currency: type.STRING,
        status: type.INTEGER,
        created: {
            type: type.DATE,
            get() {
                return moment(this.getDataValue('created')).format('YYYY-MM-DD HH:mm:ss');
            },
        },
        is_active: type.INTEGER
    }, {
        freezeTableName: true,
        timestamps: false
    });
    CurrencyConverter.removeAttribute('id');
    return CurrencyConverter;
}
