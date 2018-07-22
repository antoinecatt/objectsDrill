'use strict';
// creating an object method
const loaf = {
  flour : 300,
  water : 210,
  hydration:  function() {return (this.water / this.flour)* 100;}
};
console.log(loaf.hydration());

// Looping through an object
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

// Arrays in object
const menu = {
  meals: ['breakfast', 'second breakfast', 'elevenses', 'lunch', 'afternoon tea', 'dinner', 'supper']
};
console.log(menu.meals[3]);

// Array of objects
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

// Cracking the code
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
  }).join(' ');
};

console.log(decodedWords('craft block argon meter bells brown croon droop'));

// Factory functions
function createCharacter(name, nickName, race, origin, attack, defense) {
  return {
    name, nickName, race, origin, attack, defense,
    describe : function() {
      if(this.hasOwnProperty('weapon')) {
      return  `${this.name} is a ${this.race} of the ${this.origin} who uses a ${this.weapon}`
      } else {
      return `${this.name} is a ${this.race} from ${this.origin}`;
      }
    },
    evaluateFight: function(character, x, y) {
      x = character.attack;
      y = character.defense;

      if(this.defense > x) {
        return `Your opponent takes ${this.attack - y} damage and you receive 0 damage`;
      } else {
        return `Your opponent takes ${this.attack - y} damage and you receive ${x - this.defense} damage`;
      }
    },
    equipWeapon: function(weapon) {
      this['weapon'] = weapon;
    }
  };
}




let gandalf = createCharacter('Gandalf the White', 'gandalf', 'Wizard', 'Middle Earth', 10, 6 );
// console.log(Gandalf.evaluateFight());

let bilbo = createCharacter('Bilbo Baggins',  'bilbo', 'Hobbit',  'The Shire',  2,  1);
// console.log(Bilbo.evaluateFight());

let frodo = createCharacter('Frodo Baggins',  'frodo', 'Hobbit',  'The Shire',  3,  2);
// console.log(Frodo.evaluateFight()); 

let aragorn = createCharacter('Aragorn son of Arathorn', 'aragorn',  'Man',  'Dunnedain',  6,  8);
// console.log(Gandalf.evaluateFight());

let legolas = createCharacter('Legolas',  'legolas', 'Elf',  'Woodland Realm' ,  8,  5);
// console.log(Gandalf.evaluateFight());

let characters = [gandalf, bilbo, frodo, aragorn, legolas];

console.log(characters);
characters.find(function (character){
  if(character.nickName === 'aragorn'){
    console.log(character.describe());
  }
});
let hobbits = [];

characters.filter(function(character) {
  if(character.race === 'Hobbit') {
    hobbits.push(character);
  }
})

console.log(hobbits);

let atkMoreThan5 = []
characters.filter(function(character) {
  if(character.attack >= 5) {
    atkMoreThan5.push(character);
  }
})

console.log(atkMoreThan5);

gandalf.equipWeapon('staff');
console.log(gandalf);
console.log(gandalf.describe());
console.log(frodo.describe());