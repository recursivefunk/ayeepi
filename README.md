# ayeepi

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
// ... some express setup or whatever

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

### Methods
```javascript
/**
 * Sends a 200 `OK` response
 * @param  {Response} A response object
 * @param  {Array|String} A string or array of strings to be used to
 *                        transport messages to the API consumer
 * @return {Object} The payload that was sent to the client
 */
ok(res, messages)

/**
 * Sends a 500 `Internal Server Error` response
 * @param  {Response} A response object
 * @param  {Array|String} A string or array of strings to be used to
 *                        transport messages to the API consumer. Error
 *                        message(s) should go here
 * @return {Object} The payload that was sent to the client
 */
err(res, messages)

/**
 * Sends a 403 `Forbidden` response
 * @param  {Response} A response object
 * @param  {Array|String} A string or array of strings to be used to
 *                        transport messages to the API consumer
 * @return {Object} The payload that was sent to the client
 */
forbidden(res, messages)

/**
 * Sends a 404 `Not Found` response
 * @param  {Response} A response object
 * @param  {Array|String} A string or array of strings to be used to
 *                        transport messages to the API consumer
 * @return {Object} The payload that was sent to the client
 */
notFound(res, messages)

/**
 * Sends a 501 `Not Implemented` response
 * @param  {Response} A response object
 * @param  {Array|String} A string or array of strings to be used to
 *                        transport messages to the API consumer
 * @return {Object} The payload that was sent to the client
 */
notImplemented(res, msgs)

/**
 * Sends a 200 `OK` response with a data payload
 *
 * @param  {Response} A response object
 * @param  {Object} The data to be sent to the client
 * @param  {Array|String} A string or array of strings to be used to
 *                        transport messages to the API consumer
 * @return {Stream} The payload that was sent to the client
 */
send(res, data, msgs)
```

Tests
```
$ npm test
```
