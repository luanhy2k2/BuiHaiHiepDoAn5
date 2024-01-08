const express = require('express');
const DonHangRouter = express.Router();
const DonHangController = require('../../controllers/admin/donhangConTroller');

DonHangRouter.get('/getbyid/:id', DonHangController.GetDonHangById);
DonHangRouter.post('/confirm-order/:id', DonHangController.confirmOrderController);
DonHangRouter.get('/getchitietbyid/:id', DonHangController.GetChiTietDonHangById);
DonHangRouter.get('/getall/:pageIndex/:pageSize', DonHangController.GetAllDonHang);

module.exports = DonHangRouter;
