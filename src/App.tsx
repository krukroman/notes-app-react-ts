import { useMemo, useState } from 'react';
import { useAppDispatch, useAppSelector } from './redux/hooks';
import notesSelectors from './redux/Notes/notesSelectors';
import notesOperations from './redux/Notes/notesOperations';
import insertCategoryIcon from './utils/insertCategoryIcon';
import getNotesStatistics from './utils/getNotesStatistics';
import transformDate from './utils/transformDate';
import parseDateFromText from './utils/parseDateFromText';
import sprite from './assets/icons/sprite.svg';
import INote from './interfaces/Note.interface';

const App = () => {
  const [showArchivedNotes, setShowArchivedNotes] = useState(false);
  const notes = useAppSelector(notesSelectors.getNotes);
  const activeNotes = useAppSelector(notesSelectors.getActiveNotes);
  const archivedNotes = useAppSelector(notesSelectors.getArchivedNotes);
  const summaryData = useMemo(() => getNotesStatistics(notes), [notes]);
  const dispatch = useAppDispatch();

  const handleArchivedNotes = () => setShowArchivedNotes(!showArchivedNotes);
  const onDeleteAll = () => dispatch(notesOperations.deleteAllNotes());

  return (
    <>
      <div className="table">
        <div className="container">
          <div className="header">
            <div className="cell">
              <p>Name</p>
            </div>
            <div className="cell">
              <p>Category</p>
            </div>
            <div className="cell">
              <p>Created</p>
            </div>
            <div className="cell">
              <p>Content</p>
            </div>
            <div className="cell">
              <p>Dates</p>
            </div>
            <div className="actions">
              <button
                className="action"
                type="button"
                onClick={handleArchivedNotes}
              >
                <svg width="20" height="20">
                  <use
                    href={
                      showArchivedNotes
                        ? `${sprite}#icon-archive-out`
                        : `${sprite}#icon-archive-in`
                    }
                  ></use>
                </svg>
              </button>
              <button className="action" type="button" onClick={onDeleteAll}>
                <svg width="20" height="20">
                  <use href={`${sprite}#icon-delete`}></use>
                </svg>
              </button>
            </div>
          </div>
          <ul className="list">
            {showArchivedNotes
              ? archivedNotes.map(note => (
                  <li className="row" key={note.id}>
                    <div className="icon">
                      <svg width="20" height="20">
                        <use href={insertCategoryIcon(note.category)}></use>
                      </svg>
                    </div>
                    <div className="cell">
                      <p>{note.name}</p>
                    </div>
                    <div className="cell">
                      <p>{note.category}</p>
                    </div>
                    <div className="cell">
                      <p>{transformDate(note.created)}</p>
                    </div>
                    <div className="cell">
                      <p>{note.content}</p>
                    </div>
                    <div className="cell">
                      <p>{parseDateFromText(note.content)}</p>
                    </div>
                    <div className="actions">
                      <button className="action" type="button">
                        <svg width="20" height="20">
                          <use href={`${sprite}#icon-edit`}></use>
                        </svg>
                      </button>
                      <button className="action" type="button">
                        <svg width="20" height="20">
                          <use href={`${sprite}#icon-archive-out`}></use>
                        </svg>
                      </button>
                      <button className="action" type="button">
                        <svg width="20" height="20">
                          <use href={`${sprite}#icon-delete`}></use>
                        </svg>
                      </button>
                    </div>
                  </li>
                ))
              : activeNotes.map(note => (
                  <li className="row" key={note.id}>
                    <div className="icon">
                      <svg width="20" height="20">
                        <use href={insertCategoryIcon(note.category)}></use>
                      </svg>
                    </div>
                    <div className="cell">
                      <p>{note.name}</p>
                    </div>
                    <div className="cell">
                      <p>{note.category}</p>
                    </div>
                    <div className="cell">
                      <p>{transformDate(note.created)}</p>
                    </div>
                    <div className="cell">
                      <p>{note.content}</p>
                    </div>
                    <div className="cell">
                      <p>{parseDateFromText(note.content)}</p>
                    </div>
                    <div className="actions">
                      <button className="action" type="button">
                        <svg width="20" height="20">
                          <use href={`${sprite}#icon-edit`}></use>
                        </svg>
                      </button>
                      <button className="action" type="button">
                        <svg width="20" height="20">
                          <use href={`${sprite}#icon-archive-in`}></use>
                        </svg>
                      </button>
                      <button className="action" type="button">
                        <svg width="20" height="20">
                          <use href={`${sprite}#icon-delete`}></use>
                        </svg>
                      </button>
                    </div>
                  </li>
                ))}
          </ul>
        </div>
      </div>
      <div className="table">
        <div className="container">
          <div className="header">
            <div className="cell">
              <p>Note Category</p>
            </div>
            <div className="cell">
              <p>Active</p>
            </div>
            <div className="cell">
              <p>Archived</p>
            </div>
          </div>
          <ul className="list">
            {summaryData.map(el => (
              <li className="row" key={el.category}>
                <div className="icon">
                  <svg width="20" height="20">
                    <use href={insertCategoryIcon(el.category)}></use>
                  </svg>
                </div>
                <div className="cell">
                  <p>{el.category}</p>
                </div>
                <div className="cell">
                  <p>{el.active}</p>
                </div>
                <div className="cell">
                  <p>{el.archived}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default App;
