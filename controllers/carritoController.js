const carritoController ={
    index: function(req,res){
        return res.render('carrito');
    },
    full: function(req,res){
        return res.render('carritolleno');
    }

}
module.exports = carritoController;