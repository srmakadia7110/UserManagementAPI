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
  res.send('respond with a resource');
});

module.exports = router;
