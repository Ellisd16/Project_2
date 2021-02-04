// seting up the express
// Dependencies
// ======================
const express = require("express");
const session = require("express-session");
const passport = require("./config/passport");
const config				 = require("./config/extra-config");
const compression    = require('compression')

const PORT = process.env.PORT || 8080;
const db = require("./models")
// ======================

//instantiate
const app = express();

// set up view engine
app.set('views', path.join(__dirname, 'views'));

//Handlebars setup
const exphbs = require("express-handlebars");
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

const isAuth = require("./config/middleware/isAuthenticated");
const authCheck = require('./config/middleware/attachAuthenticationStatus');


// uncomment after creating and placing your favicon in /public
//app.use(favicon(__dirname + '/public/favicon.ico'));


app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// ASK what this extended:false means in session today
app.use(express.static(path.join(__dirname, "public")));

app.use(session({ secret: config.sessionKey, resave: true, saveUninitialized: true }));

app.use(passport.initialize());
app.use(passport.session());
app.use(authCheck);

app.use(compression());

require("./routes")(app);


// catch 404 forward to error handler
app.use((req, res, next) => {
    const err = new Error('Not Found');
    err.status = 404;
    next(err);
  });

// error handler
  app.use((err, req, res, next) => {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: (app.get('env') === 'development') ? err : {}
    })
  });

module.exports = app;
//Routes
// Not sure how these will work with handlebars  but ill add them in for now.
// If anyone figures it out before i do, feel free to recomment these or to delete them. handles "shaka brah"

// require("./routes/api-routes")(app);
// require("./routes/html-routes")(app);




//Syncing the sequelize models and starting App

//Also, I believ force true restarts the table, so I'm not sure if I should take that out or not.
// db.sequelize.sync({ force: true }).then(() => {
//     app.listen(PORT, function () {
//         console.log("==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.", PORT, PORT);
//     })
// })