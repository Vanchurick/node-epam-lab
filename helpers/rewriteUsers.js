const fs = require("fs");
const path = require("path");

module.exports = rewriteUsers = users => {
  const usersFilePath = path.resolve(__dirname, "..", "db", "users.json");
  fs.writeFileSync(usersFilePath, JSON.stringify(users));
};
