
module.exports = (sequelize, dataTypes) => {

    let alias = "Carrito";
    let cols = {
        id : {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
  
        nombre : {
            type: dataTypes.STRING,
        },
  
        precio : {
            type: dataTypes.INTEGER,
        }
    }
  
    const carrito = sequelize.define(alias, cols);
  
    return carrito 
  
  }