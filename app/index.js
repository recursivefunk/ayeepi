'use strict';

const component = require('stampit');
const ok = require('../responses/ok');
const err = require('../responses/error');
const forbidden = require('../responses/forbidden');
const notFound = require('../responses/notFound');
const notImplemented = require('../responses/notImplemented');
const send = require('../responses/send');
const utils = require('../lib/utils');

module.exports = component()
  .compose(
    ok,
    err,
    forbidden,
    notFound,
    notImplemented,
    send,
    utils
  ).create();
