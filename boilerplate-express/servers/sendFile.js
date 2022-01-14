// Send a file as a Response
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.sendFile(__dirname + '/views/index.html');
});

module.exports = router;
