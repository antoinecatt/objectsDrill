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
};

for(let key in loopObj) {
  console.log(`${key}: ${loopObj[key]}`)
}

const menu = {
  meals: ['breakfast', 'second breakfast', 'elevenses', 'lunch', 'afternoon tea', 'dinner', 'supper']
};
console.log(menu.meals[3]);