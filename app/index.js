'use strict';

const component = require('stampit');
const okResponse = require('./responses/ok');
const errResponse = require('./responses/error');

module.exports = component()
  .compose(
    okResponse,
    errResponse
  )
  .create();
