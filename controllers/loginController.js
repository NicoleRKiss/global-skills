const json = require("../models");
const User = json("users");

const db = require('../database/models');

const bcrypt = require("bcryptjs");
const { validationResult } = require("express-validator");
const loginController ={
    index: function(req,res){
        return res.render('login');
    },
    login: function (req,res){
        return res.render('login');
    },
    // processLogin : function (req, res){
    //     let errors = validationResult (req);
        
    //     if (errors.isEmpty ()){
    //         let usersJson = fs.readFileSync ('users.json', {encoding:'utf-8'})
    //         let users;
    //         if (usersJson == ""){
    //             users = [];
    //         }else {
    //             users = JSON.parse(usersJSON);
    //         }
    //         for (let i=0; i<users.length; i++){
    //             if (users[i].email == req.body.email){
    //                 if (bcrypt.compareSync (req.body.password, user[i].password)){
    //                     let usuarioALoguearse = users[i];
    //                     break;
    //                 }
    //             }
    //         }
    //         if(usuarioALoguearse == undefined){
    //             return res.render('login', {errors: [
    //                 {msg: 'Credencias invalidas'}
    //             ]});
    //         }
    //         req.session.usuarioLogueado = usuarioALoguearse;
    //         res.redirect('/');

    //     }else{
    //         return res.render ('login', {errors: errors.errors});

    //     }
    processLogin: function (req, res) {
    
        const errors = validationResult(req);
    
        if(errors.isEmpty()){
         
        
          db.Usuario.findOne({
            where:{email: req.body.Email}
          })
          .then(function(user){
            req.session.user = user;
    
          if (req.body.remember) {
            res.cookie('email', user.Email, { maxAge: 1000 * 60 * 60 * 24 });
          }
    
          return res.redirect('/');
          })
          
        } else {
         
          return res.render("login", { errors: errors.mapped()});
        }
      },
      logout: function(req, res) {
        req.session.destroy();
    
        if(req.cookies.Email){
          res.clearCookie('Email');
        }
    
        return res.redirect('/');
    
      }

    

}
module.exports = loginController;