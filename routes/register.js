const express = require('express');
const router = express.Router();
const multer = require('multer');
const registerController = require('../controllers/registerController')
const path = require('path');
const { check } = require('express-validator');
const guestMiddleware = require('../middleWares/guestMiddleware');

const validator = require('../middleWares/validator');

let storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.resolve(__dirname, '../public/images/avatar'))
    },
    filename: function (req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
    }
})

let upload = multer({ storage: storage,

    fileFilter: (req, file, cb) => {

        const acceptedExtensions = ['.jpg', '.jpeg', '.png'];

        const ext = path.extname(file.originalname);

        if (!acceptedExtensions.includes(ext)) {
            req.file = file;
        }

        cb(null, acceptedExtensions.includes(ext));
    }
})

/* GET users listing. */
router.get('/', registerController.index);
//router.post('/', registerController.store);

router.post('/', upload.single('image'), validator.register, registerController.store);


module.exports = router;
