const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Express Server is ready to send response');
});

module.exports = app;
