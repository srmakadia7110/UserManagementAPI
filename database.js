
const mysql = require('mysql');

var connection = mysql.createConnection({
	host : '192.168.1.18',
	database : 'user_management',
	user : 'root',
	password : ''
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
