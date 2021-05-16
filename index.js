const Person = require('./person');
//import Person from './person'; <--- Babel needed for this syntax
const person = new Person('John', 35);
person.greeting();