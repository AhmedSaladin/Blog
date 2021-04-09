const logger = require('../app/logging');

module.exports = (err, req, res, next) => {
    logger.error(err, err.toString());
    const not_found = err.toString().split(':')[1];
    const joi = err.toString().split(':')[0];
    if (not_found == ' This article not found') {
        res.status(404).send({ message: not_found });
    }
    else if (not_found == ' No authorization header found') {
        res.status(401).send({ message: not_found });
    }
    else if (joi == 'ValidationError') {
        res.status(406).send({ message: err.toString() });
    } else {
        res.status(500);
        res.send({ message: 'Some problem has been occurs have a nice day.' });
    }
}

