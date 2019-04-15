var express = require('express');
var mustacheExpress = require('mustache-express');
const axios = require('axios');

var app = express();

app.engine('html', mustacheExpress());
app.set('view engine', 'html');
app.set('views', __dirname);

app.get('/', function(req, res) {
  if (req.query.url) {

    axios.get(req.query.url)
      .then(response => {
        // console.log(response.data);
        res.send(response.data);
      })
      .catch(error => {
        console.log(error);
      });
    return;
  }

  res.render('foo', {

  });
});


app.listen(3000, function() {
  console.log('Server up! Listening on port 3000');
});