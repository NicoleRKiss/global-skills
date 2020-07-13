module.exports = (sequelize, dataTypes) => {
  let alias = "Producto";
  let cols = {
      id : {
          type: dataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true,
      },

      nombre : {
          type: dataTypes.STRING,
      },

      descripcion : {
          type: dataTypes.STRING,
      },

      precio : {
          type: dataTypes.INTEGER,
      }     
  }

  const producto = sequelize.define(alias, cols);

  return producto 

}