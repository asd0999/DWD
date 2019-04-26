//running node with command line arguments

let url = process.argv[2];

const axios = require('axios');

axios.get(url)
  .then(response => {
    console.log(url);
    console.log(response.data);
  })
  .catch(error => {
    console.log(error);
  });