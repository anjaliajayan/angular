module.exports = (sequilize, type) => {
  var modelOrganisationCorporate = sequilize.define('organisation_corporate', {
    corporate_id: {
      type: type.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    organisation_id: type.INTEGER,
    start_date: type.DATE,
    end_date: type.DATE,
    days: type.INTEGER,
    phonecode: type.STRING,
    phonenumber: type.STRING,
    tourcode: type.STRING,
    profileimg: type.STRING,
    is_active: type.BOOLEAN,
    status: type.INTEGER,
    currency_id: type.INTEGER,
    credit_limit: type.INTEGER,
    issue_ticket: type.STRING,
    is_credit_limit: type.INTEGER,
    travel_arranger: type.STRING,
    vat_number: type.STRING
  }, {
    freezeTableName: true,
    // subQuery: false,
    timestamps: false
    // underscored: true,
  });
  modelOrganisationCorporate.removeAttribute('id');
  return modelOrganisationCorporate;
}
