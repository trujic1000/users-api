const express = require('express');

const User = require('../models/user');
const userController = require('../controllers/userController');

const userRouter = express.Router();

userRouter.get('/', userController.getUsers);
userRouter.post('/signup', userController.signUp);
userRouter.post('/login', userController.login);

module.exports = userRouter;
