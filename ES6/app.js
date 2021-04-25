// new string methods
// starsWith(), endsWith(), includes(), repeat()

const person = 'Peter Smith'
const employee = '23456-EMP-PETER-SMITH'
const manager = '23456-MAN-JOHN-DOE'

// startsWith
console.log(person.startsWith('Pet'))
console.log(employee.startsWith('EMP', 6))

// endsWith
console.log(manager.endsWith('DOE'))
console.log(manager.endsWith('MAN', 9))

// includes
console.log(employee.includes('PETER'))

// repeat
const multiplyPeople = (person, amount = 5) => person.repeat(amount)
const people = multiplyPeople(person)
console.log(people)
