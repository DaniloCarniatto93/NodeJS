module.exports = function(app){

app.get('/autentica/login',function(req,res){
			res.render('autentica/login');
		});
	app.post('/autentica/entra',function(req,res){

			var user = req.body;
			var connection = app.infra.connectionFactory();
			var loginDAO = new app.infra.LoginDAO(connection);

			console.log(user);

			loginDAO.login(function(erros,result){
				for (var i = 0;i<result.length;i++){
						if(result[i].login == user.login && result[i].senha == user.password){
							res.render('autentica/principal',{user:user});
						}
				}
			});
 	});
}