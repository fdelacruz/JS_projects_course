// var, let , const
// let, const - blocked scoped {} - anything within {}
// var - function scoped

// global scope
var amount = 100

function greet() {
  // local scope
  var random = 'some random value'
  console.log(`hello there ${amount} ${random}`);
}

// console.log(random);

// greet()

let total = 1000
let test = true

if (test) {
  // local scope
  let total = 2000
  let value = 3000;
  console.log('hello there');
}
// console.log(value);
console.log(total);
