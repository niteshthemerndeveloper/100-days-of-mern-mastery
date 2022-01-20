const express = require('express');
const app = express();

// Require Mongoose Module
const mongoose = require('mongoose');
const { Schema } = mongoose;

// Require a Person Model
const Person = require('../models/Person.js');

const mongoURI = process.env.MONGO_URI;
mongoose.connect(mongoURI, () => console.log('MongoDB Connected...'));

// Find just a single Person in the database By Id
app.get('/remove', async (req, res) => {
  try {
    const result = await Person.findOneAndRemove({ age: 24 });

    res.json({ result });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Failed to Respond!');
  }
});

// Create a Server on the PORT 2802
app.listen(2802, () => console.log(`Server Started on PORT 2802`));
