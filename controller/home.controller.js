var myMD = require('../models/sanpham.model');

exports.index = async (req, res, next) => {
    // tạo chức năng lọc
    let dieu_kien_loc = null;
    if (typeof (req.query.price) != 'undefined') {
        dieu_kien_loc = { price: req.query.price };
        // dieu_kien_loc = { price: { $gte: req.query.price   } };
        // lớn hơn hoặc bằng giá trị người dùng nhập
    }
    // let list = await myMD.spModel.find( dieu_kien_loc ).sort( { name:1 } );
    let list = await myMD.spModel.find(dieu_kien_loc).populate('id_theloai');
    console.log(list);

    res.render('home/index', { listSP: list });
}
exports.editsp = async (req, res, next) => {
    let msg = '';
    let idsp = req.params.idsp;
    let objSP = await myMD.spModel.findById(idsp);
    let listTL = await myMD.theloaiModel.find();
    if (req.method == 'POST') {
        // viết kiểm tra hợp lệ dữ liệu...

        // tạo đối tượng model để gán dữ liệu post
        let objSP = new myMD.spModel();
        objSP.name = req.body.name;
        objSP.id_theloai = req.body.id_theloai;
        objSP.avatar = req.body.avatar;
        objSP.content = req.body.content;
        objSP.price = req.body.price;
        objSP._id = idsp;

        // thực hiện ghi vào CSDL
        try {
            // let new_sp = await objSP.save();
            // console.log(new_sp);
            // msg = 'Đã thêm thành công';
            await myMD.spModel.findByIdAndUpdate(idsp, objSP);
            console.log(msg);
            res.redirect('/');
        } catch (error) {
            msg = 'Lỗi ghi CSDL: ' + error.message;
            console.log(error);
        }

    }
    res.render('home/editsp', { msg: msg, objSP: objSP, listTL: listTL });


}
exports.deletesp = async (req, res, next) => {
    let msg = '';
    let idsp = req.params.idsp;
    let objSP = await myMD.spModel.findById(idsp);
    let listTL = await myMD.theloaiModel.find();
    if (req.method == 'POST') {
        // viết kiểm tra hợp lệ dữ liệu...

        // tạo đối tượng model để gán dữ liệu post
        let objSP = new myMD.spModel();
        objSP.name = req.body.name;
        objSP.id_theloai = req.body.id_theloai;
        objSP.avatar = req.body.avatar;
        objSP.content = req.body.content;
        objSP.price = req.body.price;
        objSP._id = idsp;

        // thực hiện ghi vào CSDL
        try {
            // let new_sp = await objSP.save();
            // console.log(new_sp);
            // msg = 'Đã thêm thành công';
            await myMD.spModel.findByIdAndDelete(idsp, objSP);
            console.log(msg);
            res.redirect('/');
        } catch (error) {
            msg = 'Lỗi ghi CSDL: ' + error.message;
            console.log(error);
        }

    }

    res.render('home/deletesp', { msg: msg, objSP: objSP, listTL: listTL });
}
exports.chitietsp = async (req, res, next) => {
    let msg = '';
    let idsp = req.params.idsp;
    let objSP = await myMD.spModel.findById(idsp);
    let listTL = await myMD.theloaiModel.find();
    if (req.method == 'POST') {
        // viết kiểm tra hợp lệ dữ liệu...

        // tạo đối tượng model để gán dữ liệu post
        let objSP = new myMD.spModel();
        objSP.name = req.body.name;
        objSP.id_theloai = req.body.id_theloai;
        objSP.avatar = req.body.avatar;
        objSP.content = req.body.content;
        objSP.price = req.body.price;
        objSP._id = idsp;
    }
    res.render('home/chitietsp', { msg: msg, objSP: objSP, listTL: listTL });
}
exports.sapxepcao = async (req, res, next) => {
    let dieu_kien_loc = null;
    if (typeof (req.query.price) != 'undefined') {
        // dieu_kien_loc = { price: req.query.price };
        dieu_kien_loc = { price: { $gte: req.query.price } };
        // lớn hơn hoặc bằng giá trị người dùng nhập
    }


    //let list = await myMD.spModel.find( dieu_kien_loc ).sort( { name:1 } );
    let list = await myMD.spModel.find(dieu_kien_loc).sort({ name: -1 })
        .populate('id_theloai');
    console.log(list);


    res.render('home/index', { listSP: list });
}
exports.sapxepthap = async (req, res, next) => {
    let dieu_kien_loc = null;
    if (typeof (req.query.price) != 'undefined') {
        // dieu_kien_loc = { price: req.query.price };
        dieu_kien_loc = { price: { $gte: req.query.price } };
        // lớn hơn hoặc bằng giá trị người dùng nhập
    }


    //let list = await myMD.spModel.find( dieu_kien_loc ).sort( { name:1 } );
    let list = await myMD.spModel.find(dieu_kien_loc).sort({ name: 1 })
        .populate('id_theloai');
    console.log(list);


    res.render('home/index', { listSP: list });
}
exports.locmaytinh = async (req, res, next) => {
    res.render('home/index', { listSP: list });
}
exports.locdienthoai = async (req, res, next) => {
    res.render('home/index', { listSP: list });
}
