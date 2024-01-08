
const donhangRepository = require("../../repositories/admin/donhangRepository");
const db = require('../../config/db');
const DonHangService = {
    GetDonHangById: (id, callback) => {
        donhangRepository.GetDonHangById(id, (err, results) => {
            callback(err, results);
        });
    },
    GetChiTietDonHangById: (id, callback) => {
        donhangRepository.GetChiTietDonHangById(id, (err, results) => {
            callback(err, results);
        });
    },
    GetAllDonHang: (pageSize, pageIndex, callback) => {
        donhangRepository.GetAllDonHang(pageSize, pageIndex, (err, results) => {
            callback(err, results);
        });
    },
   
   
    
    
};

module.exports = DonHangService;


