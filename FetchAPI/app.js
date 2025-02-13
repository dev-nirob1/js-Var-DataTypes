const URL = 'https://jsonplaceholder.org/posts'


const getData = async()=>{
    let response = await fetch(URL)
    const data = response.json()
    console.log(data);
}
getData()