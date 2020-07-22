module.exports = (sequelize, dataTypes) => {

    let alias = "Profesore";
    let cols = {
        id : {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
  
        nombre : {
            type: dataTypes.STRING,
        }
    }
  
    const profesor = sequelize.define(alias, cols);
  
    return profesor 
  
  }