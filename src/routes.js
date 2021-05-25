const {
  addNoteHandler,
  getAllNotesHandler,
  getNodeByHandler,
  editNoteByHandler,
  deleteNoteByHandler,
} = require('./handler');

const routes = [
  {
    method: 'POST',
    path: '/notes',
    handler: addNoteHandler,
  },

  {
    method: 'GET',
    path: '/notes',
    handler: getAllNotesHandler,
  },

  {
    method: 'GET',
    path: '/notes/{id}',
    handler: getNodeByHandler,
  },

  {
    method: 'PUT',
    path: '/notes/{id}',
    handler: editNoteByHandler,
  },

  {
    method: 'DELETE',
    path: '/notes/{id}',
    handler: deleteNoteByHandler,
  },
];

module.exports = routes;
