const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/users-api');

module.exports = {
  mongoose
};
