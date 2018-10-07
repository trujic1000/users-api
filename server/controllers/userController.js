const User = require('../models/user');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


function signUp(req, res) {
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
      res.status(400).send('Mail exist');
    }
  }());
}

async function getUsers(req, res) {
  let users;
  try {
    users = await User.find();
    // if users.length is 0, it means that no users were found
    if (!users.length) {
      return res.status(404).send('No users found');
    }
    res.status(200).json(users);
  } catch (err) {
    res.status(400).send();
  }
}

async function login(req, res) {
  // Destructuring email and password from request
  const { email, password } = req.body;
  let user;
  try {
    user = await User.find({email});
    // Checking if user exists
    if(!user.length) {
      return res.status(401).json({
        message: 'Auth failed, user doesnt exist'
      });
    }
    bcrypt.compare(password, user[0].password, (error, result) => {
      if (error) {
        return res.status(401).json({
          message: 'Auth failed'
        });
      }
      // If passwords match
      if (result) {
        const token = jwt.sign({
          email: user[0].email,
          userId: user[0]._id
        },
        process.env.JWT_SECRET,
        {
          expiresIn: '1h'
        });
        return res.status(200).json({
          message: 'Auth Successful',
          token
        });
      }
      // If password don't match
      return res.status(401).json({
        message: 'Auth failed, password incorrect'
      });
    });
  } catch (err) {
    return res.status(401).json({
      message: 'Auth failed, dafuq'
    });
  }
}

module.exports = {
  signUp,
  getUsers,
  login
};
