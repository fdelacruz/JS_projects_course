// allows select dynamic element
// event propagation - order the events are fired
// event bubbling - clicked element first the bubbles up -- default
// event capturing - fires at the root and fires until reaches target

const container = document.querySelector('.container');
const list = document.querySelector('.list-items');

function showBubbling(e) {
  console.log('current target', e.currentTarget);
  console.log('target', e.target);
  if (e.target.classList.contains('link')) {
    console.log('link clicked');
  }
}

function stopPropagation(e) {
  console.log('clicked');
  e.stopPropagation();
}

list.addEventListener('click', showBubbling, {capture: true})
container.addEventListener('click', showBubbling, {capture: true})
document.addEventListener('click', showBubbling, {capture: true})
window.addEventListener('click', showBubbling, {capture: true})
