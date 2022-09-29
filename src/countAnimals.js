const data = require('../data/zoo_data');

const { species } = data;

function countAnimals(animal) {
  // seu código aqui
  if (!animal) {
    return species.reduce((acc, { name, residents }) =>
      Object.assign(acc, { [name]: residents.length }), {});
  }
  const { specie: especie, sex: sexo } = animal;
  if (!sexo) return species.find(({ name }) => name === especie).residents.length;
  return species.find(({ name }) => name === especie)
    .residents.filter((element) => element.sex === sexo).length;
}

// console.log(countAnimals());
// console.log(countAnimals({ specie: 'giraffes' }));
// console.log(countAnimals({ specie: 'elephants', sex: 'male' }));
// console.log(countAnimals({ specie: 'bears', sex: 'female' }));

module.exports = countAnimals;
