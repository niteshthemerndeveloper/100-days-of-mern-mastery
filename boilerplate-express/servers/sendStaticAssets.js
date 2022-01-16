// Serve Static Assets as a Response
const express = require('express');
const app = express();

app.use('/static', express.static(__dirname + '/public'));

app.get('/asset', (req, res) => {
  res.send('It is a static asset program');
});

module.exports = app;
