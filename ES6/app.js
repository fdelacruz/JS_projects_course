// default parameters, arrow function gotchas
sayHi()

const john = 'John'
const peter = 'Peter'

function sayHi (person = 'Susan') {
  console.log(`Hi ${person}`)
}

sayHello(peter)
const sayHello = (person = 'Bob') => console.log(`Hello ${person}`)
