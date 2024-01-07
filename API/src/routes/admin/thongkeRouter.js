const express = require('express');
const thongkeRouter = express.Router();
const thongkeController = require('../../controllers/admin/thongkeController');

thongkeRouter.get('/ThongKeDoanhThuHomNay', thongkeController.ThongKeDoanhThuHomNay);
thongkeRouter.get('/ThongKeDoanhThuTrongTuan', thongkeController.ThongKeDoanhThuTrongTuan);
thongkeRouter.get('/ThongKeDoanhThuTrongThang', thongkeController.ThongKeDoanhThuTrongThang);
thongkeRouter.get('/ThongKeSoSanPhamHetHang', thongkeController.ThongKeSanPhamHetHang);
thongkeRouter.get('/ThongKeTongSanPham', thongkeController.ThongKeTongSoSanPham);
thongkeRouter.get('/ThongKeTongSoTienBan', thongkeController.ThongKeTongSoTienBan);
thongkeRouter.get('/ThongKeSoDonHang', thongkeController.ThongKeSoDonHang);
thongkeRouter.get('/ThongKeSoDonHangHomNay', thongkeController.ThongKeSoDonHangHomNay);
thongkeRouter.get('/ThongKeSoDonHangTrongTuan', thongkeController.ThongKeSoDonHangTrongTuan);
thongkeRouter.get('/ThongKeSoDonHangTrongThang', thongkeController.ThongKeSoDonHangTrongThang);

module.exports = thongkeRouter;
