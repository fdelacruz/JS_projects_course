// Array.from and Array.of - NOT ON THE PROTOTYPE
// Array.from
// Array.of
// from - returns Array Object from any object with a length property of
// an iterable object
// from turns array-like/ish into Array - String, Nodelist, Set

const udemy = 'udemy'
// console.log(Array.from(udemy))

function countTotal () {
  // console.log(arguments)
  const total = Array.from(arguments).reduce(
    (total, currNum) => (total += currNum),
    0
  )
  console.log(total)
}

countTotal(67, 89, 54)
