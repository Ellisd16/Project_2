var express = require('express');
var router  = express.Router();

var passport = require("../config/passport");
var admin_controller = require('../controllers/admin_controller');
var isAuthenticated = require("../config/middleware/isAuthenticated");

// router.get('/signup', admin_controller.registrationPage);

router.get('/sign-out', admin_controller.signOutAdmin);

router.post('/login', passport.authenticate("local"), admin_controller.loginAdmin);

router.post('/signup', admin_controller.signUpAdmin);

module.exports = router;