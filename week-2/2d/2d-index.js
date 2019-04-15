var express = require('express');

var app = express();
app.use(express.static('../../week-1/part1'));

app.listen(3000, function() {
  console.log('Server up! Listening on port 3000');
});