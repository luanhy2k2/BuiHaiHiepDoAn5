const sanphamService = require("../../services/admin/sanphamService");
const SanphamController = {
  GetAllSanpham: (req, res) => {
    sanphamService.GetAllSanpham((err, data) => {
      try {
        if (err) {
          console.error('Error fetching all Sanpham: ' + err.stack);
          return res.status(500).json({ message: 'Database error' });
        }
        if (data && data.length > 0) {
          res.json(data);
        } else {
          res.json({ message: 'Không lấy được danh sách' });
        }
      } catch (error) {
        res.json({ message: error.message });
      }
    });
  },

  GetSanphamById: (req, res) => {
    const id = req.params.id;
    sanphamService.GetSanphamById(id, (err, data) => {
      try {
        if (err) {
          console.error('Error fetching Sanpham by ID: ' + err.stack);
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

  GetSanphamByName: (req, res) => {
    const name = req.params.name;
    sanphamService.GetSanphamByName(name, (err, data) => {
      try {
        if (err) {
          console.error('Error fetching Sanpham by Name: ' + err.stack);
          return res.status(500).json({ message: 'Database error' });
        }
        if (data && data.length > 0) {
          res.json(data);
        } else {
          res.json({ message: 'Bản ghi không tồn tại' });
        }
      } catch (error) {
        res.json({ message: error.message });
      }
    });
  },

  GetSanphamByLoai: (req, res) => {
    const id = req.params.id;
    sanphamService.GetSanphamByLoai(id, (err, data) => {
      try {
        if (err) {
          console.error('Error fetching Sanpham by Loai: ' + err.stack);
          return res.status(500).json({ message: 'Database error' });
        }
        if (data && data.length > 0) {
          res.json(data);
        } else {
          res.json({ message: 'Bản ghi không tồn tại' });
        }
      } catch (error) {
        res.json({ message: error.message });
      }
    });
  },

  GetSanphamByTg: (req, res) => {
    const id = req.params.id;
    sanphamService.GetSanphamByTg(id, (err, data) => {
      try {
        if (err) {
          console.error('Error fetching Sanpham by Tg: ' + err.stack);
          return res.status(500).json({ message: 'Database error' });
        }
        if (data && data.length > 0) {
          res.json(data);
        } else {
          res.json({ message: 'Bản ghi không tồn tại' });
        }
      } catch (error) {
        res.json({ message: error.message });
      }
    });
  },

  GetSanphamByNsx: (req, res) => {
    const id = req.params.id;
    sanphamService.GetSanphamByNsx(id, (err, data) => {
      try {
        if (err) {
          console.error('Error fetching Sanpham by Nsx: ' + err.stack);
          return res.status(500).json({ message: 'Database error' });
        }
        if (data && data.length > 0) {
          res.json(data);
        } else {
          res.json({ message: 'Bản ghi không tồn tại' });
        }
      } catch (error) {
        res.json({ message: error.message });
      }
    });
  },

  CreateSanpham: (req, res) => {
    const Sanpham = req.body;
    sanphamService.CreateSanpham(Sanpham, (err) => {
      try {
        if (err) {
          console.error('Error creating Sanpham: ' + err.stack);
          return res.status(500).json({ message: 'Sanpham creation error' });
        }
        res.json({ message: 'Thêm thành công', data: true });
      } catch (err) {
        res.json({ message: err.message });
      }
    });
  },

  UpdateSanpham: (req, res) => {
    const Sanpham = req.body;
    sanphamService.UpdateSanpham(Sanpham, (err) => {
      try {
        if (err) {
          console.error('Error updating Sanpham: ' + err.stack);
          return res.status(500).json({ message: 'Sanpham update error' });
        }
        res.json({ message: 'Sửa thành công', data: true });
      } catch (err) {
        res.json({ message: err.message });
      }
    });
  },

  DeleteSanpham: (req, res) => {
    const id = req.params.id;
    sanphamService.DeleteSanpham(id, (err) => {
      try {
        if (err) {
          console.error('Error deleting Sanpham: ' + err.stack);
          return res.status(500).json({ message: 'Sanpham deletion error' });
        }
        res.json({ message: 'Xoá thành công', data: true });
      } catch (err) {
        res.json({ message: err.message });
      }
    });
  },
};

module.exports = SanphamController;
