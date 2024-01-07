const myRepository = require('../../repositories/admin/loaispRepository');
const LoaiSpService = {
    GetAllLoaiSp: (callback) => {
        myRepository.getAllData((err, results) => {
            callback(err, results);
        });
    },
    GetLoaiSpById: (id, callback) => {
        myRepository.GetLoaiSpById(id,(err, results) => {
            callback(err, results);
        });
    },
    CreateLoaiSp: (name, callback) => {
        myRepository.CreateLoaiSp( name,(err, results) => {
            callback(err, results);
        });
    },
    UpdateLoaiSp: (loaisp, callback) => {
        myRepository.UpdateLoaiSp(loaisp,(err, results) => {
            callback(err, results);
        });
    },
    DeleteLoaiSp: (id, callback) => {
        myRepository.DeleteLoaiSp(id,(err, results) => {
            callback(err, results);
        });
    }
};

module.exports = LoaiSpService;

