
const donhangRepository = require("../../repositories/admin/donhangRepository");
const db = require('../../config/db');
const DonHangService = {
    GetDonHangById: (id, callback) => {
        donhangRepository.GetDonHangById(id, (err, results) => {
            callback(err, results);
        });
    },
    GetChiTietDonHangById: (id, callback) => {
        donhangRepository.GetChiTietDonHangById(id, (err, results) => {
            callback(err, results);
        });
    },
    GetAllDonHang: (pageSize, pageIndex, callback) => {
        donhangRepository.GetAllDonHang(pageSize, pageIndex, (err, results) => {
            callback(err, results);
        });
    },
   
    confirmOrder(orderId, callback) {
        db.beginTransaction((err) => {
            if (err) {
                callback(err);
                return;
            }
            donhangRepository.getOrderDetails(orderId, (err, orderDetails) => {
                if (err) {
                    db.rollback(() => {
                        callback(err);
                    });
                } else {
                    donhangRepository.updateProductStock(orderDetails, (err) => {
                        if (err) {
                            db.rollback(() => {
                                callback(err);
                            });
                        } else {
                            db.commit((err) => {
                                if (err) {
                                    db.rollback(() => {
                                        callback(err);
                                    });
                                } else {
                                    donhangRepository.UpdateOrderSatus(orderId, (err, results) =>{
                                        callback(err,results);
                                    })
                                  
                                }
                            });
                        }
                    });
                }
            });
        });
    }
    
    
};

module.exports = DonHangService;


