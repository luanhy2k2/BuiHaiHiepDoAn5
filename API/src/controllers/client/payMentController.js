const payMentService = require("../../services/client/payMentService");
const payMentController = {

  CreateDonHang(req, res) {
    const customer = req.body.customer;
    const billDetails = req.body.billDetails;
    const gia = req.body.gia;

    payMentService.CreateDonHang(customer, billDetails, gia, (err) => {
      if (err) {
        console.error('Error executing query: ' + err.stack);
        return res.status(500).send('Database error');
      }

      res.json({ message: 'Thêm thành công', data: true });
    });
  }
}
module.exports = payMentController;