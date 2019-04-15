var express = require('express');

var app = express();

app.get('/', function(req, res) {
  res.send("Hey there!");
});

app.get('/dwd', function(req, res) {
  res.send("our second route!");
});

app.listen(3000, function() {
  console.log('Our first web server! Listeing on port 3000');
});