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
        },
        apellido : {
            type: dataTypes.STRING,
        },
        email : {
            type: dataTypes.STRING,
        },
        password : {
            type: dataTypes.STRING(300),
        }    
    }

    const usuario = sequelize.define(alias, cols);

    return usuario 

}
