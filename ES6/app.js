// Spread Operator ...
// Allows an iterable to spread/expand individually inside receiver
// Split  into single items and copy them

const udemy = 'udemy';
const letters = [...udemy];
// console.log(letters);

const boys = ['john', 'peter', 'bob'];
const girls = ['susan', 'anna'];
const bestFriend = 'arnold';

const friends = [...boys, ...girls, bestFriend];
// console.log(friends);

const newFriends = [...friends];
newFriends[0] = 'karina'
console.log(friends);
console.log(newFriends);
