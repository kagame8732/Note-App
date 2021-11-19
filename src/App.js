import { useState } from "react";
import { nanoid } from "nanoid";
import NotesList from "./components/NotesList";

import Search from "./components/Search";

const App = () => {

  const [notes, setNotes] = useState([{
    id: nanoid(),
    text: "First Untitled Note",
    date: "14/03/2021",
  },
 
  ])

  const [searchText, setSearchText] = useState('');

  const addNote = (text) => {

    const date = new Date();

    const newNote = {
      id: nanoid(),
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

  return <div className="container">
    <h1>Notebook</h1>
    <Search handleSearchNote={setSearchText} />

    <NotesList notes={notes.filter((note) => note.text.toLowerCase().includes(searchText))} 
    handleAddNote={addNote} 
    handleDeleteNote={deleteNote}
    />


  </div>
}
export default App;