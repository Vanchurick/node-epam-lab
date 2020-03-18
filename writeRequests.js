const fs = require("fs");
const path = require("path");

module.exports = writeRequests = request => {
  const pathToFile = path.resolve(__dirname, "requests.json");
  const requestsFile = fs.readFileSync(pathToFile);
  const requestsObj = JSON.parse(requestsFile);

  if (requestsObj.logs) {
    requestsObj.logs.push(request);
  }

  fs.writeFileSync(pathToFile, JSON.stringify(requestsObj));
};
