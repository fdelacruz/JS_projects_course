// Global Scope vs Local Scope
// any variable outside code block {} is said to be in Global Scope
// can be access anywhere in the program

let name = 'bob';
name = 'peter'

function calculate() {
  console.log(name);
  name = 'susy'
  function inner() {
    name = 'inner name value'
    console.log(`this is from inner function ${name}`);
  }
  inner()
}

calculate()

if (true) {
  console.log(name);
  name = 'anna'
}

console.log(`my name is ${name} and I'm awesome`);
