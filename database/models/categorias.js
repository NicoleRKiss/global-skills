module.exports = (sequelize, dataTypes) => {
    let alias = "Categoria";
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
  
        subcategoria : {
            type: dataTypes.TEXT,
        }    
    }
  
    const categoria = sequelize.define(alias, cols);
  
    return categoria 
  
  }