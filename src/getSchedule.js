const data = require('../data/zoo_data');

const { species, hours } = data;

const availabilityAnimal = ((info) => species.find(({ name }) => name === info).availability);

const animalDays = ((dia) => species.filter(({ availability }) => availability.includes(dia))
  .map((animal) => animal.name));

const horario = (info, [, hora]) => ({
  officeHour: info === 'Monday' ? 'CLOSED'
    : `Open from ${hora.open}am until ${hora.close}pm`,
  exhibition: info === 'Monday' ? 'The zoo will be closed!' : animalDays(info),
});

const allDays = (arr) => arr.reduce((acc, curr) =>
  Object.assign(acc, { [curr[0]]: horario(curr[0], curr) }), {});

function getSchedule(scheduleTarget) {
  // seu código aqui
  const animal = species.some(({ name }) => name === scheduleTarget);
  const arrHoras = Object.entries(hours);
  const dia = arrHoras.some((element) => element.includes(scheduleTarget));
  if (animal) return availabilityAnimal(scheduleTarget);
  if (dia) {
    return { [scheduleTarget]: horario(scheduleTarget, arrHoras
      .find((day) => day.includes(scheduleTarget))) };
  }
  return allDays(arrHoras);
}

module.exports = getSchedule;

// console.log(getSchedule('lions')); // [ 'Tuesday', 'Thursday', 'Saturday', 'Sunday' ]
// console.log(getSchedule('Monday')); // { Monday: { officeHour: 'CLOSED', exhibition: 'The zoo will be closed!' } }
// console.log(getSchedule('Friday'));
console.log(getSchedule());
