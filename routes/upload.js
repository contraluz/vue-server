var express = require('express');
var router = express.Router();

var dataCtrl = require('../controller/upload.controller');

router.post('/upload',dataCtrl.upload);

module.exports = router;
