const { INTERNAL_SERVER_ERROR } = require('http-status-codes');

class ErrorHandler extends Error {
  constructor(statusCode, message) {
    super();
    this.statusCode = statusCode;
    this.message = message;
  }
}

const handleError = (err, res) => {
  if (err instanceof ErrorHandler) {
    res.status(err.statusCode).send(err.message);
  } else {
    res.status(INTERNAL_SERVER_ERROR).send('Sorry, we couldn\'t do that!');
  }
};

module.exports = {
  ErrorHandler,
  handleError
}
