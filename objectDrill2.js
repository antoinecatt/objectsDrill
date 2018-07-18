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
  a: 1,
  b: 2,
  c: 3,
  d: 4,
};

const decodedWords = function(string) {
  let splitStr = string.split(' ');
  return splitStr.map(function(str) {
    let firstLetter = str[0];
    let locationInWord = code[firstLetter];
    let letter = str[locationInWord];
    if(letter === undefined) {
      return ' ' ;
    } else
    {
      return letter;
    }
  }).join('');
};

console.log(decodedWords('craft block argon meter bells brown croon droop'));



// console.log(code.decodedWords(code.codeword));
// function createAnimal(type, size) {
//   const validTypes = ['dog', 'cat'];
//   if (!type || !size) throw new TypeError('Missing required attributes');
//   if (!validTypes.includes(type)) throw new TypeError('Unknown animal type');

//   return {
//     type, size,
//     speak: function() {
//       return this.type === 'dog' ? 'Woof!' : 'Meow!';
//     }
//   };
// }


function createCharacter(name, nickName, race, origin, attack, defense) {

  return {
    name, nickName, race, origin, attack, defense,
    describe : function() {
      return  `${this.name} is a ${this.race} from ${this.origin}`;
    }
  };
}

let Gandalf = createCharacter('Gandalf the White', 'gandalf', 'Wizard', 'Middle Earth' , 10, 6 );
console.log(Gandalf.describe());

let Bilbo = ('Bilbo Baggins',  'bilbo',  'Hobbit',  'The Shire',  2,  1);

let Frodo = ('Frodo Baggins',  'frodo',  'Hobbit',  'The Shire',  3,  2);

let Aragorn = ('Aragorn son of Arathorn'   ,  'aragorn',  'Man',  'Dunnedain',  6,  8);

let Legolas = ('Legolas',  'legolas',  'Elf',  'Woodland Realm' ,  8,  5);
