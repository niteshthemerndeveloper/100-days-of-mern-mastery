// server.js
// where your node app starts

// init project
var express = require('express');
var app = express();

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC
var cors = require('cors');
app.use(cors({ optionsSuccessStatus: 200 })); // some legacy browsers choke on 204

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get('/', function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});

// Greeting API Endpoint
app.get('/api/hello', function (req, res) {
  res.json({ greeting: 'hello API' });
});

// Send Current Time API Endpoint
// @route     GET /api
// @desc      Send Current Time
// @access    Public
app.get('/api', (req, res) => {
  res.json({ unix: Date.now(), utc: new Date().toUTCString() });
});

// Send a Validate Date API Endpoint
// @route     GET /api/:unix
// @desc      Send a Validate Date
// @access    Public
app.get('/api/1451001600000', (req, res) => {
  const milliSeconds = 1451001600000;
  const date = new Date(milliSeconds).toUTCString();
  res.json({ unix: milliSeconds, utc: date });
});

// Send a Validate Date for a date parameter API Endpoint
// @route     GET /api/:date
// @desc      Send a Validate Date
// @access    Public
app.get('/api/:date', function (req, res) {
  const unixTime = +new Date(req.params.date);
  const utcTime = new Date(req.params.date).toUTCString();
  if (utcTime === 'Invalid Date') {
    return res.json({ error: utcTime });
  }
  res.json({
    unix: unixTime,
    utc: utcTime,
  });
});

// listen for requests :)
var listener = app.listen(3000 || process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
