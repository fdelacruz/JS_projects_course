// Arrow Functions or Fat Arrow Functions
// no name, always expressions, assign to variable
// no function keyword

// function sayHi() {
//   console.log('hello');
// }
// sayHi()

// const hello = function(name) {
//   console.log(`Hello ${name}`);
// };
// hello('bob')

// function triple(val1, val2) {
//   return val1 * val2 * 3
// }
// triple()

const sayHi = () => console.log('hello there')
sayHi()

const double = value => value * 2
console.log(double(4))

const multiply = (num1, num2) => {
  const result = num1 * num2
  return result
}
const result = multiply(4, 6)
console.log(result)

// return object
const object = () => ({ name: 'john', age: 50 })
const person = object()
console.log(person)

// arrow functions as callbacks
const numbers = [1, 2, 3, 4, 5, 6]
const odds = numbers.filter(n => {
  return n % 2 === 0
})
console.log(odds)

const btn = document.querySelector('.btn')
btn.addEventListener('click', () => console.log('You clicked me!!'))
