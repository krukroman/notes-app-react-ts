import SummaryView from './views/SummaryView';
import NotesView from './views/NotesView';

const App = () => {
  return (
    <div className="container mx-auto p-3 grid gap-10">
      <NotesView />
      <SummaryView />
    </div>
  );
};

export default App;
