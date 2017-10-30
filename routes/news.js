var express = require('express');
var router = express.Router();

var dataCtrl = require('../controller/news.controller');

router.post('/data',dataCtrl.create);
router.get('/data/:id',dataCtrl.get);
router.put('/data/:id',dataCtrl.update);
router.delete('/data/:id',dataCtrl.remove);
router.post('/list',dataCtrl.list);
router.post('/deletes',dataCtrl.deletes);
module.exports = router;
