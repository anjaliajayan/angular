var moment = require('moment');

module.exports = (sequelize, type) => {
    let suppliersModel = sequelize.define('supplier', {
    supplier_id: {
        type: type.INTEGER,
        primaryKey: true
    },
    organisation_id: type.INTEGER,
    supplier_code: type.STRING,
    is_active: type.BOOLEAN,
    status: {
        type: type.BOOLEAN,
        defaultValue: false
    },
    country_id: type.INTEGER,
    currency_id: type.INTEGER,
    configuration: type.TEXT,
    name: type.STRING,
    name_ar: type.STRING,
    email: type.STRING,
    contact: type.STRING,
    business_id: type.INTEGER,
    username: type.STRING,
    password: type.STRING,
    website: type.STRING,
    notes: type.TEXT,
    about: type.TEXT,
    timezone_id: type.INTEGER,
    credit_limit: type.STRING,
    credit_days: {
        type: type.BOOLEAN,
        defaultValue: false
    },
    is_hotel: {
        type: type.BOOLEAN,
        defaultValue: false
    },
    is_flight: {
        type: type.BOOLEAN,
        defaultValue: false
    },
    is_holidays: {
        type: type.BOOLEAN,
        defaultValue: false
    },
    is_activities: {
        type: type.BOOLEAN,
        defaultValue: false
    },
    is_car: {
        type: type.BOOLEAN,
        defaultValue: false
    },
    is_transfers: {
        type: type.BOOLEAN,
        defaultValue: false
    },
    is_cruises: {
        type: type.BOOLEAN,
        defaultValue: false
    },
    is_visa: {
        type: type.BOOLEAN,
        defaultValue: false
    },
    is_insurance: {
        type: type.BOOLEAN,
        defaultValue: false
    },
    additional_contact: type.TEXT,
    settings: type.TEXT,
    created: type.DATE,
    api_key: type.STRING,
    short_code: type.STRING,
    supplier_class: type.TEXT,
    Gds_code: type.STRING,
    reissue: {
        type: type.BOOLEAN,
        defaultValue: false
    },
    revalidate: {
        type: type.BOOLEAN,
        defaultValue: false
    },
    refund: {
        type: type.BOOLEAN,
        defaultValue: false
    },
    refund_same: {
        type: type.BOOLEAN,
        defaultValue: false
    },
    void_all: {
        type: type.BOOLEAN,
        defaultValue: false
    },
    void_single: {
        type: type.BOOLEAN,
        defaultValue: false
    },
    split: {
        type: type.BOOLEAN,
        defaultValue: false
    },
    reterive: {
        type: type.BOOLEAN,
        defaultValue: false
    },
    cancel: {
        type: type.BOOLEAN,
        defaultValue: false
    },
    hold: {
        type: type.BOOLEAN,
        defaultValue: true
    },
    free_service: {
        type: type.BOOLEAN,
        defaultValue: false
    },
    paid_service: {
        type: type.BOOLEAN,
        defaultValue: false
    },
    seats: {
        type: type.BOOLEAN,
        defaultValue: false
    },
    fare_rules: {
        type: type.BOOLEAN,
        defaultValue: true
    },
    is_directconnect: {
        type: type.BOOLEAN,
        defaultValue: false
    },
    queue_management: {
        type: type.INTEGER,
        defaultValue: 0
    },
    iata_card: {
        type: type.BOOLEAN,
        defaultValue: false
    },
    seats_after: {
        type: type.BOOLEAN,
        defaultValue: false
    },
    service_after: {
        type: type.BOOLEAN,
        defaultValue: false
    }
  }, {
    freezeTableName: true,
    // subQuery: false,
    timestamps: false,
    // underscored: true,
  });
  return suppliersModel;
};
