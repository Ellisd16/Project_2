
//Calling invetory and findAll()

// const { where } = require("sequelize");

const db = require("../models");

exports.index = (req, res) => {
    console.log("we got to inventory_controller.index")
    res.render('inventory/inventory', {
        layout: 'main',
    })
    console.log("it isnt the res function")

    // db.stock.findAll().then(function (dbProduct) {
    //     console.log("we got to the render function.")
    //     res.render('inventory/inventory', {
    //         layout: 'main',
    //         product: dbProduct
    //     });
    //     console.log(dbProduct)
    // });

};