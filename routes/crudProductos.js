var express = require('express');
var router = express.Router();
let crudController = require('../controllers/crudController')

/* GET users listing. */

router.get('/', crudController.add);
router.post('/', crudController.create);


module.exports = router;