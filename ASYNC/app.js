// callbacks, promises, async/await
// Promises - Pending, Resolved, Rejected
// then catch - pass another callback

// const heading1 = document.querySelector('.one')
// const heading2 = document.querySelector('.two')
// const heading3 = document.querySelector('.three')
const btn = document.querySelector('.btn')
const container = document.querySelector('.img-container')
const url = 'https://source.unsplash.com/random'

btn.addEventListener('click', () => {
  loadImage(url)
    .then(data => container.appendChild(data))
    .catch(err => console.log(err))
})

const loadImage = url => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.addEventListener('load', () => {
      resolve(img)
    })
    img.addEventListener('error', () => {
      reject(new Error(`Failed to load image from the source: ${url}`))
    })
    img.src = url
  })
}
