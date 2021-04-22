// var, let , const
// define, update, redefine
// const cannot mutate primitive type

// define
var number = 100
console.log(number)
// update
number = 200
console.log(number)
// redefine
var number = 'orange'
console.log(number)

let amount = 100;
console.log(amount);
amount = 200
// console.log(amount);
// let amount = 'orange' // Error, no redefine for let

const total = 100;
console.log(total);
// total = 200 // Error, no update for const

const person = {name: 'bob'};
person.name = 'rolf'
console.log(person.name);
