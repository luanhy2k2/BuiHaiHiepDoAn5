const payMentRepository = require("../../repositories/client/payMentRepository");
const payMentService = {

    CreateDonHang(customer, billDetails, gia, callback) {
        payMentRepository.CreateDonHang(customer, billDetails, gia, (err, results) => {
            callback(err, results);
        });
    },

}
module.exports = payMentService;
