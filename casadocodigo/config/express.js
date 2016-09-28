module.exports = function(){
	console.log("modulo esta sendo carregado");
	var app = require('express')();
	app.set('view egine','ejs');
	return app;
}