var express = require('express');
var router = express.Router();
var database = require('../database');

/* GET users listing. */
router.get('/', function(req, res, next) {
  
  var page = req.query.page;
	var size = req.query.size;
	var search_string = req.query.search_string;
    

  var query = `
	  SELECT * FROM users
	`;

  if(search_string){
    query += `WHERE first_name LIKE '%${search_string}%' OR last_name LIKE '%${search_string}%' OR email LIKE '%${search_string}%'`
  }

  var total_results;
  database.query(query, function(error, data){
    if(error)
    {
      throw error;
      res.json({success:false,code:500,message:"there is some error"});
    }	
    else if(data.length > 0){
      total_results = data;
    }
  });
  if(page && size){
    var offset = (parseInt(page) - 1) * parseInt(size);
    query += ` LIMIT ${size} OFFSET ${offset}`
  }
  database.query(query, function(error, data){
    if(error)
    {
      res.json({success:false,code:500,message:"there is some error"});
    }	
    else if(data.length > 0){
      var result = {
        "data" : data,
        "page" : page,
        "size" : size,
        "total_page" : Math.ceil(total_results.length / parseInt(size))
      }
      res.json({success:false,code:200,message:"User List",result:result});
    }else{
      res.json({success:false,code:500,message:"Users Not Found"});
    }
  });
});

module.exports = router;