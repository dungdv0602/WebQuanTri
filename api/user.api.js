var md = require('../models/sanpham.model');

exports.list = async(req, res, next)=>{
    try {
        let listUser = await md.userModel.find();

        if (listUser) {
            res.status(200).json({
                msg: 'Lay du lieu thanh cong',
                data: listUser
                
            });
        } else {
            res.status(204).json({
                msg: 'Deo co du lieu',

            });
        }
    } catch (err) {
        return res.status(err.status).json({
            msg: err.massage
        });
    }

    // res.status(200).json( { msg: 'Danh sách tài khoản'}  );
 }
 
 
 exports.add = async(req, res, next)=>{
    let objSP = new md.userModel({
            username: req.body.username,
            passwd :req.body.passwd,
           email : req.body.email
        });
    try {
        await objSP.save();
        res.status(200).json({
            msg: 'Them lieu thanh cong',
            data: objSP
            
        });
    } catch (error) {
        return res.status(500).json({
            msg: error.massage  
        });
    }



    
 }
 
 
 exports.edit = (req, res, next)=>{
 
 
    res.status(200).json( { msg: 'Sửa'}  );
 }
 
 
 exports.delete = (req, res, next)=>{
   
    res.status(200).json( { msg: 'Xóa'}  );
 }
 