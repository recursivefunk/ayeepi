
'use strict';

const component = require('stampit');

module.exports = component()
  .methods({
    error(res, msgs) {
      let payload;
      msgs = this.parseErrorMessages(msgs);
      res.status(500);
      payload = {
        code: 500,
        status: 'Internal Server Error',
        messages: msgs
      };
      return payload;
    }
  });
