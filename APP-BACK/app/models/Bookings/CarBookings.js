var moment = require('moment');

module.exports = (sequelize, type) => {
  let carBookingsModel = sequelize.define('bookings_car', {
    bookings_car_id: {
      type: type.INTEGER,
      primaryKey: true
    },
    booking_id: type.INTEGER,
    supplier_id: type.INTEGER,
    hotel_id: type.STRING,
    booking_status: {
      type: type.ENUM,
      values: ['paid', 'cancel', 'hold', 'voucher', 'draft']
    },
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
    hotel_name: type.STRING,
    hotel_rating: type.INTEGER,
    hotel_address: type.TEXT,
    hotel_phone: type.STRING,
    supplier_code: type.STRING,
    booking_code: type.STRING,
    reference_number: type.STRING,
    search_criteria: type.TEXT,
    response_key: type.STRING,
    hotel: type.STRING,
    booking_currency: type.STRING,
    booking_amount: type.STRING,
    supplier_price: type.STRING,
    markup_price: type.STRING,
    markups: type.TEXT,
    cancel_supplier_price: type.STRING,
    cancel_markup_price: type.STRING,
    cancelation_dead_line: type.TEXT,
    status: type.INTEGER,
    created: type.DATE
  }, {
    freezeTableName: true,
    // subQuery: false,
    timestamps: false,
    underscored: true,
  });
  return carBookingsModel;
};
