const ClientError = require("../exceptions/ClientError");
const InvariantError = require("../exceptions/InvariantError");
const NotFoundError = require("../exceptions/NotFoundError");

const errorHandler = (err, req, res, next) => {
  let customError = err;

  if (err instanceof InvariantError) {
    customError = new InvariantError(err.message);
  } else if (err instanceof NotFoundError) {
    customError = new NotFoundError(err.message);
  } else if (err instanceof ClientError) {
    customError = new ClientError(err.message);
  }

  res.status(customError.statusCode).send({
    status: customError.statusCode,
    name: customError.name,
    message: customError.message,
  });
};

module.exports = { errorHandler };
