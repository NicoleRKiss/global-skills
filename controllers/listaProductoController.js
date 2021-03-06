let db= require('../database/models');
const sequelize = db.sequelize;


let listaProductoController = {
    list: function (req, res) {
        db.Producto.findAll({
            include: [{ association: "categorias" }]
        })
            .then(function(productos) {

                // let productos =resultados[0];
                res.render("listadoDeProductos", { productos: productos });
            })
    },
    detail: function(req,res){
            db.Producto.findByPk(req.params.id)
            .then(function(Producto){
                res.render("product", {Producto:Producto});
            })
    }
    
}
module.exports = listaProductoController;