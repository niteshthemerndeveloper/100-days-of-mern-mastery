// Read Query Input
const express = require('express');
const router = express.Router();

router.get('/name', (req, res) => {
  res.json({ name: req.quqery.first + ' ' + req.query.last });
});

module.exports = router;
