let db = require('../database/models');
const sequelize = db.sequelize;

const indexController = {
    index : function (req, res){
        return res.render ('index');
    },
    list: function (req, res) {
        db.Producto.findAll({
            include: [{ association: "categorias" }]
        })
            .then(function (productos) {

                // let productos =resultados[0];
                res.render("index", { productos: productos });
            })
    },
    detail: function (req, res) {
        db.Producto.findByPk(req.params.id)
            .then(function (Producto) {
                res.render("index", { Producto: Producto });
            })
    }

}


module.exports = indexController;