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

# **UnderStanding Terms** #

- *AJAX (Asynchronous JavaScript and XML):*  A technique for making asynchronous requests to the server without reloading the page. Although originally designed for XML, it is now commonly used with JSON.
- *JSON (JavaScript Object Notation):* A lightweight data format for exchanging information between a server and a client. It is easy to read and write, and it is widely used in APIs.
- *json() method:* returns a second promise that resoles with the result of parsing the response body text as JSON. 
  - *Input:* JSON-formatted response from the server.
  - *Output:* A Javascript Object.

# **Request & Response** #

**HTTP Verbs**
- HTTP defines several request methods to interact with resources on a server:

| Method | Description |
|--------|-------------|
| GET | Retrieves data from a server (e.g., fetching a webpage or API data).|
| POST | Sends data to a server to create a new resource|
| PUT | Updates an existing resource or creates one if it doesn't exist.|
| PATCH | Partially updates an existing resource |
| DELETE | Removes a specified resource from the server |


**Response Status Codes**
HTTP response status codes indicate whether a request was successful or encountered  an issue.

**Common Status Codes**
- ==200 OK== Request was successful.
- ==201 Created== A new resource was created successfully
- ==204 No Content== Request was successfull but returned no data.
- ==400 Bad Request== Client send an invalid request.
- ==401 Unauthorized== Authentication is Required.
- ==403 Forbidden== Client does not have permission.
- ==404 Not Found== The requested resource does not exist.
- ==500 Internal Server Errror== A general server-side error occurred


# **HTTP Response Headers** #
*HTTP* Response headers also contain details about the responses, such as content type, HTTP status code etc. 
| Header | Description |
|--------|-------------|
| Content-Type | Specifies the media type (e.g., ==application/json==).|
| Cache-Control | Defines caching policies. |
| Access-Control-Allow-Origin | Specifies which domains can access the resource (CORS).|
| Authorization | Contains credentials for authentication. |