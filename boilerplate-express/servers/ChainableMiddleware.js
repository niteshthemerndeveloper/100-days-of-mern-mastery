// Build a Chainable middleware function
const express = require('express');
const router = express.Router();

router.get(
  '/now',
  (req, res, next) => {
    // Add the time to req obj
    req.time = new Date().toString();
  },
  (req, res) => {
    res.json({ time: req.time });
  }
);

module.exports = router;
