'use strict';

const Hapi = require('hapi');
const server = new Hapi.Server();
const _env = process.env.NODE_ENV || 'development';
const _config = require('./config/index')(_env);

server.connection({ port: _config.server.port });

// Register Plugin
require('./serverModule/registerPlugin')(server);

// Routes
require('./routes/templateRoute')(server);
require('./routes/api')(server);

server.start(() => {
    console.log('Server running at:', server.info.uri);
});