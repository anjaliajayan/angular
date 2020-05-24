var momentClass = require('moment');

module.exports = (sequelizeInstance, sequelizeClass) => {
  let currencyDecimalModel = sequelizeInstance.define('currency_decimal', {
    currency_id: {
      type: sequelizeClass.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    code: {
      type: sequelizeClass.STRING(3),
      allowNull: false
    },
    decimal: {
      type: sequelizeClass.INTEGER.UNSIGNED,
      allowNull: false
    },
    updatedAt: {
      type: sequelizeClass.DATE,
      allowNull: false,
      field: 'updated_at',
      comment: 'Updated At',
      get() {
        return momentClass(this.getDataValue('updated_at')).format('DD/MM/YYYY h:mm:ss');
      }
    }
  }, {
    freezeTableName: true,
    timestamps: false,
    underscored: true
  });
  return currencyDecimalModel;
};