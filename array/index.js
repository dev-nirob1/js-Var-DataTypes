// array creation using literal and constructor 

const num = [10, 20, 39, 40];
const newNum = new Array(10,20,39,40)
// console.log(num);
// console.log(newNum);
// console.log(num === newNum);
const arr = new Array(2)
const arr1 = new Array(1,2)
// console.log(arr.length, arr1);

// console.log(new Array("a"));


// how to get element from an array 
const salad = ['tomato', 'carrot', 'cucumber', 'chili']
const len = salad.length
// console.log(len);
// console.log(salad[len -2]);
// using index
console.log(salad[0]);
console.log(salad["tomato"]);

// using for loop 
for(let count = 0; count <= salad.length; count++){
    console.log(`loop at index ${count} and the element is ${salad[count]}`);
}