const getAllUsers = require("./getAllUsers");
const rewriteUsers = require("./rewriteUsers");

module.exports = checkNote = (userId, noteId, checked) => {
  const users = getAllUsers();

  if (checked) {
    users.forEach(user => {
      if (user.id === userId) {
        user.notes.forEach(note => {
          if (note.id === Number(noteId)) {
            return (note.checked = !note.checked);
          }
        });
      }
    });

    rewriteUsers(users);

    return users[1].notes;
  }

  return false;
};
