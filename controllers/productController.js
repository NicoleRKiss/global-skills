const db = require('../database/models');
const sequelize = db.sequelize;

const productController ={
    index: function(req,res){
        return res.render('product');
    },

    add: function(req,res){
        res.render("CrudProductos");

    },
    
    detail: function (req, res) {
        db.Producto.findByPk(req.params.id)
            .then(function (Producto) {
                res.render("product", { Producto: Producto });
            })
    },
     delete: function (req, res) {
        db.Producto.destroy({
            where:{
                id: req.params.id
            }    
    }),
                res.redirect("/listaProductos");
     },
}
module.exports = productController;