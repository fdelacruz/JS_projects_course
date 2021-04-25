// for of - loops through the values of an iterable object
// String, Array, Map, Set, etc - NOT Objects
// unlike forEach - we can use break, continue

const fruits = ['apple', 'orange', 'banana', 'peach']
const longName = 'John Smith Peter II'
let shortName = ''

for (const letter of longName) {
  // console.log(letter);
  if (letter === ' ') {
    continue
  } else {
    shortName += letter
  }
}
console.log(shortName)

for (const fruit of fruits) {
  if (fruit === 'banana') {
    // break;
    continue
  }
  console.log(fruit)
}
