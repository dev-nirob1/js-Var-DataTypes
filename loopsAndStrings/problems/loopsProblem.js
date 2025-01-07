// Qs1: Print all even numbers from 0 to 100
// for (let i = 0; i <= 100; i++) {
//     //    console.log('all number =', i);
//     if (i % 2 === 0) {
//         console.log('even number =', i);
//     }
// }

// using while loop
// let i = 0
// while (i <= 100) {
//     if (i % 2 === 0) {
//         console.log('even numbers =', i);
//     }
//     i++
// }

// Qs-2 Create a game where you start with any random game Number. that ask the user to keep guessing the game number until the user enters correct value. 
// console.log('hello world');
// let number = 10

// let userNumber = prompt('guess the number')

// while (userNumber != number) {
//     userNumber = prompt('You Entered Wrong Number , Guess again')
// }
// alert('Congratulation, you entered the correct number');

// Problem 1: Print a Number Triangle
// Write a program to print a triangle of numbers using a loop. The height of the triangle should be determined by a given number n.
// let n = 5
// let row = ''
// for(let i = 1; i<= n; i++){
//     row += i
//     console.log(row);
// }


// Problem 2: Sum of Multiples
// Write a program that calculates the sum of all multiples of 3 or 5 below a given number n.


// let n = 10
// let sumOfMultiples = 0
// for (let i = 0; i < n; i++) {
//     if (i % 3 === 0 || i % 5 === 0) {
//         sumOfMultiples += i

//         console.log('i =', i, 'sum =', sumOfMultiples);
//     }
// }


// Problem 3: Generate a Fibonacci Sequence
// Write a program to generate the first n numbers of the Fibonacci sequence using a loop.

let num = 7;
let a = 0;
let b = 1

for (let i = 1; i <= num; i++) {
    console.log(a);
        const nextNumber = a + b
        console.log(nextNumber);
        a = b
        b = nextNumber
}