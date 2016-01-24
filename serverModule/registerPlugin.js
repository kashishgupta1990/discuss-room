'use strict';

const inert = require('inert');
const bell = require('../custom_module/bell');

module.exports = function (server) {

    // Server Static Files
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

    server.register(bell, (err) => {

        server.auth.strategy('facebook', 'bell', {
            provider: 'facebook',
            password: 'password',
            isSecure: false,
            // You'll need to go to https://developers.facebook.com/ and set up a
            // Website application to get started
            // Once you create your app, fill out Settings and set the App Domains
            // Under Settings >> Advanced, set the Valid OAuth redirect URIs to include http://<yourdomain.com>/bell/door
            // and enable Client OAuth Login
            clientId: '1542683939380197',
            clientSecret: '93c2505f23867af985c083b3b4ec6696',
            location: server.info.uri
        });
    });

    server.register({
        register: require('good'),
        options: {
            opsInterval: 1000,
            reporters: [{
                reporter: require('good-console'),
                events: {log: '*', response: '*'}
            }]
        }
    }, function (err) {
        if (err) {
            throw err;
        }
    });


    server.register(require('vision'), (err) => {

        server.views({
            engines: {
                html: require('handlebars')
            },
            relativeTo: process.cwd(),
            path: 'public',
            helpersPath: 'public'
        });
    });

};