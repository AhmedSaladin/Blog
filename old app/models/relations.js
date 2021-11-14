const User = require('./user');
const Blog = require('./blog');
const Liked_Blog = require('./likedBlog');

Liked_Blog.belongsTo(User, {
    foreignKey: {
        name: 'userId',
        allowNull: false,
        onDelete: 'CASCADE',
        hooks: true,
        constarin: true
    },
});

Liked_Blog.belongsTo(Blog, {
    foreignKey: {
        name: 'blogId',
        allowNull: false,
        onDelete: 'CASCADE',
        hooks: true,
        constarin: true
    },
});

Blog.belongsTo(User, {
    foreignKey: {
        name: 'author',
        allowNull: false,
        onDelete: 'CASCADE',
        hooks: true,
        constarin: true
    },
});
