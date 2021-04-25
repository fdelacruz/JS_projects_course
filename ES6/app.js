// Spread Operator ...
// Allows an iterable to spread/expand individually inside receiver
// Split  into single items and copy them
// ES2018 - ES8

const person = { name: 'john', job: 'developer' }
const newPerson = { ...person, age: 50, name: 'francisco' }
console.log(newPerson)
