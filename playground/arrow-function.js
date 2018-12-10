var square = (x) => {
  var result = x * x;
  return result;
};
var square2 = x => x * x;

console.log(square(9));
console.log(square2(3));

var user = {
  name: 'Graham',
  sayHi: () => {
    console.log(arguments);
    console.log(`Hi. I'm ${this.name}`);
    // this is undefined as this is not bound
    // when using arrow functions
  },
  sayHiAlt () {
    console.log(arguments);
    console.log(`Hi. I'm ${this.name}`);
    // This is shorthand ES6 notation for a regular
    // function where this can be used.
  }
};

user.sayHiAlt(1, 2, 3);
