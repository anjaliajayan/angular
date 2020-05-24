var moment = require('moment');

module.exports = (sequelize, type) => {
    let roleModel = sequelize.define('roles', {
        role_id: {
            type: type.INTEGER,
            primaryKey: true
        },
        name: type.STRING,
        code: type.STRING,
        permissions: type.TEXT,
        created_by: type.INTEGER,
        created: type.DATE,
        is_active: {
            type: type.BOOLEAN,
            defaultValue: true
        },
        status: {
            type: type.BOOLEAN,
            defaultValue: false
        }
  }, {
    freezeTableName: true,
    // subQuery: false,
    timestamps: false,
    // underscored: true,
  });
  return roleModel;
};
