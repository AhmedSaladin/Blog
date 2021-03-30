const express = require('express');
const blog_route = require('../routes/blog');
const user_route = require('../routes/user');
const list_route = require('../routes/saved_list');
const error = require('../middlewares/error_handler');


module.exports = function (server) {
    server.use(express.json());
    server.use(user_route);
    server.use(blog_route);
    server.use(list_route);
    server.use(error);
}