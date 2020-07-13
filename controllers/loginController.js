const loginController ={
    index: function(req,res){
        return res.render('login');
    },
    login: function (req,res){
        return res.render('login')
    },

    processLogin : function (req, res){
        let errors = validationResult (req);
        
        if (errors.isEmpty ()){
            let usersJson = fs.readFileSync ('users.json', {encoding:'utf-8'})
            let users;
            if (usersJson == ""){
                users = [];
            }else {
                users = JSON.parse(usersJSON);
            }
            for (let i=0; i<users.length; i++){
                if (users[i].email == req.body.email){
                    if (bcrypt.compareSync (req.body.password, user[i].password)){
                        let usuarioALoguearse = users[i];
                        break;
                    }
                }
            }
            if(usuarioALoguearse == undefined){
                return res.render('login', {errors: [
                    {msg: 'Credencias invalidas'}
                ]});
            }

            // buscar al usuario por email

            req.session.usuarioLogueado = usuarioALoguearse;
            res.redirect('/'); // lo llevamos al home luego de comprobar quien es el loko.

        }else{
            return res.render ('login', {errors: errors.errors});

        }
    }

}
module.exports = loginController;