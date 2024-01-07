const express = require('express');
const productDetailRouter = express.Router();
const Controller = require('../../controllers/client/productDetailController');
productDetailRouter.get('/getspbyid/:id', Controller.GetSanphamById);


module.exports = productDetailRouter;
