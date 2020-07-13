var express = require('express');
var router = express.Router();
let registerController = require ('../controllers/registerController')
const { check } = require('express-validator');
var guestMiddleware = require('../middleWares/guestMiddleware');

/* GET users listing. */
router.get('/', guestMiddleware, registerController.index);
router.post('/', registerController.store);
    
router.post('/register', [ 

    check('email').isEmail().withMessage('Usted no esta ingresando un mail valido'),
    check('password').isLength({max:8}).withMessage('La contraseña debe tener 8 caracteres'),    

], registerController.processRegister);


module.exports = router;
