const getAllUsers = require("./getAllUsers");
const rewriteUsers = require("./rewriteUsers");

module.exports = removeUserNote = (userId, noteId) => {
  const users = getAllUsers();

  users.forEach(user => {
    if (user.id === userId) {
      user.notes = user.notes.filter(note => note.id !== Number(noteId));
    }
  });

  rewriteUsers(users);

  return users.find(user => user.id === userId);
};
