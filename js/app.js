// Arras and for loops

const names = ['anna', 'susy', 'bobby'];
const lastName = 'foobar';

let newArray = [];

// for loop
for (let i = 0; i < names.length; i++) {
  console.log(i);
  console.log(names[i]);
  const fullNames =  `${names[i]} ${lastName}`;
  console.log(fullNames);
  newArray.push(fullNames)
}
console.log(names);
console.log(newArray);
