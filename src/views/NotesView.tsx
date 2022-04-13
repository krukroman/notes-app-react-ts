import { useCallback, useState } from 'react';
import { useAppSelector } from '../redux/hooks';
import notesSelectors from '../redux/Notes/notesSelectors';
import Table from '../components/Table/Table';
import Button from '../components/Button/Button';
import ModalWindow from '../components/ModalWindow/ModalWindow';

const initialNoteDataToEdit = {
  id: '',
  name: '',
  category: 'default',
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

  const openModal = () => {
    setSHowModal(true);
  };

  const closeModal = () => {
    disableEditMode();
    setSHowModal(false);
  };

  const enableEditMode = (
    id: string,
    name: string,
    category: string,
    content: string
  ) => {
    openModal();
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
    setNoteDataToEdit(prev => initialNoteDataToEdit);
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
        <Button type="button" text="Create Note" onClick={openModal} />
      )}

      {showModal && (
        <ModalWindow onClose={closeModal}>
          <p>Modal</p>
        </ModalWindow>
      )}
    </div>
  );
};

export default NotesView;
