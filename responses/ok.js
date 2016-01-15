
'use strict';

const component = require('stampit');

module.exports = component()
  .methods({
    /**
     * Sends a 200 `OK` response
     *
     * @param  {Response} A response object
     * @param  {Array|String} A string or array of strings to be used to
     *                        transport messages to the API consumer
     * @return {Object} The payload that was sent to the client
     *
     * @example
     * {
     *     "code": 200,
     *     "status": "OK",
     *     "messages": [`Whatever you did worked`],
     * }
     *
     */
    ok(res, msgs) {
      return this.doRespond(res, 200, msgs, 'OK');
    }
  });
