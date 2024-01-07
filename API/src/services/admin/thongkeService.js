const thongKeRepository = require('../../repositories/admin/thongkeRepository')
const ThongKeService = {
    ThongKeDoanhThuHomNay: (callback) => {
        thongKeRepository.ThongKeDoanhThuHomNay((err, results) => {
            callback(err, results);
        });
    },
    ThongKeDoanhThuTrongThang: (callback) => {
        thongKeRepository.ThongKeDoanhThuTrongThang((err, results) => {
            callback(err, results);
        });
    },
    ThongKeDoanhThuTrongTuan: (callback) => {
        thongKeRepository.ThongKeDoanhThuTrongTuan((err, results) => {
            callback(err, results);
        });
    },
    ThongKeSanPhamHetHang: (callback) => {
        thongKeRepository.ThongKeSanPhamHetHang((err, results) => {
            callback(err, results);
        });
    },
    ThongKeSoDonHang: (callback) => {
        thongKeRepository.ThongKeSoDonHang((err, results) => {
            callback(err, results);
        });
    },
    ThongKeSoDonHangHomNay: (callback) => {
        thongKeRepository.ThongKeSoDonHangHomNay((err, results) => {
            callback(err, results);
        });
    },
    ThongKeSoDonHangTrongTuan: (callback) => {
        thongKeRepository.ThongKeSoDonHangTrongTuan((err, results) => {
            callback(err, results);
        });
    },
    ThongKeSoDonHangTrongThang: (callback) => {
        thongKeRepository.ThongKeSoDonHangTrongThang((err, results) => {
            callback(err, results);
        });
    },
    ThongKeTongSanPham: (callback) => {
        thongKeRepository.ThongKeTongSanPham((err, results) => {
            callback(err, results);
        });
    },
    ThongKeTongSoTienBan: (callback) => {
        thongKeRepository.ThongKeTongSoTienBan((err, results) => {
            callback(err, results);
        });
    }
};

module.exports = ThongKeService;
