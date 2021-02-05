
//Calling invetory and findAll()

const { where } = require("sequelize");
const db = require("../models");

exports.index = (req, res) => {

    db.Product.findAll({

    }).then(function (dbProduct) {
        res.render("inventory", {
            layout: "main",
            product: dbProduct
        });
    });

}