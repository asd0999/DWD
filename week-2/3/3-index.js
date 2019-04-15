var express = require('express');
var mustacheExpress = require('mustache-express');
var app = express();

var insults = ['stupid', 'wanna-be', 'sucks assss', 'sucks so hard', ''];

app.engine('html', mustacheExpress());
app.set('view engine', 'html');
app.set('views', __dirname);

app.get('/', function(req, res) {
  res.render('foo', {});
})

app.post('/bar', function(req, res) {
  res.write('<html><head></head><body>');
  let rand_num = Math.floor(Math.random() * Math.floor(insults.length - 1))
  let rand_insult = insults[rand_num];
  if (rand_num < 2) {
    res.write("<h1>What??? " + req.query.name + ` is such a ${rand_insult} band` + "</h1>");
    res.write('</body></html>');
  } else {
    res.write("<h1>Whats wrong with you?! " + req.query.name + ` ${rand_insult}!` + "</h1>");
    res.write('</body></html>');
  }
});


app.listen(3000, function() {
  console.log('Server up! Listening on port 3000');
});