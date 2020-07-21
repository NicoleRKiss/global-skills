var express = require('express');
var router = express.Router();
let registerController = require ('../controllers/registerController')
const { check } = require('express-validator');
var guestMiddleware = require('../middleWares/guestMiddleware');

/* GET users listing. */
router.get('/', registerController.index);
//router.post('/', registerController.store);
    
router.post('/', [ 
    check('Nombre').notEmpty().withMessage('Debe ingresar un Nombre'),
    check('Apellido').notEmpty().withMessage('Debe ingresar su Apellido'),
    check('Email').isEmail().withMessage('Usted no esta ingresando un Email valido'),
    check('password').notEmpty().withMessage('La contraseña debe tener 8 caracteres'),   

], registerController.store);


module.exports = router;
