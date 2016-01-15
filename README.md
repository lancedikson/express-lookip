# express-lookip middleware

The middleware based on `lookip` package for request geo information about user's IP address.

Middleware adds `req.ipinfo` property with all info about user's location.

## Usage
```
// require it
var expressLookIP = require('express-lookip');

// add middleware
app.use(expressLookIP());

// use it anywhere below
app.get('/', function (req, res) {
  if (req.ipinfo.country == 'RU') {
    res
      .status(451)
      .end('Service is not available in your country.');
  } else {
    // ...
  }
});
```
