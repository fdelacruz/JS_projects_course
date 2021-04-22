// IIFE Immediately-Invoked Function Expression
// older approach - new Modules
// simple approach to avoid global pollution
// good way at protecting the scope of  your function 
// and the variables within in.

// global namespace, extra steps

(function () {
  const num1 = 30;
  const num2 = 50;
  console.log(`the result is: ${num1 + num2}`);
})();

// pass arguments
(function (num3, num4) {
  const num1 = 30;
  const num2 = 50;
  console.log(`the result is: ${num1 + num2}`);
})(30, 50);

// return value
const result = (function () {
  const num1 = 30;
  const num2 = 50;

  return num1 + num2;
})();

console.log(`the result is: ${result}`);
