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
    GetSanphamByNsx: (id, callback) => {
        sanphamRepository.GetSanphamByNsx(id, (err, results) => {
            callback(err, results);
        });
    },
    GetSanphamByTg: (id, callback) => {
        sanphamRepository.GetSanphamByTg(id, (err, results) => {
            callback(err, results);
        });
    },
    GetSanphamByLoai: (id, callback) => {
        sanphamRepository.GetSanphamByLoai(id, (err, results) => {
            callback(err, results);
        });
    },
    GetAllSanpham: (callback) => {
        sanphamRepository.GetAllSanpham((err, results) => {
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
