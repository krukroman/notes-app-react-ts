import CATEGORIES from '../../data/categories';
import Button from '../Button/Button';

interface IProps {
  note: {
    name: string;
    category: string;
    content: string;
  };
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  onChange: (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLSelectElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => void;
  onClose: () => void;
}

const EditorForm = ({ note, onSubmit, onChange, onClose }: IProps) => {
  return (
    <form className="grid w-full" onSubmit={onSubmit}>
      <label className="mb-1" htmlFor="name">
        Name
      </label>
      <input
        id="name"
        className="py-1 px-2 mb-3 w-full font-sans text-base border"
        name="name"
        type="text"
        onChange={onChange}
        value={note.name}
        required
      />
      <label className="mb-1" htmlFor="category">
        Category
      </label>
      <select
        id="category"
        className="py-1 px-2 mb-3 w-full font-sans text-base border"
        name="category"
        onChange={onChange}
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
      <label className="mb-1" htmlFor="content">
        Content
      </label>
      <textarea
        id="content"
        className="py-1 px-2 mb-3 h-52 w-full font-sans text-base border resize-none"
        name="content"
        onChange={onChange}
        value={note.content}
        required
      ></textarea>
      <div className="mx-auto flex gap-5">
        <Button type="button" onClick={onClose} text="Dismiss" />
        <Button type="submit" text="Save" />
      </div>
    </form>
  );
};

export default EditorForm;
