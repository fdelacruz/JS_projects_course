// Select the element or group of elements that we want
// Decide the effect we want to apply to the  selection

// childNodes = return all childNodes including whitespace which is treated as a text node

// children
// firstChild
// lastChild

const result = document.querySelector('#result');
const allChildren = result.childNodes;
// console.log(allChildren);

// console.log(result.children);
console.log(result.children);

console.log(result.firstChild);   // whitespace
console.log(result.lastChild);
