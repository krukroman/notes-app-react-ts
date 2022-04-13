import INote from '../../interfaces/Note.interface';
import ISummary from '../../interfaces/Summary.interface';
import TableBody from '../TableBody/TableBody';
import TableItem from '../TableItem/TableItem';

interface IProps {
  noteTable?: Boolean;
  summaryTable?: Boolean;
  showArchived?: Boolean;
  handleArchivedNotes?: () => void;
  notes?: INote[];
  summaryData?: ISummary[];
  enableEditMode?: (
    id: string,
    name: string,
    category: string,
    content: string
  ) => void;
}

const Table = ({
  noteTable,
  summaryTable,
  showArchived,
  handleArchivedNotes,
  notes,
  summaryData,
  enableEditMode
}: IProps) => {
  return (
    <div className="table">
      <TableItem
        noteHeader={noteTable}
        summaryHeader={summaryTable}
        showArchived={showArchived}
        handleArchivedNotes={handleArchivedNotes}
      />
      <TableBody>
        {noteTable &&
          notes &&
          notes.map(note => {
            return (
              <TableItem
                key={note.id}
                note={note}
                enableEditMode={enableEditMode}
              />
            );
          })}

        {summaryTable &&
          summaryData &&
          summaryData.map(summary => {
            return <TableItem key={summary.category} summary={summary} />;
          })}
      </TableBody>
    </div>
  );
};

export default Table;
