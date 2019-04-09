var fs = require('fs');
var html = '<html><body>' + Math.random() + '</body></html>';
fs.writeFile('part-2b.html', html, function(err) {
  if (err) {
    console.log(err);
  }
});