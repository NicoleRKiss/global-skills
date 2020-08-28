var express = require('express');
var router = express.Router();
let categoriaMarketingController = require ('../controllers/categoriaMarketingController')

/* GET users listing. */
router.get('/', categoriaMarketingController.index);


module.exports = router;
