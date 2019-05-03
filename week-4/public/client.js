let x = 3;

postData("/log", {
    nodes: 42,
    mutation: x,
    generation: 100
  })
  .then(data => console.log(JSON.stringify(data))) // JSON-string from `response.json()` call
  .catch(error => console.error(error));

function postData(url, data) {
  // Default options are marked with *
  return fetch(url, {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      headers: {
        "Content-Type": "application/json",
        // "Content-Type": "application/x-www-form-urlencoded",
      },
      body: JSON.stringify(data), // body data type must match "Content-Type" header
    })
    .then(response => console.log(response.json())); // parses JSON response into native Javascript objects
}