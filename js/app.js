// allows select dynamic element
// event propagation - order the events are fired
// event bubbling - clicked element first the bubbles up -- default

const container = document.querySelector('.container') ;
const btn = document.querySelector('.btn') ;
// const heading = document.querySelector('.heading') ;
// console.log(heading);

btn.addEventListener('click', () => {
  const element = document.createElement('h1');
  element.classList.add('heading');
  element.textContent = `i'm inside the container`;
  container.appendChild(element);
});

container.addEventListener('click', (e) => {
  if (e.target.classList.contains('heading')) {
    console.log('click');
  }
});

// heading.addEventListener('click', () => {
//   console.log('click');
// })
