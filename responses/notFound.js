
'use strict';

const component = require('stampit');

module.exports = component()
  .methods({
    /**
     * Sends a 404 `Not Found` response
     *
     * @param  {Response} A response object
     * @param  {Array|String} A string or array of strings to be used to
     *                        transport messages to the API consumer
     * @return {Object} The payload that was sent to the client
     */
    notFound(res, msgs) {
      return this.doRespond(res, 404, msgs, 'Not Found');
    }
  });
