
'use strict';

const component = require('stampit');

module.exports = component()
  .methods({
    ok(res, msgs) {
      return this.doRespond(res, 200, msgs, 'OK');
    }
  });
