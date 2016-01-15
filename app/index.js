'use strict';

const component = require('stampit');
const ok = require('../responses/ok');
const err = require('../responses/error');
const forbidden = require('../responses/forbidden');
const notFound = require('../responses/notFound');
const notImplemented = require('../responses/notImplemented');
const unauthorized = require('../responses/unauthorized');
const send = require('../responses/send');
const utils = require('../lib/utils');

module.exports = component()
  .compose(
    ok,
    err,
    forbidden,
    notFound,
    notImplemented,
    unauthorized,
    send,
    utils
  ).create();
