// here I'll need the sequelize database

const db = require("../models");

//find, update, delete

//theres no user page as of yet, so I'm not sure what to render. 
//I'm thinking that I might just render the "index" page for the mean time

exports.index = (req, res) => {
    res.render("index");
}