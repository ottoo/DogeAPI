'use strict';

const Boom = require('boom');
const fs = require('fs');
const path = require('path');
const Joi = require('joi');
const _ = require('lodash');
const { mapTrashbins } = require('./transforms/trashbins.js');
const PATH_TO_JSON = path.join(__dirname, 'json');

module.exports = [{
    method: 'GET',
    path: '/test',
    config: {
        handler: (request, reply) => {
            reply('OK!');
        }
    }
}, {
    method: 'GET',
    path: '/api/v1/trashbins',
    config: {
        handler: (request, reply) => {
            fs.readFile(PATH_TO_JSON + '/dogtrashbins.json', 'utf8', (err, data) => {
              if (err) throw err;
              reply(mapTrashbins(JSON.parse(data)));
            });
        },
        validate: {
            query: {
                location: Joi.string().required()
            }
        }
    }
}];
