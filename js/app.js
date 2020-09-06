// Callback functions, Higher Order Functions, Functions as First Class Objects/Citizens

function morning(name) {
  return `Good morning ${name.toUpperCase()}`;
}

function greet(name, cb) {
  const myName = 'Francisco';
  console.log(`${cb(name)}, my name is ${myName}`);
}

greet('bob', morning);
greet('peter', morning);
