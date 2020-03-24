const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const secret = require("../config/auth.json").secret;
const getAllUsers = require("../helpers/getAllUsers");

/**
 * @api {post} /login Login User
 * @apiName LoginUser
 * @apiGroup User
 * @apiParamExample {json} Request-Example:
 *     {
 *       "username": {String},
 *       "password": {String}
 *     }
 * @apiSuccess {String} token.
 */

router.post("/login", (req, res) => {
  let { username, password } = req.body;

  let [user] = getAllUsers().filter(
    user => user.username === username && user.password === password
  );

  if (!user) {
    res.status(401).json({ status: "User not found" });
  }

  let jwt_token = jwt.sign(user, secret);
  res.json({ jwt_token });
});

module.exports = router;
