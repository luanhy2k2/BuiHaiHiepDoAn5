const express = require('express');
const userRouter = express.Router();
const userController = require('../controllers/userController');

userRouter.post('/login', userController.authenticate);
userRouter.post('/createUser', userController.CreateUser);

module.exports = userRouter;
