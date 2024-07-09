var express = require('express');
var router = express.Router();

var user_api= require('../api/user.api');
//URL:GET:/api/users
router.get('/users',user_api.list);

router.get('/add',user_api.add);
router.post('/add',user_api.add);

router.put('/edit/:idu',user_api.edit);

router.delete('/delete/:idu',user_api.delete);
module.exports = router;