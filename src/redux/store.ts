import {
  configureStore,
  createSerializableStateInvariantMiddleware
} from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import notesReducer from './Notes/notesSlice';

const notesPersistConfig = {
  key: 'items',
  storage
};

const serializableMiddleware = createSerializableStateInvariantMiddleware({
  ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
});

export const store = configureStore({
  reducer: {
    notes: persistReducer(notesPersistConfig, notesReducer)
  },
  middleware: [serializableMiddleware],
  devTools: process.env.NODE_ENV === 'development'
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
