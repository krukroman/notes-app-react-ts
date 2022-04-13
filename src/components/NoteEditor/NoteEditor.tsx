import s from './NoteEditor.module.scss';
import { nanoid } from 'nanoid';
import { useState } from 'react';
import { useAppDispatch } from '../../redux/hooks';
import CATEGORIES from '../../data/categories';
import notesOperations from '../../redux/Notes/notesOperations';
import INote from '../../interfaces/Note.interface';
import Button from '../Button/Button';

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
    <form className={s.form} onSubmit={handleSubmit}>
      <label className={s.label} htmlFor="name">
        Name
      </label>
      <input
        id="name"
        name="name"
        type="text"
        onChange={handleChange}
        value={note.name}
        required
      />
      <label className={s.label} htmlFor="category">
        Category
      </label>
      <select
        id="category"
        name="category"
        onChange={handleChange}
        value={note.category ? note.category : 'default'}
        required
      >
        <option defaultValue={note.category ? note.category : 'default'}>
          {note.category ? note.category : ' Choose category'}
        </option>
        {Object.values(CATEGORIES)
          .filter(value => value !== note.category)
          .map(value => {
            return (
              <option key={value} value={value}>
                {value}
              </option>
            );
          })}
      </select>
      <label className={s.label} htmlFor="content">
        Content
      </label>
      <textarea
        id="content"
        name="content"
        onChange={handleChange}
        value={note.content}
        required
      ></textarea>
      <div className={s.buttonContainer}>
        <Button type="button" onClick={closeEditor} text="Dismiss" />
        <Button type="submit" text="Save" />
      </div>
    </form>
  );
};

export default NoteEditor;
