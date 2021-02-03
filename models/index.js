

"use strict";
//establishing required packages
const fs = require("fs");
const path = require("path");
const Sequelize = require("sequelize");
const basename = path.basename(module.filename);
const env = process.env.NODE_ENV || "development";
const config = require(__dirname + "/../config/config.json")[env];
let db = {};

//We will need this data for the routes 
if (config.use_env_variable) {
    sequelize = new Sequelize(process.env[config.use_env_iable]);
} else {
    sequelize = new Sequelize(config.database, config.username, config.password, config);
}
//reading the directory for files
fs
    .readdirSync(__dirname)
    //filters through the directory 
    .filter((file) => {
        console.log("Here is the directory" + __dirname);
        console.log("Here is the file" + file);
        return (file.indexOf(".") !== 0) && (file !== basename) && (file.slice(-3) === ".js");
    })
    //imports the sequelize model for each file
    .forEach((file) => {
        const model = sequelize["import"](path.join(__dirname, file));
        db[model.name] = model;
    });
//returns the names of properties for each model
Object.keys(db).forEach((modelName) => {
    if (db[modelName].associate) {
        db[modelName].associate(db);
    }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

//db contains the data from the mysql database
module.exports = db;