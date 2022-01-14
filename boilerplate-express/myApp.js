const express = require('express');
const app = express();
const result = require('dotenv').config();

// send a file as a response
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/views/index.html');
});

// send multiple static assets using middleware function
app.use('/public', express.static(__dirname + '/public'));

app.use((req, res, next) => {
  console.log(req.method, ' ', req.path, ' - ', req.ip);
  next();
});

app.get('/json', (req, res) => {
  if (process.env.MESSAGE_STYLE === 'uppercase') {
    return res.json({ message: 'HELLO JSON' });
  }
  res.json({ message: 'Hello json' });
});

module.exports = app;
