
'use strict';

const component = require('stampit');
const check = require('check-types');

module.exports = component()
  .methods({

    doRespond(res, code, msgs, status) {
      let payload;
      msgs = this.parseMessages(msgs);
      res.status(code);
      payload = {
        code: code,
        status: status,
        messages: msgs
      };
      res.set('Content-Type', this.contentTypes.json);
      res.send(payload);
      return payload;
    },

    parseErrorMessages(err) {
      if (check.array(err)) {
        return err;
      }
      if (check.string(err)) {
        return [err];
      }
      if (err.message) {
        return [err.message];
      }
    },

    parseMessages(msg) {
      if (!msg) {
        return [];
      }

      if (check.array(msg)) {
        return msg;
      } else {
        return [msg];
      }
    }
  })
  .refs({
    contentTypes: {
      json: 'application/json'
    }
  });
