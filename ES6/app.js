// Spread Operator ...
// Allows an iterable to spread/expand individually inside receiver
// Split  into single items and copy them

const numbers = [4, 5, 6, 7, 8]
console.log(Math.max(...numbers))

const john = ['john', 'smith']

const sayHello = (firstName, lastName) => {
  console.log(`Hello ${firstName} ${lastName}`)
}

sayHello(...john)
