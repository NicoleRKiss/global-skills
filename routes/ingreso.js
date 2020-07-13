var express = require('express');
var router = express.Router();
let ingresoController = require ('../controllers/ingresoController')

/* GET users listing. */
router.get('/', ingresoController.index);


module.exports = router;
