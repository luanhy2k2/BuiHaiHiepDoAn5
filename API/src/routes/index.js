
const express = require('express');
const router = express.Router();
const sanphamRouter = require('./admin/sanphamRouter');
const donhangRouter = require('./admin/donhangRouter');
const userRouter = require('./userRouter');
const nhasxRouter = require('./admin/nhasxRouter');
const loaispRoute = require('./admin/loaispRouter');
const homeRoute = require('./client/homeRouter');
const thongkeRoute = require('./admin/thongkeRouter');
const productDetailRoute = require('./client/productDetailRouter')
const payMentRoute = require('./client/payMentRouter')

// Định nghĩa route và gọi hàm từ controller
router.use('/loaisp', loaispRoute);
router.use('/home', homeRoute);
router.use('/home', payMentRoute);
router.use('/thongke', thongkeRoute);
router.use('/sanpham', sanphamRouter);
router.use('/nhasx', nhasxRouter);
router.use('/donhang', donhangRouter);
router.use('/user', userRouter);
router.use('/productDetail', productDetailRoute);
module.exports = router;