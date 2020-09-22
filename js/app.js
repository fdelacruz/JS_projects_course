// currentTarget - always refers to the element to which the event handler
// had been attached to
// target - identifies the element on which the event occured

   
const btns = document.querySelectorAll('.btn');
btns.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    // console.log(e.currentTarget);
    // e.currentTarget.style.background = 'black';
    console.log('target', e.target);
    e.target.style.background = 'black'
  });
});
