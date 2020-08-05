const json = require("../models");
const User = json("users");
const db = require('../database/models');
module.exports = (req, res, next) => {
  
  res.locals.user = false;

  if(req.session.user){
    res.locals.user = req.session.user;
    return next();
  } else if(req.cookies.email) {
    db.Usuario.findOne({
            where:{email: req.body.Email}
          })
          .then(function(user){
            req.session.user = user;
            res.locals.user = user;
            return next()});
    
  } else {
    return next();
  }
};