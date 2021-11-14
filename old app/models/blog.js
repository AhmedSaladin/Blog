const { DataTypes } = require('Sequelize');
const sequelize = require('../config/db');

const Blog = sequelize.define('blogs', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
        unique: true
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    article: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
});

module.exports = Blog;