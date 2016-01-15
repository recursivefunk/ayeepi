
'use strict';

const component = require('stampit');

module.exports = component()
  .methods({
    /**
     * Sends a 501 `Not Implemented` response
     *
     * @param  {Response} A response object
     * @param  {Array|String} A string or array of strings to be used to
     *                        transport messages to the API consumer
     * @return {Object} The payload that was sent to the client
     *
     * @example
     * {
     *     "code": 501,
     *     "status": "Not Implemented",
     *     "messages": ['this isn't ready!']
     * }
     *
     */
    notImplemented(res, msgs) {
      return this.doRespond(res, 501, msgs, 'Not Implemented');
    }
  });
