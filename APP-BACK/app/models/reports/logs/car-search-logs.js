const moment = require('moment');

module.exports = (sequilize, type) => {
  const carSearchLogModel = sequilize.define('car_search_logs', {
    car_search_logs_id: {
      type: type.INTEGER,
      primaryKey: true,
    },
    user_id: type.INTEGER,
    agent_code: type.STRING,
    organisation_id: type.INTEGER,
    browserIp: type.STRING,
    browserAgent: type.STRING,
    startDate: type.DATE,
    startTime: type.DATE,
    endDate: type.DATE,
    endTime: type.DATE,
    tripType: type.STRING,
    pickUp: type.STRING,
    dropOff: type.STRING,
    pickUpLocation: type.STRING,
    dropOffLocation: type.STRING,
    adultCount: type.INTEGER,
    childCount: type.INTEGER,
    childAges: type.INTEGER,
    country: type.STRING,
    currency: type.STRING,
    responseKey: type.STRING,
    driversAge: type.INTEGER,
    vehicleType: type.STRING,
    transmissionType: type.STRING,
    created_at: type.DATE,
  }, {
    freezeTableName: true,
    // subQuery: false,
    timestamps: false,
    // underscored: true,
  });
  carSearchLogModel.removeAttribute('id');
  return carSearchLogModel;
};
