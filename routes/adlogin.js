const express = require('express');
const router  = express.Router();

const galleryPage_controller = require('../controllers/adlogin_controller');

router.get('/', galleryPage_controller.index);

module.exports = router;