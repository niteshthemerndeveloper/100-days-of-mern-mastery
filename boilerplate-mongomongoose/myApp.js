require('dotenv').config();
const mongoose = require('mongoose');
const mongoURI = process.env.MONGO_URI;
let Person = require('./models/Person.js');

mongoose.connect(mongoURI, () => console.log('MongoDB Connected...'));

const createAndSavePerson = (done) => {
  let person = new Person({
    name: 'Krishna',
    age: '33',
    favoriteFoods: ['Apple', 'Walnut', 'Cashewnut'],
  });

  const result = person.save().then((err) => console.error(err.message));
  done(null, result);
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

const findPeopleByName = (personName, done) => {
  done(null /*, data*/);
};

const findOneByFood = (food, done) => {
  done(null /*, data*/);
};

const findPersonById = (personId, done) => {
  done(null /*, data*/);
};

const findEditThenSave = (personId, done) => {
  const foodToAdd = 'hamburger';

  done(null /*, data*/);
};

const findAndUpdate = (personName, done) => {
  const ageToSet = 20;

  done(null /*, data*/);
};

const removeById = (personId, done) => {
  done(null /*, data*/);
};

const removeManyPeople = (done) => {
  const nameToRemove = 'Mary';

  done(null /*, data*/);
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
