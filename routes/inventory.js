const express = require('express');
const router  = express.Router();

const inventory_controller = require('../controllers/inventoryPage_controller');

router.get('/', inventory_controller.index);

module.exports = router;