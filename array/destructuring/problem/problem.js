// JavaScript Array & Destructuring Practice Problems

// 1. Given an array [5, 10, 15], create a copy using slice() and prove it is a new reference
const arr = [5, 10, 15];
const newArray = arr.slice(); //copy of original array
console.log(newArray === arr); //false means two array are different.

// 2. Destructure the first and third element from ['apple', 'banana', 'cherry'].

const fruits = ["apple", "banana", "cherry"];
const [apple, , cherry] = fruits; //skiping 2nd element by comma(,);

// 3. Use rest operator to extract first two values and keep the rest in a new array.
const salad = ["tomato", "cucumber", "carrot"];
const [tomato, cucumber, ...rest] = salad; //tomato and cucumber will get first two value of the array and rest of the value will be stored in rest variable.

// 4. Swap two variables using array destructuring.

let bablu = "Bablu";
let mia = "Mia";
[mia, bablu] = [bablu, mia]; //swaping two values
// console.log(mia, bablu);

// 5. Copy an array using spread operator and modify the copy without affecting the original.

const tech = ["js", "py", "node"];
const newTech = [...tech, "react"]; //spread operator copy the original array and we can add more element in new array seperate by comma(,).
// console.log(newTech);

// 6. Merge two arrays using spread operator.
const books = ["bangla", "english", "math"];
const pen = ["metador", "janani", "pencil"];
const penBook = [...pen, ...books]; //two array merge
// console.log(penBook);

// 7. Destructure nested array: [1, [2, 3], 4] to get 2 and 3.

const [, [two, three]] = [1, [2, 3], 4];
// console.log(two, three);

// 8. Use default values in array destructuring when value is missing.
    const database = ['mySql','mongodb', 'postgresql'];
    const [mySql, mongodb, postgres, oracle = 'oracle'] = database //if oracle is exist it will get the original element/data or it will assined to default value.
    // console.log(oracle);

// 9. Explain difference between rest operator and spread operator with examples.

// rest operator: it actually works with variables. like if there is an array with few data but i need couple of the from first but i want to hold rest of all data in an new array i use rest operator.
const fashion = ['shirt', 'pants', 'watch','sweater'];
const [shirt, pants, ...box] = fashion; // rest chaged to box cause already used ...rest in same File. here box will hold rest of the data and will return as an new array.
console.log(box);

// speead operator: spread operator expand data from original array without change original array. it actually used for copy the original array. we can marge two or more array using spread operator.and more importantly spread operator works with the value.
 const result = [80, 40, 50, 60]; 
 const roll = [1,2,3,4]
 const copyResult = [...result] //way of copy
 console.log(copyResult);
//  here is two different Array. 
const margedArray = [...result, ...roll];// way of marge 
console.log(margedArray);

// 10. Remove the last element using pop() and store the returned value.
const numb = [1, 2, 3, 4, 5];
const removedNum = numb.pop(); //removeNum will hold the removed element. pop also change original array.
// console.log(removedNum);
// console.log(numb);

// 11. Show why push() returns length and not index.
//    answer:  push() is mutable array method in js. it update original array. if we want to push any new data to an array we use push() method and it add element to the end of the original array. it update the array length and return the new length of the array.

//    example:
const nam = ["korim", "rohim", "chandu"];
const newLength = nam.push("rofik"); //newLength returns the original array updated length
// console.log(nam);

// 12. Destructure only the first product name from [['p1', 100], ['p2', 200]].

const [[fistProduct]] = [
  ["p1", 100],
  ["p2", 200],
];
// console.log(fistProduct);
