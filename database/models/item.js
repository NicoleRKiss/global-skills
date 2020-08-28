module.exports = (sequelize, dataTypes) => {

    let alias = "Item";
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        salePrice: {
            type: dataTypes.INTEGER,
        },

        quantity: {
            type: dataTypes.INTEGER,
        },

        subTotal: {
            type: dataTypes.INTEGER,
            
        },
        state: {
            type: dataTypes.INTEGER,
            
        },
        productId: {
            type: dataTypes.INTEGER,
        },

        userId: {
            type: dataTypes.INTEGER,
            
        },

        cartId: {
            type: dataTypes.INTEGER,
           
        },
        nombre:{
            type: dataTypes.STRING,
        }
        ,
        descripcion:{
            type: dataTypes.STRING,
        }

    }

    const item = sequelize.define(alias, cols);

    return item

}
