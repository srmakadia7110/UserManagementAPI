var express = require('express');
var mysql = require('mysql');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {

    var con = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: ""
      });

      con.connect(function(err) {
        if (err) throw err;
        console.log("Connected!");
      });
      con.query("SELECT * FROM users", function (err, result) {
        if (err) throw err;
        console.log("Result: " + result);
      });
});

module.exports = router;