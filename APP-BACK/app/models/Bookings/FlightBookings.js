var moment = require('moment');

module.exports = (sequelize, type) => {
  let flightBookingsModel = sequelize.define('bookings_flight', {
    booking_flight_id: {
      type: type.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    booking_id: type.INTEGER,
    supplier_id: type.INTEGER,
    flight_id: type.STRING,
    booking_status: {
      type: type.ENUM,
      values: ['confirm', 'cancel', 'partial', 'draft', 'hold', 'void', 'refund', 'failed']
    },
    status: type.INTEGER,
    created: type.DATE,
    pnr_no: type.STRING,
    TicketDocInfos: type.TEXT,
    TicketContact: type.TEXT,
    serviseList: type.TEXT,
    markupPrice: type.STRING,
    supplierPrice: type.STRING,
    airline_pnr_no: type.STRING,
    phone_contacts: type.STRING,
    markups: type.TEXT,
    airDocIssue: type.TEXT,
    flightPrice: type.TEXT,
    fareRules: type.TEXT,
    cancel_supplier_price: type.FLOAT,
    refund_service_amount: type.FLOAT,
    refund_penalty_amount: type.FLOAT,
  }, {
      freezeTableName: true,
      // subQuery: false,
      timestamps: false,
      underscored: false,
    });
  return flightBookingsModel;
};
