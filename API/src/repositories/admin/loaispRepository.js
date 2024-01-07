const db = require('../../config/db');
const LoaiSpRespository = {
     getAllData: (callback) => {
         db.query('select * from categories', (err, results) => {
            callback(err, results);
        });
    },
    GetLoaiSpById (id,callback){
        db.query('select * from categories where category_id = ?', [id], (err, results) => {
            callback(err, results[0]);
        });
    },
    CreateLoaiSp(name, callback){
        db.query('insert into categories(category_name) values(?)', [name], (err, results) => {
            callback(err, results);
        });
    },
    UpdateLoaiSp(loaisp, callback){
        db.query('update categories set category_name = ? where category_id = ?', [loaisp.loai_name, loaisp.loai_id], (err, results) => {
            callback(err, results);
        });
    },
    DeleteLoaiSp(id, callback){
        db.query('delete from categories where category_id = ?', [id], (err, results) => {
            callback(err, results);
        });
    },
    

};

module.exports = LoaiSpRespository;
