var moment = require('moment');

module.exports = (sequelize, type) => {
    let groupProfileModel = sequelize.define('group_profile', {
        group_profile_id: type.INTEGER,
        organisation_id: type.INTEGER,
        group_name: type.STRING,
        group_description: type.STRING,
        group_index: type.STRING,
        languages: type.STRING,
        number: type.TEXT,
        email: type.TEXT,
        address: type.TEXT,
        responsible_office: type.STRING,
        department_contact_name: type.STRING,
        agent_contact_name: type.STRING,
        member1: type.BOOLEAN,
        group_members: type.TEXT,
        remarks: type.TEXT,
        profile_notes: type.TEXT,
        priority_lines1: type.TEXT,
        priority_lines2: type.TEXT,
        follow_up: type.TEXT,
        created: {
            type: type.DATE,
            get() { return moment(this.getDataValue('created')).format('DD/MM/YYYY h:mm:ss'); },
        }
    }, {
            freezeTableName: true,
            // subQuery: false,
            timestamps: false,
            // underscored: true,
        });
    return groupProfileModel;
};
