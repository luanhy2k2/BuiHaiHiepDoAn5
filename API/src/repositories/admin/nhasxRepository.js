const db = require('../../config/db');
const NhasxRepository = {
    GetNhasxById: function ( id, callback) {
        const sql = 'CALL GetNhasxById(?)';
        db.query(sql, [id], function (error, [results]) {
            if (error) {
                callback(error, null);
            } else {
                callback(null, results[0]);
            }
        });
    },
    GetNhasxByname: function ( name, callback) {
        const sql = 'CALL searcNhasx(?)';
        db.query(sql, [name], function (error, [results]) {
            if (error) {
                callback(error, null);
            } else {
                callback(null, results);
            }
        });
    },
    GetAllNhasx: function ( callback) {
        const sql = 'CALL GetAllNhasx()';
        db.query(sql, [], function (error, [results]) {
            if (error) {
                callback(error, null);
            } else {
                callback(null, results);
            }
        });
    },

    CreateNhasx: function ( nhasx, callback) {
        const sql = 'CALL CreateNhasx(?, ?, ?)';
        db.query(sql, [nhasx.nsx_name, nhasx.diaChi, nhasx.sdt], function (error) {
            if (error) {
                callback(error, null);
            } else {
                callback(null, true);
            }
        });
    },

    UpdateNhasx: function ( nhasx, callback) {
        const sql = 'CALL UpdateNhasx(?, ?, ?, ?)';
        db.query(sql, [nhasx.nsx_id, nhasx.nsx_name, nhasx.diaChi, nhasx.sdt], function (error) {
            if (error) {
                callback(error, null);
            } else {
                callback(null, true);
            }
        });
    },

    DeleteNhasx: function ( id, callback) {
        const sql = 'CALL DeleteNhasx(?)';
        db.query(sql, [id], function (error) {
            if (error) {
                callback(error, null);
            } else {
                callback(null, true);
            }
        });
    },

    GetByName: function ( name, callback) {
        const sql = 'CALL timKiemNhaSx(?)';
        db.query(sql, [name], function (error, [results]) {
            if (error) {
                callback(error, null);
            } else {
                callback(null, results);
            }
        });
    },
};

module.exports = NhasxRepository;
