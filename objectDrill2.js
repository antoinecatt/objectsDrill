'use strict';

const loaf = {
  flour : 300,
  water : 210,
  hydration:  function() {return (this.water / this.flour)* 100;}
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
  console.log(`${key}: ${loopObj[key]}`);
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
  } else { 
    console.log('Boss Dakota doesn\'t report ot anybody');
  }
});

const code = {
  a: 2,
  b: 3,
  c: 4,
  d: 5,
  decode: function(words) {
    let decoded = [];
    // split the sentence into individual words
    let split = words.split(' ');
    // loop through each word
    split.forEach(word => {
      // store the first character of each word
      let firstChar = word.charAt(0);
      // compare the first character of each word to a
      if(firstChar === 'a') {
        decoded.push(word[1]);      
      }
      // compare the first character of each word to b
      if(firstChar === 'b') {
        decoded.push(word[2]);    
      }
      // compare the first character of each word to c
      if(firstChar === 'c') {
        decoded.push(word[3]);     
      }
      // compare the first character of each word to d
      if(firstChar === 'd') {
        decoded.push(word[4]);
      }
    });
    return decoded.join('');
  }
};

console.log(code.decode('craft block argon meter bells brown croon droop'));