// Make Soup
// Boil Water 10 min
// Chop Carrots
// Add Carrots, boil for 5 min
// Chop Onion
// Add Onion, boil for 5 min
// BROWSER!!! Fetch Data, Get Geolocation, setTimeout, setTimer, etc.
// callbacks, promises, async/await

const boilWater = time => {
  console.log('boiling...')
  setTimeout(() => {
    console.log('done.')
    console.log('add carrots')
    setTimeout(() => {
      console.log('carrots done')
      console.log('add onions')
      setTimeout(() => {
        console.log('onion done')
      }, 500)
    }, 5000)
    console.log('chop onion')
  }, 10000)
}

boilWater()
console.log('chop carrots')
