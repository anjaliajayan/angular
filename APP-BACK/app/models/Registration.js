module.exports = (sequelize, type) => {
    var registrationModel = sequelize.define('registration', {
        registration_id: {
            type: type.INTEGER,
            primary: true
        },
        company_name: type.STRING,
        company_reg_no: type.STRING,
        iata_status: type.INTEGER,
        iata_number: type.STRING,
        zip_code: type.STRING,
        company_address: type.STRING,
        company_mobile: type.STRING,
        company_phone: type.STRING,
        nature_of_business: type.STRING,
        country_id: type.STRING,
        city_id: type.STRING,
        currency_id: type.STRING,
        time_zone: type.STRING,
        website: type.STRING,
        logo: type.STRING,
        show_code: type.STRING,
        first_name: type.STRING,
        last_name: type.STRING,
        customer_email: type.STRING,
        designation: type.STRING,
        username: type.STRING,
        password: type.STRING,
        contact_accounts_name: type.STRING,
        contact_operations_name: type.STRING,
        contact_managment_name: type.STRING,
        contact_accounts_email: type.STRING,
        contact_operations_email: type.STRING,
        contact_managment_email: type.STRING,
        contact_accounts_phone: type.STRING,
        contact_operations_phone: type.STRING,
        contact_managment_phone: type.STRING,
        is_delete: type.STRING
    }, {
        freezeTableName: true,
        timestamps: false,
    }
    );
    registrationModel.removeAttribute('id');
    return registrationModel;
};
