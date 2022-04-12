import { createSelector } from 'reselect';
import { RootState } from '../store';

const getNotes = (state: RootState) => state.notes.items;

const getActiveNotes = createSelector([getNotes], notes => {
  return notes.filter(note => !note.archived);
});

const getArchivedNotes = createSelector([getNotes], notes => {
  return notes.filter(note => note.archived);
});

const notesSelectors = {
  getNotes,
  getActiveNotes,
  getArchivedNotes
};

export default notesSelectors;
