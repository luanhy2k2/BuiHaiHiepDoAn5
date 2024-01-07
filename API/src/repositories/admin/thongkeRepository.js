const db = require('../../config/db');
const ThongKeRepository = {
    ThongKeDoanhThuHomNay: function ( callback) {
        const sql = 'CALL ThongKeDoanhThuHomNay()';
        db.query(sql, [], function (error, [results]) {
            if (error) {
                callback(error, null);
            } else {
                callback(null, results[0]);
            }
        });
    },

    ThongKeDoanhThuTrongThang: function ( callback) {
        const sql = 'CALL ThongKeDoanhThuTrongThang()';
        db.query(sql, [], function (error, [results]) {
            if (error) {
                callback(error, null);
            } else {
                callback(null, results[0]);
            }
        });
    },

    ThongKeDoanhThuTrongTuan: function ( callback) {
        const sql = 'CALL ThongKeDoanhThuTrongTuan()';
        db.query(sql, [], function (error, [results]) {
            if (error) {
                callback(error, null);
            } else {
                callback(null, results[0]);
            }
        });
    },

    ThongKeSanPhamHetHang: function ( callback) {
        const sql = 'CALL ThongKeSanPhamHetHang()';
        db.query(sql, [], function (error, [results]) {
            if (error) {
                callback(error, null);
            } else {
                callback(null, results[0]);
            }
        });
    },

    ThongKeSoDonHang: function ( callback) {
        const sql = 'CALL ThongKeSoDonHang()';
        db.query(sql, [], function (error, [results]) {
            if (error) {
                callback(error, null);
            } else {
                callback(null, results[0]);
            }
        });
    },

    ThongKeSoDonHangHomNay: function ( callback) {
        const sql = 'CALL ThongKESoDonHangHomNay()';
        db.query(sql, [], function (error, [results]) {
            if (error) {
                callback(error, null);
            } else {
                callback(null, results[0]);
            }
        });
    },

    ThongKeSoDonHangTrongThang: function ( callback) {
        const sql = 'CALL ThongKeSoDonHangTrongThang()';
        db.query(sql, [], function (error, [results]) {
            if (error) {
                callback(error, null);
            } else {
                callback(null, results[0]);
            }
        });
    },

    ThongKeSoDonHangTrongTuan: function ( callback) {
        const sql = 'CALL ThongKeSoDonHangTrongTuan()';
        db.query(sql, [], function (error, [results]) {
            if (error) {
                callback(error, null);
            } else {
                callback(null, results[0]);
            }
        });
    },

    ThongKeTongSanPham: function ( callback) {
        const sql = 'CALL ThongKeTongSanPham()';
        db.query(sql, [], function (error, [results]) {
            if (error) {
                callback(error, null);
            } else {
                callback(null, results[0]);
            }
        });
    },

    ThongKeTongSoTienBan: function ( callback) {
        const sql = 'CALL ThongKeTongSoTienBan()';
        db.query(sql, [], function (error, [results]) {
            if (error) {
                callback(error, null);
            } else {
                callback(null, results[0]);
            }
        });
    },
};

module.exports = ThongKeRepository;
