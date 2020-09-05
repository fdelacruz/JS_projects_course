// Local Scope
// can not be accessed from outside code blocks
// if - NOT VAR

let name = 'bob';

function calculate() {
  const name = 'susy'
  const age = 25;
}
// console.log(age);

calculate()

if (true) {
  const name = 'anna'
}

console.log(`my name is ${name} and I'm awesome`);
