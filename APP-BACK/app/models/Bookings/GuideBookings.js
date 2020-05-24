var moment = require('moment');

module.exports = (sequelize, type) => {
  let guideBookingsModel = sequelize.define('bookings_guide', {

    booking_guide_id: {
      type: type.INTEGER,
      primaryKey: true
    },
    agent_code: type.INTEGER,
    guide_type: type.INTEGER,
    photo_doc: type.TEXT,
    passport_doc: type.TEXT,
    booking_status: {
      type: type.ENUM,
      values: ['submited', 'processing', 'hold', 'processed', 'paid', 'cancel', 'voucher', 'draft']
    },
    trip_id: type.STRING,
    user_id: type.INTEGER,
    booking_id: type.INTEGER,
    supplier_id: type.INTEGER,
    guide_id: type.STRING,
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
    guide_name: type.STRING,
    guide_rating: type.INTEGER,
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
    admin_photo_doc: type.TEXT,
    admin_passport_doc: type.TEXT,
    status: type.INTEGER,
    created: type.DATE
  }, {
    freezeTableName: true,
    // subQuery: false,
    timestamps: false,
    underscored: true,
  });
  return guideBookingsModel;
};
