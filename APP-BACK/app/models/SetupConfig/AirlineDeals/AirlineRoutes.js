module.exports = (sequelize, type) => {
  let airlineRoutesModel = sequelize.define('airline_routes', {
    routes_id: {
      type: type.INTEGER,
      primaryKey: true
    },
    organisation_id: type.INTEGER,
    supplier: type.STRING,
    origin: type.STRING,
    destination: type.STRING,
    routes: type.STRING,
    trip_type: type.STRING,
    created: type.DATE,
    created_by: type.INTEGER,
    is_active: {
      type: type.BOOLEAN,
      defaultValue: true
    },
    is_deleted: {
      type: type.BOOLEAN,
      defaultValue: false
    },
  }, {
    freezeTableName: true,
    timestamps: false,
  });
  return airlineRoutesModel;
};