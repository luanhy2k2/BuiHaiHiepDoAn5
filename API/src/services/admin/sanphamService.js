const sanphamRepository = require('../../repositories/admin/sanphamRepository')
const SanphamService = {
    GetSanphamById: (id, callback) => {
        sanphamRepository.GetSanphamById(id, (err, results) => {
            callback(err, results);
        });
    },
    GetSanphamByName: (name, callback) => {
        sanphamRepository.GetSanphamByName(name, (err, results) => {
            callback(err, results);
        });
    },
  
  
    GetAllSanpham: (pageSize, pageIndex,callback) => {
        sanphamRepository.GetSanPham(pageSize, pageIndex,(err, results) => {
            callback(err, results);
        });
    },
    CreateSanpham: (Sanpham, callback) => {
        sanphamRepository.CreateSanpham(Sanpham, (err, results) => {
            callback(err, results);
        });
    },
    UpdateSanpham: (Sanpham, callback) => {
        sanphamRepository.UpdateSanpham(Sanpham, (err, results) => {
            callback(err, results);
        });
    },
    DeleteSanpham: (id, callback) => {
        sanphamRepository.DeleteSanpham(id, (err, results) => {
            callback(err, results);
        });
    }
};

module.exports = SanphamService;
