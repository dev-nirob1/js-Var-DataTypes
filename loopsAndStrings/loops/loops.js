// Loops is JS 
// Loops are used to execute a piece of code again and again 
// let variable = 'hello world';
//for loop
for (let i = 1; i <= 5; i++) {
    // initialization statement let i = 1
    // stoping condition i <= 5
    // updation i++
    // console.log(variable)
    // console.log('i =', i)
}
// calculat sum of 5 to 10
// let n = 5
for (let i = 5; i <= 10; i++) {
    // n = n + i
    // console.log(n);
}

// infinite loops: A Loops that never ends (never write infinite loops)

//while loop (it's suggest another syntex to write loops)
// while(condition(stoping condition)){
// initialization logic handles in outside of while loop block 
// updation in while loop block 
// }
// let i = 1
// let n = 0
// while(i<= 5){
//     n = n + i
//     i++
//     console.log(n);
// }

//do while loop
// it will run 1 time for sure, cause it checks condition after execute the code
// let i = 1
// do {
//     console.log('i =', i);
//     i++;
// } while (i <= 5);


//for of  and for in Loop (to iterate on on some speacial data types)
// for of loop
// it use for strings and arrays
// let str = 'helloWorld'
// no need to worry for initialization, updation or condition 
// let size = 0
// for(let val of str){ //iterator -> characters
//     console.log('value =', val);
//     size++
// }
// console.log('string size', size);


//for in loop (used for objects)
// let student = {
//     name: 'Nirob',
//     age: 22,
//     cgpa: 3.3,
//     isPass: true
// }

// for (let key in student) {
//     console.log('key =', key, 'value =', student[key]);
// }
