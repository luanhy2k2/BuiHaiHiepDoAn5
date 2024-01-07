const HomeRepository = require("../../repositories/client/HomeRepository");

const HomeService = {
    GetSanphamByName(name, callback) {
        HomeRepository.GetSanphamByName(name, (err, results) => {
            callback(err, results);
        });
    },

    GetSanPham(pageSize, pageIndex, callback) {
        HomeRepository.GetSanPham(pageSize, pageIndex, (err, results) => {
            callback(err, results);
        });
    },

    GetSanphamByLoai(id, callback) {
        HomeRepository.GetSanphamByLoai(id, (err, results) => {
            callback(err, results);
        });
    },

    GetSanPhamBanChay(id, callback) {
        HomeRepository.GetSanPhamBanChay(id, (err, results) => {
            callback(err, results);
        });
    },

    GetLoaiSp(callback) {
        HomeRepository.GetLoaiSp((err, results) => {
            callback(err, results);
        });
    },

}

module.exports = HomeService;
