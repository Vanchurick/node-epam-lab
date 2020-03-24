const getAllUsers = require("./getAllUsers");
const rewriteUsers = require("./rewriteUsers");

module.exports = editNoteText = (userId, noteId, text) => {
  const users = getAllUsers();

  if (text) {
    users.forEach(user => {
      if (user.id === userId) {
        user.notes.forEach(note => {
          if (note.id === Number(noteId)) {
            return (note.text = text);
          }
        });
      }
    });

    rewriteUsers(users);

    return users.find(user => user.id === userId).notes;
  }

  return false;
};
