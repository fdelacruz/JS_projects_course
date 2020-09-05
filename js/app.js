// Reference vs Value

let number = 7;
let number2 = number;
console.log(`the first value is ${number}`);
console.log(`the second value is ${number2}`);

let person = {name: 'bob'};
let person2 = person;

person2.name = 'susy'

console.log(`the name of the first parson is ${person.name}`);
console.log(`the name of the second parson is ${person2.name}`);
