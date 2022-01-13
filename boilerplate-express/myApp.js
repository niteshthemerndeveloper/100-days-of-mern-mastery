const express = require('express');
const app = express();

// send a file as a response
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/views/index.html');
});

// send multiple static assets using middleware function
app.use('/public', express.static(__dirname + '/public'));

app.get('/json', (req, res) => {
  res.json({ message: 'Hello json' });
});

module.exports = app;
