// Initialize a body parser
const express = require('express');
const router = express.Router();

router.use(express.json({ extended: false }));

module.exports = router;
