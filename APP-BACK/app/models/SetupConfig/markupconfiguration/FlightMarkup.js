var moment = require('moment');

module.exports = (sequelize, type) => {
    let flightMarkupModel = sequelize.define('markup_flight', {
        markup_flight_id: {
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
        },
        itinerary_type:{ type: String },


        calculation_basis:{ type: String },
        calculation_type:{
            type: type.ENUM,
            values: ['far_base', 'far_total']
        },
        destination_airport:{ type: String },
        marketing_carriers:{ type: String },

        // markup_type:{
        //     type: type.ENUM,
        //     values: []
        // },
        orgin_airport:{ type: String },
        pax_types:{ type: String },
        service_class:{ type: String },
  

  }, {
    freezeTableName: true,
    // subQuery: false,
    timestamps: false,
    // underscored: true,
  });

  return flightMarkupModel;
};