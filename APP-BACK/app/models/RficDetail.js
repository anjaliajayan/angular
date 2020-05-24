module.exports = (sequelize, type) => {
    let rficDetail = sequelize.define("rfic_details", {
        rfic_id: {
            type: type.INTEGER,
            primaryKey: true
        },
        sub_code: type.STRING,
        group: type.STRING,
        sub_group: type.STRING,
        description_1: type.STRING,
        description_2: type.STRING,
        commercial_name: type.STRING,
        rfic: type.STRING
    }, {
        freezeTableName: true,
        timestamps: false
    });
    return rficDetail;
}
