const User = require('../models/user');

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
      res.status(400).send();
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

module.exports = {
  signUp,
  getUsers
};
