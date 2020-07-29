let db = require('../database/models');
const sequelize = db.sequelize;

const editarProductosController = {
    edit: function (req, res) {
        db.Producto.findByPk(req.params.id)
        .then(function (Producto) {
            res.render("editarProductos", { Producto: Producto })
        })
    },

    update: function (req, res) {
        db.Producto.update({
            nombre: req.body.nombre,
            descripcion: req.body.descripcion,
            planId: req.body.planId,
            idiomaId: req.body.idiomaId,
            precio: req.body.precio,
            categoriaId: req.body.categoriaId,
            profesorId: req.body.profesorId
        }, {
            where: {
                id: req.params.id
            }
       })

      res.redirect("/editarProductos/edit/" + req.params.id)
   }

}
module.exports = editarProductosController;

