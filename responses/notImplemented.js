
'use strict';

const component = require('stampit');

module.exports = component()
  .methods({
    notImplemented(res, msgs) {
      return this.doRespond(res, 501, msgs, 'Not Implemented');
    }
  });
