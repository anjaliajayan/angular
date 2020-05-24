module.exports = (sequelize, type) => {
    let sessionTemplate = sequelize.define('cake_sessions', {
        id: {
            type: type.STRING,
            primaryKey: true
          },
          data: type.STRING,
          expires: type.INTEGER
    }
    , {
        timestamps: false
    });
    return sessionTemplate;

}