var mysql = require('mysql');

var connectMYSQL = function (){
	console.log("agora estou conectndo");
	return mysql.createConnection({
			host : 'localhost',
			user : 'root',
			password: 'root',
			database: 'casadocodigo_nodeJS'
		});
}

//wrapper
module.exports = function(){
	console.log("express load chamou");
	return connectMYSQL;
}