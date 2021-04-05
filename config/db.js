require('dotenv').config();
const { Sequelize } = require('sequelize');
const logger = require('../app/logging');

const sequelize = new Sequelize(process.env.DATABASE_NAME, process.env.USER_NAME, process.env.PASSWORD, {
    host: process.env.HOST,
    dialect: process.env.DATABASE_TYPE,
    logging: false
});
sequelize.authenticate().then(() => logger.info('Database is connected.'))
sequelize.sync();
module.exports = sequelize;