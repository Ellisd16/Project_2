const express = require('express');
const router  = express.Router();

const galleryPage_controller = require('../controllers/galleryPage_controller');

router.get('/', galleryPage_controller.index);

module.exports = router;