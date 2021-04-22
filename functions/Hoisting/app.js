// Hoisting
// function and var declarations are hoisted
// safer to access only after initialized

display();
console.log(display);

// console.log(firtName); // error
// console.log(lastName); // error
// console.log(random); // undefined

const firtName = 'john';
let lastName = 'jordan';
var random = 5;


function display() {
  console.log('hello world');
}
