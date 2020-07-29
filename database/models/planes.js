module.exports = (sequelize, dataTypes) => {

    let alias = "Plane";
    let cols = {
        id : {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
  
        nombrePlan : {
            type: dataTypes.STRING,
        },
  
       
    }
  
    const plan = sequelize.define(alias, cols);
  
    return plan 
  
  }  
