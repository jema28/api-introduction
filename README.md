# API Introduction

## What is an API?

An API is the way applications speak to each other.

API calls follow a request/response pattern. We request information and we receive that information as a response. Every time we open a browser, or go to a website we are making a request to a server and what we see is the response from the server.

This week we'll be looking at your personal applications and at other applications and getting information from them. We will be querying others APIs for now but later, when we have our own servers, we will be querying our own.

Typical example of website using an external API of this type - ask the class for examples. e.g. trivago / comparison websites

## Fetch API

Fetch is a way of making API calls. It takes a url:
```
https://api.github.com/users/chriscoyier/repos
```

The first part (`https://api.github.com`) - domain name - is like the address of a block of flats. The second part (`users/chriscoyier/repos`) is what we call an endpoint; this specifies a specific flat. The fetch function goes to the address that we give it and asks for information at that address.

By default the Fetch API uses the GET method e.g.

```js
fetch('https://api.github.com/users/chriscoyier/repos')
  .then(response => {
    // here we're turning the response into JSON.
    return response.json();
  })
  .then(data => {
    // Here's a list of repos!
    console.log(data);
  })
  .catch(error => {
    console.log(error);
  })
```

Note: There are different HTTP methods other than GET. HTTP (Hypertext Transfer Protocol) is the way data is requested and provided on the internet.

**GET:** gets resources such as HTML, JS, CSS.
**POST:** sends data to a server in the body of the request. The type of data is stored in the `Content-Type` header.
**PUT:** creating or updating data (overwriting data if it already exists).
**DELETE:** deletes data.

#### JSON
JSON is a lightweight format that allows data to be transferred across the web by using key-value pairs. When we send information between applications it needs to be packaged up, and unpackaged when it is received. We do this using `JSON.stringify()` to package and `JSON.parse()` to unpackage.

### Exercise: write a fetch request that lists your repos

Let's inspect the `response` object we receive in more depth:

- Type/copy the following into the console:
```js
fetch('https://api.github.com/users/<githubhandle>/repos')
  .then(function(data) {
    console.log(data);
  })
  .catch(function(error) {
    console.log(error);
  })
```

Note:
- `Response.body` is a readable stream of the response's body

- `Response.headers` HTTP headers allow the client and the server to pass additional information with the request or the response. An example are status codes.

Status codes tell us if a request was successful. The main groups are:
2: Success codes. e.g. `200`
3: Redirection e.g. `302`
4: Error, Unfound e.g. `404`
5: Server Error e.g. `500`

### Fix a broken API request

- Clone the repo and open `fix-broken-request/index.html` in the browser. You will see that the API request is not working.
- Open `main.js` and fix the broken code 😎


