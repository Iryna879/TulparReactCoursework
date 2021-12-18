let express = require('express');
let router = express.Router();

let serviceController = require('../controllers/controllerServices');

router.get('/api/services', serviceController.findAll);

module.exports = router;