
const db = require("../../config/db");
const SanphamRepository = {
    GetSanphamById: function ( id, callback) {
        const sql = 'select * from detail_product where product_id = ?';
        db.query(sql, [id], function (error, [results]) {
            if (error) {
                callback(error, null);
            } else {
                callback(null, results[0]);
            }
        });
    },

    


    GetSanphamByName: function (name, callback) {
        const sql = 'SELECT * FROM detail_product WHERE detail_product.product_name LIKE ?';
        const searchTerm = '%' + name + '%';

        db.query(sql, searchTerm, function (error, results) {
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
        const sql = 'insert into detail_product(product_name, category_id, price, description, image, old_price,quantity) values (?,?,?,?,?,?,?)';
        db.query(sql, [
            Sanpham.product_name, Sanpham.category_id, Sanpham.price, Sanpham.description,
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
        const sql = 'update detail_product set product_name = ?, category_id = ?, price = ?, description = ?, image = ?, old_price = ?, quantity = ? where product_id = ?';
        db.query(sql, [
            Sanpham.product_name, Sanpham.category_id, Sanpham.price, Sanpham.description,
            Sanpham.image, Sanpham.old_price, Sanpham.quantity, Sanpham.product_id
        ], function (error) {
            if (error) {
                callback(error, null);
            } else {
                callback(null, true);
            }
        });
    },

    DeleteSanpham: function ( id, callback) {
        const sql = 'delete from detail_product where product_id = ?';
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

