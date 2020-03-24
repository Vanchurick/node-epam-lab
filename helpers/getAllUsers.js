const fs = require("fs");
const path = require("path");

module.exports = getAllUSers = () => {
  const usersFilePath = path.resolve(__dirname, "..", "db", "users.json");
  const usersFile = fs.readFileSync(usersFilePath);
  return JSON.parse(usersFile);
};
