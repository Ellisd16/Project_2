var express = require('express');
var router  = express.Router();

var passport = require("../config/passport");
var admin_controller = require('../controllers/admin_controller');
var isAuthenticated = require("../config/middleware/isAuthenticated");
var inventory_controller = require("../controllers/inventory_controller")

router.get('/', isAuthenticated , admin_controller.dbPage);

router.get('/sign-out', admin_controller.signOutAdmin);

router.post('/login', passport.authenticate("local"), admin_controller.loginAdmin);

router.post('/add', inventory_controller.createProduct);

module.exports = router;