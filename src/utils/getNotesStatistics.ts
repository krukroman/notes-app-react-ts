import INote from '../interfaces/Note.interface';
import ISummary from '../interfaces/Summary.interface';

interface IAcc {
  [key: string]: INote[];
}

const groupByCategory = (notes: INote[]) => {
  return notes.reduce((acc: IAcc, note) => {
    acc[note.category] = acc[note.category] || [];
    acc[note.category].push(note);
    return acc;
  }, {});
};

const getNotesStatistics = (notes: INote[]): ISummary[] => {
  const notesByCategory = groupByCategory(notes);
  let result = [];

  for (const category in notesByCategory) {
    if (Object.hasOwnProperty.call(notesByCategory, category)) {
      const element: INote[] = notesByCategory[category];
      const activeNotes = element.filter(note => !note.archived);
      const archivedNotes = element.filter(note => note.archived);
      result.push({
        category,
        active: activeNotes.length,
        archived: archivedNotes.length
      });
    }
  }

  return result;
};

export default getNotesStatistics;
