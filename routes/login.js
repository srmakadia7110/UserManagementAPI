var express = require('express');
var router = express.Router();
var database = require('../database');
const md5 = require("md5");

/* GET users listing. */
router.post('/', function(req, res, next) {

	var email = req.body.email;
	var password = req.body.password;

  var query = `
	  SELECT * FROM users WHERE email = '${email}' AND password = '${md5(password)}'
	`;

  database.query(query, function(error, data){
    if(error)
		{
			res.json({success:false,code:500,message:"there is some error ... "});
		}	
		else if(data.length > 0){
		  res.json({success:true,code:200,data:data[0]});
    }else{
      res.json({success:false,code:500,message:"User Not Found please check your email and password"});
    }
	});


});

module.exports = router;