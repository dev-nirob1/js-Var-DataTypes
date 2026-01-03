// concat() method 
const first = [1,2,3];
const second = [4,5,6];
const marged = first.concat(second)
// console.log(marged);
const third = [7,8,8]

// marge multiple array 
const margedMulti = marged.concat(first, second, third)
// console.log(margedMulti);

// join() method 

const num = [1,2,3]
const result = num.join() //join element by comma(,)
const separator = num.join('-') //separte element by (-)
const arr = ['hello'] // empty array ba ekta element thakle sekkhetre separator kaj korbe na 
const empArr = arr.join('-')
// console.log(empArr);

// fill() method 
const colors = ['red', 'blue', 'yellow', 'green'];
const fillMode = colors.fill('pink') //sob gulo element 'pink' diye fil hobe
const col = colors.fill('redBlu', 0, 2) //0 index theke 2index er age projonto fill hobe. karon endIndex count hoyona
//jodi last end index na deya hoy tahole array er length porjonto fill hobe.
// console.log(col);

// includes() method 
const nam = ['jimu', 'sayaf', 'porosh', 'talha'];
const acheNakiNai = nam.includes('porosh')
// console.log(acheNakiNai);

const phones = ['nokia', 'samsung', 'realme', '1', 'pexels', '1'];
const indexNum = phones.indexOf('1')
const lastIndexNum = phones.lastIndexOf('1');
// console.log(lastIndexNum);

// reverse() method 
const numbers = [1,2,3,4];
numbers.reverse()
// console.log(numbers);

// sort() method 


