// Closures

function newAccount (name, initialBalance) {
  let balance = initialBalance
  function showBalance () {
    console.log(`Balance: ${balance}`)
  }
  function deposit (amount) {
    balance += amount
    showBalance()
  }

  function withdraw (amount) {
    if (amount > balance) {
      console.log(`Hey, ${name}, sorry not enough funds.`)
      return
    }
    balance -= amount
    showBalance()
  }
  return {
    showBalance: showBalance,
    deposit: deposit,
    withdraw: withdraw
  }
}

const john = newAccount('john', 300)
const bob = newAccount('bob', 1000)

john.showBalance()
john.deposit(400)
john.deposit(1000)
bob.showBalance()
