
const db = require("../../config/db");
const SanphamRepository = {
    GetSanphamById: function ( id, callback) {
        const sql = 'CALL GetSpById(?)';
        db.query(sql, [id], function (error, [results]) {
            if (error) {
                callback(error, null);
            } else {
                callback(null, results[0]);
            }
        });
    },

    GetSanphamByLoai: function ( id, callback) {
        const sql = 'CALL GetSanphamByLoai(?)';
        db.query(sql, [id], function (error, [results]) {
            if (error) {
                callback(error, null);
            } else {
                callback(null, results);
            }
        });
    },

    GetSanphamByNsx: function ( id, callback) {
        const sql = 'CALL GetSanphamByNsx(?)';
        db.query(sql, [id], function (error, [results]) {
            if (error) {
                callback(error, null);
            } else {
                callback(null, results);
            }
        });
    },

    GetSanphamByTg: function ( id, callback) {
        const sql = 'CALL GetSanphamByTg(?)';
        db.query(sql, [id], function (error, [results]) {
            if (error) {
                callback(error, null);
            } else {
                callback(null, results);
            }
        });
    },

    GetSanphamByName: function ( name, callback) {
        const sql = 'CALL GetSanphamByName(?)';
        db.query(sql, [name], function (error, [results]) {
            if (error) {
                callback(error, null);
            } else {
                callback(null, results);
            }
        });
    },

    GetAllSanpham: function ( callback) {
        const sql = 'sele';
        db.query(sql, [], function (error, [results]) {
            if (error) {
                callback(error, null);
            } else {
                callback(null, results);
            }
        });
    },

    CreateSanpham: function (Sanpham, callback) {
        const sql = 'CALL CreateSanpham(?, ?, ?,?,?,?,?,?,?,?)';
        db.query(sql, [
            Sanpham.sanp_name, Sanpham.size, Sanpham.tg_id,
            Sanpham.loai_id, Sanpham.nsx_id, Sanpham.soTrang,
            Sanpham.tomTat, Sanpham.namsx, Sanpham.image, Sanpham.price
        ], function (error) {
            if (error) {
                callback(error, null);
            } else {
                callback(null, true);
            }
        });
    },

    UpdateSanpham: function ( Sanpham, callback) {
        const sql = 'CALL UpdateSanpham(?, ?, ?,?,?,?,?,?,?,?,?)';
        db.query(sql, [
            Sanpham.sanp_id, Sanpham.sanp_name, Sanpham.size, Sanpham.tG_id,
            Sanpham.loai_id, Sanpham.nsx_id, Sanpham.soTrang,
            Sanpham.tomTat, Sanpham.namsx, Sanpham.image, Sanpham.gia
        ], function (error) {
            if (error) {
                callback(error, null);
            } else {
                callback(null, true);
            }
        });
    },

    DeleteSanpham: function ( id, callback) {
        const sql = 'CALL DeleteSanpham(?)';
        db.query(sql, [id], function (error) {
            if (error) {
                callback(error, null);
            } else {
                callback(null, true);
            }
        });
    }
};

module.exports = SanphamRepository;

