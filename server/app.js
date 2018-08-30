const express = require('express');

const mongoose = require('./db/mongoose');
const userRouter = require('./routers/userRouter');

const port = process.env.PORT || 3000;

const app = express();

// Middlewares
require('./middlewares/middlewares')(app);

// API
app.use('/users', userRouter);

// Starting the server
app.listen(port, () => {
  console.log(`App started on port ${port}`);
});
