const data = require('../data/zoo_data');

const { employees, species } = data;

const testInfo = ((info) => {
  const [keyInfo] = Object.keys(info);
  const verifica = employees.some(({ id, firstName, lastName }) =>
    id === info[keyInfo] || firstName === info[keyInfo] || lastName === info[keyInfo]);
  if (!verifica) throw new Error('Informações inválidas');
});

const infoValida = ((dataEmployee) => ({
  id: dataEmployee.id,
  fullName: `${dataEmployee.firstName} ${dataEmployee.lastName}`,
  species: dataEmployee.responsibleFor.map((animalId) =>
    species.find(({ id }) => id === animalId).name),
  locations: dataEmployee.responsibleFor.map((animalId) =>
    species.find(({ id }) => id === animalId).location),
}));

function getEmployeesCoverage(info) {
  // seu código aqui
  if (info) {
    testInfo(info);
    const [keyInfo] = Object.keys(info);
    const getEmployee = employees.find(({ id, firstName, lastName }) =>
      id === info[keyInfo] || firstName === info[keyInfo] || lastName === info[keyInfo]);
    return infoValida(getEmployee);
  }
  return employees.map((item) => infoValida(item));
}

module.exports = getEmployeesCoverage;

// console.log(getEmployeesCoverage({ name: 'Sharonda' }));
// console.log(getEmployeesCoverage());
