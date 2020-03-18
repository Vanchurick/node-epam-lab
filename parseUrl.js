module.exports = parseUrl = url => {
  let result = {};
  const parametersArr = url.split("?")[1].split("&");
  parametersArr.forEach(el => {
    const parametr = el.split("=");
    result[parametr[0]] = parametr[1];
  });

  return result;
};
