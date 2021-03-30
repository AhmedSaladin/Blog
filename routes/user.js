const express = require('express');
const User = require('../controllers/user');
const router = express.Router();
const { authorized } = require('../middlewares/is_auth');

router
    .post('/sign_up', User.sign_up)
    .post('/sign_in', User.sign_in)
    .get('/profile', authorized, User.profile)
    .put('/profile', authorized, User.update_profile)
module.exports = router;