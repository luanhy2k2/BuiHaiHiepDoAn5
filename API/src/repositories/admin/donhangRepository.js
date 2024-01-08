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
    UpdateOrderSatus: function (id, callback) {
        const sql = 'update bill set status = ? where bill_id = ? ';
        db.query(sql, ['Đã xác nhận', id], function (error) {
            if (error) {
                callback(error, null);
            } else {
                callback(null, true);
            }
        });
    },
    getOrderDetails(orderId, callback) {
        db.query(
            'SELECT product_id, quantity FROM bill_detail WHERE bill_id = ?',
            [orderId],
            (err, results) => {
                if (err) {
                    callback(err, null);
                } else {
                    callback(null, results);
                }
            }
        );
    },
   

    updateProductStock(orderDetails, callback) {
        const updateNextProduct = (index) => {
            if (index === orderDetails.length) {
                callback(null);
            } else {
                const detail = orderDetails[index];
                db.query(
                    'UPDATE detail_product SET quantity = quantity - ? WHERE product_id = ?',
                    [detail.quantity, detail.product_id],
                    (err) => {
                        if (err) {
                            callback(err);
                        } else {
                            updateNextProduct(index + 1);
                        }
                    }
                );
            }
        };
        updateNextProduct(0);
    }
 



};

module.exports = DonHangRepository;
