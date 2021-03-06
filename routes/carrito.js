var express = require('express');
var router = express.Router();
let carritoController = require ('../controllers/carritoController')

/* GET users listing. */
router.get('/', carritoController.index);
router.get('/lleno', carritoController.cart);
router.post('/addToCart', carritoController.addToCart);
router.post('/deleteFromCart', carritoController.deleteFromCart);
router.post('/createCart', carritoController.createCart);
module.exports = router;
