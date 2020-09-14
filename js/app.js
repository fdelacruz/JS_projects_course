// Select the element or group of elements that we want
// Decide the effect we want to apply to the  selection

// getElementsByTagName('tagname');

// node-list = array-like object
// index, length property but not array methods

const headings = document.getElementsByTagName('h2');
headings[0].style.color = 'red';
// console.log(headings.length);

const items = document.getElementsByTagName('li');
// items.forEach((item) => {
//   console.log(item);
// });

items[2].style.color = 'orange';

const listItems = [...items];

listItems.forEach((item) => {
  console.log(item);
});

console.log(items);
console.log(listItems);

