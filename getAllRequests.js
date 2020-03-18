const fs = require("fs");
const path = require("path");

module.exports = getAllRequests = range => {
  const pathToFile = path.resolve(__dirname, "requests.json");
  const requestsFile = fs.readFileSync(pathToFile);
  let result = JSON.parse(requestsFile);

  if (range) {
    result.logs = result.logs.filter(
      el => el.time >= range.from && el.time <= range.to
    );
  }

  return result;
};
