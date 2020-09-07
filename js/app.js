// map
// does return a new array
// does not change size of original array
// uses values from original array when making new one

const people = [
  {name: 'susy', age: 20, position: 'developer'},
  {name: 'peter', age: 25, position: 'designer'},
  {name: 'john', age: 35, position: 'devops'},
];

const ages = people.map(function(person) {
  return person.age
});

const newPeople = people.map(function(person) {
  return {
    firstName: person.name,
    oldAge: person.age + 20
  };
});

const names = people.map(function(person) {
  return `<h1>${person.name}</h1>`
});

document.body.innerHTML = names.join('')

// console.log(names);
