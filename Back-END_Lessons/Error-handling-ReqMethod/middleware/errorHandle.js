const errorHandler = (error, req, res, next) => {
  res.status(400).send({
    success: false,
    error: error.message,
    type: 400,
    userId: error.cause,
  });
};

module.exports = errorHandler;
