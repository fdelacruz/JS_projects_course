// Array.from and Array.of - NOT ON THE PROTOTYPE
// Array.from
// Array.of
// from - returns Array Object from any object with a length property of
// an iterable object
// from turns array-like/ish into Array - String, Nodelist, Set

const p = document.querySelectorAll('p')
const result = document.getElementById('result')

// let newText = Array.from(p);
// newText = newText.map(item => `<span>${item.textContent}</span>`)
//   .join(' ')
// result.innerHTML = newText

// short version
const text = Array.from(document.querySelectorAll('p'), item => {
  return `<span>${item.textContent}</span>`
}).join(' ')

result.innerHTML = text
