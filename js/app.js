// reduce
// iterates, callback function
// reduces to a single value = number, array, object
// 1 parameter ('acc') = total of all calculations
// 2 parameter ('curr') = current iteration/value

const people = [
  {name: 'susy', age: 20, position: 'developer', id: 1, salary: 200},
  {name: 'peter', age: 25, position: 'designer', id: 2, salary: 300},
  {name: 'john', age: 35, position: 'devops', id: 3, salary: 400},
  {name: 'anna', age: 45, position: 'manager', id: 4, salary: 500},
];

const total = people.reduce((acc, currItem) => {
  console.log(`total ${acc}`);
  console.log(`current item: ${currItem.salary}`);
  acc += currItem.salary;

  return acc;
}, 0);

console.log(total);
