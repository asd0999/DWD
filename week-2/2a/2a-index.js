//part-2a

var express = require('express');

var app = express();

app.get('/', function(req, res) {
  res.send("Hey there!");
});

app.listen(3000, function() {
  console.log('Our first web server! Listeing on port 3000');
});