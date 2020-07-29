module.exports = (sequelize, dataTypes) => {
  let alias = "Producto";
  let cols = {
    id: {
      type: dataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },

    nombre: {
      type: dataTypes.STRING,
    },

    descripcion: {
      type: dataTypes.STRING,
    },

    planId: {
      type: dataTypes.INTEGER,
      foreignKey:"planes.id"
    },
    idiomaId: {
      type: dataTypes.INTEGER,
      foreignKey: "idiomas.id"
    },
    precio: {
      type: dataTypes.INTEGER,
    },

    categoriaId: {
      type: dataTypes.INTEGER,
      foreignKey: "categorias.id"
    },
    
    profesorId: {
      type: dataTypes.INTEGER,
      foreignKey: "profesores.id"
    }
  }

  const producto = sequelize.define(alias, cols);
  producto.associate = function (models) {
    producto.belongsTo(models.Categoria, {
      as: "categorias",
      foreignKey: "categoriaId"
    })

  }
  return producto 

}