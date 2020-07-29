const bcryptjs = require("bcryptjs");
const db = require('../database/models')

const productController ={
    index: function(req,res){
        return res.render('product');
    },

    add: function(req,res){
        res.render("CrearProducto")

    },
      
}
module.exports = productController;