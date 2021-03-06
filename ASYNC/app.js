// callbacks, promises, async/await
// must have async
// await waits till promise is settled
// error handling - try/catch

// async function someFunction () {
//   await ...
// }

// const otherFunction = async () => {
//   await ...
// }

const heading1 = document.querySelector('.one')
const heading2 = document.querySelector('.t')
const heading3 = document.querySelector('.three')
const btn = document.querySelector('.btn')

btn.addEventListener('click', async () => {
  try {
    await addColor(1000, heading1, 'red')
    await addColor(2000, heading2, 'green')
    await addColor(1000, heading3, 'blue')
  } catch (e) {
    console.log(e)
  }
})

const addColor = (time, element, color) => {
  return new Promise((resolve, reject) => {
    if (element) {
      setTimeout(() => {
        element.style.color = color
        resolve()
      }, time)
    } else {
      reject(new Error(`There is no such element ${element}`))
    }
  })
}

