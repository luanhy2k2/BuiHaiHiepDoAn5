const express = require('express');
const nhasxRouter = express.Router();
const nhasxController = require('../../controllers/admin/nhasxController');
nhasxRouter.get('/getbyname/:name', nhasxController.GetNhasxByName);
nhasxRouter.get('/getbyid/:id', nhasxController.GetNhasxById);
nhasxRouter.get('/getbyname/:name', nhasxController.GetByName);
nhasxRouter.get('/getall', nhasxController.GetAllNhasx);
nhasxRouter.post('/create', nhasxController.CreateNhasx);
nhasxRouter.post('/update', nhasxController.UpdateNhasx);
nhasxRouter.delete('/delete/:id', nhasxController.DeleteNhasx);

module.exports = nhasxRouter;
