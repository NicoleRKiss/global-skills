var express = require('express');
var router = express.Router();
let productController = require ('../controllers/productController');

/* GET users listing. */
router.get('/', productController.index);
router.get('/', productController.detail);
router.post('/delete/:id', productController.delete);

module.exports = router;