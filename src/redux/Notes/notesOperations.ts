import { createAction } from '@reduxjs/toolkit';

const deleteAllNotes = createAction('notes/deleteAllNotes');
const createNote = createAction('notes/createNote');
const deleteNote = createAction('notes/deleteNote');
const updateNote = createAction('notes/updateNote');
const handleArchive = createAction('notes/handleArchive');

const notesOperations = {
  deleteAllNotes,
  createNote,
  deleteNote,
  updateNote,
  handleArchive
};

export default notesOperations;
