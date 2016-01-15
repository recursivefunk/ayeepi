
'use strict';

const component = require('stampit');

module.exports = component()
  .methods({
    /**
     * Sends a 200 `OK` response with a data payload
     *
     * @param  {Response} A response object
     * @param  {Object} The data to be sent to the client
     * @param  {Array|String} A string or array of strings to be used to
     *                        transport messages to the API consumer
     * @return {Stream} The payload that was sent to the client
     */
    send(res, data, msgs) {
      let response;

      msgs = this.parseMessages(msgs);

      response = {
        code: 200,
        status: 'OK',
        messages: msgs,
        result: data
      };

      res
        .set('Content-Type', this.contentTypes.json)
        .status(200)
        .json(response);

      return response;
    }
  });
