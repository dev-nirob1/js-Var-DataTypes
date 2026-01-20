// iterable methods

// filter() method
const developers = [
  {
    id: 1,
    name: "Rahim",
    age: 22,
    role: "frontend",
    salary: 35000,
    isActive: true,
  },
  {
    id: 2,
    name: "Karim",
    age: 28,
    role: "backend",
    salary: 45000,
    isActive: false,
  },
  {
    id: 3,
    name: "Hasan",
    age: 24,
    role: "fullstack",
    salary: 55000,
    isActive: true,
  },
  {
    id: 4,
    name: "Nabila",
    age: 21,
    role: "frontend",
    salary: 30000,
    isActive: true,
  },
];

const adult = developers.filter((elem) => {
  // filter users array er sob gulo element check korbe. then condition e jegulo true asbe segulo adult array te add hobe.
  return elem.age >= 18;
});
// console.log(adult);
const notAdult = developers.filter((dev) => {
  return dev.age < 18;
});
// console.log(notAdult);

// map() method

// const developers = [
//   {
//     id: 1,
//     name: "Rahim",
//     age: 22,
//     role: "frontend",
//     salary: 35000,
//     isActive: true
//   },
//   {
//     id: 2,
//     name: "Karim",
//     age: 28,
//     role: "backend",
//     salary: 45000,
//     isActive: false
//   },
//   {
//     id: 3,
//     name: "Hasan",
//     age: 24,
//     role: "fullstack",
//     salary: 55000,
//     isActive: true
//   },
//   {
//     id: 4,
//     name: "Nabila",
//     age: 21,
//     role: "frontend",
//     salary: 30000,
//     isActive: true
//   }
// ];

const frontendDeveloper = developers.map((data) => {
  return data.role == "frontend" && data.name; //returned map() array will have same length as original array;
  //array transform korte map use kora hoy 
});
// console.log(frontendDeveloper);
const devNameWithRole = developers.map(dev => {
    dev['devNameRole'] = dev.name + dev.role;
    return dev //added a new property to every element.
})
console.log(devNameWithRole);
