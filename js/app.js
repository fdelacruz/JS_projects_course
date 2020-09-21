// event object argument e, evt
// info about triggered event
// event.type
// event.currentTarget
// this keyword
// preventDefault() - prevents default behaviour

const heading = document.querySelector('h1');
const btn = document.querySelector('.btn');
const link = document.getElementById('link');

heading.addEventListener('click', (e) => {
  console.log(e.currentTarget);
});

btn.addEventListener('click', (e) => {
  e.currentTarget.classList.add('blue')
  console.log(e.type);
});

link.addEventListener('click', (e) => {
  e.preventDefault();
})
