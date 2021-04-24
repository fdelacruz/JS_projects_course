// Destructuring Swap Variables
// faster/easier way to access/unpack values from arrays
// objects into variables
// Objects

const bob = {
  first: 'bob',
  last: 'sanders',
  city: 'chicago',
  siblings: {
    sister: 'jane'
  }
}

const { first: firstName, last, city } = bob
console.log(firstName, last, city)
