import { createSlice, combineReducers } from '@reduxjs/toolkit';
import notesOperations from './notesOperations';
import INote from '../../interfaces/Note.interface';
import NOTES from '../../data/notes';

const initialState: INote[] = NOTES;

const items = createSlice({
  name: 'items',
  initialState,
  reducers: {},
  extraReducers: {
    [notesOperations.deleteAllNotes.type]: state => {
      state = [];
    },
    [notesOperations.createNote.type]: (state, { payload }) => {
      state.push(payload);
    },
    [notesOperations.deleteNote.type]: (state, { payload }) => {
      state = state.filter(note => note.id !== payload);
    },
    [notesOperations.updateNote.type]: (state, { payload }) => {
      const index = state.findIndex(note => note.id === payload.id);
      state[index] = { ...state[index], ...payload.data };
    },
    [notesOperations.handleArchive.type]: (state, { payload }) => {
      const index = state.findIndex(note => note.id === payload);
      const archivedStatus = state[index].archived;
      state[index] = { ...state[index], archived: !archivedStatus };
    }
  }
});

export default combineReducers({
  items: items.reducer
});
