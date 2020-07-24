const fs = require('fs');
const path = require('path');
const { stringify } = require('querystring');
const { validationResult }= require('express-validator');
const bcryptjs = require ('bcryptjs');
const { check } = require('express-validator');



const registerController ={
    index: function(req,res){
        return res.render('register');

},
       store : function(req, res){
           let errors = validationResult(req);
           
           if(errors.isEmpty()){
           delete req.body.retypePassword;
           req.body.password = bcryptjs.hashSync(req.body.password, 10);
           let user = {
               id:" ",
               ...req.body,
               image: req.file.filename
           }

           let users = fs.readFileSync(path.join(__dirname,'..', 'data', 'users.json'), 'utf-8');
            users= JSON.parse(users);
           users= [...users, user];
           users= JSON.stringify(users, null, ' ');

           fs.writeFileSync(path.join(__dirname,'..', 'data', 'users.json'), users);

           return res.redirect('/');

        } else {
            return res.render('register', { errors : errors.mapped() });
        }
}
}

module.exports = registerController;