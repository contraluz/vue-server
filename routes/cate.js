var express = require('express');
var router = express.Router();

var dataCtrl = require('../controller/cate.controller');

router.post('/data',dataCtrl.create);
router.get('/data/:id',dataCtrl.get);
router.put('/data/:id',dataCtrl.update);
router.delete('/data/:id',dataCtrl.remove);
router.get('/list/',dataCtrl.list);
// router.get('/list/:type',dataCtrl.list);
router.post('/deletes',dataCtrl.deletes);
module.exports = router;
