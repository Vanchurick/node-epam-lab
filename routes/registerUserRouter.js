const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const secret = require("../config/auth.json").secret;
const getAllUsers = require("../helpers/getAllUsers");
const shortid = require("shortid");
const rewriteUsers = require("../helpers/rewriteUsers");

/**
 * @api {post} /register register new user
 * @apiName RegisterUser
 * @apiGroup User
 * @apiSuccess {String} status.
 * @apiSuccess {String} token.
 * @apiSuccess {Object} User -  created user.
 */

router.post("/register", (req, res) => {
  const { username, password } = req.body;

  const newUser = {
    username,
    password,
    notes: [],
    id: shortid.generate()
  };

  const users = getAllUsers();

  if (users.some(user => user.username === username)) {
    res.json({ status: "User is existed" });
    return;
  }

  users.push(newUser);

  rewriteUsers(users);

  let jwt_token = jwt.sign(newUser, secret);
  res.json({ status: "User has been registered", jwt_token, newUser });
});

module.exports = router;
