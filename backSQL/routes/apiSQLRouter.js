let express = require('express');
let router = express.Router();

let departmentController = require('../controllers/controllerDepartment');

router.get('/api/department', departmentController.findAll);

module.exports = router;