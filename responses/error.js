
'use strict';

const component = require('stampit');

module.exports = component()
  .methods({
    /**
     * Sends a 500 `Internal Server Error` response
     *
     * @param  res {Response} A response object
     * @param  msgs {Array|String} A string or array of strings to be used to
     *                        transport messages to the API consumer. Error
     *                        message(s) should go here
     * @return payload {Object} The payload that was sent to the client
     *
     * @example
     * {
     *     "code": 500,
     *     "status": "Internal Server Error",
     *     "messages": ['something broke!']
     * }
     *
     */
    error(res, msgs) {
      let payload;
      msgs = this.parseErrorMessages(msgs);
      res.status(500);
      payload = {
        code: 500,
        status: 'Internal Server Error',
        messages: msgs
      };
      res.send(payload);
      return payload;
    }
  });
