const mongoose = require('mongoose');
const mongoURI = process.env.MONGO_URI;
const { Schema } = mongoose;

const PersonSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
  },
  favoriteFoods: [String],
});

module.exports = mongoose.model('Person', PersonSchema);
