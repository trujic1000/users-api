const express = require('express');

const { mongoose } = require('./db/mongoose');
const userRouter = require('./routers/userRouter');
const User = require('./models/user');

const port = process.env.PORT || 3000;

const app = express();

// Middlewares
require('./middlewares/middlewares')(app);

// API
// app.use('/users', userRouter);
app.get('/users', (req, res) => {
  res.send('Users');
});
app.post('/users', (req, res) => {
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

// Starting the server
app.listen(port, () => {
  console.log(`App started on port ${port}`);
});
