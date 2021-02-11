const db = require("../models");


//reads :id from inventory

exports.index = (req, res) => {
    db.Product.findOne({
        where: {
            id: req.params.id
        },

    }).then(function (dbProduct) {
        console.log(dbProduct)
        res.render("product/product", {
            layout: "main",
            product: dbProduct
        });
    })
}