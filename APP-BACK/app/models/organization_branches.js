module.exports = (sequilize, type) => {
  var organizationBranchesModel = sequilize.define('organisation_branches', {
    id: {
      type: type.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    organisation_id: type.INTEGER,
    name: type.STRING,
    email: type.STRING,
    branch_code: type.STRING,
    address_1: type.STRING,
    address_2: type.STRING,
    created_at: type.DATE,
    status: type.STRING,
  }, {
    freezeTableName: true,
    // subQuery: false,
    timestamps: false,
    // underscored: true,
  });
  return organizationBranchesModel;
}
