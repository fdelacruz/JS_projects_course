// find
// returns single instance, in this case, an object
// returns first match, if no match then undefined
// great for getting the unique value

const people = [
  {name: 'susy', age: 20, position: 'developer', id: 1},
  {name: 'peter', age: 25, position: 'designer', id: 2},
  {name: 'john', age: 35, position: 'devops', id: 3},
];

// const names = ['bob', 'peter', 'susy'];
// console.log(
//   names.find((name) => {
//     return name === 'bob'
//   }));

const person = people.find((person) => {
  return person.id === 3
});

console.log(person.name);

const person2 = people.filter((person) => {
  return person.id === 3
});

console.log(person2[0].name);
