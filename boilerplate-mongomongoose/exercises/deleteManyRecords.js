const express = require('express');
const app = express();

// Require the Mongoose Module
const mongoose = require('mongoose');
const { Schema } = mongoose;

// Require the Person Model
const Person = require('../models/Person.js');
const mongoURI = process.env.MONGO_URI;

// Connect to MongoDB
// mongoose.connect(mongoURI, () => console.log('MongoDB Connected...'));

// Define a get Route
app.get('/delete', async (req, res) => {
  const name = 'Krishna';
  try {
    // const result = await Person.remove({ name });

    // Model.remove() is deprecated so use Model.deleteMany()
    const result = await Person.deleteMany({ name });
    res.json({ result });
  } catch (err) {
    console.error(err.message);
  }
});

// Create a server on the PORT 2802
app.listen(2802, () => console.log(`Server Started on the PORT 2802`));
