module.exports = function(server){

    server.route({
        method: 'GET',
        path: '/api/auth/facebook/callback',
        config: {
            auth: {
                strategy: 'facebook',
                mode: 'try'
            },
            handler: function (request, reply) {
                if (!request.auth.isAuthenticated) {
                    return reply('Authentication failed due to: ' + request.auth.error.message);
                }
                reply('<pre>' + JSON.stringify(request.auth.credentials, null, 4) + '</pre>');
            }
        }
    });

    server.route({
        method: 'GET',
        path: '/api/auth/logout',
        config: {
            handler: function (request, reply) {

                console.log(request.auth);
                

                reply('Hello World');
            }
        }
    });

};