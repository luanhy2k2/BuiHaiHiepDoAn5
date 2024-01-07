
const express = require('express');
const HomeRouter = express.Router();
const ctr = require('../../controllers/client/HomeController');

HomeRouter.get('/getloaisp', ctr.GetLoaiSp);
HomeRouter.get('/getspbyloai/:id', ctr.GetSanphamByLoai);
HomeRouter.get('/getspbyname/:name', ctr.GetSanphamByName);
HomeRouter.get('/getsp/:pageIndex/:pageSize', ctr.GetSanPham);
HomeRouter.get('/getbanchay/:sl', ctr.GetSanphamBanChay);


module.exports = HomeRouter;



