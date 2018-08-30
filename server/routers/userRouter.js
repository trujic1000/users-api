const express = require('express');

const User = require('../models/user');
const userController = require('../controllers/userController');

const userRouter = express.Router();

userRouter.route('/')
  .post(userController.signUp)
  .get(userController.getUsers);

module.exports = userRouter;
