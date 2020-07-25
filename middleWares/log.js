const json = require("../models");
const User = json("users");

module.exports = (req, res, next) => {
  
  res.locals.user = false;

  if(req.session.user){
    res.locals.user = req.session.user;
    return next();
  } else if(req.cookies.email) {
    // Buscamos al usuario
    let user = User.findBySomething(user => user.email == req.cookies.email);

    req.session.user = user;
    res.locals.user = user;
    return next();
  } else {
    return next();
  }
};