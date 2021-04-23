// Template Strings/Literals
// `` backticks
const name = 'bob'
const lastName = 'sanders'
const age = 50

// const phrase =
//   'My full name is ' + name + ' ' + lastName + " and I'm " + age + ' years old.'

const phrase2 = `My full name is ${name.toUpperCase()} ${lastName.toUpperCase()} and I'm ${age + 2} years old.`
console.log(phrase2)
