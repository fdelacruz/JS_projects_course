// Functions, return, if, arrays, for loop

const gas = [20, 40, 100];
const food = [10, 40, 50];

function calculateTotal(arr) {
  let total = 0;
  for (let i = 0;i < arr.length; i++) {
    total += arr[i]
  }

  if (total > 100) {
    console.log(`Whoa! You are spending way too much`);
    return total
  }

  console.log(`You are good total is less than 100`);

  return total;
}

// gasTotal = calculateTotal(gas)
foodTotal = calculateTotal(food)

console.log({
  gas: gasTotal,
  food: foodTotal
});
