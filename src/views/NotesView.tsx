import { useCallback, useState } from 'react';
import { useAppSelector } from '../redux/hooks';
import notesSelectors from '../redux/Notes/notesSelectors';
import Table from '../components/Table/Table';

const NotesView = () => {
  const [showArchivedNotes, setShowArchivedNotes] = useState(false);
  const activeNotes = useAppSelector(notesSelectors.getActiveNotes);
  const archivedNotes = useAppSelector(notesSelectors.getArchivedNotes);

  const handleArchivedNotes = useCallback(
    () => setShowArchivedNotes(!showArchivedNotes),
    [showArchivedNotes]
  );
  return (
    <div className="container">
      {showArchivedNotes ? (
        <Table
          noteTable
          showArchived={showArchivedNotes}
          handleArchivedNotes={handleArchivedNotes}
          notes={archivedNotes}
        />
      ) : (
        <Table
          noteTable
          showArchived={showArchivedNotes}
          handleArchivedNotes={handleArchivedNotes}
          notes={activeNotes}
        />
      )}
      {!showArchivedNotes && <button type="button">Create note</button>}
    </div>
  );
};

export default NotesView;
