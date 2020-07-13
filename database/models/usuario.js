module.exports = (sequelize, dataTypes) => {
    let alias = "Usuario";
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

    const usuario = sequelize.define(alias, cols);

    return usuario 

}
