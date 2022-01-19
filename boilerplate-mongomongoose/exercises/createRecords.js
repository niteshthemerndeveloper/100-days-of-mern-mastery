const express = require('express');
const app = express();

// Require mongoose Module
const mongoose = require('mongoose');
const { Schema } = mongoose;
const mongoURI = process.env.MONGO_URI;

// Create a Person Schema
const PersonSchema = new Schema({
  name: {
    type: String,
  },
  age: Number,
  favoriteFoods: [String],
  date: {
    type: Date,
    default: Date.now,
  },
});

// Create a mongoose model
const Person = mongoose.model('Person', PersonSchema);

// Connect to MongoDB
mongoose.connect(mongoURI, () => {
  console.log('MongoDB Connected...');
});

// Create a Route
app.get('/save/records', async (req, res) => {
  const arrayOfPeople = [
    {
      name: 'Krishna',
      age: 33,
      favoriteFoods: ['Milk', 'Yogurt', 'Butter'],
    },
    {
      name: 'Laxman',
      age: 24,
      favoriteFoods: ['Satvic', 'Juices', 'Salads'],
    },
  ];
  try {
    const result = await Person.create(arrayOfPeople);
    res.json({ result });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Failed to Respond!');
  }
});

// Create a server on PORT 2802
app.listen(2802, () => console.log(`Server Started on the PORT 2802`));
