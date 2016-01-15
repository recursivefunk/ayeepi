
'use strict';

const component = require('stampit');

module.exports = component()
  .methods({
    /**
     * Sends a 403 `Forbidden` response
     *
     * @param  {Response} A response object
     * @param  {Array|String} A string or array of strings to be used to
     *                        transport messages to the API consumer
     * @return {Object} The payload that was sent to the client
     */
    forbidden(res, msgs) {
      return this.doRespond(res, 403, msgs, 'Forbidden');
    }
  });
