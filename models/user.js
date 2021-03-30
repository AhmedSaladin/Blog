const { DataTypes } = require('Sequelize');
const sequelize = require('../config/db');

const User = sequelize.define('users', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    first_name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    last_name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    pic: {
        type: DataTypes.STRING,
        defaultValue: 'https://i.kym-cdn.com/entries/icons/original/000/034/213/cover2.jpg'
    },
    birth_date: {
        type: DataTypes.DATEONLY,
        allowNull: false
    }
});

module.exports = User;