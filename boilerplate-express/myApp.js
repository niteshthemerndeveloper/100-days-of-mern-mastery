const express = require('express');
const app = express();
const result = require('dotenv').config();

// body parser to parse the Data
app.use(express.json({ extended: false }));

// send a file as a response
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/views/index.html');
});

// send multiple static assets using middleware function
app.use('/public', express.static(__dirname + '/public'));

// middleware function
app.use((req, res, next) => {
  console.log(req.method, ' ', req.path, ' - ', req.ip);
  next();
});

// env variable server route
app.get('/json', (req, res) => {
  if (process.env.MESSAGE_STYLE === 'uppercase') {
    return res.json({ message: 'HELLO JSON' });
  }
  res.json({ message: 'Hello json' });
});

// Chainable middleware function
app.get(
  '/now',
  (req, res, next) => {
    req.time = new Date().toString();
    next();
  },
  (req, res) => {
    res.json({ time: req.time });
  }
);

// echo server
app.get('/:word/echo', (req, res) => {
  console.log(req.params);
  res.json({ echo: req.params.word });
});

// Accept the Query Inputs

app.get('/name', (req, res) => {
  res.json({ name: req.query.first + ' ' + req.query.last });
});

// Use body-parser to Read POST data

app.post('/body', (req, res) => {
  res.json({ try: req.body });
});

module.exports = app;
