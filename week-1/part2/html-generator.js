//creating html doc from plain text
var readline = require('readline');
var fs = require('fs');

var myInterface = readline.createInterface({
  input: fs.createReadStream('demofile1.txt')
});

var lineno = 0;
myInterface.on('line', function(line) {
  lineno++;
  // console.log('Line number ' + lineno + ': ' + line);
  console.log(line + '<br>');
});

fs.writeFile("/Users/AKG/girgit/DWD/week-1/part2/new.html", "<!DOCTYPE html><html><body>", function(err) {
  if (err) {
    return console.log(err);
  }

  console.log("The file was saved!");
});

console.log('</body>');
console.log('</html>');