
module.exports = (sequelize, dataTypes) => {

    let alias = "Carrito";
    let cols = {
        id : {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
  
        usuarioId : {
            foreignKey: "usuarios.id",
        },
  
        productoId : {
            foreignKey: "productos.id",
        },
  
        productoNombre : {
            foreignKey: "productos.nombre",
        }
    }
  
    const carrito = sequelize.define(alias, cols);
  
    return carrito 
  
  }
