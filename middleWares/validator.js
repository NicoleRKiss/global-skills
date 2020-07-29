const { body } = require('express-validator');
const path = require('path');
const bcrypt = require('bcryptjs');

// Middlewares propios

const json = require('../models');
const User = json('users');
// const {User}= require('../database/models');
module.exports = {
  register: 
    [
      body('Nombre').notEmpty().withMessage('Debes ingresar un Nombre'),
      body('Apellido').notEmpty().withMessage('Debes ingresar su Apellido'),
      body('Email').isEmail().withMessage('Debes ingresar un email válido'),
      body('password').notEmpty().withMessage('La contraseña debe tener 8 caracteres')
      .bail()

    ],
    login: [
      body("Email")
        .notEmpty()
        .withMessage("Campo obligatorio")
        .bail()
        .custom((value, { req }) => {
          const user = User.findBySomething((user) => user.Email == value);
  
          if (user) {
            return bcrypt.compareSync(req.body.password, user.password);
          } else {
            return false;
          }
        })
        .withMessage("Email o contraseña inválidos"),
      body("password").notEmpty().withMessage("Campo obligatorio"),
    ],
  // login: [
  //   body("Email")
  //     .notEmpty()
  //     .withMessage("Campo obligatorio")
  //     .bail()
  //     .custom((value, { req }) => {
  //      return User.findOne({
  //        where:{email: value}
  //      })
  //      .then((user)=>{
  //        if(user){
  //         if(bcrypt.compareSync(!req.body.password,user.password)){
  //           return Promise.reject('email o password invalidos');
  //         }
  //        }else{
  //         return Promise.reject('email o password invalidos');
  //        }
  //      })
  //     })
      
  // ],
};


