require('dotenv').config();
const jwt = require('jsonwebtoken');


exports.authorized = (req, res, next) => {
    try {
        const authorization = req.headers.authorization;
        if (!authorization) {
            throw Error('No authorization header found');
        }
        const tokken = authorization.split(' ')[1];
        const user = jwt.verify(tokken, process.env.SECRET);
        req.user = user.id;
        next()
    } catch (err) {
        next(err);
    }
}