module.exports = (sequelize, dataTypes) => {
    let alias = "Categoria";
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },

        nombre: {
            type: dataTypes.STRING,
        },

        descripcion: {
            type: dataTypes.STRING,
        },


    }

    let otrasConfig = {
        tableName: 'categorias'
    }

    const categoria = sequelize.define(alias, cols, otrasConfig);

    categoria.associate = function (models) {
        categoria.hasMany(models.Producto, {
            as: "Producto",
            foreignKey: "categoriaId"
        })

    }  
    return categoria 
  
  }