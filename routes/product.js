var express = require('express');
var router = express.Router();
let productController = require ('../controllers/productController')

/* GET users listing. */
router.get('/', productController.index);


module.exports = router;