var moment = require('moment');

module.exports = (sequelize, type) => {
    let currencyModel = sequelize.define('currency', {
        currency_id: {
            type: type.INTEGER,
            primaryKey: true
        },
        code: type.STRING,
        name: type.STRING,
        symbol: type.STRING,
        country_id: type.INTEGER,
        rate: type.DOUBLE,
        status: {
            type: type.BOOLEAN,
            defaultValue: true
        }
  }, {
    freezeTableName: true,
    // subQuery: false,
    timestamps: false,
    // underscored: true,
  });
  return currencyModel;
};
