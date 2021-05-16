// Module wrapper function
// (function (exports, require, modeul, __filename, __dirname) {

// })

console.log("REQUIRE---->", require); 


class Person {
  constructor(name, age) {
    this.name = name,
    this.age = age
  }

  greeting() {
    console.log(`Hey this is ${this.name} and he is ${this.age}`);
      //return `Hey this is ${this.name} and he is ${this.age}`;
    }
}

module.exports = Person;