var moment = require('moment');

module.exports = (sequelize, type) => {
    let commissionModel = sequelize.define('commission', {
        commission_id: {
            type: type.INTEGER,
            primaryKey: true
        },
        airline: type.STRING,
        trip_type: type.STRING,
        code_type: type.STRING,
        cabin_class: type.STRING,
        orgin: type.TEXT,
        destination: type.TEXT,
        // commission: type.STRING,
        rbd: type.TEXT,
        sale_start_date: type.TEXT,
        sale_end_date: type.TEXT,
        travel_start_date: type.TEXT,
        travel_end_date: type.TEXT,
        created: type.DATE,
        created_by: type.INTEGER,
        is_active: {
            type: type.BOOLEAN,
            defaultValue: true
        },
        is_deleted: {
            type: type.BOOLEAN,
            defaultValue: false
        },
        rbd_commission: type.TEXT,
        supplier: type.STRING
  }, {
    freezeTableName: true,
    // subQuery: false,
    timestamps: false,
    // underscored: true,
  });
  return commissionModel;
};
