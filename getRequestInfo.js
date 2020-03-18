module.exports = getRequetsInfo = req => {
  return { method: req.method, url: req.url, time: Date.now() };
};
