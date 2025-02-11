# **Synchronous (Blocking code)** #
Means the code runs in a particular sequence of instructinos given in the program. Each instruction waits for the previous instruction to complete it's execution.

- Code runs line by line, one after another.
- Each operation must complete before the next one starts.
- If an operation takes time, it blocks the execution of the rest of the program.

# **Asynchronous (Non-Blocking code)** #
Due to synchronous programming, sometimes important instructions get blocked due to some previous instructions, which causes a delay in the UI. Asynchronous code execution allows to execute next instructions immediately and doesn't block the flow.

- JavaScript doesn't wait for an operation to complete before moving to the next one.
- Time-consuming tasks (like API calls, file reading, database queries, etc.) execute in the background.
- Once they are done, JavaScript comes back to handle the result.



# **Promises and CallBacks** #

**CallBacks** A callback function is a function passed into another function as an argument, which is then invoked inside the outer function to complete some kind of routine or action. A Callback is a function passed as an argument to another function.

```
const hello = () => {
    console.log('hello world')
}
setTimeout(hello, 3000) //directly passed hello function as an argument to setTimeout and the function will execute after 3s.

//alternative

setTimeout(()=>{
    //pass a anonymous function 
    console.log('hello world)
}, 2000);
```

**Callback Hell**
- Nested callbacks stacked below one another forming a pyramid structure (also known as Pyramid of Doom) . This style of programming becomes difficult to understand and manage.

*Problems of nested callbacks*
    - Too many nested callbacks.
    - Hard to debug and scale.
    - Becomes unmanageable with more async operations.

```
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
```


**Promises =>** A Promise is an object representing the eventual completion or failure of an asynchronous operation. 

- A Promise can be in one of three states:

1. Pending – The initial state, before the operation completes.
2. Fulfilled – The operation was successful, and .then() is called.
3. Rejected – The operation failed, and .catch() is called.

```
const fetchData = new Promise((resolve, reject) => {
    setTimeout(() => {
        let success = true; // "✅ Data fetched successfully!"
       // let success = false;  "Error: Failed to fetch data."
        if (success) {
            resolve("Data fetched successfully!");
        } else {
            reject("Error: Failed to fetch data.");
        }
    }, 2000);
});

// Handling promise
fetchData
    .then(result => console.log(result))  // If resolved
    .catch(error => console.error(error)); // If rejected

```