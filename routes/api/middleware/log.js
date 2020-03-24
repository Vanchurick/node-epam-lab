module.exports = (req, resp, next) => {
  console.log(`${req.method}, ${req.url}`);
  next();
};
