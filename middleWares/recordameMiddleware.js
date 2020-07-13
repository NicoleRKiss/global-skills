function recordameMiddleware (req,res,next){
    next();
    if (req.cookies.recordame != undefined && req.session.usuarioLogueado == undefined)


    // Falta agregar codigo que lea todos los usuarios y compare su mail con el registrado

    // luego hacer require en APP.JS y app.use de nuestro middleware recordame asi podemos usarlo en todas las paginas.

    req.session.usuarioLogueado = usuarioALoguearse;
}

module.exports = recordameMiddleware;


res.locals.user = false;
if(req.session.usuarioLogueado){
    res.locals.user = req.session.usuarioLogueado;
    return next()
} else if(req.cookies.recordame) {
    // buscas al usuario en el json
    let user = buscarAlUsuario()
    req.session.usuarioLogueado = user
    res.locals.user = user
    return next()
} else {
    return next()
}

//if(locals.user) tal cosa : otra cosa