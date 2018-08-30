const express = require('express');

const User = require('../models/user');

const userRouter = express.Router();

userRouter.route('/')
  .post((req, res) => {
    // Destructure email and password from request
    const { email, password } = req.body;
    // Create new user
    const user = new User({ email, password });

    // Save user to db
    (async function saveUser() {
      try {
        await user.save();
        res.status(200).json(user);
      } catch (err) {
        res.status(400).send();
      }
    }());
  });

module.exports = userRouter;
