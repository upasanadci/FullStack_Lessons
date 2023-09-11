const handleError = (error, res) => {
  res.status(400).send({
    success: false,
    error: "not define",
  });
};

module.exports = handleError;
