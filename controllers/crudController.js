let db = require('../database/models');
const sequelize = db.sequelize;

const crudController = {
    add: function (req, res) {
            res.render("crudProductos")
      },
      create: function (req, res) {
            db.Producto.create({
              nombre: req.body.nombre,
              descripcion: req.body.descripcion,
              planId: req.body.planId,
              idiomaId:req.body.idiomaId,
              precio: req.body.precio,
              categoriaId:req.body.categoriaId,
              profesorId:req.body.profesorId
          });
        res.redirect('/listaProductos');
      }
     
}
module.exports = crudController;

