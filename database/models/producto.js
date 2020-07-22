module.exports = (sequelize, dataTypes) => {
  let alias = "Producto";
  let cols = {
      id : {
          type: dataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true,
      },

      nombre : {
          type: dataTypes.STRING(400),
      },

      descripcion : {
          type: dataTypes.STRING,
      },

      precio : {
          type: dataTypes.TEXT,
      },

      planId : {
        foreignKey: "planes.id",
      },

      idiomaId : {
        foreignKey: "idiomas.id",
      },

      categoriaId : {
        foreignKey: "categorias.id",
      },

      profesorId : {
        foreignKey: "profesor.id",
      }             
  }

  const producto = sequelize.define(alias, cols);

  return producto 

}