var {
  Client
} = require('pg');

var client = new Client({
  database: "inclass3"
});

client.connect();

client.query("SELECT * FROM groceries", function(err, res) {
  if (err) {
    console.error("error!");
  }
  for (let row of res.rows) {
    console.log(JSON.stringify(row));
  }
  client.end;
});