const URL = 'https://jsonplaceholder.typicode.com/posts';
const postContainer = document.querySelector('.post-container')

//api call using async/await
// const getData = async()=>{
//     let response = await fetch(URL)
//     const data = await response.json()
//     console.log(data);
//     data.forEach((item, i)=>{
//         postContainer.innerHTML += `
//        <div class="post">
//         <h1>${item?.title}</h1>
//         <p>${item?.body}</p>
//        </div>
//         `; 
//     })
// }

//api call using promise chains

const getData = () => {
    fetch(URL)
        .then(res => res.json())
        .then(data => {
            data.forEach((item, i) => {
                postContainer.innerHTML += `
                   <div class="post">
                    <h1>${item?.title}</h1>
                    <p>${item?.body}</p>
                   </div>
                    `;
            })
        })
}
getData()