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

Tests
```
$ npm test
```
