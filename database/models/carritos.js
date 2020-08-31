

module.exports = (sequelize, dataTypes) => {

    let alias = "Carrito";
    let cols = {
        id : {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        userId: {
            type: dataTypes.INTEGER,
            
        },
        precio:{
            type: dataTypes.INTEGER,
        }
    }
  
    const carrito = sequelize.define(alias, cols);
  
    return carrito 
  
  }
