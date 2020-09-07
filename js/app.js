// forEach
// does not return array

const people = [
  {name: 'susy', age: 20, position: 'developer'},
  {name: 'peter', age: 25, position: 'designer'},
  {name: 'john', age: 35, position: 'devops'},
];

// function showPerson(person) {
//   console.log(person.position.toUpperCase());
// }

// people.forEach(showPerson);

people.forEach(function(item) {
  console.log(item.name.toUpperCase());
})
