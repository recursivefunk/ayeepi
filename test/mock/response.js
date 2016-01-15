
'use strict';

const component = require('stampit');
const streamPrototype = require('stream').Duplex.prototype;

module.exports = component()
  .methods({
    json() { return this; },
    set() { return this; },
    send() { return this; },
    status() { return this; }
  })
  .methods(streamPrototype)
  .create();
