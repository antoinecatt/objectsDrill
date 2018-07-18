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

}
  decodedWords: function(string) {
    let splitStr = string.split(' ');
      splitStr.forEach(function(str) {
        splitStr[0] === code[key]
        // if 1st letter = code.key
        //then value of the matched key will be the num -1 for index of the character
        //return the char
        code.a =
      // switch (string[0]) {
      // case 'a' :
      //   return string[1];
      // case 'b' :
      //   return string[2];
      // case 'c' :
      //   return string[3];
      // case 'd' :
      //   return string[4];
      // default :
      //   return ' ';

      }
    });
    return decoded.join('');
  }
};
decodedWords('brown');
//codeword: 'craft block argon meter bells brown croon droop',



console.log(code.decodedWords(code.codeword));
function createAnimal(type, size) {
  const validTypes = ['dog', 'cat'];
  if (!type || !size) throw new TypeError('Missing required attributes');
  if (!validTypes.includes(type)) throw new TypeError('Unknown animal type');

  return {
    type, size,
    speak: function() {
      return this.type === 'dog' ? 'Woof!' : 'Meow!';
    }
  };
}


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

console.log(code.decode('craft block argon meter bells brown croon droop'));

let Bilbo = ('Bilbo Baggins',  'bilbo',  'Hobbit',  'The Shire',  2,  1)

let Frodo = ('Frodo Baggins',  'frodo',  'Hobbit',  'The Shire',  3,  2)

let Aragorn = ('Aragorn son of Arathorn'   ,  'aragorn',  'Man',  'Dunnedain',  6,  8)

let Legolas = ('Legolas',  'legolas',  'Elf',  'Woodland Realm' ,  8,  5)

