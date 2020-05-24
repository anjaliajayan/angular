module.exports = (sequelize, type) => {
    var saleModel = sequelize.define('sale', {
        sale_id: {
            type: type.INTEGER,
            primaryKey: true
        },
        organisation_id: type.INTEGER,
        users_id: type.INTEGER,
        shopping_code: type.INTEGER,
        name: type.STRING,
        created_by_organisation: type.INTEGER,
        is_active: type.INTEGER,
        is_hotel: type.INTEGER,
        is_flight: type.INTEGER,

        is_holidays: type.INTEGER,
        is_activities: type.INTEGER,
        is_car: type.INTEGER,
        is_transfers: type.INTEGER,
        is_cruises: type.INTEGER,
        is_visa: type.INTEGER,
        is_insurance: type.INTEGER,

        status: type.INTEGER,
        created: type.DATE,
        start_date: type.DATE,
        end_date: type.DATE,

        is_stop_sale: type.INTEGER,
        is_free_sale: type.INTEGER,
        is_all_agent: type.INTEGER,
        preference: type.INTEGER
        
    }, {
        freezeTableName: true,
        // subQuery: false,
        timestamps: false,
        // underscored: true,
    });
    saleModel.removeAttribute('id');
    return saleModel;
};
