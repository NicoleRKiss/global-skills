module.exports = (sequelize, dataTypes) => {

    let alias = "Tema";
    let cols = {
        id : {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
  
        tema : {
            type: dataTypes.STRING,
        },
        
        planId: {
            foreignKey: "planes.id",
        }

    
    }
  
    const tema = sequelize.define(alias, cols);
  
    return tema 
  
  }