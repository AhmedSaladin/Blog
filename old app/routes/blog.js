const express = require('express');
const Blog = require('../controllers/blog');
const router = express.Router();
const { authorized } = require('../middlewares/is_auth');

router
    .get("/", Blog.home)

    .get("/blog/:id", Blog.single_article)

    .get('/myarticles', authorized, Blog.My_articles)

    .post("/blog", authorized, Blog.new_article)

    .put("/blog/:id", authorized, Blog.update_article)

    .delete("/blog/:id", authorized, Blog.delete_article);

module.exports = router;