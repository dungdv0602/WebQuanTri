var express = require('express');
var router = express.Router();
var homeCtrl= require('../controller/home.controller');
var check_login = require('../middlewares/check_login');
router.use( (req, res, next) => {
    
    console.log("---- Dòng này là middleware ---- ");
    next();
});
router.get('/' ,check_login.yeu_cau_dang_nhap,homeCtrl.index);
router.post('/',check_login.yeu_cau_dang_nhap,homeCtrl.index)

router.get('/edit/:idsp',homeCtrl.editsp);
router.post('/edit/:idsp',homeCtrl.editsp);

router.get('/delete/:idsp',homeCtrl.deletesp);
router.post('/delete/:idsp',homeCtrl.deletesp);

router.get('/chitietsp/:idsp',homeCtrl.chitietsp);
router.post('/chitietsp/:idsp',homeCtrl.chitietsp);

router.get('/sapxepcao',homeCtrl.sapxepcao);

router.get('/sapxepthap',homeCtrl.sapxepthap);

router.get('/locmaytinh',homeCtrl.locmaytinh);

router.get('/locdienthoai',homeCtrl.locdienthoai);
module.exports = router;
