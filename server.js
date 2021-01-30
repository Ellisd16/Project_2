// seting up the express

const express = require("express");

const app = express();

const PORT = process.env.PORT || 8080;

// const db = require("./models")
//We'll use this once the db is completed

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

//Handlebars setup
const exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");


//Routes
//We'll add the routes in once they're complete

//Syncing the sequelize models and starting App
db.sequelize.sync({ force: true }).then(() => {
    app.listen(PORT, function () {
        console.log("App listening on PORT " + PORT)
    })
})