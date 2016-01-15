
'use strict';

const component = require('stampit');

module.exports = component()
  .methods({
    forbidden(res, msgs) {
      return this.doRespond(res, 403, msgs, 'Forbidden');
    }
  });
