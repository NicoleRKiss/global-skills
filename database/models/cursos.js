
module.exports = (sequelize, dataTypes) => {

    let alias = "Curso";
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
        },
  
        descripcion : {
            type: dataTypes.STRING,
        }
    }
  
    const curso = sequelize.define(alias, cols);
  
    return curso 
  
  }
