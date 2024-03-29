const express = require('express');
const SanphamRouter = express.Router();
const SanphamController = require('../../controllers/admin/sanphamController');
const authenticate  = require('../../middlewares/authMiddleware');
SanphamRouter.get('/getbyid/:id', SanphamController.GetSanphamById);
SanphamRouter.get('/getbyname/:name', SanphamController.GetSanphamByName);
SanphamRouter.get('/getall/:pageIndex/:pageSize', SanphamController.GetSanPham);
SanphamRouter.post('/create', SanphamController.CreateSanpham);
SanphamRouter.post('/update', SanphamController.UpdateSanpham);
SanphamRouter.delete('/delete/:id', SanphamController.DeleteSanpham); 
module.exports = SanphamRouter;
