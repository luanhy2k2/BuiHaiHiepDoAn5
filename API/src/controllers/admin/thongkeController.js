const thongkeService = require("../../services/admin/thongkeService");

const ThongKeController = {
  ThongKeDoanhThuHomNay: (req, res) => {
    thongkeService.ThongKeDoanhThuHomNay((err, results) => {
      if (err) {
        console.error('Error executing query: ' + err.stack);
        return res.status(500).json({ message: 'Database error' });
      }
      if (results) {
        res.json(results);
      } else {
        res.json({ message: 'Bản ghi không tồn tại' });
      }
    });
  },

  ThongKeDoanhThuTrongTuan: (req, res) => {
    thongkeService.ThongKeDoanhThuTrongTuan((err, results) => {
      if (err) {
        console.error('Error executing query: ' + err.stack);
        return res.status(500).json({ message: 'Database error' });
      }
      if (results) {
        res.json(results);
      } else {
        res.json({ message: 'Bản ghi không tồn tại' });
      }
    });
  },

  ThongKeDoanhThuTrongThang: (req, res) => {
    thongkeService.ThongKeDoanhThuTrongThang((err, results) => {
      if (err) {
        console.error('Error executing query: ' + err.stack);
        return res.status(500).json({ message: 'Database error' });
      }
      if (results) {
        res.json(results);
      } else {
        res.json({ message: 'Bản ghi không tồn tại' });
      }
    });
  },

  ThongKeSanPhamHetHang: (req, res) => {
    thongkeService.ThongKeSanPhamHetHang((err, results) => {
      if (err) {
        console.error('Error executing query: ' + err.stack);
        return res.status(500).json({ message: 'Database error' });
      }
      if (results) {
        res.json(results);
      } else {
        res.json({ message: 'Bản ghi không tồn tại' });
      }
    });
  },

  ThongKeTongSoSanPham: (req, res) => {
    thongkeService.ThongKeTongSanPham((err, results) => {
      if (err) {
        console.error('Error executing query: ' + err.stack);
        return res.status(500).json({ message: 'Database error' });
      }
      if (results) {
        res.json(results);
      } else {
        res.json({ message: 'Bản ghi không tồn tại' });
      }
    });
  },

  ThongKeSoDonHang: (req, res) => {
    thongkeService.ThongKeSoDonHang((err, results) => {
      if (err) {
        console.error('Error executing query: ' + err.stack);
        return res.status(500).json({ message: 'Database error' });
      }
      if (results) {
        res.json(results);
      } else {
        res.json({ message: 'Bản ghi không tồn tại' });
      }
    });
  },

  ThongKeSoDonHangHomNay: (req, res) => {
    thongkeService.ThongKeSoDonHangHomNay((err, results) => {
      if (err) {
        console.error('Error executing query: ' + err.stack);
        return res.status(500).json({ message: 'Database error' });
      }
      if (results) {
        res.json(results);
      } else {
        res.json({ message: 'Bản ghi không tồn tại' });
      }
    });
  },

  ThongKeSoDonHangTrongTuan: (req, res) => {
    thongkeService.ThongKeSoDonHangTrongTuan((err, results) => {
      if (err) {
        console.error('Error executing query: ' + err.stack);
        return res.status(500).json({ message: 'Database error' });
      }
      if (results) {
        res.json(results);
      } else {
        res.json({ message: 'Bản ghi không tồn tại' });
      }
    });
  },

  ThongKeSoDonHangTrongThang: (req, res) => {
    thongkeService.ThongKeSoDonHangTrongThang((err, results) => {
      if (err) {
        console.error('Error executing query: ' + err.stack);
        return res.status(500).json({ message: 'Database error' });
      }
      if (results) {
        res.json(results);
      } else {
        res.json({ message: 'Bản ghi không tồn tại' });
      }
    });
  },

  ThongKeTongSoTienBan: (req, res) => {
    thongkeService.ThongKeTongSoTienBan((err, results) => {
      if (err) {
        console.error('Error executing query: ' + err.stack);
        return res.status(500).json({ message: 'Database error' });
      }
      if (results) {
        res.json(results);
      } else {
        res.json({ message: 'Bản ghi không tồn tại' });
      }
    });
  },
};

module.exports = ThongKeController;
