// className
// classList

const first = document.getElementById('first');
const second = document.getElementById('second');
const third = document.getElementById('third');

const classValue = first.className;
// console.log(classValue);

second.className = 'colors text';

// third.classList.add('colors');
// third.classList.add('text');
third.classList.add('colors', 'text');

const classValue2 = third.classList;
console.log(classValue2);

third.classList.remove('text');

let result = third.classList.contains('text')
console.log(result);
