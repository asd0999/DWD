//running node with command line arguments
let url = process.argv[2];
let docdoc = '';

const axios = require('axios');
const fs = require('fs');

axios.get(url)
  .then(response => {
    console.log(url);
    // console.log(response.data);
    docdoc = response.data;
  })
  .catch(error => {
    console.log(error);
  });

fs.writeFile("/Users/AKG/girgit/DWD/week-1/fsdoc.txt", docdoc, function(err) {
  if (err) {
    return console.log(err);
  }

  console.log("The file was saved!");
});

///Users/AKG/girgit/DWD/week-1/