# **Fetch API** #
- The Fetch API provides an interface for fetching (sending/recieving) resources from server. It is built on Promises and provides a more powerful and flexible alternative to XMLHttpRequest.

**Key Features:**
- Uses Request and Response objects for handling HTTP requests and responses.
- The fetch() method is used to retrieve resources asynchronously.
- Supports various HTTP methods like GET, POST, PUT, DELETE, etc.
- Returns a Promise that resolves to a Response object.

==API== Applications Programming Interfaces.

```
let promise = fetch(url, [options])
```
- url: The endpoint from which data is fetched.
- options: (Optional) An object containing request configurations such as method, headers, body, etc.

**Basic Example**
```
fetch('https://api.example.com/data')
  .then(response => response.json()) // Convert response to JSON
  .then(data => console.log(data))    // Handle the data
  .catch(error => console.error('Error:', error)); // Handle errors
```