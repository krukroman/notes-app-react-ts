import INote from '../../interfaces/Note.interface';
import sprite from '../../assets/icons/sprite.svg';
import ActionButton from '../ActionButton/ActionButton';
import { useAppDispatch } from '../../redux/hooks';
import notesOperations from '../../redux/Notes/notesOperations';

interface IProps {
  header?: boolean;
  showArchive?: Boolean;
  note?: INote;
  handleArchivedNotes?: () => void;
  enableEditMode?: (
    id: string,
    name: string,
    category: string,
    content: string
  ) => void;
}

const containerStyle = 'flex shrink-0 px-1 w-28 items-center justify-end';

const ActionButtonGroup = ({
  header,
  showArchive,
  handleArchivedNotes,
  note,
  enableEditMode = () => {}
}: IProps) => {
  const dispatch = useAppDispatch();
  const onDeleteAll = (): void => {
    dispatch(notesOperations.deleteAllNotes());
  };

  if (header) {
    return (
      <div className={containerStyle}>
        <ActionButton
          header
          onClick={handleArchivedNotes}
          pathToIcon={
            showArchive
              ? `${sprite}#icon-archive-out`
              : `${sprite}#icon-archive-in`
          }
        />
        <ActionButton
          header
          onClick={onDeleteAll}
          pathToIcon={`${sprite}#icon-delete`}
        />
      </div>
    );
  }

  if (note) {
    const onEditNote = (): void => {
      enableEditMode(note.id, note.name, note.category, note.content);
    };

    const onArchiveNote = (): void => {
      dispatch(notesOperations.handleArchive(note.id));
    };

    const onDeleteNote = (): void => {
      dispatch(notesOperations.deleteNote(note.id));
    };

    return (
      <div className={containerStyle}>
        <ActionButton onClick={onEditNote} pathToIcon={`${sprite}#icon-edit`} />
        <ActionButton
          onClick={onArchiveNote}
          pathToIcon={
            note.archived
              ? `${sprite}#icon-archive-out`
              : `${sprite}#icon-archive-in`
          }
        />
        <ActionButton
          onClick={onDeleteNote}
          pathToIcon={`${sprite}#icon-delete`}
        />
      </div>
    );
  }

  return <></>;
};

export default ActionButtonGroup;
