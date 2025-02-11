// let promise = new Promise((resolve, reject)=>{
//     console.log('hello world')

//     reject('error')
// })
// console.log(promise);

// promise.then(res => {
//     console.log(res);
// })
// .catch(err => {
//     console.log(err);
// })

// const fetchData = ()=>{
//     let promise = new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             console.log('Data fetched successfully!');
//             resolve("Data fetched successfully!")
//         },2000)
//     })
//     return promise;
// }
// fetchData().then(res => console.log(res))

const getData = (id) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (id) {
                console.log('Data', id);
                resolve('success')
            }else{
                reject('Something went wrong')
            }
        }, 3000)
    })
}
// getData(1)
getData().then(res => {
    console.log(res);
}).catch(err => console.log(err))
