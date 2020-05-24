var moment = require('moment');
const Sequelize = require('sequelize');

// const Locales = Sequelize.import(__dirname + './models/Locale')
module.exports = (sequelize, type) => {
    return sequelize.define('PSM', {
        id: {
          type: type.INTEGER,
          primaryKey: true,
          autoIncrement: true
        },
        filePath: type.STRING,
        createdAt:{
            type: type.DATE,
            //note here this is the guy that you are looking for                   
             get() {
             return moment(this.getDataValue('createdAt')).format('DD/MM/YYYY h:mm:ss');
            },
         },
         updatedAt: {
            type: type.DATE,
            get() {
                return moment(this.getDataValue('updatedAt')).format('DD/MM/YYYY h:mm:ss');
            },
        }
    })
}
