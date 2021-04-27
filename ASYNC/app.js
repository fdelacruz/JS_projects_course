// Make Soup
// Boil Water 10 min
// Chop Carrots
// Add Carrots, boil for 5 min
// Chop Onion
// Add Onion, boil for 5 min
// BROWSER!!! Fetch Data, Get Geolocation, setTimeout, setTimer, etc.

const boilWater = time => {
  console.log('boiling...')
  setTimeout(() => {
    console.log('done.')
  }, time)
}

boilWater(10000)
console.log('chop carrots')
