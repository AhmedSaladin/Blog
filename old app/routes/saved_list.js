const express = require('express');
const router = express.Router();
const { authorized } = require('../middlewares/is_auth');
const List = require('../controllers/saved_list')

router
    .get('/list', authorized, List.saved_article_list)

    .post("/blog/:id", authorized, List.save_article_to_list)

    .delete("/list/:id", authorized, List.delete_saved_article);

module.exports = router