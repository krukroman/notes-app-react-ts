import { nanoid } from 'nanoid';
import { useState } from 'react';
import { useAppDispatch } from '../../redux/hooks';
import notesOperations from '../../redux/Notes/notesOperations';
import INote from '../../interfaces/Note.interface';
import EditorForm from '../EditorForm/EditorForm';

interface IProps {
  isEditMode: Boolean;
  closeEditor: () => void;
  noteId?: string;
  noteName?: string;
  noteCategory?: string;
  noteContent?: string;
}

const NoteEditor = ({
  isEditMode,
  closeEditor,
  noteId = '',
  noteName = '',
  noteCategory = '',
  noteContent = ''
}: IProps) => {
  const [note, setNote] = useState({
    name: noteName,
    category: noteCategory,
    content: noteContent
  });

  const dispatch = useAppDispatch();

  const handleChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLSelectElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setNote(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!note.category) {
      alert(`Choose category please`);
      return;
    }

    if (isEditMode) {
      handleEditNote();
      return;
    }
    handleNewNote();
  };

  const handleNewNote = () => {
    const newNote: INote = {
      id: nanoid(10),
      created: new Date().toISOString(),
      ...note,
      archived: false
    };
    dispatch(notesOperations.createNote(newNote));
    resetForm();
    closeEditor();
  };

  const handleEditNote = () => {
    const editedNote = {
      ...note
    };
    dispatch(notesOperations.updateNote(noteId, editedNote));
    resetForm();
    closeEditor();
  };

  const resetForm = () => {
    setNote({
      name: '',
      category: '',
      content: ''
    });
  };

  return (
    <EditorForm
      note={note}
      onSubmit={handleSubmit}
      onChange={handleChange}
      onClose={closeEditor}
    />
  );
};

export default NoteEditor;
