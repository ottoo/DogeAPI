'use strict';

let Boom = require('boom');
var _ = require('lodash');

module.exports = [{
    method: 'GET',
    path: '/test',
    config: {
        handler: (request, reply) => {
            reply('OK!');
        }
    }
}];
