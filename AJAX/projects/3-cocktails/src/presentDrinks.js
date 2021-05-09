import fetchDrinks from './fetchDrinks.js'
import displayDrinks from './displayDrinks.js'

const showDrink = async url => {
  // fetch drinks
  const data = await fetchDrinks(url)

  // display drinks
  const section = await displayDrinks(data)
}

export default showDrink
