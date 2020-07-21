var express = require('express');
var router = express.Router();
let listaProductoController = require ('../controllers/listaProductoController')

/* GET users listing. */
router.get('/', listaProductoController.list);


module.exports = router;
