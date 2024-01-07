const db = require('../../config/db');
const productDetailRepository = {
    GetSanphamById: function ( id, callback) {
        const sql = 'select * from detail_product where product_id = ?';
        db.query(sql, [id], function (error, results) {
            if (error) {
                callback(error, null);
            } else {
                callback(null, results[0]);
            }
        });
    },
}
module.exports = productDetailRepository