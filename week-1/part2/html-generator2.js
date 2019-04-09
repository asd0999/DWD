//creating html doc from plain text
var readline = require('readline');
var fs = require('fs');

var string = '<html><body>';
// console.log(string);
var myInterface = readline.createInterface({
  input: fs.createReadStream('demofile1.txt')
});

var lineno = 0;
myInterface.on('line', function(line) {
  lineno++;
  // console.log(line + '<br>');
  string += line + '<br>';
});

myInterface.on('close', function() {
  string += '</body></html>';
  fs.writeFile("/Users/AKG/girgit/DWD/week-1/part2/new.html", string, function(err) {
    if (err) {
      return console.log(err);
    }
    console.log(string);
    console.log("The file was saved!");
  });
});