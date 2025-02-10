const sum = (a, b) => {
    return a + b
}

const calculate = (a, b, sum) => {
    // console.log(sum(a, b));
}

// calculate(2, 3, sum) //sum function passed as an argument to calculate func

// alternatively you can pass a anonymous function callback fuction to caluculate function 
calculate(2, 3, (a, b) => {
    return a + b
})

// another example 

const hello = () => {
    // console.log('hello world')
}

setTimeout(() => {
    hello(); //The function inside setTimeout calls hello() after 3 seconds.
}, 3000)

setTimeout(hello, 3000) // directly passed the call back function to setTimeout cause it takes a callback function and a timeout.


// callbacks hell 
// -------------------------------

// const getData = (id) => {
//     setTimeout(() => {
//         console.log('getting data id', id);
//         setTimeout(()=>{
//             if(id){
//                 console.log('getting data', 2);
//             }else{
//                 console.log('no data found');
//             }
//         },2000)
//     }, 2000)
// }
// getData(1)

//getting multiple data
const getData = (id, nextData) => {
    setTimeout(() => {
        console.log('getting data', id);
        if (nextData) {
            nextData(); // Calls the next function in the sequence
        }
    }, 2000)
}

//nested callbacks
getData(1, () => {
    getData(2, () => {
        getData(3)
    })
})