const mongoose = require('mongoose');

mongoose.connect('localhost:27017/users-api');

module.exports = {
  mongoose
};
