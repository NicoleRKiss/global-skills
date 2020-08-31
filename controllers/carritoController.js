//const DB = require('../database/models');
const {Producto,Item,Carrito} = require('../database/models');


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
                userId: req.session.user.id,
            }
        })
            .then(item => {
                // return res.send(item)
                return res.render('carritolleno', { item });

            })
            
    },
    addToCart(req, res) {
        //agregar un item al carrito
        // console.log(req.body.productId)
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
                        cartId: null,
                        nombre: producto.nombre,
                        descripcion: producto.descripcion
                    })
                }

            })
            .then(() => res.redirect('/carrito/lleno'))
            .catch(e => console.log(e))
    },
    deleteFromCart(req,res){
        Item.destroy({
            where:{
                id: req.body.itemId,
            },
            force: true,
        })
        .then(() => res.redirect('/carrito/lleno'));
    }, createCart(req,res){
        //cierre del carrito
        let totalPrice = 0;

        Item.findAll({
            where:{
                state:1,
                userId:req.session.user.id,
            }
        })
        .then(item =>{
           //totalPrice =  items.reduce((total, item) => total = total + item.subTotal, 0)

           item.forEach(item => {
               totalPrice = totalPrice + item.subTotal
           });

           return Carrito.findOne({
               order: [['createdAt', 'DESC']]
           })
      })
        .then(carrito =>{
            return Carrito.create({
                id: carrito.id + 1,
                precio:totalPrice,
                userId: req.session.user.id
            })
        })
        .then(carrito =>{
        return Item.update({
                //que dato updatear (actualizar);
                state: 0,
                cartId: carrito.id
            
        }, {
            where:{
                userId: req.session.user.id,
                state:1}
            })
        })
        .then(() => res.redirect('/carrito/lleno'))
        }
    


    

}
module.exports = carritoController;