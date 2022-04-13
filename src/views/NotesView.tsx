import { useCallback, useState } from 'react';
import { useAppSelector } from '../redux/hooks';
import notesSelectors from '../redux/Notes/notesSelectors';
import Table from '../components/Table/Table';
import Button from '../components/Button/Button';
import ModalWindow from '../components/ModalWindow/ModalWindow';
import NoteEditor from '../components/NoteEditor/NoteEditor';

const initialNoteDataToEdit = {
  id: '',
  name: '',
  category: '',
  content: ''
};

const NotesView = () => {
  const [showArchivedNotes, setShowArchivedNotes] = useState(false);
  const [showModal, setSHowModal] = useState(false);
  const [isEditMode, setEditMode] = useState(false);
  const [noteDataToEdit, setNoteDataToEdit] = useState(initialNoteDataToEdit);
  const activeNotes = useAppSelector(notesSelectors.getActiveNotes);
  const archivedNotes = useAppSelector(notesSelectors.getArchivedNotes);

  const handleArchivedNotes = useCallback(
    () => setShowArchivedNotes(!showArchivedNotes),
    [showArchivedNotes]
  );

  const openEditor = () => {
    setSHowModal(true);
  };

  const closeEditor = () => {
    disableEditMode();
    setSHowModal(false);
  };

  const enableEditMode = (
    id: string,
    name: string,
    category: string,
    content: string
  ) => {
    openEditor();
    setEditMode(true);
    setNoteDataToEdit(prev => ({
      ...prev,
      id,
      name,
      category,
      content
    }));
  };

  const disableEditMode = () => {
    if (!isEditMode) return;
    setEditMode(false);
    setNoteDataToEdit(initialNoteDataToEdit);
  };

  const visibleNotes = showArchivedNotes ? archivedNotes : activeNotes;

  return (
    <div className="container">
      <Table
        noteTable
        showArchived={showArchivedNotes}
        handleArchivedNotes={handleArchivedNotes}
        notes={visibleNotes}
        enableEditMode={enableEditMode}
      />
      {!showArchivedNotes && (
        <Button
          type="button"
          text="Create Note"
          onClick={openEditor}
          className="btn--toRight"
        />
      )}

      {showModal && (
        <ModalWindow onClose={closeEditor}>
          <NoteEditor
            isEditMode={isEditMode}
            closeEditor={closeEditor}
            noteId={noteDataToEdit.id}
            noteName={noteDataToEdit.name}
            noteCategory={noteDataToEdit.category}
            noteContent={noteDataToEdit.content}
          />
        </ModalWindow>
      )}
    </div>
  );
};

export default NotesView;
