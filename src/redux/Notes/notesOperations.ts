import { createAction } from '@reduxjs/toolkit';
import INote from '../../interfaces/Note.interface';
import IUpdateNoteDate from '../../interfaces/UpdareNoteData.interface';

const deleteAllNotes = createAction('notes/deleteAllNotes');

const createNote = createAction('notes/createNote', (note: INote) => ({
  payload: note
}));

const deleteNote = createAction('notes/deleteNote', (id: string) => ({
  payload: id
}));

const updateNote = createAction(
  'notes/updateNote',
  (id: string, data: IUpdateNoteDate) => ({
    payload: {
      id,
      data
    }
  })
);

const handleArchive = createAction('notes/handleArchive', (id: string) => ({
  payload: id
}));

const notesOperations = {
  deleteAllNotes,
  createNote,
  deleteNote,
  updateNote,
  handleArchive
};

export default notesOperations;
