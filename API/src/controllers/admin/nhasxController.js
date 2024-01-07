const nhasxService = require("../../services/admin/nhasxService");

const NhasxController = {
  GetAllNhasx: (req, res) => {
    nhasxService.GetAllNhasx((err, data) => {
      try {
        if (err) {
          console.error('Error fetching all Nhasx: ' + err.stack);
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

  GetNhasxById: (req, res) => {
    const id = req.params.id;
    nhasxService.GetNhasxById(id, (err, data) => {
      try {
        if (err) {
          console.error('Error fetching Nhasx by ID: ' + err.stack);
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

  GetNhasxByName: (req, res) => {
    const name = req.params.name;
    nhasxService.GetNhasxByName(name, (err, data) => {
      try {
        if (err) {
          console.error('Error fetching Nhasx by ID: ' + err.stack);
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
  CreateNhasx: (req, res) => {
    const nhasx = req.body;
    nhasxService.CreateNhasx(nhasx, (err) => {
      try {
        if (err) {
          console.error('Error creating Nhasx: ' + err.stack);
          return res.status(500).json({ message: 'Nhasx creation error' });
        }
        res.json({ message: 'Thêm thành công', data: true });
      } catch (err) {
        res.json({ message: err.message });
      }
    });
  },

  GetByName: (req, res) => {
    const name = req.params.name;
    nhasxService.GetByName(name, (err, data) => {
      try {
        if (err) {
          console.error('Error fetching Nhasx by Name: ' + err.stack);
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

  UpdateNhasx: (req, res) => {
    const nhasx = req.body;
    nhasxService.UpdateNhasx(nhasx, (err) => {
      try {
        if (err) {
          console.error('Error updating Nhasx: ' + err.stack);
          return res.status(500).json({ message: 'Nhasx update error' });
        }
        res.json({ message: 'Sửa thành công', data: true });
      } catch (err) {
        res.json({ message: err.message });
      }
    });
  },

  DeleteNhasx: (req, res) => {
    const id = req.params.id;
    nhasxService.DeleteNhasx(id, (err) => {
      try {
        if (err) {
          console.error('Error deleting Nhasx: ' + err.stack);
          return res.status(500).json({ message: 'Nhasx deletion error' });
        }
        res.json({ message: 'Xoá thành công', data: true });
      } catch (err) {
        res.json({ message: err.message });
      }
    });
  },
};

module.exports = NhasxController;
