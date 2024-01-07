const productDetailService = require("../../services/client/productDetailService");
const productDetailController = {
 
  GetSanphamById(req, res) {
    const id = req.params.id;
    productDetailService.GetSanphamById(id, (err, data) => {
      if (err) {
        console.error('Error executing query: ' + err.stack);
        return res.status(500).send('Database error');
      }

      if (data) {
        res.json(data);
      } else {
        res.json({ message: 'Bản ghi không tồn tại' });
      }
    });
  },
  
}
module.exports = productDetailController;