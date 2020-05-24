var moment = require('moment');

module.exports = (sequelize, type) => {
  var userModel = sequelize.define('users', {
    agent: type.BOOLEAN,
    admin: type.BOOLEAN,
    corporate: type.BOOLEAN,
    users_id: {
      type: type.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    username: type.STRING,
    agent_code: type.INTEGER,
    profile_image: type.STRING,
    locale: {
      type: type.STRING,
      defaultValue: 'en'
    },
    email: type.STRING,
    password: type.STRING,
    security_answer: type.STRING,
    rememberme_token: type.STRING,
    first_name: type.STRING,
    group_id: type.INTEGER,
    modified: type.DATE,
    last_name: type.STRING,
    sex: type.STRING,
    mobile: type.STRING,
    country_id: type.INTEGER,
    is_banned: type.BOOLEAN,
    is_validated: type.BOOLEAN,
    is_login: type.BOOLEAN,
    created: type.DATE,
    status: type.BOOLEAN,
    address_1: type.STRING,
    address_2: type.STRING,
    code: type.STRING,
    is_active: type.INTEGER,
    security_id: type.INTEGER,
    salute: {
      type: type.ENUM,
      //values: ['Mr.','Master','Mrs.','Miss','Ms.','Dr.']
      values: type.STRING
    },
    role_id: type.INTEGER,
    organisation_id: type.INTEGER,
    api_key: type.STRING,
    show_nationality: type.BOOLEAN,
    cost_center: type.STRING,
    readonly: type.BOOLEAN,
    menu_permission: type.TEXT,
    initial: type.STRING,
    numberOfUsers: type.INTEGER,
    phone_code: type.STRING,
    agent_name: type.STRING,
    target_amount: type.TEXT,
    branch_id: type.INTEGER,
  }, {
    freezeTableName: true,
    // subQuery: false,
    timestamps: false,
    // underscored: true,
  });
  userModel.removeAttribute('id');
  return userModel;
};
