const productDetailRepository = require("../../repositories/client/productDetailRepository");
const productDetailService = {
   
    GetSanphamById(id, callback) {
        productDetailRepository.GetSanphamById(id, (err, results) => {
            callback(err, results);
        });
    },
}
module.exports = productDetailService;
