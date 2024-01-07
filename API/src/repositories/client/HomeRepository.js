const db = require('../../config/db');
const HomeRepository = {
    GetSanPhamBanChay: function (soluong, callback) {
        const query = `
    SELECT
      bill_detail.product_id,
      detail_product.product_name,
      detail_product.price,
      detail_product.image,
      detail_product.quantity,
      detail_product.description,
      SUM(bill_detail.quantity) AS SL
    FROM detail_product
      INNER JOIN bill_detail ON bill_detail.product_id = detail_product.product_id
    GROUP BY
    bill_detail.product_id,
    detail_product.product_name,
    detail_product.price,
    detail_product.image,
    detail_product.quantity,
    detail_product.description
    ORDER BY SL DESC
    LIMIT ${soluong}
  `;
        // Thực hiện truy vấn SQL
        db.query(query, (err, result) => {
            callback(err, result);
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


    GetLoaiSp: function (callback) {
        const sql = 'select * from categories';
        db.query(sql, [], function (error, results) {
            callback(error, results);
        });
    },


    GetSanphamByLoai: function (id, callback) {
        const sql = `select * from detail_product where detail_product.category_id = ${id}`;
        db.query(sql, function (error, results) {
            if (error) {
                callback(error, null);
            } else {
                callback(null, results);
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





};


module.exports = HomeRepository;
