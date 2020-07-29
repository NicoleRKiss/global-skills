let db = require('../database/models');
const sequelize = db.sequelize;

const editarUsuariosController = {
    edit: function (req, res) {
        db.Usuario.findByPk(req.params.id)
        .then(function (Usuario) {
            res.render("editarUsuarios", { Usuario: Usuario })
        })
    },

    update: function (req, res) {
        db.Usuario.update({
            nombre: req.body.nombre,
            apellido: req.body.apellido,
            email: req.body.email,
            password: req.body.password,
        }, {
            where: {
                id: req.params.id
            }
       })

      res.redirect("/editarUsuarios/edit/" + req.params.id)
   }

}
module.exports = editarUsuariosController;

