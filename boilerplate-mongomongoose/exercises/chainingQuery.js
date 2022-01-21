const express = require('express');
const app = express();

// Require the Mongoose Module
const mongoose = require('mongoose');
const { Schema } = mongoose;

// Require the Person Model
const Person = require('../models/Person.js');
const mongoURI = process.env.MONGO_URI;

// Connect to MongoDB
mongoose.connect(mongoURI, () => console.log('MongoDB Connected...'));

// Define a get Route
app.get('/chains', async (req, res) => {
  const favoriteFoods = 'Satvic';
  try {
    const result = await Person.find({ favoriteFoods })
      .sort({ name: 1 })
      .limit(2)
      .select({ age: false });
    res.json({ result });
  } catch (err) {
    console.error(err.message);
  }
});

// Create a server on the PORT 2802
app.listen(2802, () => console.log(`Server Started on the PORT 2802`));
