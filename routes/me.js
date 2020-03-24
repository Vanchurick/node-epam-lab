const express = require("express");
const router = express.Router();
const getAllusers = require("../helpers/getAllUsers");
const rewriteUsers = require("../helpers/rewriteUsers");

/**
 * @api {get} /me Get information about user
 * @apiName GetUser
 * @apiGroup User
 * @apiHeaderExample {json} Header-Example:
 *     {
 *       authorization: {String}
 *     }
 * @apiSuccess {String} status.
 * @apiSuccess {Object} User info.
 */

router.get("/me", (req, res) => {
  const users = getAllusers();

  const user = users.find(user => user.id === req.user.id);

  if (!user) {
    res.json({ status: "No such user" });
    return;
  }

  res.json({ status: "ok", user });
});

/**
 * @api {delete} /me remove user
 * @apiName RemoveUser
 * @apiGroup User
 * @apiHeaderExample {json} Header-Example:
 *     {
 *       authorization: {String}
 *     }
 * @apiSuccess {String} status.
 */

router.delete("/me", (req, res) => {
  const users = getAllusers();

  const filteredUser = users.filter(user => user.id !== req.user.id);

  rewriteUsers(filteredUser);

  res.json({ status: "User has been deleted" });
});
module.exports = router;
