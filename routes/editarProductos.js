var express = require('express');
var router = express.Router();
let editarProductosController = require('../controllers/editarProductosController')

/* GET users listing. */

router.get('/edit/:id', editarProductosController.edit);
router.post('/edit/:id', editarProductosController.update);

module.exports = router;