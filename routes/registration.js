var express = require('express');
var router = express.Router();
var database = require('../database');
const md5 = require("md5");

/* GET users listing. */
router.post('/', function(req, res, next) {

    var first_name = req.body.first_name;
	var last_name = req.body.last_name;
	var phone = req.body.phone;
	var age = req.body.age;
	var email = req.body.email;
	var password = req.body.password;

    var query = `
	SELECT * FROM users WHERE email = '${email}'
	`;

    database.query(query, function(error, data){
        if(error)
		{
			res.json({success:false,code:500});
		}	
		else if(data.length > 0){
		    res.json({success:false,code:500,message:"User with this email alredy exist"});
        }else{
			var query = `
			INSERT INTO users 
			(first_name, last_name, phone_no, email, age, password) 
			VALUES ("${first_name}", "${last_name}", "${phone}", "${email}", "${age}","${md5(password)}")
			`;
		
			database.query(query, function(error, data){
				if(error)
				{
					res.json({success:false,code:500,message:"User not created there is some error"});
				}	
				else
				{
					res.json({success:true,code:200,message:"User created successfully"});
				}
			});
		}
	});
});

module.exports = router;