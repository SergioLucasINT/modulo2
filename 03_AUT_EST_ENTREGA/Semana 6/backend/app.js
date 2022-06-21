const express = require('express'); 
const app = express();

const hostname = '127.0.0.1';
const port = 3000;
const sqlite3 = require('sqlite3').verbose(); 
const DBPATH = 'dbUser.db'; 

app.use(express.static("../frontend/"));

app.use(express.json());

app.get('/user1', (req, res) => {
  res.statusCode = 200;
  res.setHeader('Access-Control-Allow-Origin', '*');
  var db = new sqlite3.Database(DBPATH);
  var sql = 'SELECT * FROM curriculo WHERE userID = 1';
  db.get(sql, [], (err, row) => {
      if (err) {
      throw err;
      }
      res.json(row);
  });
});

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});