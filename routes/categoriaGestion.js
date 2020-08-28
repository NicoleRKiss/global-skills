var express = require('express');
var router = express.Router();
let categoriaGestionController = require ('../controllers/categoriaGestionController')

/* GET users listing. */
router.get('/', categoriaGestionController.index);


module.exports = router;
