let locals = require('../controllers/loginController');
function guestMiddleware (req, res, next){
    if (!req.session.user){
        next();
    } else {
        res.redirect('/');
    }

}

module.exports = guestMiddleware;