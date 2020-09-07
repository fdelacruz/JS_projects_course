// filter
// does return a new array
// can manipulate the size of the new array
// returs based on condition

const people = [
  {name: 'susy', age: 20, position: 'developer'},
  {name: 'peter', age: 25, position: 'designer'},
  {name: 'john', age: 35, position: 'devops'},
];

const youngPeople = people.filter((person) => {
  return person.age <= 25
});

const developer = people.filter((person) => {
  return person.position == 'developer'
});

console.log(youngPeople);
