
//Calling invetory and findAll()

// const { where } = require("sequelize");

const db = require("../models");

exports.index = (req, res) => {
    console.log("we got to inventory_controller.index")
    // res.render('inventory/inventory', {
    //     layout: 'main',
    // })
    console.log("it isnt the res function")

    db.Product.findAll().then(function (dbProduct) {
        console.log("we got to the render function.")
        res.render('inventory/inventory', {
            layout: 'main',
            product: dbProduct
        });
        console.log(dbProduct)
    });
};
exports.createProduct = (req, res) => {
    // Add id from User onto req.body
    // req.body.UserId = req.user.id;
    console.log("We got into the create product function in inv_controller")
    console.log(req.body);
    db.Product.create(req.body).then(dbPost => res.json(dbPost));
  };
  
  