const showPeople = (people) => {
  const newPerson = people
    .map(person => {
      const { name, job } = person
      return `<p>${name} <strong>${job}</strong></p>`
    })
    .join('')
  return newPerson
}

export default showPeople
