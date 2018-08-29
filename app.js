const express = require('express');
const { mongoose } = require('./db/mongoose');

const port = process.env.PORT || 3000;

const app = express();

// Middlewares
require('./middlewares/middlewares')(app);


// Starting the server
app.listen(port, () => {
  console.log(`App started on port ${port}`);
});
