const donhangService = require("../../services/admin/donhangService");

const DonHangController = {
  GetAllDonHang: (req, res) => {
    const pageSize = req.params.pageSize;
    const pageIndex = req.params.pageIndex;
    donhangService.GetAllDonHang(pageSize, pageIndex, (err, data) => {
      try {
        if (err) {
          console.error('Error fetching all DonHang: ' + err.stack);
          return res.status(500).json({ message: 'Database error' });
        }
        if (data) {
          res.json(data);
        } else {
          res.json({ message: 'Không lấy được danh sách' });
        }
      } catch (error) {
        res.json({ message: error.message });
      }
    });
  },

  GetDonHangById: (req, res) => {
    const id = req.params.id;
    donhangService.GetDonHangById(id, (err, data) => {
      try {
        if (err) {
          console.error('Error fetching DonHang by ID: ' + err.stack);
          return res.status(500).json({ message: 'Database error' });
        }
        if (data) {
          res.json(data);
        } else {
          res.json({ message: 'Bản ghi không tồn tại' });
        }
      } catch (error) {
        res.json({ message: error.message });
      }
    });
  },
  
  GetChiTietDonHangById: (req, res) => {
    const id = req.params.id;
    donhangService.GetChiTietDonHangById(id, (err, data) => {
      try {
        if (err) {
          console.error('Error fetching ChiTietDonHang by ID: ' + err.stack);
          return res.status(500).json({ message: 'Database error' });
        }
        if (data) {
          res.json(data);
        } else {
          res.json({ message: 'Bản ghi không tồn tại' });
        }
      } catch (error) {
        res.json({ message: error.message });
      }
    });
  },

 
};

module.exports = DonHangController;
