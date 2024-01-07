const myService = require('../../services/admin/loaispService');

const LoaiSpController = {
    
    GetAllLoaiSp: (req, res) => {
        myService.GetAllLoaiSp((err, results) => {
            if (err) {
                console.error('Error executing query: ' + err.stack);
                return res.status(500).send('Database error');
            }
            res.json(results);
        });
    },
    GetLoaiSpById: (req, res) => {
        const id = req.params.id;
        myService.GetLoaiSpById(id,(err, results) => {
            if (err) {
                console.error('Error executing query: ' + err.stack);
                return res.status(500).send('Database error');
            }
            res.json(results);
        });
    },
    DeleteLoaiSp: (req, res) => {
        const id = req.params.id;
        myService.DeleteLoaiSp(id,(err, results) => {
            if (err) {
                console.error('Error executing query: ' + err.stack);
                return res.status(500).send('Database error');
            }
            res.json(results);
        });
    },
    CreateLoaiSp: (req, res) => {
        const Loaisp = req.body;
        myService.CreateLoaiSp(Loaisp.name,(err, results) => {
            if (err) {
                console.error('Error executing query: ' + err.stack);
                return res.status(500).send('Database error');
            }
            res.json(results);
        });
    },
    UpdateLoaiSp: (req, res) => {
        const Loaisp = req.body;
        myService.UpdateLoaiSp(Loaisp,(err, results) => {
            if (err) {
                console.error('Error executing query: ' + err.stack);
                return res.status(500).send('Database error');
            }
            res.json(results);
        });
    },
    
};

module.exports = LoaiSpController;
