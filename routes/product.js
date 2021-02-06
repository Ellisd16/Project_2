const express = require('express');
const router  = express.Router();

const product_controller = require('../controllers/product_controller');

router.get('/:id', product_controller.index);

module.exports = router;