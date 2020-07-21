let db= require('../database/models');
const sequelize = db.sequelize;


let listaProductoController = {
    list : function (req,res){
        sequelize.query("SELECT * FROM productos")
        .then(function(resultados) {
        
            let productos =resultados[0];
            res.render("listadoDeProductos", {productos:productos});
        })
    }

}
module.exports = listaProductoController;