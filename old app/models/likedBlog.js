const { DataTypes } = require('Sequelize');
const sequelize = require('../config/db');

const liked = sequelize.define('liked_blogs', {
    userId: {
        type: DataTypes.INTEGER,
    },
    blogId: {
        type: DataTypes.INTEGER,
    },
})

module.exports = liked;

