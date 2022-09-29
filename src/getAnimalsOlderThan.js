const data = require('../data/zoo_data');

const { species } = data;

function getAnimalsOlderThan(animal, age) {
  // seu código aqui
  return species.some(({ name, residents }) => animal === name && residents
    .every((info) => info.age >= age));
}

// console.log(getAnimalsOlderThan('otters', 7));

module.exports = getAnimalsOlderThan;
