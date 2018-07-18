'use strict';

function createCharacter(name, nickName, race, origin, attack, defense) {

  return {
    name, nickName, race, origin, attack, defense,
    describe : function() {
      return  `${this.name} is a ${this.race} from ${this.origin}`;
    }
  };
}

let Gandalf = createCharacter('Gandalf the White', 'gandalf', 'Wizard', 'Middle Earth' , 10, 6 );
let Bilbo = ('Bilbo Baggins',  'bilbo',  'Hobbit',  'The Shire',  2,  1);
let Frodo = ('Frodo Baggins',  'frodo',  'Hobbit',  'The Shire',  3,  2);
let Aragorn = ('Aragorn son of Arathorn'   ,  'aragorn',  'Man',  'Dunnedain',  6,  8);
let Legolas = ('Legolas',  'legolas',  'Elf',  'Woodland Realm' ,  8,  5);
console.log(Gandalf.describe());
console.log(Bilbo.describe());
console.log(Legolas.describe());

