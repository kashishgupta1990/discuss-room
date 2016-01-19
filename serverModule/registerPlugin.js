'use strict';

const inert = require('inert');

module.exports = function(server){
    server.register(inert, (err) => {
        if (err) {
            throw err;
        }
        server.route({
            method: 'GET',
            path: '/{param*}',
            handler: {
                directory: {
                    path: 'public'
                }
            }
        });
    });
};