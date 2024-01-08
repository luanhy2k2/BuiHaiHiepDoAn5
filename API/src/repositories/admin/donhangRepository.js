const db = require('../../config/db');
const DonHangRepository = {
    GetDonHangById: function (id, callback) {
        const sql = 'select bill.* ,customer.* from bill inner join customer on bill.customer_id = customer.customer_id where bill.bill_id = ?';
        db.query(sql, [id], function (error, results) {
            if (error) {
                callback(error, null);
            } else {
                callback(null, results[0]);
            }
        });
    },

    GetChiTietDonHangById: function (id, callback) {
        const sql = 'select bill_detail.* ,detail_product.* from bill_detail inner join detail_product on bill_detail.product_id = detail_product.product_id where bill_detail.bill_id = ?';
        db.query(sql, [id], function (error, results) {
            if (error) {
                callback(error, null);
            } else {
                callback(null, results);
            }
        });
    },

    GetAllDonHang: function (pageSize, pageIndex, callback) {
        const page = pageIndex || 1;
        const limit = pageSize || 10;
        const offset = (page - 1) * limit;
        const sql = `select bill.* ,customer.* from bill inner join customer 
        on bill.customer_id = customer.customer_id LIMIT ${limit} OFFSET ${offset}`;
        db.query(sql,  function (error, results) {
            if (error) {
                callback(error, null);
            } else {
                // Query to get total count of products
                const countSql = 'SELECT COUNT(*) AS total FROM bill';
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
  
 



};

module.exports = DonHangRepository;
