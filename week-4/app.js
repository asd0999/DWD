//test fetch post request example

var express = require('express');
var app = express();
app.use(express.static('./public'));

var bodyParser = require("body-parser");
const url = require('url');
const path = require('path');

app.use(bodyParser.json());

const PORT = process.env.PORT || 8000;

app.post('/log', function(req, res) {
  console.log(req.body);
  let response = 47;

  res.send({
    'heyo': 99
  });
});

app.listen(PORT, function() {
  console.log('Server up! Listening on port: ' + PORT);
});