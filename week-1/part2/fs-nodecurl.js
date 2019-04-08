//writing text to file
let url = process.argv[2];
let docdoc = '';

const axios = require('axios');
const fs = require('fs');

axios.get(url)
  .then(response => {
    console.log(url);
    // console.log(response.data);
    // console.log(typeof response.data); //its a string
    docdoc = response.data;
    fs.writeFile("/Users/AKG/girgit/DWD/week-1/part2/fsdoc.html", docdoc, function(err) {
      if (err) {
        return console.log(err);
      }

      console.log("The file was saved!");
    });
  })
  .catch(error => {
    console.log(error);
  });