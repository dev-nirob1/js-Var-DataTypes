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
    for (let i = 0; i< arr.length; i++){
        sum = sum + arr[i]
    }
    return sum
}

const result = sumArray([2, 4, 6, 8])
console.log(result);