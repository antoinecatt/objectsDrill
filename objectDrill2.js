'use strict';

const loaf = {
  flour : 300,
  water : 210,
  hydration:  function() {return (this.water / this.flour)* 100}
};
console.log(loaf.hydration());

const loopObj = {
  foo: 'foo',
  bar: true,
  fum: 11,
  quux: () => 'hi',
  spam: [1,2,3,4,5]
}

for(let key in loopObj) {
  console.log(`${key}: ${loopObj[key]}`)
}

const menu = {
  meals: ['breakfast', 'second breakfast', 'elevenses', 'lunch', 'afternoon tea', 'dinner', 'supper']
};
//console.log(menu.meals[3]);

const people = [
  {name: 'Antoine', jobTitle: 'Lord of the universe', boss : 'Dakota'},
  {name: 'Rose', jobTitle: 'Overlord of the universe', boss : 'Dakota'},
  {name: 'Kathy', jobTitle: 'Grandma of the universe', boss : 'Dakota'},
  {name: 'Ray', jobTitle: 'Grandpa of the universe', boss : 'Dakota'},
  {name: 'Dakota', jobTitle: 'Love of the universe'}
];
people.forEach(person => {
  if ( person.boss === 'Dakota') {
    console.log(`${person.name} ${person.jobTitle} reports to ${person.boss}`);
  } else
  { console.log("Boss Dakota doesn't report ot anybody")
  }
});