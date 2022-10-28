const data = require('../data/zoo_data');

const { prices } = data;

function countEntrants(entrants = []) {
  // seu código aqui
  let child = 0;
  let adult = 0;
  let senior = 0;
  entrants.forEach(({ age }) => {
    if (age < 18) child += 1;
    if (age >= 18 && age < 50) adult += 1;
    if (age >= 50) senior += 1;
  });
  return { child, adult, senior };
}

function calculateEntry(entrants = {}) {
  // seu código  aqui
  if (Object.entries(entrants).length < 1) return 0;
  const visitas = countEntrants(entrants);
  const arrVisitas = Object.keys(visitas);
  return arrVisitas.reduce((acc, curr) => acc + (visitas[curr] * prices[curr]), 0);
}

console.log(calculateEntry({}));

module.exports = { calculateEntry, countEntrants };
