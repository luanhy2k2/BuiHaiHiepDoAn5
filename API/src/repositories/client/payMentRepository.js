const db = require('../../config/db');
const payMentRepository = {
 
    CreateDonHang: function (customer, billDetails, gia, callback) {
        const sqlInsertCustomer = `INSERT INTO customer (customer_name, email, phone_number, address) VALUES (?, ?, ?, ?)`;
        const valuesCustomer = [customer.customer_name, customer.email, customer.phone, customer.address];
    
        db.query(sqlInsertCustomer, valuesCustomer, function (error) {
            if (error) {
                return callback(error, null);
            }
    
            db.query("SELECT LAST_INSERT_ID() AS id", [], function (error, results) {
                if (error) {
                    return callback(error, null);
                }
    
                const customerId = results[0].id;
    
                const sqlInsertBill = `INSERT INTO bill (customer_id, order_date, total_amount) VALUES (?, NOW(), ?)`;
                const valuesBill = [customerId, gia];
    
                db.query(sqlInsertBill, valuesBill, function (error) {  
                    if (error) {
                        return callback(error, null);
                    }
    
                    db.query("SELECT LAST_INSERT_ID() AS id", [], function (error, results) {
                        if (error) {
                            return callback(error, null);
                        }
    
                        const billId = results[0].id;
    
                        const insertBillDetail = `INSERT INTO bill_detail (bill_id, product_id, quantity, price) VALUES (?, ?, ?, ?)`;
    
                        for (let i = 0; i < billDetails.length; i++) {
                            const valuesBillDetail = [
                                billId,
                                billDetails[i].product_id,
                                billDetails[i].quantity,
                                billDetails[i].price
                            ];
    
                            db.query(insertBillDetail, valuesBillDetail, function (error) {
                                if (error) {
                                    return callback(error, null);
                                }
    
                                if (i === billDetails.length - 1) {
                                    callback(null, true);
                                }
                            });
                        }
                    });
                });
            });
        })
    },
}
module.exports = payMentRepository;

