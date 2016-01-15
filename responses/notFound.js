
'use strict';

const component = require('stampit');

module.exports = component()
  .methods({
    notFound(res, msgs) {
      return this.doRespond(res, 404, msgs, 'Not Found');
    }
  });
