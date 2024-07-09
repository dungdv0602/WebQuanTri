var db = require('./db');
//định nghĩa khuôn mẫu cho sản phẩm
const spSchema = new db.mongoose.Schema(
    {
        name: { type: String, required: true },
        id_theloai: { type: db.mongoose.Schema.Types.ObjectId, ref: 'theloaiModel' },
        avatar: { type: String, required: true },
        content: { type: String, required: true },
        price: { type: Number, require: true },
    },
    {
        collection: 'the_loai'
    }
);
// tạo model
let spModel = db.mongoose.model('spModel', spSchema);
//--- Làm tương tự với thể loại 
let theloaiSchema = new db.mongoose.Schema(
    {
        name: { type: String, required: true }
    }, {
    collection: 'the_loai'
}
);
let theloaiModel = db.mongoose.model("theloaiModel", theloaiSchema);
const userSchema = new db.mongoose.Schema(
    {
        username: { type: String, require: true },
        passwd: { type: String, require: true },
        email: { type: String, require: true },
    },
    {
        collection: 'tb_user'
    }
);
let userModel = db.mongoose.model('userModel', userSchema);
module.exports = { spModel, theloaiModel, userModel }
