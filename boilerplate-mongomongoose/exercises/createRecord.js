const express = require('express');
const app = express();

// Require Mongoose Module
const mongoose = require('mongoose');
const { Schema } = mongoose;
const mongoURI = process.env.MONGO_URI;

// Create a Person Schema
const PersonSchema = new Schema({
  name: String,
  age: Number,
  favoriteFoods: [String],
  date: {
    type: Date,
    default: Date.now,
  },
});

// Create a Mongoose Model
mongoose.model('Person', PersonSchema);

// Connect to MongoDB
mongoose.connect(mongoURI, () => console.log('MongoDB Connected...'));

// Create a route
app.get('/save', async (req, res) => {
  try {
    const person = await new Person({
      name: 'Krishna',
      age: 33,
      favoriteFoods: ['Yogurt', 'Butter', 'Milk'],
    });
    const result = await person.save();
    res.json({ result });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Failed to Respond!');
  }
});

// Create a server on PORT 2802
app.listen(2802, () => console.log('Server started on the PORT 2802'));
