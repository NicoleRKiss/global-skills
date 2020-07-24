const { body } = require('express-validator');
const path = require('path');
const bcrypt = require('bcryptjs');

// Middlewares propios

const json = require('../models');
const User = json('register');

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
    body("email")
      .notEmpty()
      .withMessage("Campo obligatorio")
      .bail()
      .custom((value, { req }) => {
        const user = User.findBySomething((user) => user.email == value);

        if (user) {
          return bcrypt.compareSync(req.body.password, user.password);
        } else {
          return false;
        }
      })
      .withMessage("Email o contraseña inválidos"),
    body("password").notEmpty().withMessage("Campo obligatorio"),
  ],
};


