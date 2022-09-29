const data = require('../data/zoo_data');

const { employees, species } = data;

function getOldestFromFirstSpecies(employeeId) {
  // seu código aqui
  const animalId = employees.find(({ id }) => id === employeeId).responsibleFor[0];
  const result = species.find(({ id }) => animalId === id)
    .residents.reduce((acc, curr) => {
      if (acc.age > curr.age) return acc;
      return curr;
    });
  return Object.values(result);
}

module.exports = getOldestFromFirstSpecies;

console.log(getOldestFromFirstSpecies('fdb2543b-5662-46a7-badc-93d960fdc0a8'));
