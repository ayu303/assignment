const express = require('express');
const router = express.Router();
const serviceController = require('../controllers/serviceController');

router.get('/', serviceController.getAllServices);
router.post('/', serviceController.createService);
// Add more routes as needed

module.exports = router;
