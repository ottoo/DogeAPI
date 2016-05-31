'use strict';

const server = require('../server/server.js');

describe('Test Example', () => {

  it('responds with status code 200 and an ok message', (done) => {

    server.inject({ method: 'GET', url: '/test' }, (response) => {
      expect(response.statusCode).toBe(200);
      expect(response.result).toEqual('OK!');
      done();
    });
  });
});
