var express = require('express');
var router = express.Router();
var controller = require('../controllers/travel');
const ctrlMain = require("../controllers/main");

/* GET travel page. */
router.get('/', controller.travel);

module.exports = router;