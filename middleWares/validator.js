const { body } = require('express-validator');
const path = require('path');
const bcrypt = require('bcryptjs');

// Middlewares propios

const json = require('../models');
const User = json('users');
const db = require('../database/models');
const { nextTick } = require('process');
// const {User}= require('../database/models');
module.exports = {
  register: 
    [
      body('Nombre').notEmpty().withMessage('Debes ingresar un Nombre'),
      body('Apellido').notEmpty().withMessage('Debes ingresar su Apellido'),
      body('Email').isEmail()
      .withMessage('Debes ingresar un email válido')
      .bail()
      .custom((value, { req }) => {
        return db.Usuario.findOne({
          where:{email: req.body.Email}
        })
        .then(function(user){
          if(user){
            return Promise.reject('usuario ya existente');
          }
        })
       }),
      body('password').notEmpty().withMessage('La contraseña debe tener 8 caracteres')
      .bail()
      
    ],
  login: [
    body("Email")
      .notEmpty()
      .withMessage("Campo obligatorio")
      .bail()
      .custom((value, { req }) => {
       return db.Usuario.findOne({
         where:{email: value}
       })
       .then(function(user){
         if(user){
          if(bcrypt.compareSync(req.body.password,user.password)==false){
            return Promise.reject('email o password invalidos');
          }
         }else{
          return Promise.reject('email o password invalidos');
         }
       })
      })
      
  ],
};


