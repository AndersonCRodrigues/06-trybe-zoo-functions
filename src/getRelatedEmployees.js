const data = require('../data/zoo_data');

const { employees } = data;

function isManager(id) {
  // seu código aqui
  return employees.some(({ managers }) => managers.includes(id));
}

function getRelatedEmployees(managerId) {
  // seu código aqui
  if (isManager(managerId)) {
    return employees.filter(({ managers }) => managers.includes(managerId))
      .reduce((acc, { firstName, lastName }) => acc.concat(`${firstName} ${lastName}`), []);
  }
  throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
}

// console.log(isManager('9e7d4524-363c-416a-8759-8aa7e50c0992'));
// console.log(getRelatedEmployees('9e7d4524-363c-416a-8759-8aa7e50c0992'));

module.exports = { isManager, getRelatedEmployees };
