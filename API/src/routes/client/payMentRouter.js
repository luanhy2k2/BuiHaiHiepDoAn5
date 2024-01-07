const express = require('express');
const authenticate = require('../../middlewares/authMiddleware')
const payMentRouter = express.Router();
const ctr = require('../../controllers/client/payMentController');
payMentRouter.post('/createdonhang/',ctr.CreateDonHang);
module.exports = payMentRouter;
