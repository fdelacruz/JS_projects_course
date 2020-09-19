// createElement('element')
// createTextNode('text content')
// element.appendChild('childElement')

const result = document.querySelector('#result');

// create empty element
const bodyDiv = document.createElement('div');

// create text node
const text = document.createTextNode('a simple body div');
bodyDiv.appendChild(text);
document.body.appendChild(bodyDiv);

const heading = document.createElement('h2');
const headingText = document.createTextNode("i'm a dynamic heading");
heading.appendChild(headingText)
document.body.appendChild(heading)
heading.classList.add('blue')

console.log(heading.firstChild);
