// Closures
// closures give you an access to an outer function's scope from an inner function
// make private variables with closures

function outer() {
  let privateVar = 'secret';

  function inner() {
    console.log(`hello there secret is: ${privateVar}`);
  }
  return inner;
}

outer()(); // invoking inner
