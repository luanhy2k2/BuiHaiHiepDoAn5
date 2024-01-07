const db = require('../../config/db');
const DonHangRepository = {
    GetDonHangById: function (id, callback) {
        const sql = 'CALL GetDonHangById(?)';
        db.query(sql, [id], function (error, [results]) {
            if (error) {
                callback(error, null);
            } else {
                callback(null, results[0]);
            }
        });
    },

    GetChiTietDonHangById: function (id, callback) {
        const sql = 'CALL GetChiTietDonHang(?)';
        db.query(sql, [id], function (error, [results]) {
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
        const sql = 'CALL GetAllDonHang(?,?)';
        db.query(sql, [limit, offset], function (error, [results]) {
            if (error) {
                callback(error, null);
            } else {
                callback(null, results)
                // db.query('SELECT COUNT(*) as total from donhang ;', [], function (
                //     errorCount,
                //     [totalProducts]
                // ) {
                //     if (errorCount) {
                //         callback(errorCount, null);
                //     } else {
                //         const tt = totalProducts.total;
                //         const json = {
                //             results,
                //             total: tt,
                //         };
                //         callback(null, json);
                //     }
                // });
            }
        });
    },
    GetTotalDonhang: function (callback) {
        const sql = "SELECT COUNT(*) as total from donhang"
        db.query(sql, [], function (error, [results]) {
            callback(error, results);
        });
    },
    updateOrderDelivery: function (id, st, callback) {
        const sql = 'CALL updateDelivery(?, ?)';
        db.query(sql, [id, st], function (error) {
            callback(error, !error);
        });
    },
    UpdateOrderSatus: function (id, callback) {
        const sql = 'CALL updateOrderStatus(?)';
        db.query(sql, [id], function (error) {
            if (error) {
                callback(error, null);
            } else {
                callback(null, true);
            }
        });
    },
    getOrderDetails(orderId, callback) {
        db.query(
            'SELECT sanp_id, soLuong FROM chitietdonhang WHERE maDonHang = ?',
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
                    'UPDATE chitietkho SET soLuong = soLuong - ? WHERE sanp_id = ?',
                    [detail.soLuong, detail.sanp_id],
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
