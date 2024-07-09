var express = require('express');
var router = express.Router();
var multer = require('multer');
var uploader = multer({dest: './tmp'});
var accountCtrl= require('../controller/fromAccount.controller');

router.get('/',accountCtrl.account);
router.post('/',accountCtrl.account);

router.get('/add',accountCtrl.add);
router.post('/add', uploader.single("file_anh"),accountCtrl.add);

router.get('/addTL',accountCtrl.addTL);
router.post('/addTL',accountCtrl.addTL);

router.get('/Reg',accountCtrl.Reg);
router.post('/Reg',accountCtrl.Reg);
module.exports = router;