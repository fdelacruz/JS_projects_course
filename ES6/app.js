// Rest Operator ...
// gathers/collects the items

// arrays
const fruits = ['apple', 'orange', 'lemon', 'banana', 'pear']
const [first, second, ...fruit] = fruits
// console.log(first, fruit)

// objects
const person = { name: 'john', lastName: 'smith', job: 'developer' }
const { job, ...rest } = person
// console.log(job, rest)

const testScores = [78, 90, 56, 43, 99, 65]

const getAverage = (name, ...scores) => {
  console.log(name)
  console.log(scores)
  let total = 0
  for (const score of scores) {
    total += score
  }
  console.log(`${name}'s average score is ${total / scores.length}`)
}

getAverage(person.name, ...testScores)
