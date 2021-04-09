const logger = require('./app/logging');
const express = require('express');
const app = express();

require('./app/logging');
require('./config/db');
require('./app/routes')(app);



const PORT = process.env.PORT || 3000;
const server = app.listen(PORT, () => { logger.info(`server is  running on port ${PORT}... `); });

module.exports = server;