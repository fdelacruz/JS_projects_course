// Closures

function newAccount (name, initialBalance) {
  const balance = initialBalance
  function showBalance () {
    console.log(`Balance: ${balance}`)
  }
  return showBalance
}

newAccount('susan', 500)() // showBalance invoked
