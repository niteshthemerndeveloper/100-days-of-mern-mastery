// Create a Middleware to log the Method Path ip

const express = require('express');
const router = express.Router();

router.get('/data', (req, res) => {
  res.json({ data: `${req.method} ${req.path} - ${req.ip}` });
});

module.exports = router;
