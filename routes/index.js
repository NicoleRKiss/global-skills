var express = require('express');
var router = express.Router();
let indexController = require ('../controllers/indexController');

/* conexion con el controller. */
router.get('/', indexController.index);
router.get('/', indexController.list);
router.get('/', indexController.detail);

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
