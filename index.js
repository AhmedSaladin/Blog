const logger = require('./app/logging');
const express = require('express');
const server = express();

require('./app/logging');
require('./config/db');
require('./app/routes')(server);



const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
    logger.info(`server is  running on port ${PORT}... `);
});

