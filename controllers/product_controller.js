const db = require("../models");


//reads :id from inventory

exports.id = (req, res) => {
    db.Product.findOne({
        where: {
            id: req.params.id
        },

    }).then(function (dbProduct) {
        res.render("product", {
            layout: "main",
            product: dbProduct
        });
    })
}