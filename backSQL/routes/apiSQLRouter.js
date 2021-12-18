let express = require('express');
let router = express.Router();

let serviceController = require('../controllers/controllerServices');
router.get('/api/services', serviceController.findAll);

let specialistsController = require('../controllers/controllerSpecialists');
router.get('/api/specialists', specialistsController.findAll);

module.exports = router;