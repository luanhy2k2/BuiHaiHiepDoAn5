
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

    GetSanPham: function (pageSize, pageIndex, callback) {
        const page = pageIndex || 1;
        const limit = pageSize || 10;
        const offset = (page - 1) * limit;

        // Query to get paginated results
        const sql = `SELECT * FROM detail_product LIMIT ${limit} OFFSET ${offset} `;
        db.query(sql, function (error, results) {
            if (error) {
                callback(error, null);
            } else {
                // Query to get total count of products
                const countSql = 'SELECT COUNT(*) AS total FROM detail_product';
                db.query(countSql, [], function (countError, totalCountResult) {
                    if (countError) {
                        callback(countError, null);
                    } else {
                        const total = totalCountResult[0].total;
                        const response = {
                            results,
                            total,
                        };
                        callback(null, response);
                    }
                });
            }
        });
    },

    CreateSanpham: function (Sanpham, callback) {
        const sql = 'insert into detail_product(product_name, price, description, image, old_price,quantity) values (?,?,?,?,?,?)';
        db.query(sql, [
            Sanpham.product_name, Sanpham.price, Sanpham.description,
            Sanpham.image, Sanpham.old_price, Sanpham.quantity
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

