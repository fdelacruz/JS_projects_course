// Web Storage API - provided by the browser
// session storage , local storage
// setItem, getItem, removeItem, clear

localStorage.setItem('name', 'francisco');
localStorage.setItem('lastName', 'de la cruz');
localStorage.setItem('ss', '555-55-5555')
// sessionStorage.setItem('name', 'francisco');

const name = localStorage.getItem('name');
console.log(name);
localStorage.removeItem('ss')
localStorage.clear()
