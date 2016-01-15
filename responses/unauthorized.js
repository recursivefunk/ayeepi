
'use strict';

const component = require('stampit');

module.exports = component()
  .methods({
    /**
     * Sends a 401 `Unauthorized` response
     *
     * @param  {Response} A response object
     * @param  {Array|String} A string or array of strings to be used to
     *                        transport messages to the API consumer
     * @return {Object} The payload that was sent to the client
     *
     * @example
     * {
     *     "code": 403,
     *     "status": "Unauthorized",
     *     "messages": [`I don't know you!`]
     * }
     *
     */
    unauthorized(res, msgs) {
      return this.doRespond(res, 401, msgs, 'Unauthorized');
    }
  });
