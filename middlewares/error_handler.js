const logger = require('../app/logging');

module.exports = (err, req, res, next) => {
    logger.error(err, err.toString());
    const joi = err.toString().split(':')[0];
    if (joi == 'ValidationError') {
        res.status(400).send(err.toString());
    } else {
        res.status(500);
        res.send({ message: 'Some problem has been occurs have a nice day.' });
    }
}

