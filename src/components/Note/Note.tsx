import INote from '../../interfaces/Note.interface';
import parseDateFromText from '../../utils/parseDateFromText';
import transformDate from '../../utils/transformDate';
import TableCell from '../TableCell/TableCell';

interface IProps {
  note: INote;
}

const Note = ({ note }: IProps) => {
  return (
    <>
      <TableCell text={note.name} />
      <TableCell text={note.category} />
      <TableCell text={transformDate(note.created)} />
      <TableCell text={note.content} />
      <TableCell text={parseDateFromText(note.content)} />
    </>
  );
};

export default Note;
