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
// console.log(salad[0]);

// using for loop 
for(let count = 0; count <= salad.length; count++){
    // console.log(`loop at index ${count} and the element is ${salad[count]}`);

}

//  add new element to Array (at the end)
salad.push('onion', 'vat');
// console.log(salad);

//  add new element to Array (at the start)
salad.unshift('jipali', 'samusa');
// console.log('after add element to start', salad);

//remove an element from array (from end)
salad.pop()
// console.log(salad.pop());
// console.log(salad);

// remove an element from start
// console.log(salad);
salad.shift()
// console.log(salad, salad.shift());

// copy and clone 
const copySalad = salad.slice();
// console.log(copySalad);
// console.log('original array',salad);
console.log(Array.isArray(copySalad));