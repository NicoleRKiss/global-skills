module.exports = (sequelize, dataTypes) => {

    let alias = "Idioma";
    let cols = {
        id : {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
  
        idioma : {
            type: dataTypes.STRING,
        }
    }
  
    const idioma = sequelize.define(alias, cols);
  
    return idioma 
  
  }