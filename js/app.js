// submit event listener
// prevent default
// how to get a value

const form = document.getElementById('form');
const name = document.getElementById('name');
const password = document.getElementById('password');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  console.log('form submitted');
  console.log('name:', name.value);
  console.log('password:', password.value);
});
