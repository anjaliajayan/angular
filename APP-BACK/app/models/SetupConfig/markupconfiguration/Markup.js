var moment = require('moment');

module.exports = (sequelize, type) => {
    let markupModel = sequelize.define('markup', {
        markup_id: {
            type: type.INTEGER,
            primaryKey: true
        },
        supplier_id:{
            type: type.INTEGER
        },
        organisation_id:{
            type: type.INTEGER
        },
        sale_id:{
            type: type.INTEGER
        },
        title:{
            type: type.STRING
        },
        created_by: type.INTEGER,
        created: type.DATE,
        status: type.INTEGER,
        is_active: {
            type: type.INTEGER,
            defaultValue: 1
        },
        priority: {
            type: type.INTEGER,
            defaultValue: 1
        }

  }, {
    freezeTableName: true,
    // subQuery: false,
    timestamps: false,
    // underscored: true,
  });
  markupModel.associate = function(models) {
    markupModel.belongsTo(models.users, {foreignKey: 'created_by', as: 'user'})
  };
  return markupModel;
};