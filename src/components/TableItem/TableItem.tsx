import INote from '../../interfaces/Note.interface';
import ISummary from '../../interfaces/Summary.interface';

import CategoryIcon from '../CategoryIcon/CategoryIcon';
import ActionButtonGroup from '../ActionButtonGroup/ActionButtonGroup';
import Note from '../Note/Note';
import Summary from '../Summary/Summary';
import NoteHeader from '../NoteHeader/NoteHeader';
import SummaryHeader from '../SummaryHeader/SummaryHeader';

interface IProps {
  noteHeader?: Boolean;
  summaryHeader?: Boolean;
  handleArchivedNotes?: () => void;
  showArchived?: Boolean;
  note?: INote;
  summary?: ISummary;
  enableEditMode?: (
    id: string,
    name: string,
    category: string,
    content: string
  ) => void;
}

const TableItem = ({
  noteHeader,
  summaryHeader,
  handleArchivedNotes,
  showArchived,
  note,
  summary,
  enableEditMode
}: IProps) => {
  if (noteHeader) {
    return (
      <div className="flex items-center pl-10 font-bold text-white bg-zinc-700">
        <NoteHeader />
        <ActionButtonGroup
          header
          showArchive={showArchived}
          handleArchivedNotes={handleArchivedNotes}
        />
      </div>
    );
  }

  if (summaryHeader) {
    return (
      <div className="flex items-center pl-10 font-bold text-white bg-zinc-700">
        <SummaryHeader />
      </div>
    );
  }

  if (note) {
    return (
      <li className="flex items-center my-1 p-1 bg-gray-200">
        <CategoryIcon category={note.category} />
        <Note note={note} />
        <ActionButtonGroup note={note} enableEditMode={enableEditMode} />
      </li>
    );
  }

  if (summary) {
    return (
      <li className="flex items-center my-1 p-1 bg-gray-200">
        <CategoryIcon category={summary.category} />
        <Summary summary={summary} />
      </li>
    );
  }

  return <></>;
};

export default TableItem;
