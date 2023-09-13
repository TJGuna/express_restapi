var express = require('express');
var mysql = require('mysql');
var router = express.Router();
var json;
var con = mysql.createConnection({
  host: "127.0.0.1",
  user: "root",
  password: "new_password",
  database: "mydb"
});
con.connect(function(err) {
  if (err) throw err;
  con.query("SELECT * FROM userData", function (err, result, fields) {
    if (err) throw err;
    console.log(result);
    json = result;
  });
});
/* GET users listing. */
router.get('/', function(req, res, next) {
  // res.send('respond with a resource');
  res.json(json)
});
router.put('/', (req, res) => {
  res.send('Got a PUT request at /user');
});
module.exports = router;
// INSERT INTO userData (name, address, phone, email, verified) VALUES ('ravi', 'Highway 37', '088090990' ,'email@email.email', 0)
//SELECT * FROM customers
