
const express = require('express');
const router  = express.Router();

const homePage_controller = require('../controllers/homePage_controller');

router.get('/', homePage_controller.index);

module.exports = router;