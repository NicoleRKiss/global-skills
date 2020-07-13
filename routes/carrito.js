var express = require('express');
var router = express.Router();
let carritoController = require ('../controllers/carritoController')

/* GET users listing. */
router.get('/', carritoController.index);
router.get('/lleno', carritoController.full);

module.exports = router;
