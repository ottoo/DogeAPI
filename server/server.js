'use strict';

let Hapi = require('hapi');
let Good = require('good');
let _ = require('lodash');

let routes = require('./routes');

// Create server instance
let server = new Hapi.Server();
server.connection({
    port: 3334
});

// Register plugins, routes and start the server
server.register([{
    register: Good,
    options: {
        ops: {
            interval: 1000
        },
        reporters: {
            console: [{
                module: 'good-squeeze',
                name: 'Squeeze',
                args: [{
                    log: '*',
                    response: '*'
                }]
            }, {
                module: 'good-console'
            }, 'stdout']
        }
    }
}], function(err) {
    if (err) {
        throw err;
    }

    server.route(routes);

    server.start(function() {
        server.log('info', 'Server running at: ' + server.info.uri);
    });
});

module.exports = server;
