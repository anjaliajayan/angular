var moment = require('moment');

module.exports = (sequelize, type) => {
    let contentMngModel = sequelize.define('widget_hotel', {
        widget_hotel_id: {
            type: type.INTEGER,
            primaryKey: true
        },
        hotel_name: type.STRING,
        hotel_id: type.INTEGER,
        supplier_code: type.STRING,
        room_description: type.STRING,
        image_url: type.STRING,
        markup_price: type.DOUBLE,
        supplier_price: type.DOUBLE,
        search_criteria: type.TEXT,
        created_at: type.DATE,
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
  return contentMngModel;
};
