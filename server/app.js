const express = require('express');
const dotenv = require('dotenv').config();

const mongoose = require('./db/mongoose');
const userRouter = require('./routers/userRouter');

const app = express();

const port = process.env.PORT || 3000;

// Middlewares
require('./middlewares/middlewares')(app);

// API
app.use('/users', userRouter);

// Starting the server
app.listen(port, () => {
  console.log(`App started on port ${port}`);
});
