// Use env file to Store API keys and URIs
const express = require('express');
const router = express.Router();

router.get('/env', (req, res) => {
  if (process.env.MESSAGE_STYLE === 'uppercase') {
    return res.json({ message: 'HELLO JSON' });
  }
  return res.json({ message: 'Hello json' });
});

module.exports = router;
