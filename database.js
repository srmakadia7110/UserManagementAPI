
const mysql = require('mysql');

var connection = mysql.createConnection({
	host : 'sticky-scylla-1822.7s5.cockroachlabs.cloud',
	database : 'user_management',
	port : 26257,
	user : 'shreyash',
	password : 'LJ_gci9lru3XjNJBpSMP0w'
});

connection.connect(function(error){
	if(error)
	{
		throw error;
	}
	else
	{
		console.log('MySQL Database is connected Successfully');
	}
});


module.exports = connection;
