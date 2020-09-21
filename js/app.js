// select element
// addEventListener()
// what, when, what to do

const btn = document.querySelector('.btn');
const heading = document.querySelector('h2');

btn.addEventListener('click', () => {
  heading.classList.add('red')
});
