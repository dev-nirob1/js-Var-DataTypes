    // iterable methods 
    
    // filter() method

const users = [
  { name: 'Rahim', age: 17 },
  { name: 'Karim', age: 22 },
  { name: 'Hasan', age: 19 }
];
const adult = users.filter((elem) => {
    // filter users array er sob gulo element check korbe. then condition e jegulo true asbe segulo adult array te add hobe.
    return elem.age >=18;
})
console.log(adult);