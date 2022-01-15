// Create an echo message server
const express = require('express');
const router = express.Router();

router.get('/:word/echo', (req, res) => {
  res.json({ echo: req.params.word });
});

module.exports = router;
