import { useState, useEffect } from "react";
import { nanoid } from "nanoid";
import NotesList from "./components/NotesList";
import Header from "./components/Header";
import Search from "./components/Search";

const App = () => {

  const [notes, setNotes] = useState([{
    id: nanoid(),
    title: "Note",
    category: "Personal note",
    text: "This is First Note",
    date: "14/03/2021",
  },
  ])

  const [searchText, setSearchText] = useState('');

  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const savedNotes = JSON.parse(localStorage.getItem('react-notes-app-data'));
    if (savedNotes) {
      setNotes(savedNotes)
    }
  }, []);


  useEffect(() => {
    localStorage.setItem('react-notes-app-data', JSON.stringify(notes));
  }, [notes]);


  const addNote = (title, category, text) => {

    const date = new Date();

    const newNote = {
      id: nanoid(),
      title: title,
      category: category,
      text: text,
      date: date.toLocaleDateString(),
    }

    const newNotes = [...notes, newNote];
    setNotes(newNotes);
  }


  const deleteNote = (id) => {
    const newNotes = notes.filter((note) => note.id !== id)
    setNotes(newNotes)
  }

  return <div className={`${darkMode && 'dark-mode'}`}>
    <div className="container">
      <Header handleDarkMode={setDarkMode} />
      <Search handleSearchNote={setSearchText} />
      <NotesList notes={notes.filter((note) => note.text.toLowerCase().includes(searchText))}
        handleAddNote={addNote}
        handleDeleteNote={deleteNote}
      />
    </div>
  </div>
}
export default App;