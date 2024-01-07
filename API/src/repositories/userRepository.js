const db = require('../config/db');
const UserRepository = {
    GetUserByAccount: function ( username, password, callback) {
        const sql = 'CALL authenticate(?, ?)';
        db.query(sql, [username, password], function (error, [results]) {
            if (error) {
                callback(error, null);
            } else {
                if (Array.isArray(results) && results.length > 0) {
                    callback(null, results[0]);
                } else {
                    callback(null, null);
                }
            }
        });
    },

    CreateUser: function ( User, callback) {
        const sql = 'CALL CreatetaiKhoan(?, ?, ?, ?, ?, ?, ?, ?)';
        db.query(
            sql,
            [
                User.hoTen,
                User.ngaySinh,
                User.gioiTinh,
                User.diaChi,
                User.email,
                User.sdt,
                User.taiKhoan,
                User.matKhau,
            ],
            function (error) {
                if (error) {
                    callback(error);
                } else {
                    callback(null);
                }
            }
        );
    },
};

module.exports = UserRepository;
