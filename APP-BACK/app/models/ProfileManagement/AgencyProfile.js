var moment = require('moment');

module.exports = (sequelize, type) => {
  let agencyProfileModel = sequelize.define('agency_profile', {
    agency_profile_id: type.INTEGER,
    organisation_id: type.INTEGER,
    responsible_office: type.STRING,
    department_contact_name: type.STRING,
    agent_contact_name: type.STRING,
    number: type.TEXT,
    email: type.TEXT,
    address: type.TEXT,
    bank_accounts: type.TEXT,
    direct_debit_authorized: type.BOOLEAN,
    forms_of_payment: type.TEXT,
    fare_price_override: type.TEXT,
    endorsements: type.TEXT,
    discounts: type.INTEGER,
    commissions: type.TEXT,
    accounting: type.TEXT,
    remarks: type.TEXT,
    profile_notes: type.TEXT,
    priority_lines1: type.TEXT,
    priority_lines2: type.TEXT,
    follow_up: type.TEXT,
    created: {
      type: type.DATE,
      get() { return moment(this.getDataValue('created')).format('DD/MM/YYYY h:mm:ss'); },
    }
  }, {
      freezeTableName: true,
      // subQuery: false,
      timestamps: false,
      // underscored: true,
    });
  agencyProfileModel.removeAttribute('id');
  //return userModel;
  return agencyProfileModel;
};
