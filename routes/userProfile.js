var express = require('express');
var router = express.Router();
let productController = require ('../controllers/userProfileController');

/* GET users listing. */
router.get('/', productController.index);
module.exports = router;