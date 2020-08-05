const db = require('../database/models');
const sequelize = db.sequelize;

let userProfileController={

    index: function (req, res) {

                
                res.render("userProfile");
         
    }

};
module.exports = userProfileController;