const homeService = require("../../services/client/homeService");
const HomeController = {

  GetSanphamByName(req, res) {
    const name = req.params.name;
    homeService.GetSanphamByName(name, (err, data) => {
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

  GetSanPham(req, res) {
    const pageSize = req.params.pageSize;
    const pageIndex = req.params.pageIndex;
    homeService.GetSanPham(pageSize, pageIndex, (err, data) => {
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

  
  GetSanphamByLoai(req, res) {
    const id = req.params.id;
    homeService.GetSanphamByLoai(id, (err, data) => {
      if (err) {
        console.error('Error executing query: ' + err.stack);
        return res.status(500).send('Database error');
      }

      if (data && data.length > 0) {
        res.json(data);
      } else {
        res.json({ message: 'Bản ghi không tồn tại' });
      }
    });
  },
  
  GetSanphamBanChay(req, res) {
    const sl = req.params.sl;
    homeService.GetSanPhamBanChay(sl, (err, data) => {
      if (err) {
        console.error('Error executing query: ' + err.stack);
        return res.status(500).send('Database error');
      }

      if (data && data.length > 0) {
        res.json(data);
      } else {
        res.json({ message: 'Bản ghi không tồn tại' });
      }
    });
  },
 
  GetLoaiSp(req, res) {
    homeService.GetLoaiSp((err, data) => {
      if (err) {
        console.error('Error executing query: ' + err.stack);
        return res.status(500).send('Database error');
      }

      if (data && data.length > 0) {
        res.json(data);
      } else {
        res.json({ message: 'Bản ghi không tồn tại' });
      }
    });
  },

}

module.exports = HomeController;
