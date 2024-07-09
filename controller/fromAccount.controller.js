var myMD = require ('../models/sanpham.model');
var fs = require('fs');
exports.account= async(req,res,next)=>{
    let msg = '';
    if(req.method == 'POST'){

        try {
            let objU =await myMD.userModel.findOne({ username: req.body.username });
            console.log(objU);
            if(objU != null){  // có tồn tại user
                // kiểm tra pass
                if(objU.passwd == req.body.passwd){
                    // đăng nhập thành công
                    // ghi dữ liệu vào session
                    req.session.userLogin = objU;
                    // chuyển trang
                   return res.redirect('/');
                }else{
                    msg = 'Sai password';
                    console.log(msg);
                } 

            }else{
                msg = 'Không tồn tại user';
                console.log(msg);
            }

        } catch (error) {
            msg = error.message; 
            console.log(msg);
        } 

    }
    res.render('fromAcount/acount',{msg:msg});
}

exports.add= async(req,res,next)=>{
    let msg = '';
    let listTL= await myMD.theloaiModel.find();
    if(req.method =='POST'){
        fs.renameSync(req.file.path,"./public/uploads/"+ req.file.originalname);
           let url_file = '/uploads/'+ req.file.originalname;

        // viết kiểm tra hợp lệ dữ liệu...
        // tạo đối tượng model để gán dữ liệu post
        let objSP = new myMD.spModel();
        objSP.name = req.body.name;
        objSP.id_theloai = req.body.id_theloai;
        objSP.avatar = url_file;
        objSP.content = req.body.content;
        objSP.price = req.body.price;
        // thực hiện ghi vào CSDL
        try {
            let new_sp = await objSP.save();
            console.log(new_sp);
            res.redirect('/');
        } catch (error) {
            msg = 'Lỗi ghi CSDL: '+ error.message;
            console.log( error );
        }
    }
    res.render('fromAcount/add',{msg:msg,listTL:listTL});
}
exports.addTL= async(req,res,next)=>{
    if(req.method =='POST'){
        // viết kiểm tra hợp lệ dữ liệu...
        // tạo đối tượng model để gán dữ liệu post
        let objSP = new myMD.theloaiModel();
        objSP.name = req.body.name;
        // thực hiện ghi vào CSDL
        try {
            let new_sp = await objSP.save();
            console.log(new_sp);
            
            
            res.redirect('/');
             
        } catch (error) {
            
            console.log( error );

        }
    }
    res.render('fromAcount/addTL');

}

exports.Reg= async(req,res,next)=>{
    let msg="";
    if(req.method =='POST'){
        console.log(req.body);
        // kiểm tra hợp lệ dữ liệu
        if(req.body.passwd != req.body.passwd2){
            msg = 'Xác nhận password không đúng!!!';
            return  res.render('fromAcount/Reg',{msg:msg});
        }
        

        //tự viết thêm kiểm tra hợp lệ dữ liệu ở các trường khác
        
        try {
            let objU = new myMD.userModel();
            objU.username = req.body.username;
            objU.passwd = req.body.passwd;
            objU.email = req.body.email;
            let new_sp = await objU.save();
            console.log(new_sp);
            msg = 'Đăng ký thành công';
            res.redirect('/account');
        } catch (error) {

            msg = error.message;
        } 
    }
    res.render('fromAcount/Reg');
}
