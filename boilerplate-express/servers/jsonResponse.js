const express = require('express');
const router = express.Router();

router.get('/message', (req, res) => {
  res.json({ message: 'This is the JSON Response Program' });
});

module.exports = router;
