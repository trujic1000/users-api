const bodyParser = require('body-parser');
const morgan = require('morgan');

function middlewares(app) {
  app.use(morgan('dev'));
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: false }));
}

module.exports = middlewares;
