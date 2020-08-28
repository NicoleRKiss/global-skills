var express = require('express');
var router = express.Router();
let categoriaComunicacionController = require ('../controllers/categoriaComunicacionController')

/* GET users listing. */
router.get('/', categoriaComunicacionController.index);


module.exports = router;
