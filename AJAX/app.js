const btn = document.querySelector('.btn')
btn.addEventListener('click', () => {
  getData()
})

const getData = () => {
  const xhr = new XMLHttpRequest()
  console.log(xhr)

  xhr.open('GET', './api/sample.txt')
  xhr.onreadystatechange = () => {
    if (xhr.readyState === 4 && xhr.status === 200) {
      const text = document.createElement('p')
      text.textContent = xhr.responseText
      document.body.appendChild(text)
    } else {
      console.log({
        status: xhr.status,
        text: xhr.statusText,
        state: xhr.readyState
      })
    }
  }
  xhr.send()
}
