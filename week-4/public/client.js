let x = 3;

postData("/log", {
    nodes: 42,
    mutation: x,
    generation: 100
  })
  // .then(data => console.log(JSON.stringify(data))) // JSON-string from `response.json()` call
  .catch(error => console.error(error));

function postData(url, data) {
  console.log(url, data);
  return fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    })
    .then(response => console.log(response.json()));

}