var moment = require('moment');

module.exports = (sequelize, type) => {
    let templatesModel = sequelize.define('email_templates', {
        email_template_id: {
            type: type.INTEGER,
            primaryKey: true
        },
        email_template_name: type.STRING,
        email_template_function: type.STRING,
        status: type.BOOLEAN,
        user_id: type.INTEGER,
        email_template_description: type.TEXT,
        created_at: type.DATE,
        updated_at: type.DATE,
        is_deleted: {
            type: type.BOOLEAN,
            defaultValue: false
        }
  }, {
    freezeTableName: true,
    // subQuery: false,
    timestamps: false,
    // underscored: true,
  });
  return templatesModel;
};
