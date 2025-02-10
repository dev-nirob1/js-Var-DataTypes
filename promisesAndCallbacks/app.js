// synchronous
const synchronous = () => {
    console.log('one')
    console.log('two')
    console.log('three')
}
// synchronous()

// asynchronous

const asynchronous = ()=>{
    console.log('asynchronous js')
    setTimeout(() => {
        console.log('Hello world after 3s');// will execute after 3s for timeout
    }, 3000);
    console.log('three');
}
asynchronous();

