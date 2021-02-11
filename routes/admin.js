var express = require('express');
var router = express.Router();

var passport = require("../config/passport");
var admin_controller = require('../controllers/admin_controller');
var isAuthenticated = require("../config/middleware/isAuthenticated");
var inventory_controller = require("../controllers/inventory_controller")

router.get('/', isAuthenticated, admin_controller.dbPage);

router.get('/sign-out', admin_controller.signOutAdmin);

router.post('/login', passport.authenticate("local"), admin_controller.loginAdmin);

router.post('/add', inventory_controller.createProduct);

//added an update and delete route 
router.post('/update', inventory_controller.updateProduct);

router.post('/delete', inventory_controller.deleteProduct);

module.exports = router;