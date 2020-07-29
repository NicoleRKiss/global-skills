

module.exports = (sequelize, dataTypes) => {

    let alias = "Carrito";
    let cols = {
        id : {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
  
       
    }
  
    const carrito = sequelize.define(alias, cols);
  
    return carrito 
  
  }
