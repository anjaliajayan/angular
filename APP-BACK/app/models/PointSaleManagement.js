var moment = require('moment');

module.exports = (sequelize, type) => {
    var organizationModel = sequelize.define('organisation', {
        contact_person_email: type.STRING,
        organisation_id: type.INTEGER,
        parent_id: type.INTEGER,
        agent_code: type.INTEGER,
        name: type.STRING,
        agent: type.STRING,
        api_key: type.STRING,
        secret_key: type.STRING,
        email: type.STRING,
        contact: type.STRING,
        country_id: type.INTEGER,
        currency_id: type.INTEGER,
        corporate_type: type.STRING,
        identification_id: type.INTEGER,
        contact_mobile_number: type.STRING,
        contact_person_name: type.STRING,
        timezone_id: type.INTEGER,
        is_shareable: type.INTEGER,
        is_supervision: type.INTEGER,
        schema: type.INTEGER,
        address_1: type.STRING,
        address_2: type.STRING,
        city_id: type.INTEGER,
        state_province: type.STRING,
        zip: type.STRING,
        image_file4: type.TEXT,
        image_file3: type.TEXT,
        image_file2: type.TEXT,
        image_file1: type.TEXT,
        contact_country_id: type.INTEGER,
        associated_sales_person: type.STRING,
        credit_limit: type.INTEGER,
        business_id: type.STRING,
        associated_office: type.STRING,
        associated_category: type.INTEGER,
        branch: type.STRING,
        member_of: type.STRING,
        member_number: type.STRING,
        bookings_month: type.STRING,
        revenue_month: type.STRING,
        image_website: type.TEXT,
        image_invoice: type.TEXT,
        image_email: type.TEXT,
        terms_conditions: type.TEXT,
        organisation_stats: type.TEXT,
        is_active: type.INTEGER,
        status: type.INTEGER,
        active_suppliers: type.TEXT,
        domestic_city: type.STRING,
        approval_levels: type.TEXT,
        approval_managers: type.TEXT,
        numberOfUsers: type.INTEGER,
        payment_gateway: type.INTEGER,
        fax_no: type.STRING,
        domain_url: type.STRING,
        organisation_theme: type.STRING,
        theme_settings: type.TEXT,
        back_office_id: type.STRING,
        back_office_name:
        {
            type: type.ENUM,
            values: ['calico'],
        },
        queue_service: {
            type: type.TEXT,
        },
        created: {
            type: type.DATE,
            get() {
                return moment(this.getDataValue('created')).format('DD/MM/YYYY h:mm:ss');
            },
        },
        hierarchy_id: type.STRING
    }, {
            freezeTableName: true,
            // subQuery: false,
            timestamps: false,
            // underscored: true,
        }
    );
    organizationModel.removeAttribute('id');
    return organizationModel;
};
