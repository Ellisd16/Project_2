// seting up the express

const express = require("express");

const app = express();

const PORT = process.env.PORT || 8080;

const db = require("./models")
//We'll use this once the db is completed

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

//Handlebars setup
const exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");


//Routes
// Not sure how these will work with handlebars  but ill add them in for now.
// If anyone figures it out before i do, feel free to recomment these or to delete them. handles "shaka brah"

// require("./routes/api-routes")(app);
// require("./routes/html-routes")(app);

//Syncing the sequelize models and starting App

//Also, I believ force true restarts the table, so I'm not sure if I should take that out or not.
db.sequelize.sync({ force: true }).then(() => {
    app.listen(PORT, function () {
        console.log("App listening on PORT " + PORT)
    })
})