function checkType(value) {

    const type = typeof value
    if (Array.isArray(value)) {
        return 'array'
    }
    else {
        return type
    }
}

const val = checkType(4)
// console.log(val);

// 2.Write a function that takes an array of numbers as input and returns a new array with each number doubled, using .map().
function doubleArray(arr) {
    const doubledNumber = arr.map(num => num * 2)
    return doubledNumber
}

const newArray = doubleArray([2, 4, 6, 8])
//  3. console.log(newArray);

// how to check array type

const arr = [2, 4, 6, 8]
const type = Array.isArray(arr)
// console.log(type)

// 4.Write a function that takes an array of numbers and returns the sum of all the numbers using a loop.

function sumArray(arr) {
    let sum = 0
    for (let i = 0; i < arr.length; i++) {
        sum = sum + arr[i]
    }
    return sum
}

const result = sumArray([2, 4, 6, 8])
// console.log(result);

// 5.Write a function that compares two inputs and returns:

// "Loosely Equal" if they are equal using ==
// "Strictly Equal" if they are equal using ===
// "Not Equal" if neither condition is true

function compareValues(a, b) {
    if (a === b) {
        return "Strictly Equal"
    } else if (a == b) {
        return "Loosely Equal"
    } else {
        return "Not Equal"
    }
}

const res = compareValues(4, 4)
// console.log(res);


// 6.Write a function that accepts an object and logs all its keys and values using a for...in loop.
function logObjectProperties(obj) {
    for (let key in obj) {
        // console.log('key = ', key);
        // console.log('value = ', obj[key])
        //  return ('key', key, 'value = ', obj[key])
    }
}

const keyValue = logObjectProperties({ name: 'nirob', age: 20, coder: true })
// console.log(keyValue);

// let num = -3;

// let ress = num === 0 ? "Zero" : num % 2 === 0 ? "Even" : "Odd"; rewrite to if-else statement

// if (num === 0) {
//     return 'Zero'
// } else if (num % 2 === 0) {
//     return 'Even'
// }
// else {
//     return 'Odd'
// }
// Write a function using a ternary operator to classify a number into one of these categories:

// "Positive Even"
// "Positive Odd"
// "Negative Even"
// "Negative Odd"
// "Zero"

function classifyNumber(num) {
    // Implement using ternary logic
   return (num > 0 && num % 2 === 0) ? 'Positive Even' : 'Positive Odd'? (num < 0 && num % 2 === 0) ? 'Nagative Even' : 'Nagative Odd' : 'Zero'

}
console.log(classifyNumber(0))