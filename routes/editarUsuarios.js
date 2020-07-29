var express = require('express');
var router = express.Router();
let editarUsuariosController = require('../controllers/editarUsuariosController');

/* GET users listing. */

router.get('/edit/:id', editarUsuariosController.edit);
router.post('/edit/:id', editarUsuariosController.update);

module.exports = router;