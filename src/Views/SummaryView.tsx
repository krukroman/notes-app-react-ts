import { useMemo } from 'react';
import { useAppSelector } from '../redux/hooks';
import notesSelectors from '../redux/Notes/notesSelectors';
import Table from '../components/Table/Table';
import getNotesStatistics from '../utils/getNotesStatistics';

const SummaryView = () => {
  const notes = useAppSelector(notesSelectors.getNotes);
  const summaryData = useMemo(() => getNotesStatistics(notes), [notes]);
  return (
    <div className="container">
      <Table summaryTable summaryData={summaryData} />
    </div>
  );
};

export default SummaryView;
