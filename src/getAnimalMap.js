const data = require('../data/zoo_data');

const { species } = data;

const mapAnimais = () => species.reduce((acc, { location }) => {
  if (!acc[location]) {
    acc[location] = species
      .filter((animais) => animais.location === location)
      .map(({ name }) => name);
  }
  return acc;
}, {});

const pegaNome = (nome, { sex, sorted }) => {
  let animais = species.find((animal) => animal.name === nome).residents;
  if (sex) animais = animais.filter((element) => element.sex === sex);
  if (sorted) return animais.map(({ name }) => name).sort();
  return animais.map(({ name }) => name);
};

const criaKeySpecie = (location, options) => {
  const especie = species.filter((animal) => (animal.location === location))
    .map((animal) => animal.name);
  return especie.reduce((acc, curr) => acc.concat({ [curr]: pegaNome(curr, options) }), []);
};

const addSpecies = (options) => {
  if (!options.includeNames) return mapAnimais();
  return species.reduce((acc, { location }) => {
    if (!acc[location]) {
      acc[location] = criaKeySpecie(location, options);
    }
    return acc;
  }, {});
};

function getAnimalMap(options) {
  // seu código aqui
  if (!options) return mapAnimais();
  return addSpecies(options);
}

module.exports = getAnimalMap;

// console.log(getAnimalMap());
console.log(getAnimalMap({ includeNames: true }));
// console.log(getAnimalMap({ includeNames: true, sorted: true }));
// console.log(getAnimalMap({ includeNames: true, sex: 'female' }));
// console.log(getAnimalMap({ includeNames: true, sex: 'female', sorted: true }));
