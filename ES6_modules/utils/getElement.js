const getElement = selection => {
  const element = document.querySelector(selection)
  if (element) {
    return element
  } else {
    throw Error('You did not select a valid element.')
  }
}

export default getElement
