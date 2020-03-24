const getAllUsers = require("./getAllUsers");
const rewriteUsers = require("./rewriteUsers");

module.exports = addNoteToUser = (id, text) => {
  const note = {
    text,
    checked: false,
    id: Date.now()
  };

  const users = getAllUsers();

  users.forEach(user => {
    if (user.id === id) {
      user.notes.push(note);
      userNotes = user.notes;
    }
  });

  rewriteUsers(users);

  return note;
};
