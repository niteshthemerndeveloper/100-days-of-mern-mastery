require('dotenv').config();
const mongoose = require('mongoose');
const mongoURI = process.env.MONGO_URI;
let Person = require('./models/Person.js');

mongoose.connect(mongoURI, () => console.log('MongoDB Connected...'));

const createAndSavePerson = async (done) => {
  let person = await new Person({
    name: 'Krishna',
    age: '33',
    favoriteFoods: ['Apple', 'Walnut', 'Cashewnut'],
  });

  try {
    const result = await person.save();
    done(null, result);
  } catch (err) {
    console.error(err.message);
  }
};

const createManyPeople = async (arrayOfPeople, done) => {
  arrayOfPeople = [
    {
      name: 'Laxman',
      age: 24,
      favoriteFoods: ['Satvic', 'Food'],
    },
    {
      name: 'Krishna',
      age: 33,
      favoriteFoods: ['Yogurt', 'Milk', 'Butter'],
    },
  ];
  try {
    const result = await Person.create(arrayOfPeople);
    done(null, result);
  } catch (err) {
    console.error(err.message);
  }
};

const findPeopleByName = async (personName, done) => {
  try {
    const result = await Person.find({ name: personName });
    done(null, result);
  } catch (err) {
    console.error(err.message);
  }
};

const findOneByFood = async (food, done) => {
  try {
    const result = await Person.findOne({ favoriteFoods: food });
    done(null, result);
  } catch (err) {
    console.error(err.message);
  }
};

const findPersonById = async (personId, done) => {
  try {
    const result = await Person.findById({ _id: personId });
    done(null, result);
  } catch (err) {
    console.error(err.message);
  }
};

const findEditThenSave = async (personId, done) => {
  const foodToAdd = 'hamburger';
  try {
    const person = await Person.findOne({ _id: personId });

    person.favoriteFoods.push(foodToAdd);
    const result = await person.save();
    done(null, result);
  } catch (err) {
    console.error(err.message);
  }
};

const findAndUpdate = async (personName, done) => {
  const ageToSet = 20;
  try {
    const result = await Person.findOneAndUpdate(
      { name: personName },
      { age: ageToSet },
      { new: true }
    );
    done(null, result);
  } catch (err) {
    console.error(err.message);
  }
};

const removeById = async (personId, done) => {
  try {
    const result = await Person.findOneAndRemove({ _id: personId });
    done(null, result);
  } catch (err) {
    console.error(err.message);
  }
};

// const removeManyPeople = (done) => {
//   const nameToRemove = 'Mary';

//   Person.remove({ name: nameToRemove }, (err, result) => {
//     if (err) return console.error(err.message);
//     done(null, result);
//   });
// };

const removeManyPeople = async (done) => {
  const nameToRemove = 'Mary';

  try {
    const result = await Person.remove({ name: nameToRemove });
    done(null, result);
  } catch (err) {
    console.error(err.message);
  }
};

const queryChain = (done) => {
  const foodToSearch = 'burrito';

  done(null /*, data*/);
};

/** **Well Done !!**
/* You completed these challenges, let's go celebrate !
 */

//----- **DO NOT EDIT BELOW THIS LINE** ----------------------------------

exports.PersonModel = Person;
exports.createAndSavePerson = createAndSavePerson;
exports.findPeopleByName = findPeopleByName;
exports.findOneByFood = findOneByFood;
exports.findPersonById = findPersonById;
exports.findEditThenSave = findEditThenSave;
exports.findAndUpdate = findAndUpdate;
exports.createManyPeople = createManyPeople;
exports.removeById = removeById;
exports.removeManyPeople = removeManyPeople;
exports.queryChain = queryChain;
