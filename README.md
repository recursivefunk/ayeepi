# ayeepi

[![Build Status](https://travis-ci.org/recursivefunk/ayeepi.svg?branch=master)](https://travis-ci.org/recursivefunk/ayeepi)

### Pronounced like the acronym API

Abstraction for standard API responses based on [this post](https://medium.com/@shazow/how-i-design-json-api-responses-71900f00f2db#.wticupivc) by [Andrey Petrov](https://twitter.com/shazow)

```
{
    "code": 200,
    "status": "ok",
    "messages": [],
    "result": {
        "user": {
            "id": 123,
            "name": "shazow"
        }
    }
}
```

Install
```
$ npm install ayeepi --save
```

Usage
```javascript
const ayeepi = require('ayeepi');
// ... some restify setup or whatever

app.post('/foo', (req, res) => {
  const id = req.body.id;
  let message;
  doSomething(id)
    .then((data) => {
      message = `It worked for ${id}!`;
      ayeepi.ok(res, message);
    })
    .catch((err) => {
      log.error(err.message);
      message = `An error occures while doing that thing for ${id}`;
      ayeepi.error(res, message);
    })
})
```

## Methods

### ok
```javascript
/**
 * Sends a 200 `OK` response
 *
 * @param  {Response} A response object
 * @param  {Array|String} A string or array of strings to be used to
 *                        transport messages to the API consumer
 * @return {Object} The payload that was sent to the client
 *
 * @example
 * {
 *     "code": 200,
 *     "status": "OK",
 *     "messages": [`Whatever you did worked`]
 * }
 *
 */
ok(res, messages)
```

### error
```javascript
/**
 * Sends a 500 `Internal Server Error` response
 *
 * @param  {Response} A response object
 * @param  {Array|String} A string or array of strings to be used to
 *                        transport messages to the API consumer. Error
 *                        message(s) should go here
 * @return {Object} The payload that was sent to the client
 *
 * @example
 * {
 *     "code": 500,
 *     "status": "Internal Server Error",
 *     "messages": [`something broke!`]
 * }
 *
 */
error(res, messages)
```

### forbidden
```javascript
/**
 * Sends a 403 `Forbidden` response
 *
 * @param  {Response} A response object
 * @param  {Array|String} A string or array of strings to be used to
 *                        transport messages to the API consumer
 * @return {Object} The payload that was sent to the client
 *
 * @example
 * {
 *     "code": 403,
 *     "status": "Forbidden",
 *     "messages": [`can't touch this!`]
 * }
 *
 */
forbidden(res, messages)
```

### notFound
```javascript
/**
 * Sends a 404 `Not Found` response
 *
 * @param  {Response} A response object
 * @param  {Array|String} A string or array of strings to be used to
 *                        transport messages to the API consumer
 * @return {Object} The payload that was sent to the client
 *
 * @example
 * {
 *     "code": 404,
 *     "status": "Not Found",
 *     "messages": [`couldn't find it`]
 * }
 *
 */
notFound(res, messages)
```

### notImplemented
```javascript
/**
 * Sends a 501 `Not Implemented` response
 *
 * @param  {Response} A response object
 * @param  {Array|String} A string or array of strings to be used to
 *                        transport messages to the API consumer
 * @return {Object} The payload that was sent to the client
 *
 * @example
 * {
 *     "code": 501,
 *     "status": "Not Implemented",
 *     "messages": [`this isn't ready!`]
 * }
 *
 */
notImplemented(res, msgs)
```

### unauthorized
```javascript
/**
 * Sends a 401 `Unauthorized` response
 *
 * @param  {Response} A response object
 * @param  {Array|String} A string or array of strings to be used to
 *                        transport messages to the API consumer
 * @return {Object} The payload that was sent to the client
 *
 * @example
 * {
 *     "code": 403,
 *     "status": "Unauthorized",
 *     "messages": [`I don't know you!`]
 * }
 *
 */
unauthorized(res, msgs)
```

### send
```javascript
/**
 * Sends a 200 `OK` response with a data payload
 *
 * @param  {Response} A response object
 * @param  {Object} The data to be sent to the client
 * @param  {Array|String} A string or array of strings to be used to
 *                        transport messages to the API consumer
 * @return {Object} The payload that was sent to the client
 *
 * @example
 * {
 *     "code": 200,
 *     "status": "OK",
 *     "messages": [`Here's the result of the stuff`],
 *     "result": {} // your data
 * }
 *
 */
send(res, data, msgs)
```

Tests
```
$ npm test
```

### Contributing
Totally welcome. Create a PR, create a passing test, adhere to .jshint rules and if it makes sense - I'm happy to merge it!
