// const DB = require('../database/models');
const {Producto, Item} = require('../database/models');


const carritoController ={
    index: function(req,res){
        return res.render('carrito');
    },
    full: function(req,res){
        return res.render('carritolleno');
    },
cart(req, res) {
        //muestro los items del carrito
        Item.findAll({
            where: {
                state: 1,
                userId: req.session.id,
            },
            include: ['producto']
        })
            .then(item => {
                console.log(item)
                return res.render('carrito/lleno', { item });

            })
            
    },

    addToCart(req, res) {
        //agregar un item al carrito
        console.log(req.body.productId)
        Producto.findByPk(req.body.productId)
            .then(producto => {

                if(producto){
                    return Item.create({
                        salePrice: producto.precio,
                        quantity: req.body.quantity,
                        subTotal: req.body.quantity * producto.precio,
                        state: 1,
                        productId: producto.id,
                        userId: req.session.user.id,
                        sellerId: producto.userId,
                        cartId: null
                    })
                }

            })
            .then(() => res.redirect('/carrito/lleno'))
            .catch(e => console.log(e))
    }
}
module.exports = carritoController;