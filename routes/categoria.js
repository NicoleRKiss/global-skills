var express = require('express');
var router = express.Router();
let categoriaController = require ('../controllers/categoriaController')

/* GET users listing. */
router.get('/', categoriaController.index);


module.exports = router;
