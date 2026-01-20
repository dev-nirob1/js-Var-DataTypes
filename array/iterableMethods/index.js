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
const devNameWithRole = developers.map((dev) => {
  dev["devNameRole"] = dev.name + dev.role;
  return dev; //added a new property to every element.
});
// console.log(devNameWithRole);
// const arr = [1, 2, 3, 4, 5];
// let total = 0;

// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
//   total = total + arr[i];
// }
// console.log(total);


// reduce() method 

// arr.reduce(
//   reducer(
//     accumulator,
//     currentValue,
//     index,
//     array
//   ),
//   initialValue
// )
// const sum = arr.reduce((acc, currentValue) =>{
//   return acc + currentValue;
// },0)
// console.log(sum);

const totalAge = developers.reduce((acc, currentValue) => {
  const sum = acc + currentValue.age;
  // console.log(sum);
return sum
},0)

const average = totalAge / developers.length;
// console.log(totalAge, average);

const frontDevTotalAge = developers.reduce((acc, currentElem)=>{
  if(currentElem.role === 'frontend') {
   return acc + currentElem.age
  }
  return acc;

}, 0);
// console.log(frontDevTotalAge);

const arr = [1, 2, 3, 4, 5];
const total = arr.reduce((acc, currenVal)=>{
  console.log(acc);
  return acc + currenVal
})
console.log(total);


