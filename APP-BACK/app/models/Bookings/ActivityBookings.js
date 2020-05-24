var moment = require('moment');

module.exports = (sequelize, type) => {
  let activityBookingsModel = sequelize.define('bookings_activity', {
    booking_activity_id: {
      type: type.INTEGER,
      primaryKey: true
    },
    booking_id: type.INTEGER,
    supplier_id: type.INTEGER,
    // flight_id: type.STRING,
    booking_status: type.STRING,
    status: type.INTEGER,
    created: type.DATE,
    // pnr_no: type.STRING,
    voucher_no: type.STRING,
    country: type.STRING,
    destination: type.STRING,
    start_date: type.DATE,
    end_date: type.DATE,
    days: type.INTEGER,
    adult: type.INTEGER,
    child: type.INTEGER,
    room: type.INTEGER,
    room_info: type.TEXT,
    supplier_code: type.STRING,
    booking_code: type.STRING,
    reference_number: type.STRING,
    search_criteria: type.TEXT,
    response_key: type.STRING,
    booking_currency: type.STRING,
    booking_amount: type.STRING,
    supplier_currency: type.STRING,
    supplier_price: type.STRING,
    markup_price: type.STRING,
    markups: type.TEXT,
    cancel_supplier_price: type.STRING,
    cancel_markup_price: type.STRING,
    cancelation_dead_line: type.TEXT
  }, {
    freezeTableName: true,
    // subQuery: false,
    timestamps: false,
    underscored: true,
  });
  return activityBookingsModel;
};
