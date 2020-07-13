const fs = require('fs');
const path = require('path');
const { stringify } = require('querystring');

const registerController ={
    index: function(req,res){
        return res.render('register');

},
       store : function(req, res){
           
           delete req.body.retypePassword;
           let user = {
               id:" ",
               ...req.body
           }

           let users = fs.readFileSync(path.join(__dirname,'..', 'data', 'users.json'), 'utf-8');
            users= JSON.parse(users);
           users= [...users, user];
           users= JSON.stringify(users, null, ' ');

           fs.writeFileSync(path.join(__dirname,'..', 'data', 'users.json'), users);

           return res.redirect('login');
},
    processRegister : function (req, res){
        
    }
}

module.exports = registerController;