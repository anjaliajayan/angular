var moment = require('moment');

module.exports = (sequelize, sequelizeClass) => {
    let bookingsModel = sequelize.define('bookings', {
    agent_code: sequelizeClass.STRING,
    booking_id: {
        type: sequelizeClass.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    transaction_id: sequelizeClass.INTEGER,
    trip_id: sequelizeClass.INTEGER,
    users_id: sequelizeClass.INTEGER,
    booking_email: sequelizeClass.STRING,
    booking_comments: sequelizeClass.TEXT,
    booking_currency: sequelizeClass.STRING,
    booking_status: {
        type: sequelizeClass.ENUM,
        values: ['confirm','cancel','partial','draft','hold','void','refund','failed']
    },
    agent_reference: sequelizeClass.STRING,
    amount: sequelizeClass.STRING,
    payment_type: sequelizeClass.STRING,
    supplier_price: sequelizeClass.STRING,
    markup_price: sequelizeClass.STRING,
    has_hotel: sequelizeClass.STRING,
    has_flight: sequelizeClass.STRING,
    created: sequelizeClass.DATE,
    status: sequelizeClass.INTEGER,
    has_activities: sequelizeClass.BOOLEAN,
    has_car: sequelizeClass.BOOLEAN,
    has_insurance: sequelizeClass.BOOLEAN,
    has_transfers: sequelizeClass.BOOLEAN,
    has_marhaba: sequelizeClass.BOOLEAN,
    has_cruises: sequelizeClass.BOOLEAN,
    echoToken: sequelizeClass.STRING,
    has_holiday: sequelizeClass.BOOLEAN,
    has_visa: sequelizeClass.BOOLEAN,
    deviceId: sequelizeClass.INTEGER,
    appliedCommissionTax: sequelizeClass.STRING,
    appliedTotalTax: sequelizeClass.STRING,
    supplierTax: sequelizeClass.STRING,
    remarks: sequelizeClass.STRING,
    user_currency: sequelizeClass.STRING,
    curnversion_value: sequelizeClass.STRING,
    supplier: sequelizeClass.STRING,
    service_charge_cancel: {
      type: sequelizeClass.INTEGER.UNSIGNED,
      allowNull: false,
      field: 'service_charge_cancel',
      comment: 'ServiceChargeCancel'
    },
    service_charge_create: {
      type: sequelizeClass.INTEGER.UNSIGNED,
      allowNull: false,
      field: 'service_charge_create',
      comment: 'ServiceChargeCreate'
    },
    service_charge_refund: {
      type: sequelizeClass.INTEGER.UNSIGNED,
      allowNull: false,
      field: 'service_charge_refund',
      comment: 'ServiceChargeRefund'
    }
  }, {
    freezeTableName: true,
    // subQuery: false,
    timestamps: false,
    underscored: false,
  });
  return bookingsModel;
};
