var express = require('express');
var router = express.Router();
let loginController = require ('../controllers/loginController')
var authMiddleware = require('../middleWares/authMiddleware');
const { body } = require('express-validator');
const bcrypt = require('bcryptjs');
const validator = require('../middlewares/validator');

/* GET users listing. */
router.get('/', authMiddleware, loginController.index);
router.get('/login', loginController.login);
router.post('/',validator.login,loginController.processLogin);
router.post('/logout', loginController.logout);


module.exports = router;