// Make Soup
// Boil Water 10 min
// Chop Carrots
// Add Carrots, boil for 5 min
// Chop Onion
// Add Onion, boil for 5 min

const boilWater = time => {
  console.log('boiling...')
  for (let i = 0; i < time; i++) {
    console.log('still not done...')
  }
  console.log('done.')
}

boilWater(10000)
console.log('chop onion')
boilWater(5000)
console.log('chop carrot')
boilWater(5000)
