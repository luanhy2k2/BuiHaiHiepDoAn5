const express = require('express');
const loaispRouter = express.Router();
const ctr = require('../../controllers/admin/loaispConstroller');
loaispRouter.get('/getbyid/:id', ctr.GetLoaiSpById);
loaispRouter.get('/getall', ctr.GetAllLoaiSp);
loaispRouter.post('/create', ctr.CreateLoaiSp);
loaispRouter.post('/update', ctr.UpdateLoaiSp);
loaispRouter.delete('/delete/:id', ctr.DeleteLoaiSp);
module.exports = loaispRouter;

