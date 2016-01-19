'use strict';

const Hapi = require('hapi');
const server = new Hapi.Server();
server.connection({ port: 3000 });

// Register Plugin
require('./serverModule/registerPlugin')(server);

// Routes
require('./routes')(server);

server.start(() => {
    console.log('Server running at:', server.info.uri);
});