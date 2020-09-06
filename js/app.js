// Variable Lookup
// {} - code block

const globalNumber = 5;

function add(num1, num2) {
  const globalNumber = 20;
  const result = num1 + num2 + globalNumber;
  function multipy() {
    const globalNumber = 100;
    const multipyResult = result * globalNumber;
    console.log(multipyResult);
  }
  multipy()
  return result;
}

console.log(add(3,4));
