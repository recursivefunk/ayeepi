
'use strict';

const test = require('tape');
const check = require('check-types');
const utilsComponent = require('../lib/utils');
const mockResponse = require('./mock/response');
const schema = require('../schema');
const respComponent = require('../app');



test('sends actual data', (t) => {
  const payload = { foo: 'bar' };
  const message = 'it worked!';
  const resp = respComponent.send(mockResponse, payload, message);

  schema.validate(resp, (err, res) => {
    t.notOk(err, 'no errors were found');
    t.ok(res, 'response exists');
    t.equal(res.code, 200);
    t.equal(res.status, 'OK');
    t.ok(res.result, 'result exists');
    t.equal(check.object(res.result), true, 'resut is an object');
    t.ok(res.result.foo, 'foo property exists');
    t.equal(res.result.foo, 'bar', 'foo value is correct');
    t.equal(res.messages[0], message, 'message is correct');
    t.end();
  });
});

test('error response', (t) => {
  const resp = respComponent.error(mockResponse, 'an error!');

  schema.validate(resp, (err, res) => {
    t.notOk(err, 'no errors were found');
    t.ok(res, 'response exists');
    t.equal(res.code, 500);
    t.equal(res.status, 'Internal Server Error');
    t.notOk(res.result, 'result was not attached');
    t.end();
  });
});

test('ok response', (t) => {
  const resp = respComponent.ok(mockResponse, []);
  schema.validate(resp, (err, res) => {
    t.notOk(err, 'no errors were found');
    t.ok(res, 'response exists');
    t.equal(res.code, 200);
    t.equal(res.status, 'OK');
    t.end();
  });
});

test('parseMessages', (t) => {
  const utils = utilsComponent.create();
  const singleMessage = 'a single message';

  const singleResult = utils.parseMessages(singleMessage);
  t.equal(
    check.array(singleResult), true, 'an array is returned for a single item'
  );
  t.equal(
    singleResult[0], singleMessage, 'the message in the array is the same'
  );

  const noResult = utils.parseMessages();
  t.equal(
    check.array(noResult), true, 'result for undefined message is an array'
  );

  t.equal(
    noResult.length, 0, 'there are no items in the array for undefined message'
  );

  const nullResult = utils.parseMessages(null);
  t.equal(check.array(nullResult), true, 'result for null message');

  t.equal(
    nullResult.length, 0, 'there are no items in the array for null message'
  );

  const arrayResult = utils.parseMessages(['foo', 'bar']);
  t.equal(
    check.array(arrayResult), true, 'an array is returned for an array of messages'
  );
  t.equal(
    arrayResult[0], 'foo', 'the first message in the array is foo'
  );

  t.equal(
    arrayResult[1], 'bar', 'the second message in the array is bar'
  );

  t.end();
});

test('doRespond', (t) => {
  const utils = utilsComponent.create();
  const code = 200;
  const msgs = ['foo', 'bar'];
  const status = 'OK';
  const result = utils.doRespond(mockResponse, code, msgs, status);

  t.equal(result.code, code, 'code is correct');
  t.equal(result.status, status, 'status is OK - literally :)');
  t.equal(check.array(result.messages), true, 'messages is an array');
  t.equal(result.messages[0], msgs[0], 'first message is correct');
  t.equal(result.messages[1], msgs[1], 'second message is correct');

  t.end();
});
