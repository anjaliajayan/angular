var moment = require('moment');

module.exports = (sequelize, type) => {
    let activityMarkupModel = sequelize.define('markup_activities', {
        markup_activitie_id: {
            type: type.INTEGER,
            primaryKey: true
        },
        markup_id: {
            type: type.INTEGER,
        },

        markup:{
            type: type.INTEGER
        },
        markup_mode:{
            type: type.ENUM,
            values: ['by_percentage', 'by_amount']
        },
        min_markup:{
            type: type.INTEGER
        },
        max_markup:{
            type: type.INTEGER
        }
        

  }, {
    freezeTableName: true,
    // subQuery: false,
    timestamps: false,
    // underscored: true,
  });

  return activityMarkupModel;
};