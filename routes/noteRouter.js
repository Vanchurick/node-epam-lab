const express = require("express");
const router = express.Router();
const removeUserNote = require("../helpers/removeUserNote");
const checkNote = require("../helpers/checkNote");
const editNoteText = require("../helpers/editNoteText");
const addNoteToUser = require("../helpers/addNoteToUser");

/**
 * @api {delete} /note/:id remove user note
 * @apiName DeleteNote
 * @apiGroup Note
 *  @apiHeaderExample {json} Header-Example:
 *     {
 *       authorization: {String}
 *     }
 * @apiParam {Number} id Note's unique ID.
 *
 * @apiSuccess {String} status.
 * @apiSuccess {Object} Notes -  left notes.
 */

router.delete("/note/:id", (req, res) => {
  const response = removeUserNote(req.user.id, req.params.id);

  res.json({ status: "Note have been deleted", notes: response.notes });
});

/**
 * @api {put} /addnote add user note
 * @apiName AddNote
 * @apiGroup Note
 *  @apiHeaderExample {json} Header-Example:
 *     {
 *       authorization: {String}
 *     }
 * @apiSuccess {String} status.
 * @apiSuccess {Object} Note -  created note.
 */

router.put("/addnote", (req, res) => {
  const response = addNoteToUser(req.user.id, req.body.text);
  res.json({ status: "Note have been added", note: response });
});

/**
 * @api {put} /note/:id edit user note
 * @apiName EditNote
 * @apiGroup Note
 * @apiParam {Number} id Note's unique ID.
 *  @apiHeaderExample {json} Header-Example:
 *     {
 *       authorization: {String}
 *     }
 *
 * @apiParamExample {json} Request-Example:
 *     {
 *       "checked": {Boolean},
 *       "text": {String}
 *     }
 * You can add just one parameter for editing if don't need edit both
 * @apiSuccess {String} status.
 * @apiSuccess {Object} Note - edited note.
 */

router.put("/note/:id", (req, res) => {
  let response;

  if (req.body.checked) {
    response = checkNote(req.user.id, req.params.id, req.body.checked);
  }

  if (req.body.text) {
    response = editNoteText(req.user.id, req.params.id, req.body.text);
  }

  res.json({
    status: response ? "ok" : "Has not checked",
    note: response ? response : []
  });
});

module.exports = router;
